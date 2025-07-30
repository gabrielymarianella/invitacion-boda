import React from 'react';
import './galeria.css';
import img1 from '/public/asset/30.jpg';
import img2 from '/public/asset/11.jpg';
import img3 from '/public/asset/43.jpg';


export default function Galeria() {
  return( 
    <>
        <div className='imgs'>
            <div className='img1 img_total'>
                <img src={img1} alt="" />
            </div>
            <div className='img2 img_total'>
                <img src={img2} alt="" />
            </div>
            <div className='img3 img_total'>
                <img src={img3} alt="" />
            </div>
        </div>
    </>
  );
}
