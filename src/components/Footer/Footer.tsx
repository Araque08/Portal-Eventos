import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <h2 className="text-2xl font-bold">
          EventHub
        </h2>

        <p className="mt-2 text-gray-400">
          Portal de Gestión de Eventos
        </p>

        <div className="flex gap-6 mt-6">

          <Link
            to="/"
            className="hover:text-blue-400"
          >
            Inicio
          </Link>

          <Link
            to="/"
            className="hover:text-blue-400"
          >
            Eventos
          </Link>

          <Link
            to="/"
            className="hover:text-blue-400"
          >
            Contacto
          </Link>

        </div>

        <hr className="my-6 border-gray-700" />

        <p className="text-sm text-gray-500">
          © 2026 EventHub. Todos los derechos reservados.
        </p>

      </div>

    </footer>
  );
}

export default Footer;