import styled from "styled-components";

export const Slide = styled.div`
  display: flex;
  justify-content: center;

  margin: 94px 160px 92px 160px;

  > div {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 476px;
    height: 360px;
  }
`

export const SlideText = styled.div`
  margin-right: 56px;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;

    color: ${(props) => props.theme.title};
  }
  p {
    margin-top: 1rem;
    margin-bottom: 4.125rem;
    font-size: 1.25rem;

    color: ${(props) => props.theme.subtitle};
  }
`

export const SlideBenefits = styled.div`
  display: flex;
  flex-flow: row wrap;
  column-gap: 2.5rem;
  row-gap: 1.25rem;
  max-width: 567px;

  div:nth-child(1),
  div:nth-child(3) {
    flex-basis: 231px;
  }

  div:nth-of-type(1) {
    span {
      background: ${(props) => props.theme["yellow-800"]};
    }
  }

  div:nth-of-type(2) {
    span {
      background: ${(props) => props.theme.text};
    }
  }
  div:nth-of-type(3) {
    span {
      background: ${(props) => props.theme["yellow-400"]};
    }
  }

  div:nth-of-type(4) {
    span {
      background: ${(props) => props.theme["purple-400"]};
    }
  }
  
  div {   
    display: flex;
    align-items: center;
    
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 0.75rem;
      
      width: 32px;
      height: 32px;
      
      border-radius: 100%;
      color: ${(props) => props.theme.background};
    }
    
    p {
      font-size: 1rem;
      color: ${(props) => props.theme.text};
    }
  }
`