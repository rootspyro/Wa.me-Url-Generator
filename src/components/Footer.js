function Footer(){

  const date = new Date()
  const currentYear = date.getFullYear()
  return(
   <footer aria-label="Site Footer" className="bg-green-500">
  <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="flex justify-center text-teal-600">
      <h3 className="font-bold text-3xl text-white">Wa.me Generator <i className="wsico-whatsapp"></i></h3>
    </div>
    <nav aria-label="Footer Nav" className="mt-7">
      <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
        <li>
          <a className="text-white transition hover:text-sky-600" href="https://wa-me-generator.onrender.com/api/v1/ping">
            API <i className="wsico-hdd-stack"></i>
          </a>
        </li>
        <li>
          <a className="text-white transition hover:text-sky-600" href="https://github.com/rootspyro/Wa.me-Url-Generator-API">
            Docs <i className="wsico-braces"></i>
          </a>
        </li>
        <li>
          <a className="text-white transition hover:text-sky-600" href="https://github.com/rootspyro/Wa.me-Url-Generator">
            Project <i className="wsico-github"></i> 
          </a>
        </li>
        <li>
          <a className="text-white transition hover:text-sky-600" href="https://rootspyro.com/">
            Author <i className="wsico-code-slash"></i> 
          </a>
        </li>
      </ul>
    </nav>

    <p className="mx-auto mt-6 max-w-md text-center text-sm leading-relaxed text-white">
      wa.me-generator © {currentYear}. All rights reserved. <br/>
      <span className="text-xs">Background generated with <a target="_blank" className="text-sky-600 hover:text-sky-500" href="https://bgjar.com/">BGJar</a>.</span>
    </p>
  </div>
</footer>
  )
}

export default Footer;
