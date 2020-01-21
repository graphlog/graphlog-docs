import Link, { LinkProps } from "next/link";
import styles from "./UnstyledLink.module.css";

interface UnstyledLinkProps extends LinkProps {
  children: any;
}

export const UnstyledLink = ({ children, ...props }: UnstyledLinkProps) => (
  <Link {...props}>
    <a className={styles.link}>{children}</a>
  </Link>
);
