import ClientCatList from "./ClientCatList";

const getData = async () => {
    const res = await fetch("http://localhost:3000/api/categories", {
        cache: "no-store"
    });

    if (!res.ok) {
        throw new Error("Failed");
    }

    return res.json();
};

export default async function CategoryList() {
    const data = await getData();

    return (
        <ClientCatList data={data} />
    );
};
