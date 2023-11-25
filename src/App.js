import Header from "./components/Header";
import styled from "styled-components";
import SearchComponent from "./components/SearchComponent";
import LastReleases from "./components/LastReleases";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589 100%);
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <SearchComponent />
      <LastReleases />
    </AppContainer>
  );
}

export default App;
