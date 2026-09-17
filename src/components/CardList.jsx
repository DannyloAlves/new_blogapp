import BlogCardList from "./BlogCardList";
import Cards from "./Cards";


const getData = async (page, cat) => {
    const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`, {
        cache: "no-store"
    });

    if (!res.ok) {
        throw new Error("Failed");
    }

    return res.json();
};

export default async function CardList({ page, cat }) {
    const { posts, count } = await getData(page, cat);

    if (cat) {
        return (
            <BlogCardList posts={posts} count={count} page={page} cat={cat} />
        );
    }

    return (
        <Cards posts={posts} count={count} page={page} />
    );
};
