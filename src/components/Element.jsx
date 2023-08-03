import { useNavigate } from "react-router-dom"
import { DataContext } from "../context/DataContext";
import { useContext } from "react";

export default function Element({heroName, src, id, description}){

    const navigate = useNavigate()
    const { setSelected } = useContext(DataContext)

    const info = {
        id: id,
        heroName: heroName,
        src: src,
        description: description
    }
    
    return(
        <div className="card-element" onClick={() => {
            setSelected(info)
            navigate(`/home/${id}`)
        }}>
            <img className="image-card" src={src} alt={heroName} />
            <div className="container-title-card">
                <p className="title-card">{heroName}</p>
            </div>
        </div>
    )
}