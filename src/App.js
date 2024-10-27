import logo from './logo.svg';
import './App.css';
import EventList from './EventList.js'
import Header from './Header.js'
import {createBrowserRouter} from 'react-router-dom'
import {RouterProvider} from 'react-router-dom'
import MainContainer from './MainContainer.js'
import DefaultBody from './DefaultBody.js'
import About from './About.js'
import Login from './Login.js'
import {useContext} from 'react'
import UserContext from './UserContext.js'
import {useState} from 'react'
import EventSpecial from './EventSpecial.js'
function App() {
  const Router=createBrowserRouter([{
    path:'/',
    element:<MainContainer></MainContainer>,
    children:[{
      path:'/',
      element:<DefaultBody></DefaultBody>,
    },{
      path:'/event',
      element:<EventList></EventList>
    },{
      path:'/about',
      element:<About></About>
    },{
      path:'/login',
      element:<Login></Login>
    },{
      path:'/event/place',
      element:<EventSpecial></EventSpecial>
    }]
  }])
  const [login,setlogin]=useState(true)
  return (
    <UserContext.Provider value={{login:login,setlogin:setlogin}}>
    <div className="App bg-indigo-950 h-[100vh] text-white overflow-auto scrollbar-hidden">
      <RouterProvider router={Router}>
      </RouterProvider>
    </div>
    </UserContext.Provider>
  );
}

export default App;
