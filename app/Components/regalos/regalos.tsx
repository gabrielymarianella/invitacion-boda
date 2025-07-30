import React from "react";
import "./regalos.css";
import regalo from '/public/asset/caja-de-regalo.png';


export default function Regalos() {
  return (
    <>
      <div className="container-info">
        <h3 className="title_primary">REGALOS</h3>
        <div className="imagen">
          <img src={regalo} alt="" />
        </div>
        <div className="info">
          <p>Nuestro mejor regalo sera tu compañia,
            pero si un obsequio quieres hacernos, te agradecemos
            que sea por este medio:
          </p>
          <div className="cuenta">
            <h4>CUENTA DAVIPLATA</h4>
            <h4>Numero: 316 5573 851</h4>
          </div>
          <h4 className="prop">A nombre de Marianella Jimenez</h4>
        </div>
      </div>
    </>
  );
}
