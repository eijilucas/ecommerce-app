import { createContext, useState } from "react"

export const AppContext = createContext();

export const AppProvider = ( {children} ) => {

    const [searchValue, setSearchValue] = useState("")

    const value = {
        searchValue,
        setSearchValue
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

