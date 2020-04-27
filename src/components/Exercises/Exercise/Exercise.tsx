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
          <ModalImg>
            <Img src={image_url} alt={title} />
          </ModalImg>
          <WrapperText>{comments}</WrapperText>
        </Content>
        <p>{information}</p>
        <Button text="Close" onHandleClick={onHandleModalClose} />
      </ModalBox>
    );
  }

  return (
    <Container
      onClick={() => onHandleChooseExercise && onHandleChooseExercise(id)}
    >
      <ImgWrapper>
        <Img src={image_url} alt={title} />
      </ImgWrapper>
      <TextWrapper>
        <ContainerTitle>{title}</ContainerTitle>
        <WrapperText>{sets_reps}</WrapperText>
      </TextWrapper>
    </Container>
  );
};

const ModalBox = styled.div`
  max-width: 564px;
  height: 616px;
  position: relative;
  margin: 31px 43px 0 35px;

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

const TextWrapper = styled.div`
  width: 35%;
`;

const ModalImg = styled.div`
  width: 283px;
  height: 196px;
  display: flex;
  margin-right: 4px;
`;

const ImgWrapper = styled.div`
  height: 100%;
  margin-right: 11px;

  @media (min-width: 801px) {
    width: 70%;
    height: 100%;
  }

  @media (min-height: 601px) {
    width: 70%;
    height: 121px;
  }
`;

const Content = styled.div`
  display: flex;
  margin-bottom: 14px;
`;

const WrapperText = styled.p`
  font-weight: 300;
  font-size: 13px;
  line-height: 18px;
  color: gray;
  letter-spacing: 0.545455px;
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
  padding: 15px 30px;
  display: flex;
  max-height: 95px;
`;

const ContainerTitle = styled.div`
  font-weight: 500;
  font-size: 17px;
  line-height: 17px;
  letter-spacing: 0.5px;
`;

const Img = styled.img`
  overflow: hidden;
  box-sizing: border-box;
  object-fit: cover;
  width: 100%;
  height: 80%;
  position: relative;
  display: block;
`;

export default Exercise;
