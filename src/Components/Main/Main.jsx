import React from 'react'
import './main.scss'
import img from '../../Assets/image1.jpg'
import img2 from '../../Assets/image2.jpg'
import img3 from '../../Assets/image3.jpg'
import img4 from '../../Assets/image4.jpg'
import img5 from '../../Assets/image5.jpg'
import img6 from '../../Assets/image6.jpg'
import img7 from '../../Assets/image7.jpg'
import img8 from '../../Assets/image8.jpg'
import img9 from '../../Assets/image9.jpg'
import img10 from '../../Assets/image10.jpg'
import img11 from '../../Assets/image11.jpg'
import img12 from '../../Assets/image12.jpg'
import img13 from '../../Assets/image13.jpg'
import img14 from '../../Assets/image14.jpg'
import img15 from '../../Assets/image15.jpg'
import img16 from '../../Assets/image16.jpg'


import { GoLocation } from "react-icons/go";
import { BsClipboardCheck } from "react-icons/bs";

const Data=[
  { 
   id:1,
   imgSrc:img,
   destTitle:"Fota Island Hotel ",
   location:"Island",
   fees:"$700",
   description:"The 5-star Fota Island Hotel boasts an 18-hole championship golf course, a swimming pool and beautifully designed rooms with countryside views and luxury bathrooms.."
  },
  
   { 
   id:2,
   imgSrc:img2,
   destTitle:" New York Hotel ",
   location:"New York",
   fees:"$850",
   description:"The 5-star Fota Island Hotel boasts an 18-hole championship golf course, a swimming pool and beautifully designed rooms with countryside views and luxury bathrooms.."
  },
  { 
    id:3,
    imgSrc:img3,
    destTitle:" Belgium Hotel ",
    location:"Belgium",
    fees:"$510",
    description:"The 5-star Fota Island Hotel boasts an 18-hole championship golf course, a swimming pool and beautifully designed rooms with countryside views and luxury bathrooms.."
   },
   { 
    id:4,
    imgSrc:img4,
    destTitle:"England Hotel ",
    location:"England",
    fees:"$300",
    description:"The 5-star Fota Island Hotel boasts an 18-hole championship golf course, a swimming pool and beautifully designed rooms with countryside views and luxury bathrooms.."
   },
   { 
    id:5,
    imgSrc:img5,
    destTitle:"Paris Hotel ",
    location:"Paris",
    fees:"$1000",
    description:"The 5-star Fota Island Hotel boasts an 18-hole championship golf course, a swimming pool and beautifully designed rooms with countryside views and luxury bathrooms.."
   },
   { 
    id:6,
    imgSrc:img6,
    destTitle:"Turkey Hotel ",
    location:"Turkey",
    fees:"$250",
    description:"The 5-star Fota Island Hotel boasts an 18-hole championship golf course, a swimming pool and beautifully designed rooms with countryside views and luxury bathrooms.."
   },
   { 
    id:7,
    imgSrc:img7,
    destTitle:" Amsterdam Hotel ",
    location:"Amsterdam",
    fees:"$400",
    description:"The 5-star Fota Island Hotel boasts an 18-hole championship golf course, a swimming pool and beautifully designed rooms with countryside views and luxury bathrooms.."
   },
   { 
    id:8,
    imgSrc:img8,
    destTitle:" Madrid Hotel ",
    location:"Madrid",
    fees:"$300",
    description:"The 5-star Fota Island Hotel boasts an 18-hole championship golf course, a swimming pool and beautifully designed rooms with countryside views and luxury bathrooms.."
   },
   { 
    id:9,
    imgSrc:img9,
    destTitle:" Madrid Hotel ",
    location:"Madrid",
    fees:"$300",
    description:"The 5-star Fota Island Hotel boasts an 18-hole championship golf course, a swimming pool and beautifully designed rooms with countryside views and luxury bathrooms.."
   },

   { 
    id:10,
    imgSrc:img10,
    destTitle:" Madrid Hotel ",
    location:"Madrid",
    fees:"$300",
    description:"The 5-star Fota Island Hotel boasts an 18-hole championship golf course, a swimming pool and beautifully designed rooms with countryside views and luxury bathrooms.."
   },
   { 
    id:11,
    imgSrc:img11,
    destTitle:" Madrid Hotel ",
    location:"Madrid",
    fees:"$300",
    description:"The 5-star Fota Island Hotel boasts an 18-hole championship golf course, a swimming pool and beautifully designed rooms with countryside views and luxury bathrooms.."
   },
   { 
    id:12,
    imgSrc:img12,
    destTitle:" Madrid Hotel ",
    location:"Madrid",
    fees:"$300",
    description:"The 5-star Fota Island Hotel boasts an 18-hole championship golf course, a swimming pool and beautifully designed rooms with countryside views and luxury bathrooms.."
   },
   { 
    id:13,
    imgSrc:img13,
    destTitle:" Madrid Hotel ",
    location:"Madrid",
    fees:"$300",
    description:"The 5-star Fota Island Hotel boasts an 18-hole championship golf course, a swimming pool and beautifully designed rooms with countryside views and luxury bathrooms.."
   },
   { 
    id:14,
    imgSrc:img14,
    destTitle:" Madrid Hotel ",
    location:"Madrid",
    fees:"$300",
    description:"The 5-star Fota Island Hotel boasts an 18-hole championship golf course, a swimming pool and beautifully designed rooms with countryside views and luxury bathrooms.."
   },
   { 
    id:15,
    imgSrc:img15,
    destTitle:" Madrid Hotel ",
    location:"Madrid",
    fees:"$300",
    description:"The 5-star Fota Island Hotel boasts an 18-hole championship golf course, a swimming pool and beautifully designed rooms with countryside views and luxury bathrooms.."
   },
   { 
    id:16,
    imgSrc:img16,
    destTitle:" Madrid Hotel ",
    location:"Madrid",
    fees:"$300",
    description:"The 5-star Fota Island Hotel boasts an 18-hole championship golf course, a swimming pool and beautifully designed rooms with countryside views and luxury bathrooms.."
   },

]


const Main = () => {
  return (
    
    <section className='main container section'>
      <div className='secTitle'>
        <h3 className='title'>
          Most visited destination
        </h3>
      </div>

      <div className='secContent grid'>
         {
          Data.map(({id,imgSrc,destTitle,location,fees,description})=>{
              return(
                <div key={id} className="singleDestination">
                  <div className='imageDiv'>
                    <img src={imgSrc} alt={destTitle} />
                  </div>
                  <div className='cardInfo'>
                    <h4 className='destTitle'>{destTitle}</h4>
                    <span className="continent flex"><GoLocation />
                    <span className='name'>{location}</span></span>

                    <div className="fees flex">
                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                    </div>

                    <div className='desc'>
                      <p>{description}</p>
                    </div>

                    <button className='btn flex'>
                      DETAY <BsClipboardCheck className='icon' />
                    </button>
                  </div>
                </div>
              )
          })
         }
      </div>
    </section>
  )
}

export default Main
