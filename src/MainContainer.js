import Header from './Header.js'
import {Outlet} from 'react-router-dom'
import {useContext} from 'react'
import UserContext from './UserContext.js'
import {useNavigate} from 'react-router-dom'
function MainContainer(){
    const {login,setlogin}=useContext(UserContext)
    console.log(login)
    return(
        <div>
            <div>
           <Header></Header>
           </div>
           <div className='mt-[40px]'>
           <Outlet> </Outlet>
           </div>
        </div>
    )
}
export default MainContainer