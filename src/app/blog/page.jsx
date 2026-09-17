import CardList from "@/components/CardList";

export default function BlogPage({ searchParams }) {
    const page = parseInt(searchParams.page) || 1;
    const { cat } = searchParams;

    return (
        <CardList page={page} cat={cat} />
    );
};
