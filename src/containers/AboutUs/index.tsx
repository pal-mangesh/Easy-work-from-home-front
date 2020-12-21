import React, { ReactElement } from "react"

interface Props {}

function AboutUsContainer({}: Props): ReactElement {
  const story = [
    {
      date: "Oct 2015",
      title: "Kick Started",
      content: "Bunch of experienced Real Estate agents start their jurney!",
    },
    {
      date: "Nov 2015",
      title: "Public Launch",
      content:
        "Props Mart unveils a new website, business model, and vision to the public with Lauren Haw as CEO & Broker of Record",
    },
    {
      date: "July 2018",
      title: "100,000 Newsletter Subscribers",
      content:
        "100,000 readers now subscribe to the PropsMart weekly newsletter offering market insights and the latest real estate trends.",
    },
    {
      date: "Nov 2019",
      title: "Deloitte Tech Fast 50 Win",
      content:
        "Presented the Deloitte Technology Fast 50 Award recognizing 50 public and private tech companies in Canada with the highest revenue growth rate over four years.",
    },
    {
      date: "Jan 2020",
      title: "100+ Agents",
      content:
        "PropsMart's 100th licensed real estate agent joins the in-house brokerage team",
    },
    {
      date: "Mar 2020",
      title: "$10 Million in Home Sales",
      content:
        "Zoocasa’s team of in-house agents cross $10 million in home sales.",
    },
    {
      date: "Today",
      title: "Achieving many more milestones!",
      content:
        "PropsMart's team on a mission to provide the most ease of access in the Real Estate industry!.",
    },
  ]
  return (
    <div>
      <div
        className="w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${require("@images/about-us-bg.jpg")})`,
          height: "300px",
        }}
      >
        <div style={{ maxWidth: "800px" }} className=" mx-auto">
          <div className="flex items-center" style={{ height: "300px" }}>
            <div>
              <h3 className="text-5xl text-white px-4 md:px-0">About Us</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-1366 mx-auto">
        <div
          style={{ maxWidth: "800px" }}
          className="py-8 px-4 md:px-0 mx-auto"
        >
          <div className=" ">
            <div>
              <h3 className="text-3xl">Our Story</h3>
            </div>
            <div className="text-xl text-justify">
              <div className="py-2">
                PropsMart is an award winning brokerage that uses data and
                technology to deliver an intelligent, end-to-end real estate
                experience.
              </div>
              <div className="py-2">
                Our insights and suite of digital tools, combined with the
                market expertise of our in-house agents and brokerage team
                allows us to set a new standard for full-service real estate in
                Canada.
              </div>
            </div>
            <div className="py-8">
              <div className="relative">
                <div
                  className="absolute"
                  style={{
                    borderRight: "1px solid black",
                    top: "20px",
                    left: "90px",
                    bottom: "-50px",
                    width: "1px",
                    zIndex: -1,
                  }}
                />
                <div>
                  {story.map((sp: any) => (
                    <>
                      <div className="flex items-center py-4">
                        <div
                          className="pr-2 flex-shrink-0"
                          style={{ width: "60px" }}
                        >
                          {sp.date}
                        </div>
                        <div
                          className="w-8 h-8 flex-shrink-0 rounded-full mx-4 bg-white"
                          style={{ border: "1px solid black" }}
                        />
                        <div className="pl-2">
                          <h3 className="text-xl">{sp.title}</h3>
                          {sp.content}
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsContainer
