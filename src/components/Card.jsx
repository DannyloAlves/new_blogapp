"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    gap: 50px;
`;

const ImgContainer = styled.div`
    flex: 1;
    height: 350px;
    position: relative;

    img{
        object-fit: cover;
    };

    @media screen and (max-width: 1280px) {
        display: none;
    };
`;

const TextContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 30px;

    p{
        font-size: 18px;
        font-weight: 300;
        color: ${({ theme }) => theme.colors.softTextColor};
    };

    a:last-child{
        border-bottom: 1px solid crimson;
        width: max-content;
        padding: 2px 0;
    };
`;

const Detail = styled.div`
    span:first-child{
        color: gray;
    };

    span:last-child{
        color: crimson;
        font-weight: 500;
        text-transform: uppercase;
    };
`;

export default function Card({ item }) {
    return (
        <Container key={item.id}>
            {item.img &&
                <ImgContainer>
                    <Image src={item.img} alt="" fill />
                </ImgContainer>
            }
            <TextContainer>
                <Detail>
                    <span>{item.createdAt.substring(0, 10)} - {" "}</span>
                    <span>{item.catSlug}</span>
                </Detail>
                <Link href={`/posts/${item.slug}`}>
                    <h1>{item.title}</h1>
                </Link>
                <p dangerouslySetInnerHTML={{ __html: item?.desc.substring(0, 300) + "..." }} />
                <Link href={`/posts/${item.slug}`}>Read More</Link>
            </TextContainer>
        </Container>
    );
};
