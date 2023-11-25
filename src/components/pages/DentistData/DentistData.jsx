import { useContext } from "react"
import { DentistContext } from "../../../context/DentistContext";

const DentistData = () => {

    const { dentistDataForId } = useContext(DentistContext);
    console.log(dentistDataForId);
    // console.log("-----");
    const { data } = dentistDataForId;

    return (
        <>
            <div>DentistData</div>
            <div>{
                data &&
                <h1>{data.name}</h1>
            }</div>
        </>
    )
}

export default DentistData