import Cart from "./components/Cart/cart";
import Header from "./components/Header/header";
import Products from "./components/Products/products";

import { AppProvider } from "./contexts/AppContext";
import { AuthProvider } from "./contexts/AuthContext";
import RouteApp from "./routes/RouteApp";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AppProvider>
          <RouteApp />
          <Header />
          <Products />
          <Cart />
        </AppProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
