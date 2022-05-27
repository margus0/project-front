import styled from 'styled-components';

export const StyledLink = styled.a`
  text-decoration: none;
  color: #ffffff;
  font-weight: bold;
  font-size: large;

  &:hover {
    box-shadow: 0px -5px 10px 10px #6c11b7;
    background-color: #6c11b7;
  }
  &:focus {
    box-shadow: 0px -5px 10px 10px #6c11b7;
    background-color: #6c11b7;
  }
`;

export const DropNav = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 14rem;
  top: 1rem;
`;

export const DropList = styled.a`
  color: white;
  list-style: none;
  font-size: 0.75rem;
  line-height: 1.5rem;
  cursor: pointer;

  :hover {
    color: #6c11b7;
    transition: ease 0.3s;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  gap: 6rem;
  background-color: '#6C11B7';
`;