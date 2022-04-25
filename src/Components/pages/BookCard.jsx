import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const Flex = styled.div`
  //  add required style
  border: 1px solid black;
  padding: 10px;
  border-radius: 5px;
  margin: 10px;
`;
export const BookCard = (props) => {
  const { id, title, isbn, thumbnailUrl } = props.item;

  return (
    <>
      <Link to={`/books/${id}`}>
        <Flex>
          <img src={thumbnailUrl} alt={title} height='200px' width={'200px'} />
          <h3>{title}</h3>
          <h4>{isbn}</h4>
        </Flex>
      </Link>
    </>
  );
};
