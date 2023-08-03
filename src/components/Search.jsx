import { useState, useContext } from "react"
import { useEffect } from "react"
import Element from "./Element"


export default function Search(){

    const [result, setResult] = useState(null)

    const apiMarvel = async () => {
        
        const fetchData = async () => {
            const data = await fetch("https://gateway.marvel.com:443/v1/public/characters?limit=100&apikey=460907aefe60b16760ad2bf3c9f220c2")
            const json = data.json()
            setResult(await json)
        }

        const res = fetchData().catch(console.error)
    }

    useEffect(() => {
        async function init(){
            await apiMarvel()
            console.log("useEffect: ", await result)
        }
        init()
    }, [])

    const Grid = () => {
        const listItems = result.data.results.map((elem) => <Element key={elem.id} heroName={elem.name} src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`} id={elem.id} description={elem.description}></Element>)
        return(
            <>
                <p className="subtitle">BUSCADOR</p>
                <input className="input-search" type="text" placeholder="Iron Man"/>
                <div className="container-heroes">
                    {listItems}
                </div>
            </>
        )
    }

    return(
        <div className="container-search">
            

            {
                result != null ? <Grid></Grid> : <div className="loading">CARGANDO ....</div>
            }

        </div>
    )
}