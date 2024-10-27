import UserContext from './UserContext.js'
import {useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {useEffect} from 'react'
function DefaultBody(){
    const {login,setlogin}=useContext(UserContext)
    const navigate=useNavigate()
    console.log(login)
    useEffect(function(){
          if(login==true){
             navigate('/login')
          }
          else if(login==false){
            navigate('/event')
          }
    },[login,navigate])
    return(
        <div>
        
        </div>
    )
}
export default DefaultBody