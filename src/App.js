import Navbar from "./components/Header/Navbar";
import Dashboard from "./components/Body/Dashboard";
import Footer from "./components/Footer/Footer";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blueGrey, green, red } from "@mui/material/colors";

import "./App.css";

const theme = createTheme({
  palette: {
    info: {
      main: "#4d636f",
    },
    action: {
      main: blueGrey[50],
    },
    success: {
      main: green[300],
    },
    error: {
      main: red[300],
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="header">
          <Navbar />
        </div>
        <div className="pt-5 bg-smoke">
          <Dashboard />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
