import Input from "../Input";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getBooks } from "../../services/booksService";
import { postFavorite } from "../../services/favoritesService";

const SearchContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: auto;
  width: 100%;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const Subtitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const Result = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  p {
    width: 200px;
  }
  img {
    width: 120px;
    height: 150px;
  }
  &:hover {
    border: 1px solid white;
  }
`;

function SearchComponent() {
  const [useSearchedBooks, setUseSearchedBooks] = useState([]);
  const [useBooks, setUseBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks() {
    const booksAPI = await getBooks();
    setUseBooks(booksAPI);
  }

  async function insertFavorite(id) {
    await postFavorite(id);
  }

  return (
    <SearchContainer>
      <Title>Já sabe por onde começar?</Title>
      <Subtitle>Encontre seu livro em nossa estante!</Subtitle>
      <Input
        placeholder="Escreva sua próxima leitura"
        onBlur={(event) => {
          const inputText = event.target.value;
          const searchResult = useBooks.filter((book) =>
            book.nome.includes(inputText)
          );
          setUseSearchedBooks(searchResult);
        }}
      />
      {useSearchedBooks.map((book) => (
        <Result onClick={() => insertFavorite(book.id)}>
          <p>{book.nome}</p>
          <img src={book.src} alt="Foto da capa do Livro"></img>
        </Result>
      ))}
    </SearchContainer>
  );
}

export default SearchComponent;
