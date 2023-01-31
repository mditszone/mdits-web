import React, { Component } from 'react';
import '../components/footer.css'

//import { FaHeart } from "react-icons/fa";
class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <h4>Copyright@2023Mdits</h4>
     
      <div class="footer-center">
      <div>
        <i class="FaHeart"></i>
      
        <p>mdits.co.in</p>
      </div>
      

      <div>
        <i class="fa fa-phone"></i>
        <p>+91 7075834299</p>
      </div>

      <div>
        <i class="fa fa-map-marker"></i>
        <p><span>Hyderabad,</span> TS-5023201</p>
      </div>

    </div> 
    </div>
    );
  }
}

export default Footer;
