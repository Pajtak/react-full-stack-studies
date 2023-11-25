import RecomendationCard from "../SearchComponent/RecomendationCard";
import { Title } from "../TitleComponent";
import { books } from "./data";
import styled from "styled-components";
import livro2 from "../../assets/livro2.png";

const LastReleasesContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const NewBooksContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  cursor: pointer;
  img {
    width: 100px;
  }
`;
function LastReleases() {
  return (
    <LastReleasesContainer>
      <Title fontSize="36px">Ultimos Lançamentos</Title>
      {books.map((book) => (
        <NewBooksContainer>
          <img src={book.src} alt="" />
        </NewBooksContainer>
      ))}
      <RecomendationCard
        title="Talvez você se interesse por"
        subtitle="Angular 11"
        desc="Construindo uma aplicação integrada com Angular 11"
        img={livro2}
      />
    </LastReleasesContainer>
  );
}

export default LastReleases;
