import { createContext, useState } from "react"

export const AppContext = createContext();

export const AppProvider = ( {children} ) => {

    const [products, setProducts] = useState([])

    const value = {
        products,
        setProducts
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

