import Cart from "./components/Cart/cart";
import Header from "./components/Header/header";
import Products from "./components/Products/products";

import { AppProvider } from "./contexts/AppContext";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Header/>
        <Products/>
        <Cart/>
      </AppProvider>
    </div>
  );
}

export default App;
