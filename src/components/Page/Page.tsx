import { FC, ReactNode, ReactElement } from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import ProjectBanner from "../Banner/ProjectBanner/ProjectBanner";
import "./Page.css";
import Footer from "../Footer/Footer";

interface PageProps {
  banner: ReactElement<typeof Banner> | ReactElement<typeof ProjectBanner>;
  children?: ReactNode;
}

const Page: FC<PageProps> = ({ banner, children }: PageProps) => {
  return (
    <>
      <Navbar />
      <header>{banner}</header>
      <main id="content">{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Page;
