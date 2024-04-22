import React ,{useState}from 'react'
import './navbar.scss'
import { LiaHotelSolid } from "react-icons/lia";
// import { AiFillCloseSquare } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";
import { LuCalendarCheck2 } from "react-icons/lu";
const Navbar = () => {

  const[active,setActive]=useState('navBar')

   const showNav=()=>{
    setActive('navBar activeNavbar')
   }
  //  const removeNavbar=()=>{
  //   setActive('navBar')
  //  }

  return (
    <section className='navBarSection'>
      <header className="header flex">
        <div className='logoDiv'>
          <a href="#" className='logo flex'> 
          <h1><LiaHotelSolid   className='icon'/> baybays.</h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className='navLink'>Ana sayfa</a>
            </li>
            
            <li className="navItem">
              <a href="#" className='navLink'>Hakkımızda</a>
            </li>
            <li className="navItem">
              <a href="#" className='navLink'>Sayfalar</a>
            </li>
            
            <li className="navItem">
              <a href="#" className='navLink'>Bize Ulaşın</a>
            </li>
             <button className="btn">
              <a href="#">Rezervasyon Yapın <LuCalendarCheck2 />  </a>
             </button>
          </ul>
          {/* <div onClick={removeNavbar} className='closeNavbar'>
          <AiFillCloseSquare className='icon'/>
          </div> */}
          
        </div>
        <div onClick={showNav} className='toggleNavbar'>
          <PiDotsNineBold className='icon' />
          </div>
      </header>
    </section>
  )
}

export default Navbar
