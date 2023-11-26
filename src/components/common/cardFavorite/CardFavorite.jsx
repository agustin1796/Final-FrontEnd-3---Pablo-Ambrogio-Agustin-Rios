import React, { useContext } from 'react';
import { DentistContext } from '../../../context/DentistContext';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import styleCard from '../card/Card.module.css'

const CardFavorite = () => {
    const { favoriteDentists, removeFavoriteDentist } = useContext(DentistContext);

    return (
        <div className={styleCard.container}>
            {favoriteDentists.length > 0 ? (
                favoriteDentists.map((elemento) => (
                    <div className={styleCard.card_item} key={elemento.id}>
                        <div className={styleCard.card_inner}>
                            <img src="https://cdn-icons-png.flaticon.com/512/3467/3467830.png" alt="Dentist Avatar" />
                            <div className={styleCard.name}>{elemento.name}</div>
                            <div className={styleCard.userName}>{elemento.username}</div>
                        </div>
                        <button
                            className={styleCard.favorito}
                            onClick={() => removeFavoriteDentist(elemento.id)}
                        >
                            <FavoriteSharpIcon sx={{ color: 'red' }} />
                        </button>
                    </div>
                ))
            ) : (
                <div>No hay dentistas en favoritos.</div>
            )}
        </div>
    );
};

export default CardFavorite;