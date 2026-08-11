import type { Event } from "../types/Event";

export function obtenerEventos(): Event[] {

    return [

        {
            id: 1,
            titulo: "React Conference",
            fecha: "20/08/2026",
            lugar: "Bogotá",
            descripcion: "Conferencia sobre las últimas tendencias en React.",
            cupos: 200,
        },

        {
            id: 2,
            titulo: "Java Bootcamp",
            fecha: "15/09/2026",
            lugar: "Medellín",
            descripcion: "Bootcamp intensivo de Java.",
            cupos: 150,
        },

    ];

}