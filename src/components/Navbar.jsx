"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import ThemeToggle from "./ThemeToggle";
import AuthLinks from "./AuthLinks";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
`;

const Social = styled.div`
    display: flex;
    gap: 10px;
    flex: 1;

    @media screen and (max-width: 1024px) {
        display: none;
    };
`;

const Logo = styled.div`
    flex: 1;
    text-align: center;
    font-size: 36px;
    font-weight: bold;

    @media screen and (max-width: 1280px) {
        font-size: 32px;
    };

    @media screen and (max-width: 1024px) {
        text-align: left;
    };

    @media screen and (max-width: 768px) {
        font-size: 24px;
    };
`;

const LinksList = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 20px;

    @media screen and (max-width: 1280px) {
        font-size: 18px;
        gap: 15px;
    };

    @media screen and (max-width: 640px) {
        justify-content: flex-end;
    };
`;

const Links = styled.div`
    display: flex;
    gap: 20px;
    flex: 1;

    @media screen and (max-width: 640px) {
        display: none;
    };
`;

export default function Navbar() {
    return (
        <Container>
            <Social>
                <Image src="/facebook.png" alt="facebook" width={24} height={24} />
                <Image src="/instagram.png" alt="instagram" width={24} height={24} />
                <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
                <Image src="/youtube.png" alt="youtube" width={24} height={24} />
            </Social>
            <Logo>App Blog</Logo>
            <LinksList>
                <ThemeToggle />
                <Links>
                    <Link href="/">Homepage</Link>
                    <Link href="/">Contact</Link>
                    <Link href="/">About</Link>
                </Links>
                <AuthLinks />
            </LinksList>
        </Container>
    );
};
