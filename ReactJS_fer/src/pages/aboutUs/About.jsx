import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 150px;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1.5;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 600;
`;

const Desc = styled.p`
  font-size: 18px;
  margin: 20px 0px;
`;



const About = () => {
    return (
        <Container>
            <Wrapper>

                <ImgContainer>
                    <Image src="assets/img/story/story.png" alt="" />
                </ImgContainer>

                <InfoContainer>
                    <Title>Câu chuyện về Student Deal</Title>

                    <Desc>
                        Student Deal là nơi cung cấp các khoản giảm giá đặc biệt dành cho sinh viên.
                        Chúng tôi có nhiều loại voucher và ưu đãi cho các mặt hàng và dịch vụ khác nhau, từ điện thoại di động đến thực phẩm.
                        Với Student Deal, bạn có thể tiết kiệm tiền một cách đơn giản và dễ dàng. Tìm kiếm các ưu đãi của chúng tôi để giúp cuộc sống sinh viên của bạn trở nên dễ dàng hơn.
                    </Desc>

                </InfoContainer>
            </Wrapper>
        </Container>
    )
}

export default About