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
        className="bg-no-repeat bg-center bg-cover "
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
                Reactive
                <br />
                Marketing
              </h3>
            </div>
          </div>
          <div
            className="bg-white rounded-lg shadow-lg p-8 absolute"
            style={{ bottom: "-150px" }}
          >
            <div className="flex ">
              <div className="flex items-center w-1/3">
                <div className="flex-shrink-0 pr-4">
                  <img src={require("@images/aim-start-icon.svg")} />
                </div>
                <div className="">
                  <h5 className="font-bold">Start</h5>
                  <p className="pt-2 hidden md:block">
                    With a small sparkling ofidea in our client’s mind.
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
                  <h5 className="font-bold">Finish</h5>
                  <p className="pt-2 hidden md:block">
                    Complete realization with customer satisfaction.
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
        <div className="max-w-1366 mx-auto pt-48 pb-16 px-8 md:px-0">
          <div className="flex">
            <div className="w-full md:w-1/2">
              <h3 className="font-bold text-xl">ABOUT THE COMPANY</h3>
              <p className="text-justify py-4">
                Kickstarted in 2018, with an idea in mind to help industries in
                various sectors build a solid and consistent platform to gain
                YoY profits with the help of proven marketing strategies (built
                in-house). As a team comprising of skillfull members, we
                continued on acheiving milestones by completing various projects
                of varying complexities and converting them into sustainable
                business models. With many in-house projects developed and
                marketing campaigns executed successfuly, out clientel expansion
                has made it accross the globe! We thrive to acheive more and
                more. With our increasing team comprising of domain seggregated
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
              <Button type="secondary" onClick={()=>navigate("/contact")}>Contact Us</Button>
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
            As enterprises and organisations becoming digitally enabled, R&D and
            IT spends are converging to create Smart Industries. Disruptors such
            as Cloud, IoT, Data, Machine Learning, Artificial Intelligence etc.
            are at the core of this convergence and are driving organizational
            efficiencies and helping build new products / services for a smarter
            tomorrow.
            <br />
            <br />
            Technology and talent are important pillars for the these digitally
            enabled smart industries and will be critical deciding who emerges
            as a leader in the new smarter, connected world.
            <br />
            <br />
            Reactive Marketing delivers cross-industry expertise in technology
            and digital marketing, consulting, talent services and skilling to
            enable digital transformation and accelerate innovation and company
            growth.
            <br />
            <br />
            Reactive Marketing with its core offerings of Marketing and IT
            services is strategically positioned to help our clients deploy
            their digital technology roadmaps, develop innovative products
            faster, and create new business opportunities.
            <br />
            <br />
          </p>
        </div>
      </div>
      <AboutUsStrap/>
      <ReachOutBox/>
    </div>
  )
}

export default AboutUsContainer
