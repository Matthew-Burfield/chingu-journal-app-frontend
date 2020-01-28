import React from "react";
import Link from "next/link";
import Button, { ButtonProps, ButtonTypeMap } from "@material-ui/core/Button";

interface Props {
  href: string;
  as?: string;
  children: string;
  prefetch?: boolean;
  color: "default" | "inherit" | "primary" | "secondary";
}

const ButtonLink = ({ href, as, children, color, prefetch }: Props) => (
  <Link href={href} as={as} prefetch={prefetch}>
    <Button component="a" color={color}>
      {children}
    </Button>
  </Link>
);

ButtonLink.defaultProps = {
  prefetch: false,
  color: "inherit"
};

export default ButtonLink;
