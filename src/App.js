
import { AppProvider } from "./contexts/AppContext";
import { AuthProvider } from "./contexts/AuthContext";
import RouteApp from "./routes/RouteApp";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AppProvider>
          <RouteApp />
        </AppProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
