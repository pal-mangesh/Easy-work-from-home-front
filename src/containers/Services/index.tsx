import Button from "@components/Button"
import InfoGrid, { IInfoGridItem } from "@components/InfoGrid"
import ServiceInfoStrap from "@components/ServiceInfoStrap"
import Strap from "@components/Strap"
import React, { ReactElement } from "react"

function ServicesContainer(): ReactElement {
  const services: IInfoGridItem[] = [
    {
      title: "Research & Planning",
      subTitle:
        "Systematic approach entailing collection of data; documentation of critical information; and analysis and interpretation of that data/information, in accordance with suitable methodologies set by industry professionals and skillful experts.",
      linkText: "Read More",
      link: "/research-and-planning",
    },
    {
      title: "Tech & Data Science",
      subTitle:
        "Curating required tools and strategies, derived from the research and investigation done for particular usecase in hand. Our team of software engineers and digital media experts setup the infrastructure required to execute the strategy as smoothly as possible! ",
      linkText: "Read More",
      link: "/research-and-planning",
    },
    {
      title: "Branding & Marketing",
      subTitle:
        "With experience of over 15+ years, our media experts always take the proven paths to spread your identity in the market! We understand how much your brand face is important to your business, so we promote you over the most profitable platforms!",
      linkText: "Read More",
      link: "/research-and-planning",
    },
    {
      title: "Design & Creativity",
      subTitle:
        "Solving complex problems, needs creative minds with design-thinking to streamline the ideas of creating innovative solutions! Our team of design experts always makes sure that your business is publicized correctly through our Creative and Social Media Designs!",
      linkText: "Read More",
      link: "/research-and-planning",
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
          <ServiceInfoStrap title="OUR SERVICE OFFERINGS">
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
          backgroundImage: `url(${require("@images/service-sec1-bg.png")})`,
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
    </>
  )
}

export default ServicesContainer
