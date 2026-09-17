import SinglePost from "@/components/SinglePost";

const getData = async (slug) => {
    const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
        cache: "no-store"
    });

    if (!res.ok) {
        throw new Error("Failed");
    }

    return res.json();
};

export default async function SinglePage({ params }) {
    const { slug } = params;

    const data = await getData(slug);
    return (
        <SinglePost data={data} slug={slug} />
    );
};
