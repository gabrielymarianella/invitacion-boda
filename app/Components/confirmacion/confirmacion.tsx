import React from "react";
import "./confirmacion.css";

export default function Confirmacion() {
  return (
    <>
      <div className="info">
        <h3 className="title_primary">CONFIRMACION</h3>
        <div className="text-info">
          <p>
            Celebrar nuestro amor es un sueño hecho realidad, para que sea
            perfecto, nos encantaría contar contigo en nuestra lista de
            invitados.
          </p>
          <p className="conf">
            Confírmanos tu asistencia hasta el 22 de Agosto
          </p>
        </div>
        <a
          target="_blank"
          href="https://wa.me/573165573851?text=Hola%20Marianella,%0D%0AQuiero%20confirmar%20mi%20asistencia%20a%20su%20boda.%20"
        >
          <button>SI, ASISTIRÉ</button>
        </a>
      </div>
    </>
  );
}
