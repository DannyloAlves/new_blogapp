"use client";
import styled from 'styled-components';
import Pagination from './Pagination';
import Card from './Card';

const Container = styled.div`
    flex: 5;
`;

const Title = styled.h1`
    margin: 50px 0;
`;

const Posts = styled.div``;

export default function Cards({ posts, count, page }) {
    const POST_PER_PAGE = 2;

    const hasPrev = POST_PER_PAGE * (page - 1) > 0;
    const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

    return (
        <Container>
            <Title>Recent Posts</Title>
            <Posts>
                {posts?.map((item) => (
                    <Card item={item} key={item.id} />
                ))}
            </Posts>
            <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
        </Container>
    );
};
