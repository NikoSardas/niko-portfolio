import Image from "next/image";

interface Repo {
  name: string;
  html_url: string;
  description: string;
}

const isProd = process.env.NODE_ENV === "production";

const imageSrc = isProd ? "/niko-portfolio/niko.jpg" : "/niko.jpg";

async function getRepos(): Promise<Repo[]> {
  const res = await fetch(
    "https://api.github.com/users/nikosardas/repos?sort=updated",
    {
      headers: { Accept: "application/vnd.github.v3+json" },
      // cache: "no-store"
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch GitHub repos");
  }

  const data = await res.json();
  return data
    .filter(
      (repo: Repo) => !["niko-portfolio", "NikoSardas"].includes(repo.name)
    )
    .slice(0, 5); // Only show 5 repos, excluding certain projects}
}

export default async function Home() {
  const repos = await getRepos();
  return (
    <main className="min-h-screen bg-white text-black p-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex justify-center">
          <Image
            src={imageSrc}
            alt="Niko Sardas"
            width={160}
            height={160}
            className="rounded-full border shadow"
          />
        </div>

        <section>
          <h1 className="text-3xl font-bold text-center mt-4">Niko Sardas</h1>
          <p className="text-lg mt-2">
            I am an IT support technician with a background in digital audio and
            Chrome extension development. I&apos;ve released tools like EQ+ and
            KBD to MIDI Piano, blending problem-solving, interface design, and
            creative tech. Currently, I&apos;m focused on building lean, useful
            interfaces and continuing to sharpen my development skills.
          </p>
        </section>

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

            <h2 className="text-2xl font-semibold mt-8 mb-2">Links</h2>
            <li>
              <a
                href="/niko-portfolio/Niko_Sardas_Resume_InternalTools.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Resume (PDF)
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nikosardas/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="mailto:niko.sardas@icloud.com"
                className="text-blue-600 underline"
              >
                Email
              </a>
            </li>
          </ul>
        </section>

        <footer className="text-sm text-gray-600 text-center pt-10 border-t mt-12">
          <p>© Niko Sardas 2025</p>
        </footer>
      </div>
    </main>
  );
}
