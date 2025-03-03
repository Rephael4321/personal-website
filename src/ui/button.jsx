import styles from "./button.module.css";
import Link from "next/link";

export default function Button({ text, href, theme }) {
  const buttonStyle =
    theme === "light" ? styles.button_light : styles.button_dark;
  return (
    <Link href={href}>
      <button className={`${buttonStyle} ${styles.button}`}>{text}</button>
    </Link>
  );
}
