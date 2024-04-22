import React from 'react';
import './home.scss';
import video from '../../Assets/video.mp4';
import { IoLocationOutline } from "react-icons/io5";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Home = () => {

  const handleWhatsAppShare = () => {
    const phoneNumber = "905551234567"; // telefon numarası
    const message = "Merhaba, tatil planım hakkında bilgi alabilir miyim?"; // mesaj
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop typeof="video/mp4"></video>
      <div className="homeContent container">
        <div className="textDiv">
          <span className="smallText">
            Keşfetmeye hazır mısın?
          </span>
          <h1 className="homeTitle">
            Tatil Yerini Arayın <FaPlaneDeparture className='icon' />
          </h1>
        </div>
        <div className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Gideceğiniz yeri arayın:</label>
            <div className="input flex">
              <input type="text" placeholder='Buraya isim gir....' />
              <IoLocationOutline className='icon' />
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor="date">Tarihinizi seçin:</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>
          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Maksimum fiyat:</label>
              <h3 className='total'>30.000 ₺ </h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="200" />
            </div>
          </div>
          
        </div>
        <div className="homeFooterIcons flex">
          <div className='rightIcons'>
            <FiFacebook className='icon' />
            <AiOutlineInstagram className='icon' />
          </div>
          <div className='leftIcons'>
            <h1>Hemen İncele <FaRegArrowAltCircleDown /></h1> 
          </div><div className="whatsappButton">
            <button className="whatsappBtn" onClick={handleWhatsAppShare}>
             <h5> WhatsApp Canlı Destek </h5><FaWhatsapp className='icon'/>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home;
