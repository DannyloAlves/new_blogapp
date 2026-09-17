"use client";
import GlobalStyles from "@/styles/GlobalStyles";
import styled from "styled-components";

const Container = styled.div`
    max-width: 1536px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 80px;
    padding-right: 80px;

    @media screen and (max-width: 1536px) {
        max-width: 1366px;
    };

    @media screen and (max-width: 1280px) {
        max-width: 1024px;
    };

    @media screen and (max-width: 1024px) {
        max-width: 768px;
        padding-left: 40px;
        padding-right: 40px;
    };

    @media screen and (max-width: 768px) {
        max-width: 640px;
    };
    
    @media screen and (max-width: 640px) {
        max-width: 475px;
    };
`;

export default function MainContainer({ children }) {
    return (
        <Container>
            <GlobalStyles />
            {children}
        </Container>
    );
};
