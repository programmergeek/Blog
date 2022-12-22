import { Card } from "@nextui-org/react";
import React from "react";
import { Crd, Subtext, Text, Title } from "..";

type Props = {
  category: string;
  imgSrc: string;
  title: string;
  text: string;
  date: string;
};

export const HighlightPost: React.FC<Props> = ({ ...props }) => {
  return (
    <div style={{ display: "flex" }}>
      <Crd
        css={{
          width: 750,
          height: 650,
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
              right: 35,
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
      <Crd
        css={{
          width: 750,
          height: 650,
          paddingLeft: 50,
          paddingRight: 50,
          paddingTop: 100,
        }}
      >
        <Card.Header css={{ paddingBottom: 0 }}>
          <Title>{props.title}</Title>
        </Card.Header>
        <Card.Body css={{ paddingTop: 0, wordSpacing: ".22em" }}>
          <Text>{props.text}</Text>
        </Card.Body>
        <Card.Footer css={{ display: "flex", justifyContent: "end" }}>
          <Subtext>{props.date}</Subtext>
        </Card.Footer>
      </Crd>
    </div>
  );
};
