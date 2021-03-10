import SlickSlider from "@components/Slick"
import CommonStrap from "@hoc/CommonStrap"
import ReachOutBox from "@hoc/ReachOutBox"
import React, { ReactElement } from "react"

interface Props {}

function PortfolioContainer({}: Props): ReactElement {
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const onSlideChange = (oldSlide: number, newSlide: number) => {
    setCurrentSlide(newSlide)
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    beforeChange: onSlideChange,
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

  const projects = [
    {
      title: "Stock Pack Investments",
      subTitle: "Stock Investments Firm",
      imgURL: require("@images/spi-img.png"),
      link: "https://www.stockpackinvestments.com",
      linkText: "https://www.stockpackinvestments.com",
    },
    {
      title: "Props Mart",
      subTitle: "Real Estate Search Engine",
      imgURL: require("@images/props-mart-img.png"),
      link: "https://www.props-mart.ca",
      linkText: "https://www.props-mart.ca",
    },
    // {
    //   title: "Marketise",
    //   subTitle: "Digital Marketing Firm",
    //   imgURL: require("@images/marketise-img.png"),
    //   link: "https://www.marketise.cc",
    //   linkText: "https://www.marketise.cc",
    // },
    {
      title: "Web Wibez Solutions",
      subTitle: "IT/Marketing Firm",
      imgURL: require("@images/webwibez-img.png"),
      link: "https://www.webwibez.in",
      linkText: "https://www.webwibez.in",
    },
    // {
    //   title: "NotFall Kredit",
    //   subTitle: "Fintech Firm",
    //   imgURL: require("@images/notfall-kredit-img.png"),
    //   link: "https://www.notfallkre-dit.de",
    //   linkText: "https://www.notfallkre-dit.de",
    // },
    {
      title: "Car-Hire",
      subTitle: "Car Rental Company",
      imgURL: require("@images/car-rental-img.png"),
      link: "https://awesome-bardeen-68648d.netlify.app/",
      linkText: "Website",
    },
    // {
    //   title: "Fast Credit",
    //   subTitle: "Financial Solutions Firm",
    //   imgURL: require("@images/blitz-kredit-img.png"),
    //   // link: "#",
    //   // linkText: "",
    // },
  ]

  return (
    <div>
      <div className="max-w-1366 mx-auto">
        <div className="py-8 flex justify-center items-center">
          <div className="px-2">
            <img src={require("@images/brand-badge-icon.svg")} />
          </div>
          <div className="text-xs">GET A GLIMPS OF SOME OF OUR PAST WORK</div>
        </div>
      </div>
      <div className="bg-gray-300">
        <div
          className="hidden md:block mx-auto bg-cover relative"
          style={{
            backgroundImage: `url(${projects[currentSlide].imgURL})`,
            height: "400px",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(0,0,0,0.5)",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              position: "absolute",
              zIndex: 0,
            }}
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 ">
            <div className="h-full flex justify-center text-white items-center">
              <div className="text-center">
                <h3 className="text-3xl font-bold ">
                  {projects[currentSlide].title}
                </h3>
                <h5 className="text-xs ">{projects[currentSlide].subTitle}</h5>
                {projects[currentSlide].link ? (
                  <>
                    <div className="mt-4">
                      <a
                        className="text-white"
                        target="_blank"
                        href={projects[currentSlide].link}
                      >
                        {projects[currentSlide].linkText}
                      </a>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-1366 mx-auto">
          <div className="py-8 ">
            {projects && projects.length ? (
              <>
                <SlickSlider settings={sliderSettings}>
                  {projects.map((p: any) => (
                    <>
                      <div className="p-8">
                        <div className="bg-white shadow-xl rounded-lg p-4">
                          <img
                            style={{ width: "100%", height: "200px" }}
                            src={p.imgURL}
                          />
                          <div className="md:hidden py-4">
                            <h3 className=" font-bold">{p.title}</h3>
                            <h5 className=" text-xs">{p.subTitle}</h5>
                            {p.link ? (
                              <>
                                <div className="mt-4">
                                  <a target="_blank" href={p.link}>
                                    {p.linkText}
                                  </a>
                                </div>
                              </>
                            ) : (
                              ""
                            )}
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
      <div>
        <CommonStrap/>
        <ReachOutBox/>
      </div>
      
    </div>
  )
}

export default PortfolioContainer
