import { Card } from "@nextui-org/react";
import React from "react";
import { Crd, Text, Subtext, Title } from "..";

export const Post: React.FC = () => {
  return (
    <div style={{ display: "flex" }}>
      <Crd
        css={{
          width: 450,
          height: 500,
          padding: 0,
          position: "relative",
        }}
      >
        <Card.Body css={{ p: 0 }}>
          <div
            style={{
              height: "fit-content",
              width: "fit-content",
              position: "absolute",
              zIndex: 10,
              right: 25,
              bottom: "5%",
              display: "flex",
              flexDirection: "column",
              gap: 5,
            }}
          >
            {[
              "Software",
              "Software",
              "Software",
              "Software",
              "Software",
              "Software",
              "Software",
              "Software",
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
            src="/images/gunsligner.jpg"
            objectFit="cover"
            width="100%"
            height="100%"
            alt="Post hero image"
          />
        </Card.Body>
      </Crd>
      <Crd
        css={{
          width: 450,
          height: 500,
          paddingLeft: 50,
          paddingRight: 50,
          paddingTop: 100,
        }}
      >
        <Card.Header css={{ paddingBottom: 0 }}>
          <Title>Title</Title>
        </Card.Header>
        <Card.Body css={{ paddingTop: 0, wordSpacing: ".22em" }}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            molestiae veritatis pariatur. Aut commodi laborum ex unde molestias
            necessitatibus explicabo aliquid velit. Itaque quae porro expedita
            eligendi hic facilis nihil.
          </Text>
        </Card.Body>
        <Card.Footer css={{ display: "flex", justifyContent: "end" }}>
          <Subtext>22/12/2022</Subtext>
        </Card.Footer>
      </Crd>
    </div>
  );
};
