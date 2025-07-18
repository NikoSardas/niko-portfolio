import Image from "next/image";

const isProd = process.env.NODE_ENV === "production";

const imageSrc = isProd ? "/niko-portfolio/niko.jpg" : "/niko.jpg";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-xl mx-auto space-y-8">
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
          <h1 className="text-3xl font-bold mt-4">Niko Sardas – Lynchburg, VA</h1>
          <p className="text-lg mt-2 max-w-prose">
            IT Support Technician with field and enterprise experience across Windows, macOS, and mobile. Certified in A+, Network+, and Security+. I work with systems, people, and problems — and I keep things running.{" "} <a href="/niko-portfolio/Niko_Sardas_IT_Resume.pdf" target="_blank" rel="noopener noreferrer" className="underline text-blue-400 hover:text-blue-300">Download my resume (PDF)</a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-8">What I Do</h2>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Remote and onsite IT support (Windows, macOS, iOS)</li>
            <li>Device imaging, account setup, VPN and printer config</li>
            <li>Troubleshooting hardware/software issues</li>
            <li>
              View my projects on <a href="https://github.com/nikosardas/" target="_blank" rel="noopener noreferrer" className="underline text-blue-400 hover:text-blue-300">GitHub</a>
            </li>
          </ul>
        </section>

        <section>
          <ul className="flex flex-col items-start space-y-2 text-base">
            <li>
              <a
                href="mailto:niko.sardas@icloud.com"
                className="bg-blue-600 text-white px-3 py-1.5 rounded hover:bg-blue-500 transition"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </section>

        <footer className="text-sm text-gray-400 text-center pt-10 border-t border-gray-700 mt-12">
          <p>© Niko Sardas 2025</p>
        </footer>
      </div>
    </main>
  );
}
