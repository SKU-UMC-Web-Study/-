import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Spinner from './Spinner';

const Main = styled.main`
  width: 100%; 
`;

const Welcome = styled.div`
  text-align: center;
  background-color: black;
  color: white;
  font-size: 25px;
  padding: 150px;
  text-align: center;
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
  padding: 250px;
  font-size: 40px;
`;

const MainPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      
      setIsLoading(false);
    }, 2000); 

  }, []);

  if (isLoading) {
    return <Spinner />; 
  }
  return (
    <Main>
      <Welcome>환영합니다</Welcome>

      <Find>
        🎥Find your movies!
        <Search>
          <input type="text" placeholder="" />
        </Search>
      </Find>
    </Main>
  );
};

export default MainPage;