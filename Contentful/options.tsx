import { Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
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
  },
  renderMark: {
    [MARKS.CODE]: (text) => {
      return (
        <code style={{ color: "black", backgroundColor: "white" }}>
          {" "}
          {text}{" "}
        </code>
      );
    },
  },
};
