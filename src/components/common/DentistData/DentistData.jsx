import { useContext } from "react"
import { DentistContext } from "../../context/DentistContext"

const DentistData = () => {

    const { dentistDataForId } = useContext(DentistContext);
    // console.log(dentistDataForId);
    // console.log("-----");
    const { data } = dentistDataForId;
    return (
        <>
            <div>DentistData</div>
            <h1>{data && data.name}</h1>
        </>
    )
}

export default DentistData