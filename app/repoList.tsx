'use client';
import { useEffect, useState } from 'react';

interface Repo {
  name: string;
  html_url: string;
  description: string;
}

export default function RepoList() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    async function fetchRepos() {
      const res = await fetch('https://api.github.com/users/nikosardas/repos?sort=updated');
      const data = await res.json();
      const filtered = data
        .filter((repo: Repo) => !["niko-portfolio", "NikoSardas"].includes(repo.name))
        .slice(0, 5);
      setRepos(filtered);
    }
    fetchRepos();
  }, []);

  return (
    <section>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Repos</h2>
      <ul className="space-y-2">
        {repos.map((repo) => (
          <li key={repo.name}>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {repo.name}
            </a>{" "}
            – {repo.description}
          </li>
        ))}
      </ul>
    </section>
  );
}