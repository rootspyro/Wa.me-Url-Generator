function Navbar(){
  return(
    <header className="w-full bg-green-500">
      <nav className="text-white p-3 flex shadow-md">
        <ul className="flex w-2/4">
          <li className="mr-3 font-bold text-lg"><a href='/'>Wa.me</a></li>
        </ul>
        <ul className="flex w-2/4 justify-end"> 
          <li className="mr-3 text-lg"><a href='#'>API <i className="wsico-code-slash"></i></a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;
