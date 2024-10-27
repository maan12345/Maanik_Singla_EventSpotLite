import {data} from './Data.js'
import EventCard from './EventCard.js'
import UserContext from './UserContext.js'
import {useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {useEffect} from 'react'
import {useState} from 'react'
function EventList(){
    const {login}=useContext(UserContext)
    const navigate=useNavigate(0)
    useEffect(function(){
        if(login===true){
            navigate('/login')
        }
    })
    const [data2,setData]=useState(data)
    const [search,setsearch]=useState('')
    function filterData(){
         const data12=data
         const littsearch=search.toLowerCase()
         const filtereddata=data12.filter(function(card){
            if(card.genre.toLowerCase()==littsearch){
                return card
            }
         })
         console.log(filtereddata)
         setData(filtereddata)
    }
    return(
        <div className='mt-[120px]'>
        <div className='ml-[20px] flex'>
        <input type='text' className='text-black  w-[280px]' placeholder='Find your favourite genre' value={search} onChange={(event)=>{setsearch(event.target.value)}}></input>
        <button className='ml-[8px] bg-blue rounded-sm' onClick={filterData}> search</button>
        </div>
       <div className='flex flex-wrap justify-between p-4'>
        {  
           data2.length!=0 ? ( data2.map(function(singleEvent){
                return <EventCard data={singleEvent}></EventCard>
            })) : (<p> Please Search Something Else</p>)
        }
       </div>
       </div>
    )
}
export default EventList