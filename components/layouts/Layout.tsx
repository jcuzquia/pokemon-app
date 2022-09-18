import Head from "next/head";
import { FC, ReactNode } from "react";
import Navbar from "../ui/Navbar";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Camilo Uzquiano" />
        <meta name="description" content="Informacion sobre el pokemon XXXXX" />
        <meta name="keywords" content="XXXXX, pokemon, pkedex" />
        <meta property="og:title" content={`Informacion sobre ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la pagina sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/imgs/banner.png`} />
      </Head>
      <Navbar />

      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
