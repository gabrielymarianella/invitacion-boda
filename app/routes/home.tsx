import type { Route } from "./+types/home";
import Portada from "../Components/portada/portada";
import Musica from "~/Components/musica/musica";
import Info from "~/Components/info/info";
import Minuto from "~/Components/minuto/minuto";
import Regalos from "~/Components/regalos/regalos";
import Galeria from "~/Components/galeria/galeria";
import Confirmacion from "~/Components/confirmacion/confirmacion";
import Conteo from "~/Components/conteo/conteo";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gabriel y Marianella" },
    { name: "description", content: "Bienvenido a nuestra invitación" },
  ];
}

export default function Home() {
  return (
    <>
      <div className="bodyy">
        <Portada />
        <Musica />
        <Info />
        <Minuto />
        <Regalos />
        <Galeria />
        <Confirmacion />
        <Conteo />
      </div>
    </>
  );
}
