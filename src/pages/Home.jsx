import {} from "react"
import Menu from "../components/Menu"
import Search from "../components/Search"

export default function Home(){
    return(
        <div className="container fondo-blanco">
            <Menu></Menu>
            <Search></Search>
        </div>
    )
}