import './App.css';

function App() {
  return (
    <div className="App">
      <div className='banner text-center'>
        <h1 className='flex mt-20 text-4xl text-green-500 text-center font-bold justify-center'>
          <span>Wa<span className='text-sky-600'>.me</span> Generator <i className='wsico-whatsapp'></i></span>
        </h1>
        <p className='text-gray-700 mt-5 font-bold'>Generate whatsapp url with custom messages</p>
      </div>
      <div className='form flex justify-center mt-10 text-gray-600'>
        <div className='lg:w-1/4 w-3/4 md:w-2/4 flex flex-wrap justify-center p-5 bg-white shadow-lg rounded-lg border-2 border-gray-200'>
          <div className='text-left w-full'>
            <span className='ml-1'>Phone</span>
          </div>
          <input className='border-2 w-full border-gray-400 rounded-md p-1 focus:border-sky-600 outline-none' placeholder='+58424555333' />
          <div className='w-full mt-4 flex'>
            <div className='w-2/4'>
              <span className="ml-1">Message</span>
            </div>
            <div className='w-2/4 text-right'>
              <span className=''>0/250</span>
            </div>
          </div>
          <textarea className='border-2 border-gray-400 w-full resize-none rounded-md p-1 focus:border-sky-600 outline-none' placeholder='Hello World!'></textarea>
          <button type='button' className='w-full bg-green-400 text-white p-2 rounded-md mt-2 hover:bg-green-500 active:bg-green-600'>Generate</button>
        </div>
      </div>
    </div>
  );
}

export default App;
