import { GlobalStyles } from "./styles/GlobalStayles";
import { Header } from "./components/Header";
import { Orders } from "./components/Orders";


export function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Orders/>
    </>
  );
}

export default App;
