"use client";
import Link from "next/link";
import styled from "styled-components";

const CategoryList = styled.div`
    margin-top: 35px;
    margin-bottom: 60px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    a{
        padding: 10px 25px;
        border-radius: 10px;
        font-size: 14px;
    };
`;

export default function MenuCategories() {
    return (
        <CategoryList>
            <Link href="/blog?cat=style" style={{ backgroundColor: "#57c4ff31" }}>
                Style
            </Link>
            <Link href="/blog?cat=fashion" style={{ backgroundColor: "#da85c731" }}>
                Fashion
            </Link>
            <Link href="/blog?cat=food" style={{ backgroundColor: "#7fb88133" }}>
                Food
            </Link>
            <Link href="/blog?cat=travel" style={{ backgroundColor: "#ff795736" }}>
                Travel
            </Link>
            <Link href="/blog?cat=culture" style={{ backgroundColor: "#ffb04f45" }}>
                Culture
            </Link>
            <Link href="/blog?cat=coding" style={{ backgroundColor: "#5e4fff31" }}>
                Coding
            </Link>
        </CategoryList>
    );
};
