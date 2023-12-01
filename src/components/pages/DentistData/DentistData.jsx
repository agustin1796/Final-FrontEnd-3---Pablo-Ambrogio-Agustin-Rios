import { useEffect, useState } from "react"
import { BounceLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import axios from "axios";

const DentistData = () => {

    const [spinner, setSpinner] = useState(false)

    useEffect(() => {

        setTimeout(() => {
            setSpinner(true)
        }, 500)

    }, [])

    const [data, setData] = useState({})

    const { id } = useParams()

    const getDentistForId = async (searchDentisId) => {
        try {
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${searchDentisId}`)
            setData({ ...data }, data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getDentistForId(id)
    }, [])

    const table =
        <table className="w-full border-black border-2">
            <tr className="border-black border-2">
                <th className="border-black border-2">Nombre y apellido</th>
                <th className="border-black border-2">Email</th>
                <th className="border-black border-2">Teléfono</th>
                <th className="border-black border-2">Sito web</th>
            </tr>
            <tr className="w-full text-center">
                <td className="border-black border-2">{data.name}</td>
                <td className="border-black border-2">{data.email}</td>
                <td className="border-black border-2">{data.phone}</td>
                <td className="border-black border-2">{data.website}</td>
            </tr>
        </table>

    return (
        <main className="w-full h-[30rem] max-w-7xl my-0 mx-auto">
            {
                spinner ?
                    table
                    :
                    <div className="w-full min-h-[100%] flex justify-center items-center">
                        <BounceLoader color="#EF4444" />
                    </div>
            }

        </main>
    )
}

export default DentistData