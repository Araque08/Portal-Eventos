//import Button from "../components/Button/Button.tsx";
//import EventCard from "../components/EventCard/EventCard.tsx";
import EventList from "../components/EventList/EventList.tsx";
import Hero from "../components/Hero/Hero.tsx";
import SearchBar from "../components/SearchBar/SearchBar.tsx";
import Footer from "../components/Footer/Footer.tsx";

import { useEffect, useState } from "react";
import type { Event } from "../types/Event.ts";
import { obtenerEventos } from "../services/eventService.ts";

function Home() {

  const [eventos, setEventos] = useState<Event[]>([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {

    const datos = obtenerEventos();

    setEventos(datos);

}, []);

  const eventosFiltrados = eventos.filter((evento) =>

  evento.titulo
    .toLowerCase()
    .includes(busqueda.toLowerCase())

);

  return (
    <>
      <Hero />

      <SearchBar
        busqueda={busqueda}
        setBusqueda={setBusqueda}
      />

      <EventList eventos={eventosFiltrados}/>

      <Footer />
    </>
  );
}

export default Home;