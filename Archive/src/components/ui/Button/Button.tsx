import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

interface OwnProps {
  text: string;
  onHandleClick?: Function;
}
type Props = OwnProps;

const Button: FunctionComponent<Props> = ({ text, onHandleClick }) => {
  return (
    <Container onClick={() => onHandleClick && onHandleClick()}>
      {text}
    </Container>
  );
};

const Container = styled.button`
  background: #0000ff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  font-size: 24px;
  line-height: 28px;
  border: none;
  color: white;
  width: 178px;
  height: 47px;
  cursor: pointer;
`;

export default Button;
