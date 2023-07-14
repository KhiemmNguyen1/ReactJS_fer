import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";
import { sliderFeedback } from "../../data/data-feedback";
// import { mobile } from "../responsive"; ${mobile({ display: "none" })}

const Container = styled.div`
  width: 1150px;
  height: 70vh;
  display: flex;
  position: relative;
  overflow: hidden;
  //   background-color: red;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgba(245, 125, 13, 0.486);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "-20px"};
  right: ${(props) => props.direction === "right" && "-20px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  //   justify-content: center;
  padding: 50px 0 50px 0;
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -84.2}vw);
`;

const Slide = styled.div`
  width: 1050px;
  border-radius: 30px;
  margin: 0 50px 0 50px;
  background-color: #fff;
  display: flex;
  padding: 20px;
  box-shadow: 1px 5px 15px 15px rgba(0, 0, 0, 0.2);
`;

// const ImgContainer = styled.div`
//   margin-top: 50px;
//   margin-left: 30px;
//   height: 100%;
//   flex: 1;
//   border-radius: 30px;
// `;

const Image = styled.img`
  margin: 40px 0 0 30px;
  width: 200px;
  height: 200px;
  border-radius: 30px;
`;

const InfoContainer = styled.div`
  padding: 20px 10px 30px 50px;
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: bold;
  color: rgb(245, 125, 13);
  margin-bottom: 25px;
`;

const Desc = styled.div`
  color: #00000093;
  line-height: 28px;
  margin: 0 10px 30px;
  font-size: 20px;
`;

const Name = styled.div`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 17px;
`;
const Crear = styled.div`
  font-size: 17px;
`;

// const Button = styled.button`
//   padding: 10px;
//   font-size: 20px;
//   background-color: transparent;
//   cursor: pointer;
// `;

const SliderFeedback = () => {
  const sliderLength = sliderFeedback.length;
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderLength - 1);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow
        direction="left"
        onClick={() => handleClick("left")}
        style={{ marginLeft: "30px" }}
      >
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderFeedback.map((item) => (
          <Slide key={item.id}>
            <Image src={item.img} />
            <InfoContainer>
              <Title>Đánh giá của sinh viên</Title>
              <Desc>{item.desc}</Desc>
              <Name>{item.name}</Name>
              <Crear>{item.crear}</Crear>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow
        direction="right"
        onClick={() => handleClick("right")}
        style={{ marginRight: "30px" }}
      >
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default SliderFeedback;
