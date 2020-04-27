import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Button from '../../ui/Button/Button';

interface OwnProps {
  ex: {
    id: number;
    title: string;
    app_title: string;
    information: string;
    sets_reps: string;
    comments: string;
    image_url: string;
  };
  onHandleChooseExercise?: Function;
  onHandleModalClose?: Function;
  inModal: boolean;
}
type Props = OwnProps;

const Exercise: FunctionComponent<Props> = ({
  ex: { id, title, information, sets_reps, comments, image_url },
  onHandleChooseExercise,
  onHandleModalClose,
  inModal,
}) => {
  if (inModal) {
    return (
      <ModalBox>
        <MainText>{title}</MainText>
        <Content>
          <WrapperImg>
            <Img src={image_url} alt={title} />
          </WrapperImg>
          <span>{comments}</span>
        </Content>
        <p>{information}</p>
        <Button text="Close" onHandleClick={onHandleModalClose}>
          Close
        </Button>
      </ModalBox>
    );
  }

  return (
    <Container
      onClick={() => onHandleChooseExercise && onHandleChooseExercise(id)}
    >
      <Img src={image_url} alt={title} />
      <div>
        <ContainerTitle>{title}</ContainerTitle>
        <p>{sets_reps}</p>
      </div>
    </Container>
  );
};

const ModalBox = styled.div`
  max-width: 564px;
  height: 616px;
  position: relative;
  margin: 31px 43px 0 35px;

  & p {
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    color: gray;
    letter-spacing: 0.545455px;
  }

  & img {
    width: 400px;
  }

  & button {
    position: absolute;
    bottom: 8%;
    left: 33%;
    height: 39px;
  }
`;

const WrapperImg = styled.div`
  width: 283px;
  height: 196px;
  display: flex;
  margin-right: 4px;

  & img {
    overflow: hidden;
    box-sizing: border-box;
    object-fit: cover;
    max-width: 100%;
    max-height: 100%;
    position: relative;
    display: block;
  }
`;

const Content = styled.div`
  display: flex;
  margin-bottom: 14px;

  & span {
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.545455px;
  }
`;

const MainText = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 17px;
  margin-bottom: 30px;
`;

const Container = styled.div`
  cursor: pointer;
  background: #ebe9e7;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 18px 27px;
  display: flex;
  align-items: end;
  height: 90px;
  width: initial;

  @media (min-width: 801px) {
    height: 127px;
  }
`;

const ContainerTitle = styled.div`
  font-weight: 500;
  font-size: 17px;
  line-height: 17px;
  letter-spacing: 0.5px;
`;

const Img = styled.img`
  max-width: 163px;
  max-height: 90px;
  margin-right: 18px;
`;

export default Exercise;
