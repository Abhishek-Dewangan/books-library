import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../context/AuthContext';

const Nav = styled.div`
  margin: 10px;
  background-color: pink;
  padding: 15px;
  font-size: 15px;
`;
const LinkDiv = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  font-weight: bold;
  font-family: system-ui;
  text-decoration: none;
`;

export const Navbar = () => {
  const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully

  return (
    <>
      <Nav>
        <LinkDiv>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/books'>Books</Link>
          {token ? (
            <Link to='/logout'>Logout</Link>
          ) : (
            <Link to='/login'>Login</Link>
          )}
        </LinkDiv>
      </Nav>
    </>
  );
};
