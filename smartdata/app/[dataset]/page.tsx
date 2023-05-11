"use client";
import "./page.css";
import DatasetPage from "./DatasetPage";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

function useDatasetColumns(dataset: string) {
  return useQuery({
    queryKey: [dataset, "datacatalogue"],
    queryFn: async () => {
      let response;
      response = await axios.get("http://localhost:3000/api/datacatalogue", {
        params: {
          dataset: dataset,
        },
      });
      console.log("sssssssssssssssssss", response.data);
      return response.data;
    },
  });
}

export default function Page({ params }) {
  const {
    data: columns,
    isError,
    isLoading,
  } = useDatasetColumns(params.dataset);

  if (isLoading) {
    return <div></div>;
  }
  return (
    <div>
      <DatasetPage columns={columns} dataset={params.dataset} />
    </div>
  );
}
