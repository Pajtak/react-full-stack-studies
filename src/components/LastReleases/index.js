import { books } from "./data";
import styled from "styled-components";

const LastReleasesContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  width: 100%;
  padding: 30px 0;
  background-color: #fff;
  color: #eb9b00;
  font-size: 36px;
  text-align: center;
  margin: 0;
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
function LastReleases(params) {
  return (
    <LastReleasesContainer>
      <Title>Ultimos Lançamentos</Title>
      {books.map((book) => (
        <NewBooksContainer>
          <img src={book.src} alt="" />
        </NewBooksContainer>
      ))}
    </LastReleasesContainer>
  );
}

export default LastReleases;
