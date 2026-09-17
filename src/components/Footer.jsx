"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
    margin-top: 50px;
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.softTextColor};

    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 50px;
    };
`;

const Info = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 14px;

    h1{
        font-size: 24px;
    };

    p{
        font-weight: 300;
    };
`;

const Icons = styled.div`
    margin-top: 10px;
    display: flex;
    gap: 10px;
`;

const Links = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    gap: 100px;

    div{
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-weight: 300;

        span{
            font-weight: bold;
        };
    };

    @media screen and (max-width: 1024px) {
        gap: 50px;
    };

    @media screen and (max-width: 768px) {
        width: 100%;
        justify-content: space-between;
    };

    @media screen and (max-width: 640px) {
        font-size: 14px;
    };
`;

export default function Footer() {
    return (
        <Container>
            <Info>
                <h1>App Blog</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid officia, assumenda, recusandae laboriosam explicabo
                    blanditiis ullam possimus sit quaerat, dolor minima fugit
                    inventore optio porro ea repudiandae voluptas nisi distinctio!
                </p>
                <Icons>
                    <Image src="/facebook.png" alt="" width={18} height={18} />
                    <Image src="/instagram.png" alt="" width={18} height={18} />
                    <Image src="/tiktok.png" alt="" width={18} height={18} />
                    <Image src="/youtube.png" alt="" width={18} height={18} />
                </Icons>
            </Info>
            <Links>
                <div>
                    <span>Links</span>
                    <Link href="/">Homepage</Link>
                    <Link href="/">Blog</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                </div>
                <div>
                    <span>Tags</span>
                    <Link href="/">Style</Link>
                    <Link href="/">Fashion</Link>
                    <Link href="/">Coding</Link>
                    <Link href="/">Travel</Link>
                </div>
                <div>
                    <span>Social</span>
                    <Link href="/">Facebook</Link>
                    <Link href="/">Instagram</Link>
                    <Link href="/">Tiktok</Link>
                    <Link href="/">Youtube</Link>
                </div>
            </Links>
        </Container>
    );
};
