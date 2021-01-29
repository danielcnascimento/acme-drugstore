import "./App.css";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./theme";
import Route from "./Routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Route />
    </ThemeProvider>
  );
}

export default App;
