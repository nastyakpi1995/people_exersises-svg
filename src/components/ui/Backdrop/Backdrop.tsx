import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

interface OwnProps {
  show: boolean;
  onHandleModalClose: Function;
}

type Props = OwnProps;

const Backdrop: FunctionComponent<Props> = ({ show, onHandleModalClose }) =>
  show ? <Container onClick={() => onHandleModalClose()} /> : null;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default Backdrop;
