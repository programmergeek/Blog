import React from "react";
import {
  Input,
  Link,
  Navbar as NextUINav,
  NavbarProps,
} from "@nextui-org/react";
import { Btn } from "../Button/Button";

export const Navbar: React.FC<NavbarProps> = ({ css, ...props }) => {
  const collapseItems = [
    {
      label: "#Web Dev",
      slug: "web-dev",
    },
    {
      label: "#Design",
      slug: "design",
    },
    {
      label: "#Just Me",
      slug: "just-me",
    },
  ];

  return (
    <NextUINav
      css={{ boxShadow: "none", ...css }}
      variant="sticky"
      {...props}
      containerCss={{ "@md": { padding: 0 } }}
    >
      <NextUINav.Toggle showIn="xs" aria-label="toggle navigation" />
      <NextUINav.Content hideIn="xs">
        {collapseItems.map((item) => (
          <NextUINav.Link key={item.slug} href={`/category/${item.slug}`}>
            <Btn size="lg">{item.label}</Btn>
          </NextUINav.Link>
        ))}
      </NextUINav.Content>
      <NextUINav.Content>
        <NextUINav.Item>
          <Input
            css={{ fontFamily: "Teko", fontSize: 25 }}
            underlined
            clearable
            placeholder="Search"
            color="primary"
            size="xl"
          />
        </NextUINav.Item>
      </NextUINav.Content>
      <NextUINav.Collapse css={{ display: "grid", placeItems: "center" }}>
        {collapseItems.map((item) => (
          <NextUINav.CollapseItem key={item.slug}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
                fontFamily: "Teko",
                fontSize: 50,
                textAlign: "center",
              }}
              href={`/category/${item.slug}`}
            >
              {" "}
              {item.label.toUpperCase()}{" "}
            </Link>
          </NextUINav.CollapseItem>
        ))}
      </NextUINav.Collapse>
    </NextUINav>
  );
};
