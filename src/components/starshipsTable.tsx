import { Starship } from "@/models/starship.model";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import styles from "@/styles/Home.module.css";
import { StarShipsItem } from "./starshipItem";
import { NoFoundItem } from "./noFoundItem";

export const StarShipsTable = ({ starships }: { starships: Starship[] }) => {
  const router = useRouter();

  const [name, setName] = useState("");

  const renderSearchPlace = () => {
    return (
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => {
              router.query.search = name;
              router.push(router);
            }}
          >
            Find
          </button>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Starship name"
          aria-label=""
          aria-describedby="basic-addon1"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    );
  };

  return (
    <>
      <div className={styles.TitleBackground}>
        <h1>STARSHIPS</h1>
      </div>
      <div className={styles.background}>
        {renderSearchPlace()}
        {starships?.length === 0 ? <NoFoundItem /> : null}
        {starships?.map((item: Starship, index: number) => {
          return <StarShipsItem key={item.name} starship={item} />;
        })}
      </div>
    </>
  );
};
