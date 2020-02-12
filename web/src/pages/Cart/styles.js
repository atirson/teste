import styled from 'styled-components';

export const Cheap = styled.div`
  h1 {
    text-align: center;
    padding-bottom: 20px;
    border-bottom: 1px solid #000;
  }
`;

export const CartList = styled.div`
  display: flex;
  flex-direction: column;

  img {
    margin: 15px 0 0 15px;
    width: 250px;
    height: 250px;
    padding: 5px;
    border: 1px solid #ccc;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProductImage = styled.div``;

export const Info = styled.div`
  margin: 20px 0px 0px 15px;

  h3 {
    margin-bottom: 10px;
  }

  p {
    color: #333;
    font-size: 18px;
    margin-bottom: 10px;
  }

  strong {
    font-size: 22px;
  }
`;

export const Total = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  padding: 30px 0;

  p,
  strong {
    font-size: 22px;
  }
`;
