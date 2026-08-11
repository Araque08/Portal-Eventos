import Button from "../Button/Button";

function Hero() {
  return (
    <section className="bg-blue-600 text-white py-20">

      <div className="max-w-7xl mx-auto text-center px-6">

        <h1 className="text-5xl font-bold">
          Portal de Gestión de Eventos
        </h1>

        <p className="mt-6 text-xl">
          Encuentra conferencias, bootcamps y talleres tecnológicos.
        </p>

        <div className="mt-8">
          <Button variant="secondary">
            Explorar eventos
          </Button>
        </div>

      </div>

    </section>
  );
}

export default Hero;