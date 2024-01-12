import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 6.5rem;

  nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    div {
      padding: 8px;
      border-radius: 6px;

      a {
        display: flex;
        text-decoration: none;
      }
    }

  }

`

export const Locator = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme["purple-400"]};
  background: ${(props) => props.theme["purble-100"]};

  a{
    font-size: 0.875rem;
    color: ${(props) => props.theme["purple-800"]};

    border-radius: 0.5rem;
  }
`

export const Cart = styled.div`
position: relative;
  background: ${(props) => props.theme["yellow-100"]};

  span{
    display: flex;
    justify-content: center;
    align-items: center;

    width: 1.25em;
    height: 1.25em;
    
    position: absolute;
    right: calc(0% - 0.521875rem);
    top: calc(0% - 0.5rem);
    
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme["yellow-800"]};
    font-weight: bold;

    border-radius: 100%;
  }

  a {
    display: flex;
    
    color: ${(props) => props.theme["yellow-800"]};
  }
`