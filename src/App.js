import Header from "./components/Header/header";
import NavigationBar from "./components/NavigationBar/navigation-bar";

import { AppProvider } from "./contexts/AppContext";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Header/>
        <NavigationBar/>
      </AppProvider>
    </div>
  );
}

export default App;
