import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja list | Hom</title>
        <meta name="keyword" content="ninjas" />
      </Head>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <Link href="/ninjas" className={styles.btn}>
        See Ninja Listing
      </Link>
    </>
  );
}
