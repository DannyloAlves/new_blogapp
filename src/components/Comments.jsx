"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import useSWR from "swr";

const Container = styled.div`
  margin-top: 50px;

  h1 {
    color: ${({ theme }) => theme.colors.softTextColor};
    margin-bottom: 30px;
  }
`;

const Write = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;

  textarea {
    padding: 20px;
    width: 100%;
  }

  button {
    padding: 16px 20px;
    background-color: teal;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const AllComments = styled.div`
  margin-top: 50px;
`;

const Comment = styled.div`
  margin-bottom: 50px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;

  img {
    border-radius: 50%;
    object-fit: cover;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: ${({ theme }) => theme.colors.softTextColor};

  span:first-child {
    font-weight: 500;
  }

  span:last-child {
    font-size: 14px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  font-weight: 300;
`;

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

export default function Comments({ postSlug }) {
  const { status } = useSession();

  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher,
  );

  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    setDesc("");
    mutate();
  };

  return (
    <Container>
      <h1>Comments</h1>
      {status === "authenticated" ? (
        <Write>
          <textarea
            placeholder="Write a comment..."
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          />
          <button onClick={handleSubmit}>Send</button>
        </Write>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <AllComments>
        {isLoading
          ? "loading"
          : data?.map((item) => (
              <Comment key={item._id}>
                <User>
                  <Image src={item.user.image} width={50} height={50} alt="" />
                  <UserInfo>
                    <span>{item.user.name}</span>
                    <span>{item.createdAt}</span>
                  </UserInfo>
                </User>
                <Description>{item.desc}</Description>
              </Comment>
            ))}
      </AllComments>
    </Container>
  );
}
