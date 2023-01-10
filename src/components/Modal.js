function Modal(props){

  const { isOpen, setIsOpen, url } = props

  return(
    <div className={`absolute top-0 w-full h-screen bg-gray-700/75 ${isOpen ? "" : "hidden"}`} >
      <div className="flex justify-center">
        <div className="fixed bg-white p-5 top-1/4 rounded-lg text-gray-700 shadow-lg w-11/12 sm:w-2/4 sm:max-w-sm">
          <div className="modal-head flex justify-end">
            <button onClick={()=>{setIsOpen(false)}} className="font-bold text-red-500 hover:text-red-600">X</button>
          </div>
          <div className="modal-body">
            <div className="w-full mb-3"> 
              <p className="mt-3 font-bold text-lg">Whatsapp <a href={url} target="_blank" className="text-sky-600 underline">link</a> successfully generated!</p>
            </div>
            <input type="url" readOnly className="w-full md:w-56 text-gray-600 border-2 p-1 border-gray-400 rounded-md outline-none focus:border-sky-500" value={url}/> 
            <button title="Copy link to clipboard" className="hidden md:inline text-white ml-3 py-1 px-4 copy-link rounded-md bg-green-500 hover:bg-green-600 active:bg-green-700"><i className="wsico-clipboard"></i></button>
            <button title="Open link" className=" hidden md:inline text-white ml-2 py-1 px-4 copy-link rounded-md bg-green-500 hover:bg-green-600 active:bg-green-700"><i className="wsico-box-arrow"></i></button>
            <button className="mobile-button md:hidden w-full text-white mt-4 py-2 copy-link rounded-md bg-green-500 hover:bg-green-600 active:bg-green-700">Copy <i className="wsico-clipboard"></i></button>
            <button className="mobile-button md:hidden w-full text-white mt-1 py-2 copy-link rounded-md bg-green-500 hover:bg-green-600 active:bg-green-700">Open link <i className="wsico-box-arrow"></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;
