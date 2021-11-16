import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import Dashboard from "./components/Body/Dashboard";
function App() {
  return (
    <div>
      <Navbar />
      <div className="mt-5 pt-2">
        <Dashboard />
        <Footer />
      </div>
    </div>
  );
}

export default App;
