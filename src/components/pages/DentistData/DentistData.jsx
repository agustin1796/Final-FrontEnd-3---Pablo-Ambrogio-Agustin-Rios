import { useContext, useEffect, useState } from "react"
import { DentistContext } from "../../../context/DentistContext";
import { BounceLoader } from "react-spinners";

const DentistData = () => {

    const { recuperandoDatos, dentistDataForId } = useContext(DentistContext);
    const [spinner, setSpinner] = useState(false)
    console.log(dentistDataForId);
    console.log(recuperandoDatos);
    // console.log("-----");
    const { name } = dentistDataForId;

    useEffect(() => {

        setTimeout(() => {
            setSpinner(true)
        }, 2000)

    }, [])


    // console.log(data);
    return (
        <>
            <div>DentistData</div>
            <div>{
                spinner ? <h1>{name}</h1> :
                    <BounceLoader color="#36d7b7" />
            }</div>
        </>
    )
}

export default DentistData