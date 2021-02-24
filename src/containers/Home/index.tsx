import Button from "@components/Button"
import InfoGrid from "@components/InfoGrid"
import SlickSlider from "@components/Slick"
import Strap from "@components/Strap"
import AboutUsStrap from "@hoc/AboutUsStrap"
import CommonStrap from "@hoc/CommonStrap"
import Grid from "@hoc/GridDisplay"
import Image from "@hoc/Image"
import ReachOutBox from "@hoc/ReachOutBox"
import SearchBar from "@hoc/SearchBar"
import Testimonials from "@hoc/Testimonials"
import CommonUtils from "@utils/CommonUtils"
import Network from "@utils/Network"
import { Link, navigate } from "gatsby"
import React, { ReactElement } from "react"

function HomeContainer(): ReactElement {
  const [slider, setSlider] = React.useState({} as any)
  const [listing, setListing] = React.useState({} as any)

  React.useEffect(() => {
    init()
  }, [])

  const onSearchClick = (query: any) => {
    const queryString = CommonUtils.jsonToQueryString(
      JSON.parse(JSON.stringify(query))
    )
    navigate("/search?" + queryString)
  }
  const init = async () => {
    const _slider = await fetchSlider("HOME_SLIDER")
    const _listing = await fetchSlider("LISTING_SLIDER")
    setSlider({ ..._slider })
    setListing({ ..._listing })
  }

  const fetchSlider = async (name: string) => {
    try {
      const { data } = await Network.get("sliders?name=" + name)
      return data && data.length && data[0]
    } catch (e) {
      console.log(e)
    }
  }

  const process = [
    {
      title: "Research & Analyze the market",
      subTitle:
        "Considering every aspect of the market and keeping a close eye on the current market trends! Thoughtful selection of market strategies puts us ahead of others!",
    },
    {
      title: "Preplan & prepare best strategy",
      subTitle:
        "We curate the best strategy suited for your business. Dedicated research and thourough examination of proven strategies help us come up with one!",
    },
    {
      title: "Execute, Monitor, Enhance & grow!",
      subTitle:
        "Carefull execution and continous interaction among our stakeholders ensures the outcome to be what is expected!",
    },
  ]

  const mission = {
    title: "Our Mission",
    subTitle:
      "We are Reactive Marketing Pvt. Ltd. An IT based Marketing & Development solutions company, with our main aim to produce most performing and to-the-point digital solutions from within India.",
    points: [
      {
        text:
          "To emerge as one of the leading Information Technology Company with main aim to provide the world with beautiful and better solutions to most complext problems.",
      },
      {
        text:
          "To accept challenges of the future, and meet them with flexible solutions that help better society.",
      },
      {
        text:
          "To obtain complete customer satisfaction by judging wisely and acting promptly.",
      },
      {
        text:
          "To seek fair action and a reasonable profit, while strictly conducting ourselves in an ethical maner.",
      },
      {
        text:
          "To utilize our full capabilities to maximize corporate growth and promote a harmonious environment for all individuals and their relations.",
      },
    ],
  }

  const testimonials = [
    {
      imageURL: require("@images/eli-dp.png"),
      author: "Eli",
      comment:
        "“Wanted to update our tech stack to the match the latest trends. You guys made it a breeeze!”",
      title: "Founder",
      subTitle: "MadisonL",
    },
    {
      imageURL: require("@images/dummy-dp.png"),
      author: "Mellisa",
      comment:
        "“Helped our company's revenue grow by 12%! These guys are now marked under my top 10 recommendations list. ”",
      title: "Founder",
      subTitle: "Props Mart LLC.",
    },
    // {
    //   imageURL: require("@images/rahul-dp.png"),
    //   author: "Rahul",
    //   comment:
    //     "“Experienced team, helped me with real estate lead generation. Satisifed so far!”",
    //   title: "Founder",
    //   subTitle: "Marketise.ca",
    // },
    {
      imageURL: require("@images/saurabh-dp.png"),
      author: "Saurabh",
      comment:
        "“Wanted my business to have online presence in less time. Got better than what I expected!”",
      title: "Founder",
      subTitle: "Stock Pack Investments.",
    },
  ]

  const serviceFeatures = [
    {
      imageURL: require("@images/support-icon.svg"),
      title: "Fast Support",
    },
    {
      imageURL: require("@images/clock-icon.svg"),
      title: "Accelerated Growth",
    },
    {
      imageURL: require("@images/half-star-icon.svg"),
      title: "Proven Strategies",
    },
    {
      imageURL: require("@images/smiley-icon.svg"),
      title: "Customer Satisfaction",
    },
  ]

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  }

  return (
    <div>
      {/* <HeroContainer /> */}
      <div className="relative">
        <div
          className="absolute bg-center bg-cover bg-no-repeat"
          style={{
            top: "0px",
            right: "0px",
            left: "0px",
            bottom: "65px",
            backgroundImage: `url(${require("@images/home-bg.svg")})`,
            zIndex: -1,
          }}
        >
          <div
            style={{ bottom: "-64px" }}
            className="absolute w-full mt-16 flex justify-center"
          >
            <img src={require("@images/scroll-indicator.svg")} />
          </div>
        </div>
        <div className="max-w-1366 mx-auto px-4 md:px-0">
          <div className="pb-48 flex justify-center ">
            <div className="text-center md:mt-24 mt-16">
              <div className="my-4">
                <span>We are, Reactive Marketing Pvt. Ltd.</span>
              </div>
              <div
                className="py-4"
                style={{
                  borderTop: "1px solid black",
                  borderBottom: "1px solid black",
                }}
              >
                <span
                  className="text-xl md:text-3xl font-semibold"
                  style={{ letterSpacing: "5px" }}
                >
                  YOUR COMPLETE DIGITAL SOLUTIONS ALLY
                </span>
              </div>
              <div className="my-8 mx-auto w-1/2 md:w-1/3">
                <Button type="primary" onClick={()=>navigate("/contact")}>Get Started</Button>
              </div>
              <div className="flex items-center justify-center mt-8 md:mt-24">
                <img src={require("@images/logo-cube.svg")} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-1366 mx-auto px-4 md:px-0">
        <div className="my-16">
          <InfoGrid items={process} />
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${require("@images/sec2-bg.png")})`,
        }}
        className="bg-no-repeat bg-cover"
      >
        <div className="max-w-1366 mx-auto bg-cover relative">
          <div
            className="absolute w-full h-full"
            style={{ zIndex: -1, backgroundColor: "rgba(0,0,0,0.7)" }}
          />

          <div className="py-32 px-4 md:px-0 flex justify-center text-white">
            <div className="mx-auto p-0 md:p-16  w-full  md:w-2/3 text-center">
              <h3 className="text-2xl font-bold">
                Versatile IT & Marketing Experts
              </h3>
              <h5 className="my-4">
                Our team of skillfull experts is here to help you with
                exponential growth of your business and fast track the profit
                generation, so you can focus on shaping your firm for a better
                future market presence. We believe that to achieve big
                milestones, we need to be well prepared to tackle any risk or
                challenges on the way to success while having
                future-sightedness.
              </h5>
              <div className="my-8 w-1/2 md:w-1/3 mx-auto">
                <Button onClick={()=>navigate("/contact")}>Get Started</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutUsStrap />

      <div
        style={{
          backgroundImage: `url(${require("@images/sec-3-bg.svg")})`,
        }}
        className="bg-no-repeat bg-cover"
      >
        <div className="max-w-1366 mx-auto relative my-32">
          <div className="flex flex-col-reverse md:flex-row mx-8 md:mx-0">
            <div className="w-full md:w-1/2  text-justify">
              <div>
                <h3 className="text-2xl font-bold">{mission.title}</h3>
                <h5 className="my-4">{mission.subTitle}</h5>
              </div>
              <div>
                <ul className="pl-8">
                  {mission.points.map((p: any) => (
                    <>
                      <li className="p-4 flex">
                        <div className="flex-shrink-0 pr-4">
                          <img src={require("@images/arrow-md.svg")} />
                        </div>
                        <div>{p.text}</div>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <img src={require("@images/sec-3-ill.svg")} />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="w-full flex">
          <div className="w-full md:w-1/2 hidden md:block">
            <img className="w-full" src={require("@images/sec4-bg-1.png")} />
          </div>
          <div className="w-full md:w-1/2 flex md:px-24 px-8 text-center md:text-left items-center">
            <div>
              <h3 className="text-2xl font-bold">
                Smoothen your journey,
                <br /> with our service offerings!
              </h3>
              <h5 className="py-4 text-justify">
                From research and planning to delivery of end results, we help
                our clients with strategy development, branding, marketing,
                analytics and custom solutions development. Find out more about
                our core offerings ...
              </h5>
              <div className="flex justify-center md:justify-start">
                <div className="w-1/2">
                  <Button onClick={()=>navigate("/services")}>Read More</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex">
          <div className="w-full md:w-1/2 flex justify-center items-stretch">
            <div className="flex flex-wrap">
              {serviceFeatures.map((sf: any) => (
                <>
                  <div className="w-full md:w-1/2 flex justify-center items-center p-4">
                    <div className="flex flex-col items-center">
                      <div className="py-8">
                        <img className="w-20" src={sf.imageURL} />
                      </div>
                      <div>
                        <h5 className="font-bold">{sf.title}</h5>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2  hidden md:block">
            <img className="w-full" src={require("@images/sec-4-bg-2.png")} />
          </div>
        </div>
      </div>
      <div
        style={
          {
            // backgroundImage: `url(${require("@images/sec-3-bg.svg")})`,
          }
        }
        className="bg-no-repeat bg-cover relative py-8"
      >
        <div className="w-full absolute h-1/2 bottom-0 bg-purple" />
        <div className="max-w-1366 mx-auto relative my-32">
          <div className="w-full flex justify-center text-center">
            <div>
              <h3 className="text-2xl font-bold">Word Of Mouth</h3>
              <h5 className="py-4">Hear from our clients!</h5>
            </div>
          </div>
          <div className="my-8">
            {testimonials && testimonials.length ? (
              <>
                <SlickSlider settings={sliderSettings}>
                  {testimonials.map((t: any) => (
                    <>
                      <div
                        className="p-4 flex justify-center items-stretch relative "
                        style={{ height: "300px" }}
                      >
                        <div className="absolute bottom-2 left-2 top-2 right-2 text-center bg-white shadow-lg rounded-lg px-8 overflow-y-auto">
                          <div className="">
                            <div className="flex justify-center">
                              <img
                                style={{ width: "64px", height: "64px" }}
                                src={t.imageURL}
                              />
                            </div>
                            <div className="font-bold py-2">{t.author}</div>
                            <div className="text-justify">{t.comment}</div>
                            <div className="pt-4">{t.title}</div>
                            <div className="text-gray-400 text-xs">
                              {t.subTitle}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </SlickSlider>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      <CommonStrap />
      <ReachOutBox />
    </div>
  )
}

export default HomeContainer
