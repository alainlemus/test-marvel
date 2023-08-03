
import { useContext } from "react" 
import Menu from "../components/Menu"
import { useNavigate, useParams } from "react-router-dom"
import { DataContext } from "../context/DataContext"

export default function Heroe(){

    const navigation = useNavigate()
    const { selected } = useContext(DataContext);
    const { id } = useParams()

    return(
        <>
            <Menu></Menu>
            <div className="container-heroe">
                <p className="navigation"><span className="back-button" onClick={() => navigation('/home')}>Home</span> - {id} </p>

                <div className="container-description">
                    <div className="container-image-heroe">
                        <img className="image-heroe" src={selected.src} alt={selected.heroName} />
                    </div>
                    <div className="container-info">
                        <p className="title">{selected.heroName}</p>
                        <p className="subtitle">{selected.description}</p>
                    </div>
                </div>

            </div>
        </>
    )
}