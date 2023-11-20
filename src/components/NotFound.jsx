import React from 'react'

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center p-8 bg-red-500 text-white rounded-lg">
        <h1 className="text-4xl font-bold mb-4">404 - No Encontrado</h1>
        <p className="text-lg">
          Lo siento, la página que estás buscando no existe.
        </p>
      </div>
    </div>
  );
};
export default NotFound