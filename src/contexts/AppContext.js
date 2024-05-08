import { createContext, useState } from "react"

export const AppContext = createContext();

export const AppProvider = ( {children} ) => {

    const [products, setProducts] = useState([]);
    const [isCartVisible, setIsCartVisible] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const value = {
        products,
        setProducts,
        isCartVisible,
        setIsCartVisible,
        cartItems,
        setCartItems,
        loading,
        setLoading
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

