import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Backdrop from '../Backdrop/Backdrop';

interface OwnProps {
  show: boolean;
  onHandleModalClose: Function;
  children: React.ReactChild;
}
type Props = OwnProps;

const Modal: FunctionComponent<Props> = ({
  show,
  children,
  onHandleModalClose,
}) => {
  return (
    <>
      <Backdrop show={show} onHandleModalClose={onHandleModalClose} />
      <Container
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0',
        }}
      >
        {children}
      </Container>
    </>
  );
};

const Container = styled.div`
  left: 0;
  top: 0;
  position: fixed;
  z-index: 500;
  background-color: #ebe9e7;
  width: 564px;
  height: 616px;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  box-sizing: border-box;
  transition: all 0.3s ease-out;

  @media (min-width: 600px) {
    .Modal {
      width: 500px;
      left: calc(50% - 250px);
    }
    left: calc(50% - 205px);
    top: calc(50% - 315px);
    width: 50%;
  }

  @media (min-width: 1200px) {
    left: 30%;
    top: 12%;
  }
`;

export default Modal;
