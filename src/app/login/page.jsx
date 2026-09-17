"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.softBgColor};
  padding: 150px 200px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    padding: 50px 100px;
  }

  @media screen and (max-width: 640px) {
    padding: 30px;
  }
`;

const SocialButtom = styled.div`
  padding: 20px;
  border-radius: 5px;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:first-child {
    background-color: #ff5555;
  }

  &:nth-child(2) {
    background-color: #111;
  }

  &:last-child {
    background-color: #087bea;
  }

  @media screen and (max-width: 640px) {
    font-weight: 400;
    font-size: 14px;
  }
`;

export default function LoginPage() {
  const { data, status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return <div>loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <Container>
      <Wrapper>
        <SocialButtom onClick={() => signIn("google")}>
          Login with Google
        </SocialButtom>
        <SocialButtom>Login with Github</SocialButtom>
        <SocialButtom>Login with Facebook</SocialButtom>
      </Wrapper>
    </Container>
  );
}
