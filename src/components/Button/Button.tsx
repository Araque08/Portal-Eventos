interface ButtonProps {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "danger";
}

function Button({ children, variant }: ButtonProps) {

  const styles ={
    primary: "bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition",
    secondary: "bg-gray-600 hover:bg-gray-700 text-white px-5 py-2 rounded-lg transition",
    danger: "bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg transition",
  };

  return (
    <button
      className={`${styles[variant]} px-5 py-2 rounded-lg transition`}
    >
      {children}
    </button>
  );
}

export default Button;