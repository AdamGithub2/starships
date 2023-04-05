import { Starship } from "@/models/starship.model";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import styles from "@/styles/Home.module.css";

export const StarShipsItem = ({ starship }: { starship: Starship }) => {
  const router = useRouter();

  return (
    <Link
      style={{ textDecoration: "none" }}
      href={{
        pathname: "/" + `${starship}`,
        query: { ...starship },
      }}
    >
      <div className={styles.shipItem}>{starship.name}</div>
    </Link>
  );
};
