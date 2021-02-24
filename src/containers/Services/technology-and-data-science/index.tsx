import Button from "@components/Button"
import Heading from "@components/Heading"
import InfoGrid, { IInfoGridItem } from "@components/InfoGrid"
import ServiceInfoStrap from "@components/ServiceInfoStrap"
import Strap from "@components/Strap"
import AboutUsStrap from "@hoc/AboutUsStrap"
import ReachOutBox from "@hoc/ReachOutBox"
import { navigate } from "gatsby"
import React, { ReactElement } from "react"

interface Props {}

function TechnologyAndDataScienceContainer({}: Props): ReactElement {
  const services: IInfoGridItem[] = [
    {
      title: "Project Research &<br/> Ellicitation",
      subTitle:
        "Majority of project faliures happen when there is no research and planning done prior to realization! Most complex problems need acute thinking and preparations. Our experienced research and development experts build a solid plan to tackle any challenge on the road to project’s sucess.",
      // linkText: "Read More",
      // link: "/research-and-planning",
    },
    {
      title: "Agile Team With <br/>Proven Strategies",
      subTitle:
        "Divide the strategy into a collectiive action plan. constituting categorized actions to be performed by various teams, on a correct schedule. We ensure, each step taken contributes to the overall success!",
      // linkText: "Read More",
      // link: "/research-and-planning",
    },
    {
      title: "Data Analysis &<br/>Growth Hacking",
      subTitle:
        "With the help of industry wide used opensourced and inhouse tools, our data experts continously and rigrously collect and analyse data from system wide sources. The insightful results derrive company’s growth and help enhance the product to adapt to the current market needs.",
      // linkText: "Read More",
      // link: "/research-and-planning",
    },
  ]

  const process = [
    {
      title: "DIVIDE & CONQURE",
      subTitle:
        "Your most complex problems, can be solved with ease when each aspect of the whole problem is dealt with, separately. Every aspect of the problem is tackled by our experts, having experience in domain pertaining to that aspect repectively.",
      imageURL: require("@images/tds-ico1.svg"),
    },
    {
      title: "CONECPTUALIZE",
      subTitle:
        "The initial phase includes regular meetups with the client and stakeholders to gather as much information as possible about the project. To proceed correctly, our team conceptualizes the whole idea behind the problem statement.",
      imageURL: require("@images/tds-ico2.svg"),
    },
    {
      title: "LATEST TECHSTACKS",
      subTitle:
        "We believe a great project is one which is viable , fast, robust and secure while being a profitable solution to our client. To achieve this, we make sure we are up to date with the tech trends in the market.",
      imageURL: require("@images/tds-ico3.svg"),
    },
    {
      title: "CONTINOUS PRODUCTION",
      subTitle:
        "While keeping our tools at pace with the current market and technology trends, we make sure our client is not left behind! We use continous integration and delivery process chain to deliver product and updates to our clients 24x7.",
      imageURL: require("@images/tds-ico4.svg"),
    },
    {
      title: "DATA SPEAKS TRUTH",
      subTitle:
        "We don’t just stop after delivering the product to our clients, but keep ourselves fully indulged afterwards too! We squeez the meaningful results out of data and use them to enhance the product even further!",
      imageURL: require("@images/tds-ico5.svg"),
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
          <ServiceInfoStrap title="TECHNOLOGY & DATA SCIENCE">
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
          backgroundImage: `url(${require("@images/service-tnds-sec1-bg.png")})`,
        }}
        className="w-full bg-cover bg-center bg-no-repeat"
      >
        <div className="max-w-1366 mx-auto py-16 px-8 md:px-0 text-white">
          <InfoGrid items={services} bgTextColor="text-white" />
        </div>
      </div>
      <div>
        <Strap className="bg-violet">
          <div className="px-4 md:px-0 text-center">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Deliver Great Experiences. Grow Faster. Start Today!
              </h3>
            </div>
            <div className="mt-8 w-1/2 md:w-1/3 mx-auto">
              <Button type="secondary" onClick={()=>navigate("/contact")}>Contact Us</Button>
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
      <AboutUsStrap/>
      <ReachOutBox/>
    </>
  )
}

export default TechnologyAndDataScienceContainer
