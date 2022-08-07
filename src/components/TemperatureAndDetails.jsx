import React from 'react'
import {UilArrowUp, UilArrowDown, UilTemperature, UilTear, UilWind, UilSun, UilSunset} from "@iconscout/react-unicons"

function TemperatureAndDetails() {
  return (
    <div>


        <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
            <p>Cloudy</p>
        </div>


        <div className="flex flex-row items-center justify-between text-white py-3">
            <img 
                src="http://openweathermap.org/img/wn/01d@2x.png" 
                alt="" 
                className='w-20'
            />
            <p className="text-5xl">34°</p>
            <div className="flex flex-col space-y-2">
                <div className="flex font-light text-sm items-center justify-center">
                    <UilTemperature size={20} className="mr-0.5"/>
                    Real Feel :
                    <span className='font-small ml-1'>32°</span>
                </div>
                <div className="flex font-light text-sm items-center justify-center">
                    <UilTear size={20} className="mr-0.5"/>
                    Humidity :
                    <span className='font-small ml-1'>65%</span>
                </div>
                <div className="flex font-light text-sm items-center justify-center">
                    <UilWind size={20} className="mr-1"/>
                    Wind :
                    <span className='font-small ml-1'>11 KM/H</span>
                </div>
            </div>
            
        </div>


    </div>
  )
}

export default TemperatureAndDetails;