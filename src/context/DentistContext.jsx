import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DentistContext = createContext();

const DentistContextProvider = ({ children }) => {
    const [dataApi, setDataApi] = useState([]);
    const [dentistDataForId, setDentistDataForId] = useState({});
    const [searchForId, setSearchForId] = useState(0);
    const [favoriteDentists, setFavoriteDentists] = useState([]);

    const instance = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com"
    });

    const getData = async () => {
        try {
            const { data } = await instance.get("/users");
            setDataApi([...data]);
        } catch (error) {
            console.log(error);
        }
    };

    const getDataForId = async (id) => {
        try {
            const { data } = await instance.get(`/users/${id}`);
            setDentistDataForId({ ...data });
        } catch (error) {
            console.log(error);
        }
    };

    const addFavoriteDentist = (id) => {
        const dentist = dataApi.find((dentist) => dentist.id === id);
        setFavoriteDentists((prevFavorites) => [...prevFavorites, dentist]);
        updateLocalStorage([...favoriteDentists, dentist]);
    };

    const removeFavoriteDentist = (id) => {
        const updatedFavorites = favoriteDentists.filter((dentist) => dentist.id !== id);
        setFavoriteDentists(updatedFavorites);
        updateLocalStorage(updatedFavorites);
    };

    const updateLocalStorage = (favorites) => {
        localStorage.setItem("favorite", JSON.stringify(favorites));
    };

    useEffect(() => {
        getData();
        const storedFavorites = JSON.parse(localStorage.getItem("favorite")) || [];
        setFavoriteDentists(storedFavorites);
    }, []);

    useEffect(() => {
        if (searchForId !== 0) {
            getDataForId(searchForId);
        }
    }, [searchForId]);

    const data = {
        dataApi,
        dentistDataForId,
        searchForId,
        setSearchForId,
        favoriteDentists,
        addFavoriteDentist,
        removeFavoriteDentist,
    };

    return (
        <DentistContext.Provider value={data}>
            {children}
        </DentistContext.Provider>
    );
};

export default DentistContextProvider;