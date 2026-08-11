import EventCard from "../EventCard/EventCard.tsx";

interface Evento {
  id: number;
  titulo: string;
  fecha: string;
  lugar: string;
  descripcion: string;
  cupos: number;
}

interface EventListProps {
  eventos: Evento[];
}

function EventList({ eventos }: EventListProps) {
  return (
    <div>
      {eventos.map((evento) => (
        <EventCard
          key={evento.id}
          titulo={evento.titulo}
          fecha={evento.fecha}
          lugar={evento.lugar}
          descripcion={evento.descripcion}
          cupos={evento.cupos}
        />
      ))}
    </div>
  );
}

export default EventList;