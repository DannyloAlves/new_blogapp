"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    span{
        cursor: pointer;
    };

    a{
        cursor: pointer;
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

const Burguer = styled.div`
    width: 20px;
    height: 16px;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;

    @media screen and (max-width: 640px) {
        display: flex;
    };
`;

const Lines = styled.div`
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.textColor};
`;

const ResponsiveMenu = styled.div`
    position: absolute;
    top: 100px;
    left: 0;
    background-color: ${({ theme }) => theme.colors.bgColor};
    height: calc(100vh - 100px);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    font-size: 36px;
    z-index: 999;
`;

export default function AuthLinks() {
    const [open, setOpen] = useState(false);

    const status = useSession();

    return (
        <Container>
            <Links>
                {status === "unauthenticated" ? (
                    <Link href="/login">Login</Link>
                ) : (
                    <>
                        <Link href="/write">Write</Link>
                        <span onClick={signOut}>Logout</span>
                    </>
                )}
            </Links>
            <Burguer onClick={() => setOpen(!open)}>
                <Lines></Lines>
                <Lines></Lines>
                <Lines></Lines>
            </Burguer>
            {open && (
                <ResponsiveMenu>
                    <Link href="/">Homepage</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                    {status === "unauthenticated" ? (
                        <Link href="/login">Login</Link>
                    ) : (
                        <>
                            <Link href="/write">Write</Link>
                            <span onClick={signOut}>Logout</span>
                        </>
                    )}
                </ResponsiveMenu>
            )}
        </Container>
    );
};
