import ClientDirectoryTable from "./components/ClientDirectoryTable/ClientDirectoryTable";
import ClientDirectoryFilters from "./components/ClientDirectoryFilters/ClientDirectoryFilters";

export default async function Home({ searchParams }) {
  const params = await searchParams;
  return (
    <main>
      <ClientDirectoryFilters defaultValues={params} />
      <ClientDirectoryTable searchParams={params} />
    </main>
  );
};