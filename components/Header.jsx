import Image from "next/image";
import Link from "next/link";

import styles from "@/app/page.module.css";

export const Header = () => {
  return (
    [
      <Image
        key="1"
        className={styles.logo}
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />,
      <ol key="2">
        <li>
          Get started by editing <code>app/page.js</code>.
        </li>
        <li>Save and see your changes instantly.</li>
        <li><Link href="/about">About Page</Link></li>
      </ol>
    ]
  )
};
