import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SearchWrapper = styled.div`
  height: 5em;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media only screen and (max-width: 600px) {
    height: 7em;
    width: 100%;
    flex-direction: column;
  }
`;

export const SearchInputWrapper = styled.div`
  width: 50%;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const ShareButton = styled.button`
  width: 40%;
  background-color: #dde6d5;
  padding: 0.5em;
  border-radius: 50px;
  color: #667b68;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const CatWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
`;

export const CatLoaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100;
  justify-content: center;
  align-items: center;
`;

export const CatCard = styled.div`
  display: flex;
  width: 12em;
  height: 15em;
  margin: 10px;
  justify-content: space-evenly;
  object-fit: contain;

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 25em;
  }
`;

export const CatImage = styled.img`
  object-fit: cover;
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 25em;
  }
`;
