import { Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { Text, Title } from "../Components";

export const RenderOption: Options = {
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => {
      return <Title> {children} </Title>;
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return <Title style={{ fontSize: 65 }}> {children} </Title>;
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
