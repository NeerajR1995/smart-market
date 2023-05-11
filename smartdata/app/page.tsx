"use client";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { SelectData } from "./select_database";

export default function Home() {
  return (
    <main>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          border: "1px solid #92a697",
        }}
      >
        <div style={{ border: "1px solid black", borderRadius: "10px" }}>
          <div style={{ fontWeight: "bold", color: "black" }}>SMART DATA</div>
        </div>
        <Link href="/">
          <div style={{ padding: "20px" }}>Home</div>
        </Link>
        <Link href="/contact">
          <div style={{ padding: "10px" }}>Contact</div>
        </Link>
        <Link href="/about">
          <div style={{ padding: "20px" }}>About</div>
        </Link>
      </div>
      <SelectData />
      <div
        style={{
          display: "flex",
          padding: "200px",
          alignItems: "center",
          justifyContent: "space-between",
          border: "1px solid #92a697",
        }}
      >
        <div
          style={{ width: "200px", padding: "30px", backgroundColor: "white" }}
        >
          <Link href="/admin-state-boundary">Pincode Boundary</Link>
        </div>
        <div
          style={{ width: "200px", padding: "30px", backgroundColor: "white" }}
        >
          <Link href="/state">State Boundary</Link>
        </div>
        <div
          style={{ width: "200px", padding: "30px", backgroundColor: "white" }}
        >
          <Link href="/district">District Boundary</Link>
        </div>
        <div
          style={{ width: "200px", padding: "30px", backgroundColor: "white" }}
        >
          <Link href="/village">Village Boundary</Link>
        </div>
      </div>
    </main>
  );
}
