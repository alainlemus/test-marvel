import { useState, useContext } from "react"
import { useEffect, useRef } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import Element from "./Element"


export default function Search(){

    const [result, setResult] = useState(null)
    const message = useRef('')

    const apiMarvel = async () => {
        
        const fetchData = async () => {
            const data = await fetch("https://gateway.marvel.com:443/v1/public/characters?limit=100&apikey=460907aefe60b16760ad2bf3c9f220c2")
            const json = await data.json()
            const jsonFilter = json.data.results
            setResult(await jsonFilter)
        }

        const res = fetchData().catch(console.error)
    }

    const cleanSearch = async () => {
        document.getElementById('input').value = ''
        document.getElementById('message').innerText = ''
        await apiMarvel()
    }

    const findHeroe = async (e) => {

        document.getElementById('message').innerText = ''

        console.log(e.target.value)
        e.target.value == '' ? await apiMarvel() : filter(e.target.value)
        
    }

    const filter = (search) => {
        let array = []
        let message = document.getElementById("message")
        message.innerText = ''
        result.filter((element) => {
            if(element.name.toString().toLowerCase().includes(search.toLowerCase())){
                array.push(element)
            }else{
                message.innerText = "No se encontraron coincidencias"
            }
        })
        const gramatic = array.length == 1 ? 'Se encontro '+array.length+' coincidencia' : 'Se encontraron '+array.length+' coincidencias'
        message.innerText = gramatic
        setResult(array)
        //setResult(array)
    }

    useEffect(() => {
        async function init(){
            await apiMarvel()
        }
        init()
    }, [])

    const Grid = () => {
        const listItems = result.map((elem) => <Element key={elem.id} heroName={elem.name} src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`} id={elem.id} description={elem.description}></Element>)
        return(
            <>
                <div className="container-heroes">
                    {listItems}
                </div>
            </>
        )
    }

    return(
        <div className="container-search">

                <p className="subtitle"><FontAwesomeIcon icon={faMagnifyingGlass} /> BUSCADOR  </p>
                <div className="container-input-search">
                    <input id="input" disabled={result != null ? false : true} className="input-search" type="text" placeholder="Escribe el nombre de tu personaje" onChange={findHeroe}/>
                    <FontAwesomeIcon icon={faCircleXmark} className="close-search" title="Borrar" onClick={cleanSearch}/>
                </div>
                <p className="message" id="message">{MessageChannel.current}</p>

            {
                result != null ? <Grid></Grid> : <div className="loading">CARGANDO ....</div>
            }

        </div>
    )
}