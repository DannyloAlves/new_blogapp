"use client";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 35px;
  margin-bottom: 60px;

  a{
    display: flex;
    align-items: center;
    gap: 20px;
  };
`;

const ImgContainer = styled.div`
  flex: 1;
  aspect-ratio: 1/1;
  position: relative;

  img{
    border-radius: 50%;
    border: 3px solid lightgray;
    object-fit: cover;
  };
`;

const TextContainer = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  gap: 5px;

  h3{
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.softTextColor};
  };
`;

const Category = styled.span`
  padding: 3px 8px;
  border-radius: 10px;
  font-size: 12px;
  color: white;
  width: max-content;
`;

const Detail = styled.div`
  font-size: 12px;

  span:last-child{
    color: gray;
  };
`;

export default function MenuPosts({ withImage }) {
  return (
    <Items>
      <Link href="/">
        {withImage && (
          <ImgContainer>
            <Image src="/p1.jpeg" alt="" fill />
          </ImgContainer>
        )}
        <TextContainer>
          <Category style={{ backgroundColor: " #ff7857" }}>
            Travel
          </Category>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <Detail>
            <span>Jane Doe</span>
            <span> - 10.03.2024</span>
          </Detail>
        </TextContainer>
      </Link>
      <Link href="/">
        {withImage && (
          <ImgContainer>
            <Image src="/p1.jpeg" alt="" fill />
          </ImgContainer>
        )}
        <TextContainer>
          <Category style={{ backgroundColor: "#ffb14f" }}>
            Culture
          </Category>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <Detail>
            <span>Jane Doe</span>
            <span> - 10.03.2024</span>
          </Detail>
        </TextContainer>
      </Link>
      <Link href="/">
        {withImage && (
          <ImgContainer>
            <Image src="/p1.jpeg" alt="" fill />
          </ImgContainer>
        )}
        <TextContainer>
          <Category style={{ backgroundColor: "#7fb881" }}>
            Food
          </Category>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <Detail>
            <span>Jane Doe</span>
            <span> - 10.03.2024</span>
          </Detail>
        </TextContainer>
      </Link>
      <Link href="/">
        {withImage && (
          <ImgContainer>
            <Image src="/p1.jpeg" alt="" fill />
          </ImgContainer>
        )}
        <TextContainer>
          <Category style={{ backgroundColor: "#ff7887" }}>
            Fashion
          </Category>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <Detail>
            <span>Jane Doe</span>
            <span> - 10.03.2024</span>
          </Detail>
        </TextContainer>
      </Link>
    </Items>
  );
};
