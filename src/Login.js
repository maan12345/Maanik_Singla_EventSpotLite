import {useState} from 'react'
import UserContext from './UserContext.js'
import {useContext} from 'react'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
function Login(){
  const navigate=useNavigate()
    function SubmitFo(event){
        event.preventDefault()
        if(name.length!=0 && email.length!=0 && password.length!=0){
            setlogin(false)

        }
        else{
            alert('please fill the credentials')
        }
    }
    const {login,setlogin}=useContext(UserContext)
    useEffect(function(){
        if(login==false){
          navigate('/event')
        }
  },[login,navigate])
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-100 text-black">
            <form onSubmit={SubmitFo} className="w-full max-w-sm p-6 bg-gray-50 shadow-lg rounded-lg">
                <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">Login</h2>
                <div className="flex flex-col space-y-4">
                    <input
                        className="p-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 transition duration-200"
                        type="text"
                        placeholder="Type your name here"
                        name="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                    <input
                        className="p-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 transition duration-200"
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <input
                        className="p-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 transition duration-200"
                        type="password"
                        placeholder="Type Your Password"
                        name="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <button
                        type="submit"
                        className="mt-4 p-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-200"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}
export default Login