import React from "react";
import "./info.css";
import iglesia from "/public/asset/iglesia.webp";
import recepcion from "/public/asset/recepcion.png";

export default function Info() {
  return (
    <>
      <div className="container-info">
        <h3 className="title_primary">DETALLES DE NUESTRA BODA</h3>
        <div className="info-lugares">
          <div className="iglesia">
            <div className="title">CEREMONIA</div>
            <div className="imagen">
              <img src={iglesia} alt="" />
            </div>
            <div className="info">
              <h3>Parroquia Santa Catalina de Alejandría</h3>
              <p>Turbaco, Bolívar</p>
            </div>
            <a href="https://maps.app.goo.gl/pAAUMUaKXGSvp3X28" target="blank">
              <button className="button-55">Como llegar</button>
            </a>
          </div>
          <div className="recepcion">
            <div className="title">RECEPCIÓN</div>
            <div className="imagen">
              <img src={recepcion} alt="" />
            </div>
            <div className="info">
              <h3>La Nueva Villareal</h3>
              <p>Turbaco, Bolívar</p>
            </div>
            <a href="https://maps.app.goo.gl/GV2qrmW8pUwE4y5R7" target="blank">
              <button className="button-55">Como llegar</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
