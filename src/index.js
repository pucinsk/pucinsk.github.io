import { html, render } from "preact"

export const Profile = () => html`
  <div className="relative flex min-h-screen items-center justify-center bg-black text-white">
    <!-- Profile Container -->
    <div className="text-center">
      <!-- Avatar -->
      <div
        className="mx-auto mb-6 h-40 w-40 overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-pink-500 shadow-lg"
      >
        <img src="src/images/profile.png" alt="Profile" className="h-full w-full object-cover" />
      </div>

      <!-- Name -->
      <h1 className="mb-2 text-3xl" style="font-family: 'Pacifico', cursive;">Jokūbas Pučinskas</h1>

      <!-- Role -->
      <p className="font-mono text-sm text-gray-300">Software Developer</p>
      <p className="mt-1 mb-6 font-mono text-xs text-gray-400">Vilnius, Lithuania</p>

      <p className="mb-6 font-mono text-sm text-gray-300">
        Full-stack dev. Focused on Rails & JS. Open to whatever’s next.
      </p>

      <!-- Socials -->
      <div className="flex justify-center space-x-6 text-2xl text-gray-300">
        <a
          href="https://www.linkedin.com/in/jokubas-pucinskas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://static.cdnlogo.com/logos/l/72/linkedin-icon.svg"
            alt="LinkedIn"
            className="h-8 w-8 opacity-80 brightness-200 invert transition hover:opacity-100"
          />
        </a>
        <a href="https://github.com/pucinsk" target="_blank" rel="noopener noreferrer">
          <img
            src="https://static.cdnlogo.com/logos/g/55/github.svg"
            alt="GitHub"
            className="h-8 w-8 opacity-80 brightness-200 invert transition hover:opacity-100"
          />
        </a>
      </div>
    </div>
  </div>
`

const App = () => html`
  <${Profile} />
  <hr class="my-6 border-t border-gray-700" />
  <footer className="bg-teal-500 text-white p-5 w-full">
    <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/4 mx-auto text-center">
      <p>
        New idea? New features? Old bugs? Ongoing support? Whatever you need, I’m ready to jump in
        and help.
      </p>
      <div className="flex justify-center items-center mt-5">
        <a
          href="https://github.com/pucinsk"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
        >
          <img
            src="src/images/envelope.svg"
            alt="Email"
            className="h-5 w-5 opacity-80 brightness-200 invert transition hover:opacity-100"
          />
          <span>jokubas.dev@gmail.com</span>
        </a>
      </div>
    </div>
  </footer>
`
render(html`<${App} />`, document.querySelector("body"))
