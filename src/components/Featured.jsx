"use client";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 30px;
`;

const Title = styled.h1`
  font-size: 96px;
  font-weight: 300;

  @media screen and (max-width: 1280px) {
    font-size: 72px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 64px;
  }

  @media screen and (max-width: 768px) {
    font-size: 48px;
  }

  @media screen and (max-width: 640px) {
    font-size: 36px;
  }
`;

const Post = styled.div`
  margin-top: 60px;
  display: flex;
  align-items: center;
  gap: 50px;
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 500px;
  position: relative;

  img {
    object-fit: cover;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    font-size: 40px;
  }

  p {
    font-size: 20px;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.softTextColor};
  }

  button {
    padding: 16px 20px;
    border: none;
    border-radius: 5px;
    width: max-content;
  }
`;

export default function Featured() {
  return (
    <Container>
      <Title>
        <b>Hey, I&#39;m here!</b> Discovery my stories and creative ideias.
      </Title>
      <Post>
        <ImgContainer>
          <Image src="/p1.jpeg" alt="" fill />
        </ImgContainer>
        <TextContainer>
          <h1>Lorem ipsum dolor sit amet alim consectetur adipisicing elit.</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>
          <button>Read More</button>
        </TextContainer>
      </Post>
    </Container>
  );
}
