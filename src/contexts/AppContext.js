import { createContext, useState } from "react"

export const AppContext = createContext();

export const AppProvider = ( {children} ) => {

    const [products, setProducts] = useState([]);
    const [isCartVisible, setIsCartVisible] = useState(true);

    const value = {
        products,
        setProducts,
        isCartVisible,
        setIsCartVisible
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

