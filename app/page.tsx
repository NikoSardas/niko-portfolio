import Image from "next/image";

const isProd = process.env.NODE_ENV === "production";

const imageSrc = isProd ? "/niko-portfolio/niko.jpg" : "/niko.jpg";

export default function Home() {
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
            IT support technician. Background in digital audio and creative
            tech. Currently focused on keeping systems running, solving problems
            fast, and making sure people can do their jobs.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Links</h2>
          <ul className="flex space-x-6 justify-center">
            <li>
              <a
                href="/niko-portfolio/Niko_Sardas_Resume.docx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Resume
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
            <li>
              <a
                href="'https://github.com/nikosardas/'"
                className="text-blue-600 underline"
              >
                Github
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
