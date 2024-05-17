import "./App.css";
import LocationProvider from "./context/LocationProvider";
import AuthProvider from "./context/AuthProvider";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import RenderRoutes from "./components/RenderRoutes";

function App() {
  return (
    <div className="App">
      <LocationProvider>
        <AuthProvider>
          <Header className="header" />
          <div className="center">
            <Navigation className="navigation" />
            <RenderRoutes className="main" />
          </div>
        </AuthProvider>
      </LocationProvider>
    </div>
  );
}

export default App;
