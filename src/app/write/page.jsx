"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";
//import ReactQuill from 'react-quill';
import "react-quill/dist/quill.bubble.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
import dynamic from "next/dynamic";

const Container = styled.div``;

const Title = styled.input`
  padding: 50px;
  font-size: 64px;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textColor};

  &::placeholder {
    color: #b3b3b1;
  }
`;

const CatSelect = styled.select`
  margin-bottom: 50px;
  padding: 10px 20px;
  margin-left: 50px;
  width: max-content;
`;

const Editor = styled.div`
  display: flex;
  gap: 20px;
  height: 700px;
  position: relative;

  button {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.textColor};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;

const Add = styled.div`
  display: flex;
  gap: 20px;
  background-color: ${({ theme }) => theme.colors.bgColor};
  position: absolute;
  z-index: 999;
  width: 100%;
  left: 50px;

  img {
    cursor: pointer;
  }

  button {
    border-color: #1a8917;
    cursor: pointer;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 30px;
  right: 20px;
  padding: 10px 20px;
  border: none;
  background-color: #1a8917;
  color: white;
  border-radius: 20px;
  cursor: pointer;
`;

export default function WritePage() {
  const [file, setFile] = useState(null);
  const [open, setOpen] = useState(false);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        },
      );
    };

    file && upload();
  }, [file]);

  const { status } = useSession();
  const ReactQuill = dynamic(() => import(`react-quill`), { ssr: false });

  const router = useRouter();

  if (status === "loading") {
    return <div>loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  // CRIA SLUG A PARTIR DO TITULO
  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "style", //If not selected, choose the general category
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };

  return (
    <Container>
      <Title
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <CatSelect onChange={(e) => setCatSlug(e.target.value)}>
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </CatSelect>
      <Editor>
        <button onClick={() => setOpen(!open)}>
          <Image src="/plus.png" width={16} height={16} alt="" />
        </button>
        {open && (
          <Add>
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <button>
              <label htmlFor="image">
                <Image src="/image.png" width={16} height={16} alt="" />
              </label>
            </button>
            <button>
              <Image src="/external.png" width={16} height={16} alt="" />
            </button>
            <button>
              <Image src="/video.png" width={16} height={16} alt="" />
            </button>
          </Add>
        )}
        <ReactQuill
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
          style={{ width: "100%" }}
        />
      </Editor>
      <Button onClick={handleSubmit}>Publish</Button>
    </Container>
  );
}
