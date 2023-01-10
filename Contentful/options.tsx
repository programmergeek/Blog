import { Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { Text, Title } from "../Components";

export const RenderOption: Options = {
  renderNode: {
    [BLOCKS.HEADING_2]: (node, children) => {
      return <Title css={{ fontSize: 35 }}> {children} </Title>;
    },
  },
};
