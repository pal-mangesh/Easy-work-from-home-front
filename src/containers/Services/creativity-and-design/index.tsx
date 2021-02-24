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

function CreativityAndDesignContainer({}: Props): ReactElement {
  const services: IInfoGridItem[] = [
    {
      title: "Crafting an<br/>Unique Design",
      subTitle:
        "Crafting unique identity for your unique business. Narrate your awesome story to your target audience. Brand position & perception drives more than 30% of your results",
    },
    {
      title: "Logo & Brochure<br/> Designing",
      subTitle:
        "Minimalistic designs that can communicate the intention, yet be elegant & simple. When organized information is combined with creative thinking, we deliver your awesome story in the form of creative marketing brochures.",
    },
    {
      title: "UIs & User<br/> Experience Designing",
      subTitle:
        "Design is how it works, not just what it looks like. Clean UI & Simple UX is the key differentiator from your competitors. 80% of our customers are repeat customers because of our unique designs",
    },
  ]

  const process = [
    {
      title: "PROFESSIONAL CRAFTING",
      subTitle:
        "Skilled team to craft your vision. Scientific approaches for best theme and colors. With 360° view of business activities. Uniquely crafted end products. Reach target audience",
      imageURL: require("@images/cnd-crafting-icon.svg"),
    },
    {
      title: "CRISP CLEAR GRAPHICS",
      subTitle:
        "Graphics that are easy to understand. Infographics that tell more about your business. Vector designing for crisp graphics.",
      imageURL: require("@images/cnd-graphic-icon.svg"),
    },
    {
      title: "UI/UX DESIGN",
      subTitle:
        "A workshop aimed at shaping your business idea, answering questions regarding project planning, time estimation and budgeting",
      imageURL: require("@images/cnd-uiux-icon.svg"),
    },
    {
      title: "LATEST TRENDS",
      subTitle:
        "Following latest design trends. Uniquely crafted logos to match your business. Soothing color schemes.",
      imageURL: require("@images/cnd-trend-icon.svg"),
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
          <ServiceInfoStrap title="CREATIVITY <br/> & DESIGN">
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
          backgroundImage: `url(${require("@images/service-cd-sec1-bg.png")})`,
        }}
        className="w-full bg-cover bg-center bg-no-repeat"
      >
        <div className="max-w-1366 mx-auto py-16 px-8 md:px-0 text-white">
          <InfoGrid items={services} bgTextColor="text-white" />
        </div>
      </div>
      <div>
        <Strap style={{ backgroundColor: "#B80058" }}>
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

export default CreativityAndDesignContainer
