"use client";
import styled from "styled-components";
import MenuPosts from "./MenuPosts";
import MenuCategories from "./MenuCategories";

const Container = styled.div`
  flex: 2;
  margin-top: 60px;

  h2 {
    color: gray;
    font-size: 16px;
    font-weight: 400;
  }

  h1 {
    font-size: 28px;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export default function Menu() {
  return (
    <Container>
      <h2>What&#39;s hot</h2>
      <h1>Most Popular</h1>
      <MenuPosts withImage={false} />
      <h2>Discover by topic</h2>
      <h1>Categories</h1>
      <MenuCategories />
      <h2>Chosen by the editor</h2>
      <h1>Editors Pick</h1>
      <MenuPosts withImage={true} />
    </Container>
  );
}
