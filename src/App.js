import Cart from "./components/Cart/cart";
import Header from "./components/Header/header";
import Products from "./components/Products/products";

import { AppProvider } from "./contexts/AppContext";
import RouteApp from "./routes/RouteApp";

function App() {
  return (
    <div className="App">
      <AppProvider>
          <RouteApp/>
          <Header />
          <Products />
          <Cart />
      </AppProvider>
    </div>
  );
}

export default App;
