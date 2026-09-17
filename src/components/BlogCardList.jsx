"use client";
import styled from "styled-components";
import Cards from "./Cards";
import Menu from "./Menu";


const Container = styled.div``;

const Title = styled.h1`
    background-color: coral;
    color: white;
    padding: 5px 10px;
    text-align: center;
    text-transform: capitalize;
`;

const Content = styled.div`
    display: flex;
    gap: 50px;
`;

export default function BlogCardList({ posts, count, page, cat }) {
    return (
        <Container>
            <Title>{cat} Blog</Title>
            <Content>
                <Cards posts={posts} count={count} page={page} cat={cat} />
                <Menu />
            </Content>
        </Container>
    );
};
