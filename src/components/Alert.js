function Alert(props) {

  const { alert, message, icon} = props

  return(
    <div className="w-full z-20 absolute top-10 sm:top-0 p-2">
      <div className="w-full flex justify-center sm:justify-end">
        <div className={`${ alert ? "w-10/12 sm:w-52 bg-white px-3 py-2 text-gray-600 rounded-lg shadow-lg " : "hidden" } `}>
          <p><i className={icon}></i> {message}</p>
        </div>
      </div>
    </div>
  )
}

export default Alert
