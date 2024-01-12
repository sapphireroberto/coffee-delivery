import styled from "styled-components";


export const Content = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0 10rem 9.8125rem 10rem;

  > div {
    max-width: 1120px;
    margin: 0 auto;

    header {
      margin-bottom: 2.125rem;
  
      h1 {
        font-size: 2rem;
        color: ${(props) => props.theme.subtitle};
        font-family: 'Baloo 2', sans-serif;
        font-weight: 800;
      }
    }
  }

`

export const ProductCatalog = styled.div`
  display: flex;
  flex-flow: row wrap;
  
  padding: 0 3rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;


    width: 256px;
    height: calc(310px + 20px);
    img {
      width: 120px;
      height: 120px;

      margin-bottom: 0.75rem;
    }

    div:nth-of-type(1) {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 4px;

      margin-bottom: 1rem;

      span {
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        
        padding: 0.25rem 0.4rem 0.25rem 0.4rem;
  
        font-size: .625rem;
        font-weight: 700;
        text-transform: uppercase;
        text-align: center;
        font-family: 'Roboto', sans-serif;
        color: ${(props) => props.theme["yellow-800"]};
        background: ${(props) => props.theme["yellow-100"]};
  
        border-radius: 100px;
      }
    }

    h1 {
      margin-bottom: 8px;

      font-size: 1.25rem;
      color: ${(props) => props.theme.subtitle};
      font-family: 'Baloo 2', sans-serif;
      font-weight: 700;
    }

    div:nth-of-type(2) {
      display: flex;
      margin-bottom: 33px;
      
      max-width: 216px;

      > p {
        color: ${(props) => props.theme.label};        
        text-align: center;
        font-size: .875rem;
        font-family: 'Roboto', sans-serif;
      }
    }


    div:nth-of-type(3){
      display: flex;
      flex-direction: row;

      p {
        color: ${(props) => props.theme.text};
        font-size: 1.5rem;
        font-weight: 700;
        font-family: 'Baloo 2', sans-serif;
        
        span {
          font-size: 0.75rem;
          font-weight: 400;
          font-family: 'Roboto', sans-serif;
        }
      }

      input[type=number] {
        width: 72px;
        height: 38px;

        margin: 0 8px 0 23px;

        border: 0;
        border-radius: 6px;

        background: ${(props) => props.theme.button};
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        /* -webkit-appearance: none; */
      }

      i {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 38px;
        height: 38px;

        color: ${(props) => props.theme.card};
        background: ${(props) => props.theme["purple-800"]};
        border-radius: 6px;
      }
    }
  }

`