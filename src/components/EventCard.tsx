interface EventCardProps {
  titulo: string;
  fecha: string;
  lugar: string;
  descripcion: string;
  cupos: number;
}

function EventCard(props: EventCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold text-gray-800">{props.titulo}</h2>

      <p className="text-gray-600">Fecha: {props.fecha}</p>

      <p className="text-gray-600">Lugar: {props.lugar}</p>

      <p className="text-gray-600">Descripción: {props.descripcion}</p>

      <p className="text-gray-600">Cupos disponibles: {props.cupos}</p>
    </div>
  );
}

export default EventCard;