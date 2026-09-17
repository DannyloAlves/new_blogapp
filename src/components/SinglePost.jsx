"use client";
import Comments from "./Comments";
import Menu from "./Menu";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div``;

const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`;

const TextContainer = styled.div`
    flex: 1;

    h1{
        font-size: 64px;
        margin-bottom: 50px;

        @media screen and (max-width: 1536px) {
            font-size: 54px;
        };

        @media screen and (max-width: 1280px) {
            font-size: 48px;
        };

        @media screen and (max-width: 640px) {
            font-size: 36px;
        };
    };
`;

const User = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const UserImgContainer = styled.div`
    width: 50px;
    height: 50px;
    position: relative;
    
    img{
        border-radius: 50%;
        object-fit: cover;
    };
`;

const UserTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: ${({ theme }) => theme.colors.softTextColor};

    span:first-child{
        font-size: 20px;
        font-weight: 500;
    };
`;

const ImgContainer = styled.div`
    flex: 1;
    height: 350px;
    position: relative;

    img{
        object-fit: cover;
    };

    @media screen and (max-width: 1024px) {
        display: none;
    };
`;

const Content = styled.div`
    display: flex;
    gap: 50px;
`;

const Post = styled.div`
    flex: 5;
    margin-top: 60px;
`;

const Description = styled.div`
    p{
        font-size: 20px;
        font-weight: 300;
        margin-bottom: 20px;

        @media screen and (max-width: 640px) {
            font-size: 18px;
        };
    };
`;

const Comment = styled.div``;

export default function SinglePost({ data, slug }) {
    return (
        <Container>
            <InfoContainer>
                <TextContainer>
                    <h1>{data?.title}</h1>
                    <User>
                        {data?.user.image &&
                            <UserImgContainer>
                                <Image src={data.user.image} alt="" fill />
                            </UserImgContainer>
                        }
                        <UserTextContainer>
                            <span>{data?.user.name}</span>
                            <span>01.05.2024</span>
                        </UserTextContainer>
                    </User>
                </TextContainer>
                {data?.img &&
                    <ImgContainer>
                        <Image src={data.img} alt="" fill />
                    </ImgContainer>
                }
            </InfoContainer>
            <Content>
                <Post>
                    <Description dangerouslySetInnerHTML={{ __html: data?.desc }} />
                    <Comment>
                        <Comments postSlug={slug} />
                    </Comment>
                </Post>
                <Menu />
            </Content>
        </Container>
    );
};
