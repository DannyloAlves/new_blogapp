import CardList from "@/components/CardList";
import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import Menu from "@/components/Menu";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <main>
      <Featured />
      <CategoryList />
      <div style={{ display: "flex", gap: "50px" }}>
        <CardList page={page} />
        <Menu />
      </div>
    </main>
  );
};