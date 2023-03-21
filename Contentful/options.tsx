import { Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { useEffect, useState } from "react";
import { Text, Title } from "../Components";

export const RenderOption: Options = {
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => {
      return (
        <Title
          css={{
            fontSize: "$5xl",
            lineHeight: "40px",
            marginBottom: "10px",
            marginTop: "30px",
            "@sm": {
              fontSize: "$6xl",
              lineHeight: "$6xl",
            },
            "@md": {
              fontSize: "$8xl",
              lineHeight: "$8xl",
            },
          }}
        >
          {" "}
          {children}{" "}
        </Title>
      );
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return (
        <Title
          css={{
            fontSize: "$4xl",
            lineHeight: "40px",
            marginBottom: "10px",
            marginTop: "30px",
            "@sm": {
              fontSize: "$5xl",
              lineHeight: "$6xl",
            },
            "@md": {
              fontSize: "$6xl",
              lineHeight: "$8xl",
            },
          }}
        >
          {" "}
          {children}{" "}
        </Title>
      );
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <Text>{children}</Text>;
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      const codeSnippet =
        node.data.target.fields.codeBlock.content[0].content[0].value;
      const [isCopied, updateIsCopied] = useState(false);

      useEffect(() => {
        setTimeout(() => updateIsCopied(false), 2000);
      }, [isCopied]);
      return (
        <div
          style={{
            backgroundColor: "#303030",
            color: "white",
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 10,
            paddingBottom: 10,
            overflow: "auto",
            fontFamily: "monospace",
            width: "100%",
            borderRadius: "5px",
            position: "relative",
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <code style={{ backgroundColor: "transparent", color: "white" }}>
            {codeSnippet}
          </code>
          <button
            style={{
              backgroundColor: "rgb(142, 53, 8)",
              color: "white",
              paddingLeft: 12,
              paddingRight: 12,
              paddingTop: 3,
              paddingBottom: 3,
              fontSize: 12,
              position: "absolute",
              top: 10,
              right: 10,
              fontFamily: "monospace",
              border: "none",
              borderRadius: 2,
              cursor: "pointer",
            }}
            onClick={() => {
              navigator.clipboard.writeText(codeSnippet);
              updateIsCopied(true);
            }}
          >
            {isCopied ? "copied" : "copy"}
          </button>
        </div>
      );
    },
  },
  renderMark: {
    [MARKS.CODE]: (text) => {
      return (
        <code
          style={{
            color: "rgb(142, 53, 8)",
            backgroundColor: "transparent",
            fontSize: 16,
          }}
        >
          {text}
        </code>
      );
    },
  },
};
