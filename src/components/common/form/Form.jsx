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

    const style = {
        form: "w-1/2 h-1/2 m-auto flex flex-col gap-y-2 justify-center items-center rounded-lg border-2",
        div: "w-10/12 h-8 pl-4 py-4 flex items-center justify-between border-2 rounded-md"
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className={style.form}
            >
                <div
                    className={style.div}
                >
                    <label htmlFor="name">Nombre</label>
                    <input
                        className='w-10/12 h-8 border-none outline-none px-4 text-[#222]'
                        type="text" name="name" id="name"
                        onChange={handleInput}
                    />
                </div>
                <div
                    className={style.div}
                >
                    <label htmlFor="email">Email</label>
                    <input
                        className='w-10/12 h-8 border-none outline-none px-4 text-[#222]'
                        type="text" name="email" id="email"
                        onChange={handleInput}
                    />
                </div>
                <div
                    className='w-10/12 flex justify-between'
                >
                    <p>{
                        messageError ? seeMessage : null
                    }</p>
                </div>
                <button
                    className='w-24 h-8 bg-red-400'
                    type="submit"
                    onSubmit={handleSubmit}
                >
                    Enviar</button>
            </form>
        </>
    )
}

export default Form