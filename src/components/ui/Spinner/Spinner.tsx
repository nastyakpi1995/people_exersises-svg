import React, { FunctionComponent } from 'react';
import styled, { keyframes } from 'styled-components';

interface OwnProps {}
type Props = OwnProps;

const Spinner: FunctionComponent<Props> = () => {
  return (
    <Container>
      <SpinnerBackground />
      <SpinnerStyled>
        <Loader />
      </SpinnerStyled>
    </Container>
  );
};

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`;

const SpinnerBackground = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  background: lightgrey;
  opacity: 0.5;
  z-index: 10;
`;

const SpinnerStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = styled.div`
  border: 0.4em solid rgba(0, 0, 0, 0.1);
  border-top: 0.4em solid #767676;
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
  animation: ${spin} 0.6s linear infinite;
`;

export default Spinner;
