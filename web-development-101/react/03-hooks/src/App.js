import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Container from "./components/Container";
import TeamSelection from "./components/TeamSelection";
import StoreProvider from './utils/store';

const App = () => {
  return (
    <StoreProvider>
      <Navbar />
      <TeamSelection />
      <Search />
      <Container />
    </StoreProvider>
  )
}

export default App;