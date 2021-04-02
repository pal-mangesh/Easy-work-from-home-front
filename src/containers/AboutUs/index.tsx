import Button from "@components/Button"
import Strap from "@components/Strap"
import AboutUsStrap from "@hoc/AboutUsStrap"
import ReachOutBox from "@hoc/ReachOutBox"
import { navigate } from "gatsby"
import React, { ReactElement } from "react"

interface Props {}

function AboutUsContainer({}: Props): ReactElement {
  return (
    <div>
      <div
        className="bg-no-repeat bg-center bg-cover pt-24"
        style={{
          backgroundImage: `url(${require("@images/about-us-sec1-bg.png")})`,
          paddingBottom: "50px",
        }}
      >
        <div className="max-w-1366 mx-auto pt-8 relative">
          <div className="flex justify-center">
            <div className="text-center text-white">
              <h5 className="pb-2">We are,</h5>
              <h3 className="text-3xl ">
                EASY
                <br />
                WORK FROM HOME
              </h3>
            </div>
          </div>
          <div
            className="bg-white rounded-lg shadow-lg p-8 absolute hidden md:block"
            style={{ bottom: "-150px" }}
          >
            <div className="flex ">
              <div className="flex items-center w-1/3">
                <div className="flex-shrink-0 pr-4">
                  <img src={require("@images/aim-start-icon.svg")} />
                </div>
                <div className="">
                  <h5 className="font-bold">START</h5>
                  <p className="pt-2 hidden md:block">
                    JOIN US USING OUR EASY ONBOARDING PROCESS
                  </p>
                </div>
              </div>
              <div className="flex items-center w-1/3">
                <div className="px-8">
                  <img src={require("@images/aim-path-icon.svg")} />
                </div>
              </div>
              <div className="flex items-center w-1/3">
                <div className="flex-shrink-0 pr-4">
                  <img src={require("@images/aim-end-icon.svg")} />
                </div>
                <div className="">
                  <h5 className="font-bold">FINISH</h5>
                  <p className="pt-2 hidden md:block">
                    GET YOUR FIRST PAYOUT JUST AFTER A WEEK OF JOINING
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div
          className="bg-no-repeat bg-right absolute "
          style={{
            backgroundImage: `url(${require("@images/about-us-sec-2-bg.png")})`,
            top: 0,
            bottom: 0,
            left: "50%",
            right: 0,
            zIndex: -1,
          }}
        />
        <div className="max-w-1366 mx-auto pt-16 md:pt-48 pb-16 px-8 md:px-0">
          <div className="flex">
            <div className="w-full md:w-1/2">
              <h3 className="font-bold text-xl">ABOUT THE COMPANY</h3>
              <p className="text-justify py-4">
                Kickstarted in 2015, with an idea in mind to help individuals,
                from across the globe, get financial freedome by letting them
                work from the comfort of their homes, while following the most
                flexible work timings in the industry.
                <br />
                <br />
                As a team comprising of skillfull members, we continued on
                acheiving milestones by completing various projects of varying
                complexities and converting them into sustainable business
                models with the help of our tranined individuals spread all over
                the world.
                <br />
                <br />
                With many in-house projects developed and marketing campaigns
                executed successfuly, out clientel expansion has made it accross
                the globe as well! We thrive to acheive more and more.
                <br />
                <br />
                With our increasing team comprising of domain seggregated
                skills, we help our clients to make their clients and customers
                even more happier!
              </p>
            </div>
            <div />
          </div>
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
              <Button type="secondary" onClick={() => navigate("/contact")}>
                Contact Us
              </Button>
            </div>
          </div>
        </Strap>
      </div>
      <div className="py-32">
        <div className="max-w-1366 mx-auto text-center px-8 md:px-0">
          <div className="flex justify-center pb-8">
            <img src={require("@images/about-us-sec-3-bg.png")} />
          </div>
          <h3 className="text-xl font-bold">OUR VISION</h3>
          <p className="text-justify py-8">
            To emerge as one of the leading online Company with main aim to
            provide the world with easy to approach and comfortable work from
            home job opportunities.
            <br />
            <br />
            To accept challenges of the future, and meet them with flexible
            solutions that help better society.
            <br />
            <br />
            To obtain complete customer satisfaction by judging wisely and
            acting promptly.
            <br />
            <br />
            To seek fair action and a reasonable profit, while strictly
            conducting ourselves in an ethical maner.
            <br />
            <br />
            To utilize our full capabilities to maximize corporate growth and
            promote a harmonious environment for all our remote employees and
            their relations.
          </p>
        </div>
      </div>
      <AboutUsStrap />
      <ReachOutBox />
    </div>
  )
}

export default AboutUsContainer
