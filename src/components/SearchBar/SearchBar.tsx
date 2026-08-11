interface SearchBarProps {

  busqueda: string;

  setBusqueda: React.Dispatch<
    React.SetStateAction<string>
  >;

}

function SearchBar({
  busqueda,
  setBusqueda,
}: SearchBarProps) {

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">

    <input
        type="text"
        value={busqueda}
        onChange={(e) =>
          setBusqueda(e.target.value)
        }
        placeholder="Buscar eventos..."
        className="
          w-full
          border
          border-gray-300
          rounded-lg
          px-4
          py-3
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
        "
      />

    </section>
  );
}


export default SearchBar;