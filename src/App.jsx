import './App.css'
import Navbar from './components/Navbar'
import { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid';
function App() {
  const ref = useRef()
  const passref = useRef()
  const [form, setform] = useState({url: "", username: "", password: "" })
  const [passarray, setpassarray] = useState([])
  useEffect(() => {
    let passwords = localStorage.getItem("passwords")
    if (passwords) {
      setpassarray(JSON.parse(passwords))
    }
  }, [])

  const showpassword = () => {
    if (ref.current.src.includes("icons/open.png")) {

      ref.current.src = "icons/close.png"
      passref.current.type = "password"
    }
    else {
      ref.current.src = "icons/open.png"
      passref.current.type = "text"
    }
  }
  const addpassword = () => {
    if(form.username.length>=3 && form.password.length>=6 && (form.url.includes("https://") ||form.url.includes("http://") || form.url.includes("www."))){

      setpassarray([...passarray, {...form,id:uuidv4()}])
      localStorage.setItem("passwords", JSON.stringify([...passarray,{...form,id:uuidv4()}]))
      setform({id:"", url: "", username: "", password: "" })
      
      toast("Password added successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      
    }
    else{
      console.log("Please enter valid details")
      toast("Please enter valid details", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    



  }
  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })

  }
  const copytext = (text) => {
    navigator.clipboard.writeText(text)
    toast("Copied to Clipboard", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
  const handleedit = (id) => { 
    let editpass = passarray.find(item => item.id === id)
    setform(editpass)
    let newpassarray = passarray.filter(item => item.id !== id)
    setpassarray(newpassarray)
    localStorage.setItem("passwords", JSON.stringify(newpassarray))
    
    

  }
  const handledelete = (id) => {
    let c= confirm("Are you sure you want to delete this password?")
    if(c){
      let newpassarray = passarray.filter(item => item.id !== id)
      setpassarray(newpassarray)
      localStorage.setItem("passwords", JSON.stringify(newpassarray))
      toast("Password Deleted Successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    
   }
  

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Navbar />


      <div className="absolute mt-16 top-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]">
        </div>
        <div className='flex flex-col justify-center items-center pt-8 text-2xl'>
          <div>Keep Your Passwords Safe With</div>
          <div className="logo flex justify-center items-end font-semibold pb-5"><span className='text-purple-500 text-3xl' >P</span>ass<span className='text-purple-500'>S</span>afe <img className='w-5 h-5 mb-1' src="icons/safe.png" alt="" /></div>
        </div>
        

        <div className="input flex flex-col w-[900px] max-lg:w-[86%] mx-auto">
          <input onChange={handlechange} value={form.url} name="url" className='rounded-full px-5 mb-1 border-2 border-purple-400 w-[900px] max-lg:w-[100%]' type="text" placeholder='Enter the URL' />
          
          <input  onChange={handlechange}  value={form.username} name="username" className='rounded-full px-5 border-2 mb-1 border-purple-400 w-[900px] max-lg:w-[100%]' type="text" placeholder='Enter the username' />
          

          <div className='relative flex w-[900px] max-lg:w-[100%]'>
            <input onChange={handlechange} ref={passref} value={form.password} name="password" type="password" placeholder='Enter the password' className='max-lg:w-[100%] w-[900px] rounded-full px-5 border-2 border-purple-400 bg-gradient-to-r  from-white to bg-purple-100' /><img onClick={showpassword} ref={ref} src="icons/close.png" className='w-5 h-5 right-2 top-1 absolute cursor-pointer' alt="" />
          </div>      
          <div className='flex items-center justify-center p-4'>

            <button onClick={() => {addpassword()}
            } className='save flex items-center bg-purple-300 rounded-full p-2 hover:bg-purple-400'>
              <lord-icon

                src="https://cdn.lordicon.com/rcgrnzji.json"
                trigger="hover"
                colors="primary:#a866ee,secondary:#4030e8">
              </lord-icon>
              Add Password
            </button>
          </div>

        </div>
      


        <div className='bg-white pb-24'>
          <div className='w-[900px] mx-auto border-2 border-purple-400 max-[900px]:w-[99vw] '>
            <div className='pt-4 text-center text-white text-2xl  bg-purple-300 w-[100%] mx-auto'>
              PASSWORD DETAILS
              <div className='flex w-[100%] justify-start pt-4 max-sm:text-sm'>
                <div className='w-[30%] max-sm:w-[25%] border-2'>Url</div>
                <div className='w-[30%] max-sm:w-[25%] border-2'>Username</div>
                <div className='w-[30%] max-sm:w-[25%] border-2'>Password</div>
                <div className='w-[10%] max-sm:w-[25%] border-2'>Actions</div>
              </div>
            </div>
            {passarray.length === 0 && <div className='text-center text-xl p-4'>No Passwords Added</div>}
            {passarray.map(item => {
              return <div key={item.id} className='flex justify-between p-2 gap-1'>
                <div className='w-1/4 flex gap-1  overflow-hidden '><span className='cursor-pointer' onClick={() => { copytext(item.url) }}>
                  <lord-icon
                    src="https://cdn.lordicon.com/lyrrgrsl.json"
                    trigger="hover" style={{ "width": "25px", "height": "25px" }}>
                  </lord-icon></span><a href={item.url} target='_blank'>{item.url}</a></div>
                <div className='w-1/4 overflow-hidden flex gap-1'><span className='cursor-pointer' onClick={() => { copytext(item.username) }}><lord-icon
                  src="https://cdn.lordicon.com/lyrrgrsl.json"
                  trigger="hover" style={{ "width": "25px", "height": "25px" }}>
                </lord-icon></span>{item.username} </div>
                <div className='w-1/4 flex gap-1 overflow-hidden  '><span className='cursor-pointer' onClick={() => { copytext(item.username) }}><lord-icon
                  src="https://cdn.lordicon.com/lyrrgrsl.json"
                  trigger="hover" style={{ "width": "25px", "height": "25px" }}>
                </lord-icon></span>{"*".repeat(item.password.length)}</div>
                <div className='flex gap-2 w-[80px] justify-end'>
                  <div className='cursor-pointer' onClick={() => {handleedit(item.id)}}><lord-icon
                    src="https://cdn.lordicon.com/ylvuooxd.json"
                    trigger="hover"
                    state="hover-line">
                  </lord-icon></div>
                  <div className='cursor-pointer' onClick={() => {handledelete(item.id)}}
                  ><lord-icon
                    src="https://cdn.lordicon.com/hjbrplwk.json"
                    trigger="hover">
                  </lord-icon></div>
                </div>
              </div>
            })}
          </div>


        </div>
      </div>
      <Footer />


    </>
  )
}
export default App
