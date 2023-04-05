import { StarShipsTable } from "@/components/starshipsTable";
import { Starship } from "@/models/starship.model";
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import bg from "../../public/background.jpg";

export default function Home({ starships }: { starships: Starship[] }) {
  return (
    <>
      <Head>
        <title>Starships app</title>
        <meta name="description" content="Starships table" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={styles.main}
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          resize: "both",
        }}
      >
        <StarShipsTable starships={starships}></StarShipsTable>
      </main>
    </>
  );
}

export const getServerSideProps = async ({ query }: any) => {
  var url = new URL("https://swapi.dev/api/starships");
  url.search = new URLSearchParams(query).toString();

  const response = await fetch(url.href);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  const starships = data.results;
  console.log(starships);
  return {
    props: {
      starships,
    },
  };
};
