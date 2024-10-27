import {Link} from 'react-router-dom'
import UserContext from './UserContext.js'
import {useContext} from 'react'
function Header(){
    const {login,setlogin}=useContext(UserContext)
    function Logout(){
         setlogin(true)
    }
    return(
        <header className="flex justify-between items-center px-6 py-4 bg-slate-900 text-white shadow-md fixed top-0 w-full h-[80px] z-10">
            <div className="w-1/5">
                <Link to="/">
                    <h2 className="text-2xl font-semibold">EventSpot Lite</h2>
                </Link>
            </div>
            <nav className="flex justify-around w-1/5 space-x-4">
                <Link to="/event">
                    <h4 className="text-lg hover:text-indigo-300 transition duration-200">Events</h4>
                </Link>
                <Link to="/about">
                    <h4 className="text-lg hover:text-indigo-300 transition duration-200">About Us</h4>
                </Link>
                <Link to="/login">
                    <h4 className="text-lg hover:text-indigo-300 transition duration-200">{login==false ? (<p onClick={Logout}>LogOut</p>) : ('Login')}</h4>
                </Link>
            </nav>
        </header>
    )
}
export default Header