import { useContext, useEffect, useState } from "react"
import { DentistContext } from "../../../context/DentistContext";
import { BounceLoader } from "react-spinners";

const DentistData = () => {

    const { dentistDataForId } = useContext(DentistContext);
    const [spinner, setSpinner] = useState(false)
    const { name, email, website, phone } = dentistDataForId;

    useEffect(() => {

        setTimeout(() => {
            setSpinner(true)
        }, 2000)

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
                <td className="border-black border-2">{name}</td>
                <td className="border-black border-2">{email}</td>
                <td className="border-black border-2">{phone}</td>
                <td className="border-black border-2">{website}</td>
            </tr>
        </table>

    // console.log(data);
    return (
        <main className="w-full h-[30rem] max-w-7xl my-0 mx-auto">
            {
                spinner ?
                    table
                    :
                    <div className="w-full min-h-[100%] flex justify-center items-center">
                        <BounceLoader color="#36d7b7" />
                    </div>
            }

        </main>
    )
}

export default DentistData