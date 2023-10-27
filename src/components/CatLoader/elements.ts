import styled from 'styled-components';

export const Cat = styled.div<{ $catimage: string }>`
  width: 30px;
  height: 30px;
  display: flex;
  content: url(${(props) => props.$catimage});
  object-fit: cover;
  position: relative;
  left: 0px;
  top: 0px;
  animation-name: cat-spinner;
  animation-duration: 4s;
  animation-iteration-count: infinite;

  @keyframes cat-spinner {
    0% {
      content: url(${(props) => props.$catimage});
      left: 0;
    }
    12.5% {
      content: url(${(props) => props.$catimage});
      left: 2em;
      top: 0.5em;
    }
    25% {
      content: url(${(props) => props.$catimage});
      left: 4em;
      top: 0;
    }
    37.5% {
      content: url(${(props) => props.$catimage});
      left: 6em;
      top: 0.5em;
    }
    50% {
      content: url(${(props) => props.$catimage});
      left: 8em;
      top: 0;
    }
    62.5% {
      content: url(${(props) => props.$catimage});
      left: 6em;
      top: 0.5em;
    }
    75% {
      content: url(${(props) => props.$catimage});
      left: 4em;
      top: 0;
    }
    87.5% {
      content: url(${(props) => props.$catimage});
      left: 2em;
      top: 0.5em;
    }
    100% {
      content: url(${(props) => props.$catimage});
      left: 0;
      top: 0;
    }
  }
`;

export const CatWrapper = styled.div`
  width: 8em;
  height: 4em;
`;
