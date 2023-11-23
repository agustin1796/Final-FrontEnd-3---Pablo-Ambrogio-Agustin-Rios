import React, { useState } from 'react'
import { validateName, validateEmail } from '../../../validate/validate'

const Form = () => {

    const [inputs, setInputs] = useState({
        name: "",
        email: ""
    })

    const [messageError, setMessageError] = useState(false)
    const [seeMessage, setSeeMessage] = useState("")

    const handleInput = e => {
        const { name, value } = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (validateName(inputs.name) && validateEmail(inputs.email)) {
            console.log("Felicitaciones!!!, " + inputs.name + " " + inputs.email)

            localStorage.setItem("user", JSON.stringify(inputs))

            setMessageError(false)
            setSeeMessage("")
            setInputs({
                name: "",
                email: ""
            })
        }
        else {
            setMessageError(true)
            setSeeMessage("Por favor verifique su información nuevamente")
        }
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
            >
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" name="name" id="name"
                        onChange={handleInput}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email"
                        onChange={handleInput}
                    />
                </div>
                <div>
                    <p>{
                        messageError ? seeMessage : null
                    }</p>
                </div>
                <button
                    type="submit"
                    onSubmit={handleSubmit}
                >Enviar</button>
            </form>
        </>
    )
}

export default Form