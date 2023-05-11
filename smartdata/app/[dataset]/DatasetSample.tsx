import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import "./page.css";

export function DatasetSample({ dataset }) {
  const { data } = useQuery({
    queryKey: [dataset, "sample"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3000/api/sample", {
        params: {
          dataset: dataset,
        },
      });
      return response.data;
    },
  });
  const [showHeader, setShowHeader] = useState(false);
  const tableRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (tableRef.current) {
        const scrollTop = tableRef.current.scrollTop;
        setShowHeader(scrollTop > 0);
      }
    };

    if (tableRef.current) {
      tableRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (tableRef.current) {
        tableRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div>
      <h1
        style={{
          color: "blue",
          fontWeight: "bold",
          fontSize: "32px",
          textShadow: "2px 2px 4px #000",
        }}
      >
        Sample_poi Data
      </h1>
      <p style={{ fontSize: "18px" }}>
        This is a sample dataset containing information about points of
        interest.
        {/* Add your description here */}
      </p>
      <button
        style={{
          fontSize: "20px",
          padding: "5px 20px",
          backgroundColor: "blue",
          color: "white",
          borderRadius: "5px",
        }}
        onClick={() => {
          // Add functionality for the "Try Now" button here
        }}
      >
        Try Now
      </button>
      <div
        style={{ overflowX: "auto", marginTop: "15px" }}
        ref={tableRef}
        className="table-container"
      >
        <table style={{ minWidth: "100%" }}>
          <thead
            style={{
              position: showHeader ? "sticky" : "relative",
              top: 0,
              background: "white",
            }}
          >
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Alt_name</th>
              <th>Phone</th>
              <th>Phone2</th>
              <th>Category</th>
              <th>SubCategory</th>
              <th>Address</th>
              <th>Adminid</th>
              <th>Zipcode</th>
              <th>Geometry</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item) => (
                <tr key={item.id_}>
                  <td>{item.id_}</td>
                  <td>{item.name_}</td>
                  <td>{item.alt_name}</td>
                  <td>{item.phone}</td>
                  <td>{item.phone2}</td>
                  <td>{item.category}</td>
                  <td>{item.subcategory}</td>
                  <td>{item.address}</td>
                  <td>{item.adminid}</td>
                  <td>{item.zipcode}</td>
                  <td>{item.geometry}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
