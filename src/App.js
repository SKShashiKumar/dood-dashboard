import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import Dashboard from "./components/Body/Dashboard";
import './App.css'
function App() {
  return (
    <div>
      <Navbar />
      <div className="mt-5 pt-2 bg-smoke">
        <Dashboard />
        <Footer />
      </div>
    </div>
  );
}

export default App;
