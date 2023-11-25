import React, { useContext } from 'react';
import { DentistContext } from '../../../context/DentistContext';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';

const CardFavorite = () => {
    const { favoriteDentists, removeFavoriteDentist } = useContext(DentistContext);

    return (
        <div className='container'>
            {favoriteDentists.length > 0 ? (
                favoriteDentists.map((elemento) => (
                    <div className="card_item" key={elemento.id}>
                        <div className="card_inner">
                            <img src="https://cdn-icons-png.flaticon.com/512/3467/3467830.png" alt="Dentist Avatar" />
                            <div className='name'>{elemento.name}</div>
                            <div className='userName'>{elemento.username}</div>
                        </div>
                        <button
                            className='favorito'
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