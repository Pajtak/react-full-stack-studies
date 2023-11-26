import styled from "styled-components";
import SearchComponent from "../../components/SearchComponent/index";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589 100%);
`;

function Favorites() {
  return (
    <AppContainer>
      <SearchComponent />
    </AppContainer>
  );
}

export default Favorites;
