import DatasetPage from "./[dataset]/DatasetPage";
import Select from "./select";
import axios from "axios";

export async function SelectData() {
  let { data } = await axios.get("http://localhost:3000/api/columns");

  return (
    <div>
      <h1>Select a database:</h1>
      <Select rows={data} />
      {/* <DatasetPage selectData={data} /> */}
    </div>
  );
}
