import Link from "next/link";
import React from "react";
import { Btn } from "../Button/Button";
import { Subtext } from "../SubText/SubText";

export const Footer: React.FC = () => {
  const categories = [
    { label: "Web Dev", slug: "web-dev" },
    { label: "Design", slug: "design" },
    { label: "Just me", slug: "just-me" },
  ];

  return (
    <footer
      style={{
        backgroundColor: "rgb(142, 53, 8)",
        height: 300,
        width: "100vw",
        marginTop: 50,
      }}
    >
      <Subtext color="#fff">Category</Subtext>
      <div style={{ display: "flex", gap: 10 }}>
        {categories.map((category) => (
          <Link
            style={{ fontFamily: "Teko", color: "white" }}
            href={{
              pathname: "/category/[slug]",
              query: { slug: category.slug },
            }}
          >
            {category.label}
          </Link>
        ))}
      </div>
    </footer>
  );
};
