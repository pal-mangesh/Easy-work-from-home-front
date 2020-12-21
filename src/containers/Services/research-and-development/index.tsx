import Button from "@components/Button"
import Heading from "@components/Heading"
import InfoGrid, { IInfoGridItem } from "@components/InfoGrid"
import ServiceInfoStrap from "@components/ServiceInfoStrap"
import Strap from "@components/Strap"
import React, { ReactElement } from "react"

interface Props {}

function ResearchAndDevelopmentContainer({}: Props): ReactElement {
  const services: IInfoGridItem[] = [
    {
      title: "Build-up a Strategy",
      subTitle:
        "Most businesses fail wihtout a good one! Strategy building seems scary to hear as a word but is the utmost important  step in the initial phase. ReactiveMarkerting makes sure that you have a sound strategy to tackle major challenges on the road to success of your company!",
      linkText: "Read More",
      link: "/research-and-planning",
    },
    {
      title: "Make an Action Plan",
      subTitle:
        "Divide the strategy into a collectiive action plan. constituting categorized actions to be performed by various teams, on a correct schedule. We ensure, each step taken contributes to the overall success!",
      linkText: "Read More",
      link: "/research-and-planning",
    },
    {
      title: "Careful Execution",
      subTitle:
        "Despite our simplification of the term strategy, there’s no doubt it can be difficult to get started building one. We should perceive what a digital marketing campaign looks like, and then, we’ll jump into those seven building blocks to help you create an effective digital marketing strategy to set up your business for online success.",
      linkText: "Read More",
      link: "/research-and-planning",
    },
  ]

  const process = [
    {
      title: "IDEATION",
      subTitle:
        "Give your product idea a shape. Plan and evaluate the essential features of your product to accomplish your business goals and eliminate possible mistakes. No matter you need to craft the idea for a completely new product or evaluate the quality of an already existing one - we're here to help you.",
      imageURL: require("@images/rnp-ideation-icon.svg"),
    },
    {
      title: "PRODUCT DESIGN",
      subTitle:
        "A five-day workshop that will help you answer crucial business questions, plan the essential features of your product and reduce the risk of bringing a product to the market.",
      imageURL: require("@images/rnp-product-design-icon.svg"),
    },
    {
      title: "SCOPING SESSION",
      subTitle:
        "A workshop aimed at shaping your business idea, answering questions regarding project planning, time estimation and budgeting",
      imageURL: require("@images/rnp-scoping-session-icon.svg"),
    },
    {
      title: "UX REVIEW",
      subTitle:
        "An evaluation which will help you radically improve your product by eliminating all UX issues to get a truly appealing and streamlined experience that users will love.",
      imageURL: require("@images/rnp-ux-review-icon.svg"),
    },
    {
      title: "R&D",
      subTitle:
        "A validation of your idea in just 6 weeks. Experiment with ideas and technologies to secure cutting-edge products and sustained development.",
      imageURL: require("@images/rnp-rnd-icon.svg"),
    },
  ]

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${require("@images/home-bg.svg")})`,
        }}
        className="w-full bg-cover bg-center bg-no-repeat"
      >
        <div className="max-w-1366 mx-auto py-16 px-8 md:px-0">
          <ServiceInfoStrap title="RESEARCH & PLANNING">
            <span>
              How do you translate business needs into analytics strategies?
              ReactiveMarketing has an unique approach to Creating consistent,
              scalable governance frameworks that function across Use cases and
              analytics levels.
            </span>
          </ServiceInfoStrap>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${require("@images/service-rnp-sec1-bg.png")})`,
        }}
        className="w-full bg-cover bg-center bg-no-repeat"
      >
        <div className="max-w-1366 mx-auto py-16 px-8 md:px-0 text-white">
          <InfoGrid items={services} bgTextColor="text-white" />
        </div>
      </div>
      <div>
        <Strap className="bg-blue-500">
          <div className="px-4 md:px-0 text-center">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Deliver Great Experiences. Grow Faster. Start Today!
              </h3>
            </div>
            <div className="mt-8 w-1/2 md:w-1/3 mx-auto">
              <Button type="secondary">Contact Us</Button>
            </div>
          </div>
        </Strap>
      </div>
      <div
        style={{
          backgroundImage: `url(${require("@images/services-common-bg.png")})`,
        }}
        className="w-full bg-cover bg-center bg-no-repeat"
      >
        <div className="max-w-1366 mx-auto py-16 px-8 md:px-0">
          {process.map((p: any, index: number) => (
            <>
              <div
                className={
                  "md:py-16 py-8 flex flex-col " +
                  (index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse")
                }
              >
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                  <div className="mb-8">
                    <Heading color="bg-blue-500" className="text-3xl">
                      {p.title}
                    </Heading>
                  </div>
                  <h5 className="text-justify">{p.subTitle}</h5>
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center">
                  <img src={p.imageURL} />
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default ResearchAndDevelopmentContainer
