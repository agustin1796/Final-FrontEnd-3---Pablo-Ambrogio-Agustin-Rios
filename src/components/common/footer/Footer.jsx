import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-red-500 p-4 mt-auto">
      <div className="container mx-auto text-center text-white">
        <p className="text-sm">
          © {new Date().getFullYear()} Pablo Ambrogio - Hernan Agustin Rios. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
export default Footer