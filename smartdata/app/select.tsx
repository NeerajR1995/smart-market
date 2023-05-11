"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type DatasetRow = { database_name: string };

export default function SelectDatabase(props: { rows: DatasetRow[] }) {
  const router = useRouter();
  const selectHandler = (event) => {
    router.push(`/` + encodeURIComponent(event.target.value));
  };
  return (
    <div>
      <select onChange={selectHandler}>
        {props.rows.map((row) => {
          return (
            <option key={row.database_name} value={row.database_name}>
              {row.database_name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
