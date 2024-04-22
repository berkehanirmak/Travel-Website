import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h2 className="logo">BAYBAYS.</h2>
            <p>
            Keşfetmeye hazır mısın? En iyi seyahat ipuçları ve rotaları burada! Dünya genelindeki eşsiz destinasyonlar hakkında bilgi al, hayallerindeki tatili planla ve yeni yerler keşfetmek için ilham al.
            </p>
            <div className="contact">
              <span><i className="fas fa-phone"></i> TR (+90) 532 380 1407</span>
              <span><i className="fas fa-envelope"></i> info@baybays.com</span>
            </div>
            <div className="socials">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
          <div className="footer-section links">
            <h2>Linkler</h2>
            <ul>
              <li><a href="#">ANA SAYFA</a></li>
              <li><a href="#">HAKKIMIZDA</a></li>
              <li><a href="#">SAYFALAR</a></li>
              <li><a href="#">BIZE ULAŞIN</a></li>
            </ul>
          </div>
          <div className="footer-section contact-form">
            <h2>Mesaj Yaz</h2>
            <form action="#">
              <input type="email" name="email" className="text-input contact-input" placeholder="Mail adresinizi giriniz" />
              <textarea rows="4" name="message" className="text-input contact-input" placeholder="Mesaj Yaz"></textarea>
              <button type="submit" className="btn btn-primary">
                <i className="fas fa-envelope"></i>
                Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 BAYBAYS. Tüm haklar saklıdır. Berkehan Irmak.
      </div>
    </footer>
  );
}

export default Footer;