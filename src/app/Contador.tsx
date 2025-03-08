'use client';

import { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);
  const [mensaje, setMensaje] = useState("Haz clic en el botón para cambiar el mensaje");

  const cambiarMensaje = () => {
    setMensaje("¡Has hecho clic en el botón!");
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl">{mensaje}</h2>
      <h2 className="text-2xl">Contador: {contador}</h2>
      <button
        onClick={() => {
          setContador(contador + 1);
          cambiarMensaje();
        }}
        className="p-2 mt-2 text-white bg-blue-500"
      >
        Incrementar y Cambiar Mensaje
      </button>
    </div>
  );
}

export default Contador;
