import { BrowserRouter, Route, Routes } from "react-router-dom";
import TableRooms from "./components/TableRooms/TableRooms";
import TableBookings from "./components/TableBookings/TableBookings";
import Form from "./components/Form/Form";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import ChangeState from "./components/ChangeState/ChangeState";
import Footer from "./components/Footer/Footer";

//Importo los archivos para implementar el Modo Oscuro
import { ThemeProvider } from "styled-components";
import { themes } from "./styles/themes";
import { useDarkMode } from "./ModeDarkLight/DarkMode";

function App() {
  
  const [theme, setTheme] = useDarkMode();
  const themeMode = theme === "light" ? "light" : "dark";

  return (
      <BrowserRouter>
        <ThemeProvider theme={themes[themeMode]}>
          <NavBar theme={theme} setTheme={setTheme}/>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/rooms" element={<TableRooms />}></Route>
            <Route path="/bookings" element={<TableBookings />}></Route>
            <Route path="/form" element={<Form />}></Route>
            <Route path="/formState/:id" element={<ChangeState />}></Route>
          </Routes>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
  );
}

export default App;
