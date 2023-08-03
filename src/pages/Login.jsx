import { useState } from "react"
import { client } from "../supabase/client"
import logo from "../assets/logo.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'

export default function Login(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(email, password)

        try{
            
            const result = await client.auth.signInWithPassword({
                email: email,
                password: password
            })

            console.log(result)

        }catch(error){
            console.error(error)
        }
    }

    return(

        <div className="container-login fondo-marvel">

            <div className="card">

                <img className="logo-login" src={logo} alt="marvel" />

                <form onSubmit={handleSubmit} className="form">
                    <div className="subtitle-container"> 
                        <h2 className="subtitle">Inicio de sesión</h2>
                    </div>
                    <div className="input-line"> 
                        <input name="email" className="input" type="email" id="email" placeholder="Correo electrónico" onChange={(e) => setEmail(e.target.value) }/>
                        <FontAwesomeIcon icon={faEnvelope} className="mail"/>
                    </div>
                    <div className="input-line">
                        <input name="password" className="input" type="password" id="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value) }/>
                        <FontAwesomeIcon icon={faLock} className="pass"/>
                    </div>
                    <div className="block-button">
                        <input className="button" type="submit" value="Ingresar" />
                    </div>
                </form>
            </div>

        </div>
    )
}