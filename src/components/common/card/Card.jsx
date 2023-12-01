import { useContext } from 'react';
import { DentistContext } from '../../../context/DentistContext';
import { Link } from 'react-router-dom';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import styleCard from './Card.module.css'

const Card = () => {
  const { dataApi, addFavoriteDentist, removeFavoriteDentist, favoriteDentists } = useContext(DentistContext);

  const isDentistInFavorites = (id) => favoriteDentists.some((dentist) => dentist.id === id);

  const handleFavorite = (id) => {
    if (isDentistInFavorites(id)) {
      removeFavoriteDentist(id);
    } else {
      addFavoriteDentist(id);
    }
  };

  return (
    <div className={styleCard.container}>
      {dataApi.map((elemento) => (
        <div className={styleCard.card_item} key={elemento.id} >
          <Link to={`/detail/${elemento.id}`}>
            <div className={styleCard.card_inner} >
              <img src="https://cdn-icons-png.flaticon.com/512/3467/3467830.png" alt="Dentist Avatar" />
              <div className={styleCard.name}>{elemento.name}</div>
              <div className={styleCard.userName}>{elemento.username}</div>
            </div>
          </Link>
          <button
            className={styleCard.favorito}
            onClick={() => handleFavorite(elemento.id)}
          >
            {isDentistInFavorites(elemento.id) ? <FavoriteSharpIcon sx={{ color: 'red' }} /> : <FavoriteBorderSharpIcon color="disabled" />}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;