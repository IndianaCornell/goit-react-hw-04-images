import styled from 'styled-components';

export const SearchFormStyled = styled.form`
  display: flex;
  width: 600px;
  margin: 0 auto;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const SearchInputStyled = styled.input`
  height: 40px;
  flex-grow: 1;
  font-size: 18px;
  padding-left: 15px;
  border-radius: 5px 0 0 5px;
`;

export const SearchButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #fff;
  border-radius: 0 5px 5px 0;
  padding: 8px 20px;
  cursor: pointer;
`;

export const SearchBox = styled.div`
  background-color: rgb(3, 47, 68, 0.3);

  width: 100%;
  border-radius: 10px;
`;
