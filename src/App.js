import Header from "./components/Header/header";
import NavigationBar from "./components/NavigationBar/navigation-bar";
import Products from "./components/Products/products";

import { AppProvider } from "./contexts/AppContext";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Header/>
        <NavigationBar/>
        <Products/>
      </AppProvider>
    </div>
  );
}

export default App;
