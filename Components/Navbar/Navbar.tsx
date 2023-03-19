import React from "react";
import {
  Input,
  Link,
  Navbar as NextUINav,
  NavbarProps,
} from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { useRouter } from "next/router";
import style from "../../styles/Navbar.module.css";

type Search = {
  search: string;
};

export const Navbar: React.FC<NavbarProps> = ({ css, ...props }) => {
  const { register, handleSubmit } = useForm<Search>();
  const router = useRouter();
  const onSubmit: SubmitHandler<Search> = (data) => {
    router.push({
      pathname: "/search/1",
      query: { search: data.search },
    });
  };
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
      containerCss={{
        maxWidth: 1460,
        padding: 0,
      }}
    >
      <NextUINav.Toggle showIn="xs" aria-label="toggle navigation" />
      <NextUINav.Content hideIn="xs">
        {collapseItems.map((item) => (
          <NextUINav.Link key={item.slug} href={`/category/${item.slug}`}>
            <button className={style["nav-btn"]}>{item.label}</button>
          </NextUINav.Link>
        ))}
      </NextUINav.Content>
      <NextUINav.Content>
        <NextUINav.Item>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              css={{ fontFamily: "Teko", fontSize: 25 }}
              underlined
              clearable
              placeholder="Search"
              color="primary"
              size="xl"
              {...register("search")}
            />
          </form>
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
