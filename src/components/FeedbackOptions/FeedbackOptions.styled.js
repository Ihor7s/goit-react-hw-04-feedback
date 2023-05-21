import styled from '@emotion/styled';

export const Box = styled.div`
  margin-bottom: 35px;
  display: flex;
  gap: 30px;
`;

export const Button = styled.button`
  display: block;
  padding: 10px 25px;
  border-radius: 10px;
  background-color: #fcba03;
  border: none;
  font-size: 24px;
  color: white;
  font-weight: lighter;
  outline: transparent;
  transform: scale(1);
  transition: background-color 250ms linear, transform 250ms linear;

  &:hover {
    background-color: #999281;
    transform: scale(1.10)
  }
`;