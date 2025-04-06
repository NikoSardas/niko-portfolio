export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black p-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <section>
          <h1 className="text-3xl font-bold">Niko Sardas</h1>
          <p className="text-lg">
            I build tools and interfaces that solve real problems for users. My background blends development and IT support, with experience shipping a Chrome extension used by 10,000+ people and supporting enterprise systems in higher education.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Projects</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium">Equalizer Plus – Chrome Extension</h3>
              <p>
                Real-time audio control in the browser: 10-band EQ, compressor, gain, panning, mono toggle. Built
                entirely in vanilla JS using the Web Audio API and Chrome extension APIs. Used by 10,000+ people.
              </p>
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
              <h3 className="text-xl font-medium">Audio & Game Tools – Freelance</h3>
              <p>
                Built audio tools using JavaScript, Web Audio, and multiple libraries. Worked on interactive UI and
                implementation in Unity3D, FMOD, and game pipelines. Integrated scripting into real-world media workflows.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium">Chrome Extensions & Web Utilities</h3>
              <p>
                Built and monetized Chrome extensions and web tools using HTML, CSS, JavaScript, jQuery, and Chrome APIs.
                Emphasis on performance, minimalism, and user clarity.
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
      </div>
    </main>
  );
}
