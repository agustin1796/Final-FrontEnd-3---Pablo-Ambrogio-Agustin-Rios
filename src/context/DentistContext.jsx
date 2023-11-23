import axios from "axios";
import { createContext, useEffect, useState } from "react";

// Se crea el contexto
export const DentistContext = createContext();

const DentistContextProvider = ({ children }) => {

    const [dataApi, setDataApi] = useState([])
    const [dentistDataForId, setDentistDataForId] = useState({})
    const [searchForId, setSearchForId] = useState(0)

    const instance = axios.create(
        {
            baseURL: "https://jsonplaceholder.typicode.com"
        }
    )

    async function getData() {
        try {
            const { data } = await instance.get("/users")
            setDataApi(...dataApi, [...data])
        } catch (error) {
            console.log(error);
        }
    }

    const getDataForId = async id => {
        try {
            const { data } = await instance.get(`/users/${id}`)
            setDentistDataForId({ ...dentistDataForId, data })
        } catch (error) {
            console.log(error);
        }
    }

    // Se obtienen todos los dentistas 
    useEffect(() => {
        getData()
    }, [])

    // Buscamos el dentista por ID
    useEffect(() => {
        if (searchForId !== 0) {
            getDataForId(searchForId)
        }
    }, [searchForId])

    const data = {
        dataApi,
        dentistDataForId,
        setSearchForId
    }

    return (
        <DentistContext.Provider
            value={data}
        >
            {children}
        </DentistContext.Provider>
    )
}

export default DentistContextProvider