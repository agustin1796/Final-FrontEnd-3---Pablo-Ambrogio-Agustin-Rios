import { useContext } from 'react';
import { DentistContext } from '../../../context/DentistContext';
import { useNavigate } from 'react-router-dom';

const Card = () => {

  const { dataApi, setSearchForId } = useContext(DentistContext);
  const navigate = useNavigate()

  const dentistFav = []
  const handleFavorite = (id) => {
    const arrFav = dataApi.filter(element => element.id === id)

    if (dentistFav.length > 0) {
      const someD = dentistFav.some(element => element.id === id)

      // Si el someD es "true" eliminar ese objeto dentro del array
      if (someD) {
        const index = dentistFav.map(element => element.id).indexOf(id)
        dentistFav.splice(index, 1)
        console.log(dentistFav);
      }

      if (!someD) {
        dentistFav.push(...arrFav)
      }

    }
    else {
      dentistFav.push(...arrFav)
    }

    localStorage.setItem("favorite", JSON.stringify(dentistFav))
    console.log(dentistFav);
  }

  const handleClickCard = id => {
    setSearchForId(id)
    navigate("/dentistData")
  }

  return (
    <div className='container'>
      {dataApi.map((elemento) => {
        return (
          <div className="card_item" key={elemento.id} >
            <div className="card_inner"
              onClick={() => handleClickCard(elemento.id)}
            >
              <img src="https://cdn-icons-png.flaticon.com/512/3467/3467830.png" />
              <div className='name'>{elemento.name}</div>
              <div className='userName'>{elemento.username}</div>
            </div>
            <button className='favorito'
              onClick={() => handleFavorite(elemento.id)}
            >Favorito</button>
          </div>
        )
      }
      )}
    </div>
  );
};

export default Card;
