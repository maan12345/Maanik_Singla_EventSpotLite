//import Project1 from './images/Project1'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
function EventCard(props){
    const data=props.data
    const navigate=useNavigate()
    //function specialPage(){
    //  navigate('/event/place')
    //}
    function specialPage(){
    setspecial(true)
    }
    const [special,setspecial]=useState(false)
    return(
      <div className="relative">
            <div className={`${special ? 'blur-lg' : ''}`}>
                <div
                    className="h-96 w-[400px] mt-8 p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 group cursor-pointer"
                    onClick={specialPage}
                >
                    <div className="relative">
                        <img
                            src={data.image}
                            alt="Event"
                            className="h-48 w-full rounded-lg object-cover transition-all duration-300 ease-in-out group-hover:blur-sm"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
                            <p className="text-white text-lg font-semibold">{data.genre}</p>
                        </div>
                    </div>
                    <p className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">{data?.name}</p>
                    <p className="text-gray-600 dark:text-gray-300">{data?.location}</p>
                    <p className="text-gray-500 dark:text-gray-400">{data?.time}</p>
                    <p className="text-gray-500 dark:text-gray-400">{data?.date}</p>
                </div>
            </div>

            {/* Detailed View Modal */}
            {special && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
                    <div className="p-6 w-[400px] bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                        <img src={data.image} alt="Event" className="w-full rounded-lg mb-4" />
                        <p className="text-xl font-semibold text-gray-800 dark:text-white">{data?.name}</p>
                        <p className="text-gray-600 dark:text-gray-300">{data?.location}</p>
                        <p className="text-gray-500 dark:text-gray-400">{data?.time}</p>
                        <p className="text-gray-500 dark:text-gray-400">{data?.date}</p>
                        <p className="text-gray-500 dark:text-gray-400">{data?.category}</p>
                        <p className="text-gray-500 dark:text-gray-400">{data?.organizer}</p>
                        <button
                            onClick={() => setspecial(false)} // Close the modal
                            className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
export default EventCard