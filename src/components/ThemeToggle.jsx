"use client";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import { useContext } from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 40px;
    height: 20px;
    border-radius: 50px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    position: relative;
`;

const Ball = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    position: absolute;
`;

export default function ThemeToggle() {
    const { toggle, mode } = useContext(ThemeContext);

    return (
        <Container onClick={toggle} style={mode === "dark" ? { background: "white" } : { background: "#0f172a" }}>
            <Image src="/moon.png" alt="" width={14} height={14} />
            <Ball style={mode === "dark" ? { left: 1, background: "#0f172a" } : { right: 1, background: "white" }}></Ball>
            <Image src="/sun.png" alt="" width={14} height={14} />
        </Container>
    );
};
