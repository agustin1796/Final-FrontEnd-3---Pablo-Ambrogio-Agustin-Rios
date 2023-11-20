import React, { useEffect, useState } from 'react';

const Card = () => {
  const [odontologos, setOdontologos] = useState([]);

  const getOdontologos = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setOdontologos(data);
    } catch (error) {
      console.error('Error en la API:', error);
    }
  };

  useEffect(() => {
    getOdontologos();
  }, []);

  return (
    <div className='container'>
      {odontologos.map((elemento) => (
        <div className= "card_item" key={elemento.id}>
          <div className="card_inner">
            <img src= "https://cdn-icons-png.flaticon.com/512/3467/3467830.png" />
            <div className='name'>{elemento.name}</div>
            <div className='userName'>{elemento.username}</div>
          <button className='favorito'>Favorito</button>
          </div>
        </div>



      ))}
    </div>
  );
};

export default Card;
