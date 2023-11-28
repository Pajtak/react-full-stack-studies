import { useEffect, useState } from "react";
import styled from "styled-components";
import { deleteFavorite, getFavorites } from "../../services/favoritesService";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589 100%);
`;

const ResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Results = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  cursor: pointer;
  text-align: center;
  padding: 0 100px;
  p {
    width: 200px;
    color: #fff;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`;

const Title = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
  padding-top: 35px;
`;

function Favorites() {
  const [useFavorites, setUseFavorites] = useState([]);

  async function fetchFavorites() {
    const favoritesAPI = await getFavorites();
    setUseFavorites(favoritesAPI);
  }

  async function delFavorite(id) {
    await deleteFavorite(id);
    await fetchFavorites();
  }

  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <AppContainer>
      {useFavorites.map((favorite) => (
        <ResultsContainer>
          <Results
            onClick={() => {
              delFavorite(favorite.id);
            }}
          >
            <Title>{favorite.nome}</Title>
          </Results>
        </ResultsContainer>
      ))}
    </AppContainer>
  );
}

export default Favorites;
