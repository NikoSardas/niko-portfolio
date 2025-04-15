import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black p-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <section>
          <h1 className="text-3xl font-bold">Niko Sardas</h1>
          <p className="text-lg">
            I build tools and interfaces that solve real problems for users. My
            background blends development and IT support, with experience
            shipping a Chrome extension and supporting enterprise systems in
            higher education.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Projects</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium">
                Equalizer Plus – Chrome Extension
              </h3>
              <p>
                Chrome extension for real-time audio control, built with vanilla
                JavaScript, Web Audio API, and Chrome APIs. Features include EQ,
                compressor, pan, mono, and volume.
              </p>
              <div className="my-4">
                <Image
                  src="/eq-plus.png"
                  alt="Equalizer Plus UI"
                  width={600}
                  height={900}
                  className="rounded-xl border shadow-md"
                />
                <p className="text-sm text-gray-600 mt-2">
                  Equalizer Plus UI showing EQ, compressor, and pan settings.
                </p>
              </div>
              <a
                href="https://chrome.google.com/webstore/detail/equalizer-plus/hhknncjekdkcckekbooephopomcjeiek"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                View on Chrome Web Store
              </a>
            </div>

            <div>
              <h3 className="text-xl font-medium">
                Audio & Game Tools – Freelance
              </h3>
              <p>
                Built audio tools using JavaScript, Web Audio, and multiple
                libraries. Worked on interactive UI and implementation in
                Unity3D, FMOD, and game pipelines. Integrated scripting into
                real-world media workflows.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium">
                Chrome Extensions & Web Utilities
              </h3>
              <p>
                Built and maintain several Chrome extensions: a karaoke machine,
                window manager, and extension bar partitioner. Proficient in
                HTML/CSS, JavaScript, and Chrome APIs. Focused on performance
                and clarity.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium">Drum Machine & MIDI Piano</h3>
              <p>
                Browser-based music tools that export audio and MIDI. Focused on
                practical UX and deep integration with audio workflows.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Resume</h2>
          <a
            href="/niko-portfolio/Niko_Sardas_Resume_InternalTools.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Download my resume (PDF)
          </a>
        </section>

        <footer className="text-sm text-gray-600 pt-10 border-t mt-12">
          <p>
            Built with Next.js, Tailwind CSS, and deployed via GitHub Pages.
          </p>
          <div className="mt-2 flex gap-4">
            <a
              href="mailto:nko.srds@gmail.com"
              className="underline hover:text-black"
            >
              nko.srds@gmail.com
            </a>
            <a
              href="https://github.com/nikosardas"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-black"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nikosardas/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-black"
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
