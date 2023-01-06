import Link from "next/link";
import React from "react";
import { Btn } from "../Button/Button";
import { Subtext } from "../SubText/SubText";
import styles from "../../styles/Home.module.css";
import { Button, Tooltip } from "@nextui-org/react";
import { HiOutlineMail } from "react-icons/hi";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";

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
        height: 400,
        width: "100vw",
        marginTop: 200,
        paddingTop: 100,
        paddingBottom: 100,
      }}
      className={styles["content-layout"]}
    >
      <Subtext color="#fff">Category</Subtext>
      <div
        style={{ display: "flex", gap: 30, marginTop: 20, marginBottom: 40 }}
      >
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
      <Subtext color="#fff">Get in touch</Subtext>
      <div style={{ display: "flex", gap: 30, marginTop: 10 }}>
        <div>
          <Tooltip
            content="Email"
            css={{
              fontFamily: "Teko",
              borderRadius: 0,
              fontSize: 20,
            }}
          >
            <Link href="mailto:contact@willjoseph.xyz" color="#fff">
              <Button
                bordered
                ripple={false}
                icon={
                  <HiOutlineMail
                    color="#fff"
                    size={20}
                    style={{ borderColor: "white" }}
                  />
                }
                css={{
                  borderColor: "White",
                  minWidth: 30,
                  minHeight: 30,
                  borderRadius: 20,
                }}
              />
            </Link>
          </Tooltip>
        </div>
        <div>
          <Tooltip
            content="Twitter"
            css={{
              fontFamily: "Teko",
              borderRadius: 0,
              fontSize: 20,
            }}
          >
            <Link href="https://twitter.com/programergeek" color="#fff">
              <Button
                bordered
                ripple={false}
                icon={
                  <FaTwitter
                    color="#fff"
                    size={20}
                    style={{ borderColor: "white" }}
                  />
                }
                css={{
                  borderColor: "White",
                  minWidth: 30,
                  minHeight: 30,
                  borderRadius: 20,
                }}
              />
            </Link>
          </Tooltip>
        </div>
        <div>
          <Tooltip
            content="Linkedin"
            css={{
              fontFamily: "Teko",
              borderRadius: 0,
              fontSize: 20,
            }}
          >
            <Link
              href="https://www.linkedin.com/in/thato-will-joseph-b0aa54219/"
              color="#fff"
            >
              <Button
                bordered
                ripple={false}
                icon={
                  <FaLinkedinIn
                    color="#fff"
                    size={20}
                    style={{ borderColor: "white" }}
                  />
                }
                css={{
                  borderColor: "White",
                  minWidth: 30,
                  minHeight: 30,
                  borderRadius: 20,
                }}
              />
            </Link>
          </Tooltip>
        </div>
      </div>
      <Subtext
        color="#fff"
        css={{ wordSpacing: ".1rem", marginTop: 20, letterSpacing: ".05rem" }}
      >
        Design inspired by{" "}
        <Link
          style={{ color: "white", textDecoration: "underline" }}
          href="https://www.behance.net/gallery/158941401/Retro-Blog-UI-UX-Design?tracking_source=search_projects%7Cblog+web+design"
          target="_blank"
          rel="norefferer"
        >
          Tiruhi Ivanyan
        </Link>{" "}
        and built by a local internet nerd.
      </Subtext>
    </footer>
  );
};
