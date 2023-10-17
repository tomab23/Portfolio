import React from 'react'
import { useTranslation } from 'react-i18next';
// import image from "../../assets/images/image.png"

const CardProjectTrois = ({ project }) => {

  return (
    <>
    <div className="w-80 p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <img className="w-full h-40 object-cover rounded-t-lg" alt="Card Image" src={project?.img}/>
        <div className="p-4">
            <h2 className="text-xl  font-semibold">{project?.name}</h2>
            <p className="text-gray-600">{project?.resume}.</p>
            <div className="flex justify-between items-center mt-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">Learn More</button>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default CardProjectTrois
