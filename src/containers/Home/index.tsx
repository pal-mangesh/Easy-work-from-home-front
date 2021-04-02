import Button from "@components/Button"
import InfoGrid from "@components/InfoGrid"
import SlickSlider from "@components/Slick"
import AboutUsStrap from "@hoc/AboutUsStrap"
import CommonStrap from "@hoc/CommonStrap"
import ReachOutBox from "@hoc/ReachOutBox"
import CommonUtils from "@utils/CommonUtils"
import Network from "@utils/Network"
import { Link, navigate } from "gatsby"
import React, { ReactElement } from "react"

function HomeContainer(): ReactElement {
  const [slider, setSlider] = React.useState({} as any)
  const [listing, setListing] = React.useState({} as any)
  const [emailID, setEmailID] = React.useState("")

  React.useEffect(() => {
    init()
  }, [])

  const init = async () => {}

  const process = [
    {
      title: "Easy Online <br/>Registration.",
      subTitle: `You can join our team very easily by filling up an online form! Our systems will process your information and check your eligibility. Once done, you will be onboard and one of our experts will get in touch with you. Apply Now!`,
    },
    {
      title: "Working Time <br/>Flexibility.",
      subTitle:
        "People love us because we offer the most flexible work time schedule in the industry! Our staff members and employees, who are spread accross the globe and dealing in various time zones, can opt for any timing that suits their daily routine!",
    },
    {
      title: "Make Big <br/> Profits!",
      subTitle:
        "We help you grow intellectually and sky-roket you career at a fast pace! Start making money by sitting at your home and working at your own speed. Instantly start making money from the very first week of working with us :)",
    },
  ]

  const mission = {
    title: "Our Aim",
    subTitle:
      "We are EASY WORK FROM HOME,  an online work from home opportunities provider company. Our missions is",
    points: [
      {
        text:
          "To emerge as one of the leading online Company with main aim to provide the world with easy to approach and comfortable work from home job opportunities.",
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
          "To utilize our full capabilities to maximize corporate growth and promote a harmonious environment for all our remote employees and their relations.",
      },
    ],
  }

  const testimonials = [
    {
      imageURL: require("@images/eli-dp.png"),
      author: "Eli",
      comment:
        "“Thanks to Easy Work From Home Solutions, I was able to pay my debts in just 3 months. I am also learning something new everyday.”",
      title: "Blogger",
      subTitle: "Techasoft",
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
        "“With many domains to choose from, I got what suited me and since the joining, I have been making side income just like I wanted to”",
      title: "Consultant",
      subTitle: "StockInvestments.",
    },
  ]

  const serviceFeatures = [
    {
      imageURL: require("@images/support-icon.svg"),
      title: "EASY ONBOARDING",
    },
    {
      imageURL: require("@images/clock-icon.svg"),
      title: "ACCELARATED GROWTH",
    },
    {
      imageURL: require("@images/half-star-icon.svg"),
      title: "EXCITING OPPORTUNITIES",
    },
    {
      imageURL: require("@images/smiley-icon.svg"),
      title: "BIG PAYOUTS",
    },
  ]

  const processPoints = [
    {
      title: "01 <br/>APPLICATION",
      description: "Fillup a simple form, with your basic contact details",
    },
    {
      title: "02 <br/>PROCESSING",
      description:
        "Our backend systems will process your information and eligibility.",
    },
    {
      title: "03 <br/>ONBOARDING",
      description:
        "One of our dedicated experts will get in touch with you to complete your onboarding process.",
    },
    {
      title: "04 <br/>SETUP / TRAINING",
      description:
        "Our expert will help you setup your system so you can start working quickly. Candidate starts receiving training sessions on weekly basis.",
    },
    {
      title: "05 <br/>FIRST PAYOUT",
      description:
        "After a week of traning, you will receive first payout directly into your bank account!",
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
          dots: false,
        },
      },
    ],
  }

  const mpSliderSettings = { ...sliderSettings, dots: false }

  const majorPlayers = [
    {
      icon: require("@images/mp_airbnb.svg"),
    },
    {
      icon: require("@images/mp_sba.svg"),
    },
    {
      icon: require("@images/mp_applause.svg"),
    },
    {
      icon: require("@images/mp_dynata.svg"),
    },
    {
      icon: require("@images/mp_hubble.svg"),
    },
    {
      icon: require("@images/mp_sensus.svg"),
    },
    {
      icon: require("@images/mp_tend.svg"),
    },
  ]

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
            backgroundImage: `url(${require("@images/home-bg.png")})`,
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
        <div className="max-w-1366 pt-16 md:pt-32 mx-auto px-4 md:px-0 text-white">
          <div className="pb-48 flex justify-center flex-col ">
            <div className="text-center md:mt-24 mt-16">
              <div className="my-4 px-0 md:px-8">
                <span className="text-xl md:text-4xl font-bold">
                  Work From The Comfort Of Your Home
                </span>
              </div>
              <div className="w-full md:w-2/3  mx-auto">
                <span className="text-xs  " style={{ letterSpacing: "5px" }}>
                  Get instant access to work from home opportunity, that can
                  make you up to $499 per week!
                </span>
              </div>
              <div className="my-8 mx-auto w-3/4 md:w-1/3 flex flex-col md:flex-row flex-wrap items-center p-2 md:bg-purple bg-transparent rounded">
                <div className="flex-1 w-full md:w-auto ">
                  <input
                    onChange={(e: any) => setEmailID(e.target.value)}
                    placeholder="Enter Email-ID"
                    className="w-full p-4 border-white border-2 md:border-0 rounded bg-transparent text-center md:text-left mb-4 md:mb-0"
                  />
                </div>
                <div className="w-full md:w-auto">
                  <Button
                    type="primary"
                    onClick={() => navigate(`/register?email=${emailID}`)}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
            {/* <div className="w-full md:w-2/3 mx-auto text-center">
              <h3 className="font-bold mb-4 mt-8">Trsuted By Major Players</h3>
              <div
                className="bg-contain bg-no-repeat bg-center py-4 px-16 text-black  cursor-pointer rounded-lg "
                style={{
                  backgroundImage: `url(${require("@images/mp_bg.svg")})`,
                }}
              >
                {majorPlayers && majorPlayers.length ? (
                  <SlickSlider settings={mpSliderSettings}>
                    {majorPlayers.map((mp: any) => (
                      <>
                        <div className="p-4 flex justify-center items-center">
                          <img
                            style={{ width: "150px", height: "60px" }}
                            src={mp.icon}
                          />
                        </div>
                      </>
                    ))}
                  </SlickSlider>
                ) : (
                  ""
                )}
              </div>
            </div> */}
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
                We Provide Full Traning And Support!
              </h3>
              <h5 className="my-4 text-justify">
                We have dedicated teams consisting of multi-domain experts who
                are continously training more and more people coming onboard!
                Traning sessions are conducted on weekly basis, and timings are
                decided completly based on your comfort and pace! There is
                plenty of projects/domains to work on , ranging from simple data
                entry to complex IT and Marketing solutions.
              </h5>
              <div className="my-8 w-1/2 md:w-1/3 mx-auto">
                <Button onClick={() => navigate("/register")}>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-32 max-w-1366 mx-auto">
        <div className="w-3/4 mx-auto text-center mb-8">
          <h1 className="text-lg font-bold mb-2">HOW IT WORKS?</h1>
          <h3 className="text-sm ">
            Simple Process. Fast Onboarding. Big Payouts.
          </h3>
        </div>
        <div className="w-1/2 mx-auto">
          <div className="flex flex-col">
            {processPoints.map((pp: any, index: number) => (
              <>
                <div
                  className={`flex flex-col md:flex-row ${
                    index % 2 === 0 ? "" : "md:flex-row-reverse"
                  } items-center text-center my-8`}
                >
                  <div className="flex-shrink-0 w-full md:w-1/4 my-2 md:my-0 ">
                    <h1
                      className="text-xl font-bold "
                      dangerouslySetInnerHTML={{ __html: pp.title }}
                    />
                  </div>
                  <div>
                    <h1
                      className="text-xs text-justify md:text-center px-0 md:px-8"
                      dangerouslySetInnerHTML={{ __html: pp.description }}
                    />
                  </div>
                </div>
                <div className="md:block hidden w-3/4 mx-auto">
                  {index < processPoints.length - 1 ? (
                    <img
                      className="w-full"
                      src={
                        index % 2 === 0
                          ? require("@images/process-divider.svg")
                          : require("@images/process-divider-o.svg")
                      }
                    />
                  ) : (
                    ""
                  )}
                </div>
              </>
            ))}
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
                Acheive financial freedom,
                <br /> with our remote employment offerings!
              </h3>
              <h5 className="py-4 text-justify">
                We have many job offerings for you ranging from most simplest
                tasks to mind bending and complex ones! Data entry, Blogging,
                Marketing, Book Keeping, Copy Writing, ECommerce etc are few of
                such offerings ...
              </h5>
              {/* <div className="flex justify-center md:justify-start">
                <div className="w-1/2">
                  <Button onClick={() => navigate("/services")}>
                    Read More
                  </Button>
                </div>
              </div> */}
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
