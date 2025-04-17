import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black p-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex justify-center">
          <Image
            src="/niko-portfolio/niko.jpg"
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
          <h2 className="text-2xl font-semibold mt-8 mb-2">Links</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="https://chrome.google.com/webstore/detail/equalizer-plus/hhknncjekdkcckekbooephopomcjeiek"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Equalizer Plus
              </a>{" "}
              – Chrome extension for real-time audio control (EQ, compression,
              pan, etc.)
            </li>
            <li>
              <a
                href="https://chrome.google.com/webstore/detail/kbd-to-midi-piano/mhchghbhodjlkbkidohbkcelgdknhpdi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                KBD to MIDI Piano
              </a>{" "}
              – Turns your keyboard into a playable MIDI piano with export
              options
            </li>
            <li>
              <a
                href="/niko-portfolio/Niko_Sardas_Resume_InternalTools.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Resume (PDF)
              </a>{" "}
              – Internal tools/dev-focused resume
            </li>
            <li>
              <a
                href="https://github.com/nikosardas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                GitHub
              </a>{" "}
              – Code and open source projects
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nikosardas/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                LinkedIn
              </a>{" "}
              – Background, and work history
            </li>
            <li>
              <a
                href="mailto:niko.sardas@icloud.com"
                className="text-blue-600 underline"
              >
                Email
              </a>{" "}
              – Reach out directly
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
