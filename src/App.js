import {useEffect, useRef, useState} from 'react';
import Modal from './components/Modal';
import Alert from './components/Alert';
import './App.css';

function App() {

  const messageRef = useRef(null)
  const phoneRef = useRef(null)
  const [charCount, setCharCount] = useState(0)
  const [phoneErr, setPhoneErr] = useState(false)
  const [msgErr, setMsgErr] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [url, setUrl] = useState('')
  const [alert, setAlert] = useState(false)
  const [errMessage, setErr] = useState('')

  useEffect(() => {

  }, [url])

  const HandleMessage = () => {
    setCharCount(() => {
      return messageRef.current.value.length
    })
  }

  const ValPhoneFormat = number => {

    const re = new RegExp('^\\+(?:[0-9]\x20?){6,14}[0-9]$')
    const value = re.test(number)

    return value
  }

  const ValidateForm = () => {

    // phone number validation
    if (!ValPhoneFormat(phoneRef.current.value)) {
      setPhoneErr(true)
      return false
    } else if ( phoneErr ) {
      setPhoneErr(false)
    }

    // message length validation
    if (charCount > 150) {
      setMsgErr(true)
      return false
    } else if ( msgErr ) {
      setMsgErr(false)
    }

    return true
  } 

  const HandleSubmit = e => {
    
    e.preventDefault()

    if (ValidateForm()) {
      setIsOpen(true)

      let body = { 
        phone: phoneRef.current.value, 
        msg: messageRef.current.value 
      }
      
      fetch(process.env.REACT_APP_API + "/v1/ws/url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }).then( data => data.json() )
        .then( response => {

          if (response.status == "error") {
            setErr(response.data)
            setTimeout(()=>{
              setAlert(false) 
            }, 3000)
            setAlert(true)
            setIsOpen(false)
          }
          if (response.status == "success") {
            setUrl(response.data.url)

          } else {
            setErr("Error: something went wrong")
            setTimeout(()=>{
              setAlert(false) 
            }, 3000)
            setAlert(true)
            setIsOpen(false)
          }

        })
    }

  }

  return (
    <div className="App">
      <Alert alert={alert} icon="" message={errMessage} />
      <div className='banner text-center'>
        <h1 className='flex mt-20 text-4xl text-green-500 text-center font-bold justify-center'>
          <span>Wa<span className='text-sky-600'>.me</span> Generator <i className='wsico-whatsapp'></i></span>
        </h1>
        <p className='text-gray-700 mt-5 font-bold'>Generate whatsapp url with custom messages</p>
      </div>
      <div className='form flex flex-wrap justify-center mt-10 text-gray-600'>
        <div className='lg:w-1/4 w-3/4 md:w-2/4 flex flex-wrap justify-center p-5 bg-white shadow-lg rounded-lg border-2 border-gray-200'>
          <div className='text-left w-full'>
            <span className='ml-1'>Phone</span>
          </div>
          <input ref={phoneRef} className='border-2 w-full border-gray-400 rounded-md p-1 focus:border-sky-600 outline-none' placeholder='+58424555333' />
          <span className={`text-red-500 text-xs text-left w-full pl-1 mt-1 ${ phoneErr ? '' : 'hidden' }`}>error: bad format of the phone number</span>
          <div className='w-full mt-4 flex'>
            <div className='w-2/4'>
              <span className="ml-1">Message</span>
            </div>
            <div className='w-2/4 text-right'>
              <span className={charCount > 150? "text-red-500" : ""}>{charCount}</span>/150
            </div>
          </div>
          <textarea ref={messageRef} onChange={HandleMessage} className='border-2 border-gray-400 w-full resize-none rounded-md p-1 focus:border-sky-600 outline-none' placeholder='Hello World!'></textarea>
          <span className={`text-red-500 text-xs text-left w-full pl-1 mt-1 ${ msgErr ? '' : 'hidden' }`}>error: message is too long!</span>
          <button onClick={HandleSubmit} className='w-full bg-green-400 text-white p-2 rounded-md mt-2 hover:bg-green-500 active:bg-green-600'>Generate</button>
        </div>
        <div className='w-full flex justify-center mt-10'>
          <p className='text-xs text-center'>
            The phone number must have the international code "+" and should avoid spaces and special characters.
            <br/>
            As in the example!
          </p>
        </div>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} url={url} setUrl={setUrl}/>
    </div>
  );
}

export default App;
