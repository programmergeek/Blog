import { Card } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { Crd, Text, Subtext, Title } from "..";

type Props = {
  category: string;
  imgSrc: string;
  title: string;
  text: string;
  date: string;
  link: string;
};

export const Post: React.FC<Props> = ({ ...props }) => {
  return (
    <div style={{ display: "flex" }}>
      <Link
        href={{
          pathname: "/post/[slug]",
          query: { slug: props.link },
        }}
      >
        <Crd
          css={{
            maxWidth: "100%",
            height: 500,
            padding: 0,
            position: "relative",
            "@md": {
              maxWidth: 450,
            },
          }}
        >
          <Card
            css={{
              position: "absolute",
              w: "100%",
              h: "100%",
              zIndex: 20,
              borderRadius: 0,
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0, 0,0, 1))",
              "@md": {
                display: "none",
              },
            }}
          >
            {""}
          </Card>
          <Card
            css={{
              position: "absolute",
              w: "80%",
              h: "100%",
              zIndex: 20,
              borderRadius: 0,
              background: "transparent",
              paddingTop: 100,
              "@md": {
                display: "none",
              },
            }}
          >
            <Card.Header css={{ paddingBottom: 0, paddingLeft: 25 }}>
              <Title css={{ color: "White" }}> {props.title} </Title>
            </Card.Header>
            <Card.Body
              css={{ paddingTop: 0, wordSpacing: ".22em", paddingLeft: 25 }}
            >
              <Text
                css={{ fontSize: 16, "@md": { fontSize: 16 }, color: "White" }}
              >
                {props.text}
              </Text>
            </Card.Body>
            <Card.Footer
              css={{ display: "flex", justifyContent: "end", marginBottom: 2 }}
            >
              <Subtext css={{ color: "White" }}> {props.date} </Subtext>
            </Card.Footer>
          </Card>
          <Card.Body css={{ p: 0 }}>
            <div
              style={{
                height: "fit-content",
                width: "fit-content",
                position: "absolute",
                zIndex: 30,
                right: 25,
                bottom: "5%",
                display: "flex",
                flexDirection: "column",
                gap: 5,
              }}
            >
              {[
                props.category,
                props.category,
                props.category,
                props.category,
                props.category,
                props.category,
                props.category,
                props.category,
                props.category,
              ].map((val, i) => (
                <Crd css={{ padding: 0 }} key={i}>
                  <p
                    style={{
                      fontFamily: "Teko",
                      letterSpacing: ".01rem",
                      writingMode: "vertical-rl",
                      rotate: "180deg",
                      marginTop: 10,
                      marginBottom: 10,
                    }}
                  >
                    {val}
                  </p>
                </Crd>
              ))}
            </div>
            <Card.Image
              src={props.imgSrc}
              objectFit="cover"
              width="100%"
              height="100%"
              alt="Post hero image"
            />
          </Card.Body>
        </Crd>
      </Link>
      <Crd
        css={{
          maxWidth: 400,
          height: 500,
          paddingTop: 50,
          paddingLeft: 20,
          paddingRight: 20,
          display: "none",
          "@md": {
            display: "block",
            maxWidth: "50%",
          },
        }}
      >
        <Card.Header css={{ paddingBottom: 0 }}>
          <Link
            href={{
              pathname: "/post/[slug]",
              query: { slug: props.link },
            }}
          >
            <Title
              css={{
                "@md": {
                  fontSize: "2.5rem",
                  lineHeight: "3rem",
                },
                "@lg": { fontSize: "3.5rem", lineHeight: "3.5rem" },
              }}
            >
              {props.title}
            </Title>
          </Link>
        </Card.Header>
        <Card.Body css={{ paddingTop: 0, wordSpacing: ".22em" }}>
          <Text
            css={{
              fontSize: 13,
              "@md": { fontSize: 14 },
              "@lg": { fontSize: 16 },
            }}
          >
            {props.text}
          </Text>
        </Card.Body>
        <Card.Footer
          css={{
            display: "flex",
            justifyContent: "end",
            position: "absolute",
            bottom: 20,
            right: 20,
          }}
        >
          <Subtext> {props.date} </Subtext>
        </Card.Footer>
      </Crd>
    </div>
  );
};
