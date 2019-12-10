import styled from 'styled-components'

export const ButtonContainer = styled.button`
    padding: 5px 10px;
    font-size: 1.4rem;
    font-weight: bold;
    text-transform: capitalize;
    background: transparent;
    border: 0.05rem var(--lightBlue) solid;
    border-color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    border-radius: 7px;
    color: var(--lightBlue);
    color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    transition: 0.5s ease-in-out;
    margin: 5px;
   &:hover {
       background: var(--lightBlue);
       background: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
       color: var(--mainBlue);
   }
   &:focus {
       outline: none;
   }
`
