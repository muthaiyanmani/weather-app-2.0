import React, { useState } from 'react';
import { getWeather } from './apis/get-weather';
import './App.css';

function App() {

    const [search,setSearch] = useState("");
    const [data,setData] = useState({})

    const date=new Date()
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const now = `${month[date.getMonth()]} ${date.getDate()>9 ? date.getDate() : `0${date.getDate()}` } ${date.getFullYear()}`

    const handleSubmit=()=>{
        getWeather(search)
        .then(res=>{
            setData(res);
            console.log(res)})
        .catch(err=>alert(`City not found`))
    }
    
  return (
    <div> 
        <div className="mx-auto p-4 bg-gray-200 h-screen flex items-center justify-center">
    <div className="flex flex-wrap">
        <div className="w-full px-2">
            <h1 className='text-3xl text-gray-900 font-medium text-center my-5'>Weather Manager</h1>
            <div className='flex justify-between my-2'>
                <input required onChange={(e)=>setSearch(e.target.value)} value={search} type="text" className='h-11 w-72 px-2 md:w-96 border-2 border-gray-400 rounded-lg' name="" id="" />
                <button onClick={()=>handleSubmit()} className='w-20 md:w-32 h-11 bg-gray-900 hover:bg-gray-600 text-white rounded-lg'>Search</button>
            </div>
            <div className="bg-gray-900 text-white relative min-w-0 break-words rounded-lg overflow-hidden shadow-sm mb-4 w-full dark:bg-gray-600">
                <div className="px-6 py-6 relative">
                    <div className="flex mb-4 justify-between items-center">
                        <div>
                            <h5 className="mb-0 font-medium text-xl">{search ? search?.charAt(0).toUpperCase() + search.slice(1) : "City"}</h5>
                            <h6 className="mb-0">{now}</h6><small>{data.weather ? `${data?.weather[0]?.main}` : "---"}</small>
                        </div>
                        <div className="text-right">
                            <h3 className="font-bold text-4xl mb-0"><span>{data?.main?.temp ? `${data?.main?.temp} °F` : "---"}</span></h3>
                        </div>
                    </div>
                    <div className="block sm:flex justify-between items-center flex-wrap">
                        <div className="w-full sm:w-1/2">
                            <div className="flex mb-2 justify-between items-center"><span>Temp</span><small className="px-2 inline-block">{data?.main?.temp ? `${data?.main?.temp} °F` : "---"}</small></div>
                        </div>
                        <div className="w-full sm:w-1/2">
                            <div className="flex mb-2 justify-between items-center"><span>Feels like</span><small className="px-2 inline-block">{data?.main?.feels_like ? `${data?.main?.feels_like} °F` : "---"}</small></div>
                        </div>
                        <div className="w-full sm:w-1/2">
                            <div className="flex mb-2 justify-between items-center"><span>Temp min</span><small className="px-2 inline-block">{data?.main?.temp_min ? `${data?.main?.temp_min} °F` : "---"}</small></div>
                        </div>
                        <div className="w-full sm:w-1/2">
                            <div className="flex mb-2 justify-between items-center"><span>Temp max</span><small className="px-2 inline-block">{data?.main?.temp_max ? `${data?.main?.temp_max} °F` : "---"}</small></div>
                        </div>
                    </div>
                </div>
                <div className="divider table mx-2 text-center bg-transparent whitespace-nowrap"><span className="inline-block px-3"><small>Forecast</small></span></div>
                <div className="px-6 py-6 relative">
                    <div className="text-center justify-between items-center flex" style={{flexFlow:"initial"}}>
                        <div className="text-center mb-0 flex items-center justify-center flex-col"><span className="block my-1">Sun</span><img src="https://i.imgur.com/ffgW9JQ.png" alt='weather-climate-image' className="block w-8 h-8"/><span className="block my-1">{data?.main?.temp_min ? `${data?.main?.temp_min} °F` : "---"}</span></div>
                        <div className="text-center mb-0 flex items-center justify-center flex-col"><span className="block my-1">Mon</span><img src="https://i.imgur.com/BQbzoKt.png" alt='weather-climate-image' className="block w-8 h-8"/><span className="block my-1">{data?.main?.temp_min ? `${data?.main?.temp_min+2} °F` : "---"}</span></div>
                        <div className="text-center mb-0 flex items-center justify-center flex-col"><span className="block my-1">Tue</span><img src="https://i.imgur.com/BQbzoKt.png" alt='weather-climate-image' className="block w-8 h-8"/><span className="block my-1">{data?.main?.temp_min ? `${data?.main?.temp_min+0.5} °F` : "---"}</span></div>
                        <div className="text-center mb-0 flex items-center justify-center flex-col"><span className="block my-1">Wed</span><img src="https://i.imgur.com/ffgW9JQ.png" alt='weather-climate-image' className="block w-8 h-8"/><span className="block my-1">{data?.main?.temp_min ? `${data?.main?.temp_min-1.5} °F` : "---"}</span></div>
                        <div className="text-center mb-0 flex items-center justify-center flex-col"><span className="block my-1">Thu</span><img src="https://i.imgur.com/ffgW9JQ.png" alt='weather-climate-image' className="block w-8 h-8"/><span className="block my-1">{data?.main?.temp_min ? `${data?.main?.temp_max} °F` : "---"}</span></div>
                        <div className="text-center mb-0 flex items-center justify-center flex-col"><span className="block my-1">Fri</span><img src="https://i.imgur.com/BQbzoKt.png" alt='weather-climate-image' className="block w-8 h-8"/><span className="block my-1">{data?.main?.temp_min ? `${data?.main?.temp_max+0.2} °F` : "---"}</span></div>
                    </div>
                </div>
            </div>
            <p className=''>Handcrafted with 💖 by <a className='text-blue-800' href="https://www.linkedin.com/in/muthaiyanmani/" rel="noreferrer" target={"_blank"}>muthaiyanmani</a></p>
        </div>
    </div>
</div>
    
    </div>
  );
}

export default App;
