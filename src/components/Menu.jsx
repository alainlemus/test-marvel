import { useRef } from 'react'
import logo from '../assets/logo.webp'
import { client } from '../supabase/client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

export default function Menu(){

    const flagMenu = useRef(false)

    const handleMenuMovil = () => {
        
        const element = document.getElementById('menu-opciones-movil')
        const barra1 = document.getElementById('uno')
        const barra2 = document.getElementById('dos')

        barra1.classList.remove()
        barra2.classList.remove()

        if(flagMenu.current){
            barra1.classList.remove('uno-rotate')
            barra2.classList.remove('dos-rotate')
            element.classList.remove('open')
            element.classList.add("close")
            flagMenu.current = false
        }else{
            barra1.classList.add('uno-rotate')
            barra2.classList.add('dos-rotate')
            element.classList.remove('close')
            element.classList.add("open")
            flagMenu.current = true
        }
    }

    return(
        <nav className="menu-bar">

            <div className='logo-container-menu'>
                <img className='logo-menu' src={logo} alt="Marvel Home" />
            </div>

            <div className='menu-movil-boton' id="menu-movil-boton" onClick={handleMenuMovil}>
                <span className='linea-menu-movil' id="uno"></span>
                <span className='linea-menu-movil' id="dos"></span>
                <span className='linea-menu-movil'></span>
            </div>

            <div className='logout-desktop' onClick={ () => client.auth.signOut() }>
                <FontAwesomeIcon icon={faRightFromBracket} /> Salir
            </div>

            <div className='menu-opciones-movil close' id="menu-opciones-movil">
                <div className='logout-movil' onClick={ () => client.auth.signOut() }><FontAwesomeIcon icon={faRightFromBracket} /> Salir</div>
            </div>
            
        </nav>
    )
}