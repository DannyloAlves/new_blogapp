"use client";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: space-between;

    button{
        width: 100px;
        border: none;
        padding: 16px;
        background-color: crimson;
        color: white;
        cursor: pointer;
    };

    button:disabled{
        background-color: rgba(200, 20, 60, 0.473);
        cursor: not-allowed;
    };
`;

export default function Pagination({ page, hasPrev, hasNext }) {
    const router = useRouter();

    return (
        <Container>
            <button disabled={!hasPrev} onClick={() => router.push(`?page=${page - 1}`)}>
                Previus
            </button>
            <button disabled={!hasNext} onClick={() => router.push(`?page=${page + 1}`)}>
                Next
            </button>
        </Container>
    );
};
