import { createContext, useState } from "react"

export const DataContext = createContext()

const dataFixed = {
    id: null,
    heroName: null,
    src: null,
    description: null
}

const DataProvider = ({ children }) => {

    const [selected, setSelected] = useState(dataFixed)

    return(
        <DataContext.Provider value={{selected, setSelected}}>
            { children }
        </DataContext.Provider>
    )
}

export default DataProvider