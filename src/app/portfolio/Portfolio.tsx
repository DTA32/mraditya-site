"use client";
import PortfolioCard from "./PortfolioCard";
import PortfolioJSON from "@/data/portfolio.json";
import { useState } from "react";
import { PortfolioModalProps } from "@/types/PortfolioModal";
import PortfolioModal from "./PortfolioModal";
import ContactCard from "@/components/ContactCard";
import Link from "next/link";

// TODO: this is very bloated and weird approach used, refactor to use useContext later
function CardMapper(props: {
  portfolio: PortfolioModalProps;
  redirectToPage: boolean;
}): JSX.Element {
  return (
    <PortfolioCard
      id={props.portfolio.id}
      title={props.portfolio.title}
      image={props.portfolio.image[0]}
      description={props.portfolio.description}
      techStack={props.portfolio.techStack.slice(0, 3)}
      redirectToPage={props.redirectToPage}
    />
  );
}

export default function Portfolio({
  redirectToPage,
}: {
  redirectToPage: boolean;
}) {
  const [modalData, setModalData] = useState<PortfolioModalProps | null>(null);

  function closeModal() {
    setModalData(null);
  }

  function CardWrapper(props: {
    portfolio: PortfolioModalProps;
    children: React.ReactNode;
    redirectToPage: boolean;
  }): JSX.Element {
    if (props.redirectToPage) {
      return (
        <Link
          key={props.portfolio.title}
          href={"/portfolio/" + props.portfolio.id}
          className="flex justify-center cursor-pointer w-full md:w-[calc(50%-2rem)] max-h-[240px]"
        >
          {props.children}
        </Link>
      );
    } else {
      return (
        <div
          key={props.portfolio.title}
          onClick={() => setModalData(props.portfolio)}
          className="flex justify-center cursor-pointer w-full md:w-[calc(50%-2rem)] max-h-[240px]"
        >
          {props.children}
        </div>
      );
    }
  }

  return (
    <>
      <section
        className="min-h-[90vh] h-full bg-slate-800 py-12 text-neutral-100 flex justify-center items-center"
        id="portfolio"
      >
        <div className="max-w-screen-xl flex flex-col gap-20 mx-8">
          <div className="flex flex-col gap-12">
            <div className="flex w-full justify-center items-center gap-4">
              <h2 className="text-4xl">Portfolio</h2>
              <ContactCard
                icon={"github"}
                platform={"GitHub"}
                username={"DTA32"}
                link={"https://github.com/DTA32"}
                type={0}
              />
            </div>
            <div
              className="flex justify-center flex-wrap gap-x-16 gap-y-8 md:gap-y-12"
              style={{ height: "-webkit-fill-available" }}
            >
              {PortfolioJSON.main.map((portfolio) => (
                <CardWrapper
                  key={portfolio.id}
                  portfolio={portfolio}
                  redirectToPage={redirectToPage}
                >
                  <CardMapper
                    portfolio={portfolio}
                    redirectToPage={redirectToPage}
                  />
                </CardWrapper>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-8 mx-8">
            <div className="flex flex-col gap-2 text-center">
              <h3 className="text-3xl">Showcase</h3>
              <p>Small projects that i just want to display</p>
            </div>
            <div
              className="flex justify-center flex-wrap gap-x-16 gap-y-8 md:gap-y-12"
              style={{ height: "-webkit-fill-available" }}
            >
              {PortfolioJSON.showcase.map((portfolio) => (
                <CardWrapper
                  key={portfolio.id}
                  portfolio={portfolio}
                  redirectToPage={redirectToPage}
                >
                  <CardMapper
                    portfolio={portfolio}
                    redirectToPage={redirectToPage}
                  />
                </CardWrapper>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-8 mx-8">
            <div className="flex flex-col gap-2 text-center">
              <h3 className="text-2xl">Older projects</h3>
              <p>From my earlier days in university</p>
            </div>
            <div
              className="flex justify-center flex-wrap gap-x-16 gap-y-8 md:gap-y-12"
              style={{ height: "-webkit-fill-available" }}
            >
              {PortfolioJSON.old.map((portfolio) => (
                <CardWrapper
                  key={portfolio.id}
                  portfolio={portfolio}
                  redirectToPage={redirectToPage}
                >
                  <CardMapper
                    portfolio={portfolio}
                    redirectToPage={redirectToPage}
                  />
                </CardWrapper>
              ))}
            </div>
          </div>
        </div>
      </section>
      {modalData && <PortfolioModal data={modalData} closeFunc={closeModal} />}
    </>
  );
}
