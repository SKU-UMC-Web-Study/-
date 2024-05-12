import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Spinner from "./Spinner";

const Main = styled.main`
  width: 100%;
  overflow-y: auto; 
  max-height: calc(
    100vh - 10px
  ); 
`;

const Welcome = styled.div`
  text-align: center;
  background-color: black;
  color: white;
  font-size: 25px;
  padding: 150px;
`;

const Search = styled.div`
  input {
    border-radius: 20px;
    margin-top: 20px;
    padding: 2px 20px;
  }
`;

const Find = styled.div`
  color: white;
  text-align: center;
  background-color: gray;
  padding: 50px;
  font-size: 40px;
`;

const MovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  background-color: navy;
  padding: 20px;
`;

const MovieItem = styled.div`
  width: 12%;
  border: solid  px ;
  padding: 10px;
  background-color: black; 
  border-radius: 10px;
  color:white;
  h3{
    font-size:14px;
   
  }

  `;

const MainPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleSearch = async () => {
    if (searchTerm.trim() === "") return;
    const apiKey = "api-key";
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`;
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setSearchResult(data.results);
      } else {
        console.error("검색에 실패했습니다.");
      }
    } catch (error) {
      console.error("검색 중 오류 발생:", error);
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Main>
      <Welcome>환영합니다</Welcome>

      <Find>
        🎥 Find your movies!
        <Search>
          <input
            type="text"
            placeholder="영화를 검색하세요"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>검색</button>
        </Search>
      </Find>

      <MovieList>
        {searchResult.map((movie) => (
          <MovieItem key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3> 
            <p>⭐️: {movie.vote_average.toFixed(1)}</p>
          </MovieItem>
        ))}
      </MovieList>
    </Main>
  );
};

export default MainPage;
