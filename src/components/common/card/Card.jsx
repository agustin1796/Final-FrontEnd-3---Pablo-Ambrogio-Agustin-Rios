import { useContext } from 'react';
import { DentistContext } from '../../../context/DentistContext';
import { useNavigate, Link } from 'react-router-dom';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import styleCard from './Card.module.css'

const Card = () => {
  const { dataApi, setSearchForId, addFavoriteDentist, removeFavoriteDentist, favoriteDentists } = useContext(DentistContext);
  const navigate = useNavigate();

  const isDentistInFavorites = (id) => favoriteDentists.some((dentist) => dentist.id === id);

  const handleFavorite = (id) => {
    if (isDentistInFavorites(id)) {
      removeFavoriteDentist(id);
    } else {
      addFavoriteDentist(id);
    }
  };

  const handleClickCard = (id) => {
    setSearchForId(id);
    navigate("/dentistData");
  };

  return (
    <div className={styleCard.container}>
      {dataApi.map((elemento) => (
        <div className={styleCard.card_item} key={elemento.id} >
          <div className={styleCard.card_inner} onClick={() => handleClickCard(elemento.id)}>
            <img src="https://cdn-icons-png.flaticon.com/512/3467/3467830.png" alt="Dentist Avatar" />
            <div className={styleCard.name}>{elemento.name}</div>
            <div className={styleCard.userName}>{elemento.username}</div>
          </div>
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