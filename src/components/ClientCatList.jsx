"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.div``;

const Title = styled.h1`
    margin: 50px 0;
`;

const Categories = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;

    a{
        display: flex;
        align-items: center;
        gap: 10px;
        text-transform: capitalize;
        width: 15%;
        height: 80px;
        justify-content: center;
        border-radius: 10px;

        img{
            border-radius: 50%;
        };

        @media screen and (max-width: 1280px) {
            width: 20%;
        };
        @media screen and (max-width: 1024px) {
            width: 25%;
        };
        @media screen and (max-width: 768px) {
            width: 45%;
        };
        @media screen and (max-width: 640px) {
            width: 100%;
        };
    };
`;

export default function ClientCatList({ data }) {
    const bgColor = (title) => {
        if (title === "style") return "#57c4ff31";
        if (title === "fashion") return "#da85c731";
        if (title === "food") return "#7fb88133";
        if (title === "travel") return "#ff795736";
        if (title === "culture") return "#ffb04f45";
        if (title === "coding") return "#5e4fff31";
    };

    return (
        <Container>
            <Title>Popular Categories</Title>
            <Categories>
                {data?.map((item) => (
                    <Link href="/blog?cat=style" key={item.id} style={{ backgroundColor: bgColor(item.title) }}>
                        {item.img && <Image src={item.img} width={32} height={32} alt="" />}
                        {item.title}
                    </Link>
                ))}
            </Categories>
        </Container>
    );
};
