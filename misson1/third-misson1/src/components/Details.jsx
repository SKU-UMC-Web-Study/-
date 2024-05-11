import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 139, 0.6); /* 남색 배경색 및 투명도 설정 */
  background-image: ${({ movie }) =>
    movie && movie.poster_path
      ? `url('https://image.tmdb.org/t/p/original${movie.poster_path}')`
      : ""};
  background-blend-mode: overlay; /* 이미지와 배경색을 오버레이로 섞음 */
  background-size: cover; /* 이미지를 컨테이너 크기에 맞게 조절 */
  background-position: center; /* 이미지를 중앙에 배치 */
`;

const Img = styled.div`
margin: 550px;
margin-right: 50px;
  
`;

const MovieOverview = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  width: 50%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  color:white;
    
  p {
    font-weight: bold;
  }
`;

const Details = () => {
  const { movieId } = useParams(); // URL 경로에서 movieId를 가져옵니다.
  const [movie, setMovie] = useState(null);
  const API_KEY = "api-key"; // API 키를 입력해야 합니다

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=ko-KR`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error(
          "영화 상세 정보를 가져오는 데 문제가 발생했습니다:",
          error
        );
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  if (!movie) {
    return <p>로딩 중...</p>;
  }

  const renderStars = (voteAverage) => {
    const stars = Math.floor(voteAverage);
    return "⭐️".repeat(stars);
  };

  return (
    <Container movie={movie}>
      <Img>
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
        />
      </Img>
      <Content>
        <h1>{movie.title}</h1>
        <p>평점 {renderStars(movie.vote_average)} </p>
        <p>개봉일 {movie.release_date}</p>
        <p>줄거리</p>
        <MovieOverview>
          {movie.overview ? movie.overview : "TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다."}
        </MovieOverview>
      </Content>
    </Container>
  );
};

export default Details;
