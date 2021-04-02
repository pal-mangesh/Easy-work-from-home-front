import Button from "@components/Button"
import AboutUsStrap from "@hoc/AboutUsStrap"
import ApplicationFormFull from "@hoc/ApplicationForm"
import ReachOutBox from "@hoc/ReachOutBox"
import CommonUtils from "@utils/CommonUtils"
import Network from "@utils/Network"
import { navigate } from "gatsby"
import React, { ReactElement } from "react"

let uid = ""

function RegisterContainer(): ReactElement {
  const [formData, setFormData] = React.useState({} as any)
  const [schema, setSchema] = React.useState([] as any)
  const [submitted, setSubmitted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    init()
  }, [])

  const init = async () => {
    initSchema()
    window.scrollTo({ top: 0 })
  }

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

  const initSchema = () => {
    setSchema([
      {
        title: "APPLY NOW",
        fields: [
          {
            label: "Name*",
            name: "name",
            type: "input",
            placeholder: "Full Name",
            validation: "required",
          },
          {
            label: "Email*",
            name: "email",
            type: "input",
            placeholder: "required*",
            validation: "email",
            defaultValue:
              CommonUtils.queryStringToJSON(window.location.search.substr(1))
                ?.email || "",
          },
          {
            label: "Phone*",
            name: "phone",
            type: "input",
            placeholder: "required*",
            validation: "phone",
            minLength: 10,
            wrapperClass: "md:w-full",
          },
          {
            label: "Message",
            name: "message",
            type: "input",
            subType: "textarea",
            placeholder: " ",
            wrapperClass: "md:w-full",
          },
        ],
        onNext,
      },
      {
        title: "REQ. INFO",
        fields: [
          {
            label: "Do you have a computer system / laptop ?",
            name: "system",
            type: "select",
            spread: true,
            validation: "required",
            items: [
              { value: "YES" },
              { value: "NO" },
              { value: "CAN ARRANGE" },
            ],
            multiSelect: false,
            wrapperClass: "md:w-full",
            // defaultValue: "YES",
          },
          {
            label: "Do you have a working internet connection ?",
            name: "internet",
            type: "select",
            spread: true,
            validation: "required",
            items: [
              { value: "YES" },
              { value: "NO" },
              { value: "CAN ARRANGE" },
            ],
            multiSelect: false,
            wrapperClass: "md:w-full",
            // defaultValue: "YES",
          },
          {
            label: "Please choose your area(s) of interest...",
            name: "services",
            type: "select",
            spread: true,
            validation: "required",
            items: [
              { value: "DATA ENTRY" },
              { value: "MARKETING" },
              { value: "BLOGGING" },
              { value: "BOOK KEEPING" },
              { value: "CONSULTING" },
              { value: "COPY WRITING" },
              { value: "ECOMMERCE" },
              { value: "DESIGNING" },
              { value: "WEBSITE/APP DEVELOPMENT" },
              { value: "ANY/OTHERS" },
            ],
            multiSelect: true,
            wrapperClass: "md:w-full",
          },
        ],
        type: "input",
      },
    ])
  }

  const onNext = async (fd: any) => {
    setLoading(true)
    try {
      const _fd = {
        email: formData.email,
        data: formData,
        _id: uid,
      }
      const { data } = await Network.post("leads/register", _fd)
      if (!data._id) {
        alert("Server error! Please try again.")
        return
      }
      uid = data._id
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  const onSubmit = async (formData: any) => {
    setLoading(true)
    try {
      const _fd = {
        email: formData.email,
        data: formData,
        _id: uid,
      }
      const { data } = await Network.post("leads/register", _fd)
      if (!data._id) {
        alert("Server error! Please try again.")
        return
      }
      uid = data._id
      setTimeout(() => {
        setSubmitted(true)
      }, 1000)
    } catch (e) {
      console.error(e)
    } finally {
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }
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
        <div className="max-w-1366 pt-32 mx-auto px-4 md:px-0 ">
          <div className="pb-48 flex justify-center items-center flex-col ">
            <div className="text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                More Choices Lead to More Opportunites
              </h3>
              <h5 className="font-bold">
                Get instant access to work from home opportunity, that can make
                you up to $499 per week!
              </h5>
            </div>
            <div className="flex items-center">
              {/* <div className="flex-1 w-1/2">&nbsp;</div> */}
              <div className="w-full md:w-2/3 mx-auto py-8">
                {submitted ? (
                  <>
                    <div className="px-8 md:px-16 bg-white py-8 rounded-lg shadow-lg">
                      <h3 className="font-bold text-2xl text-center">
                        Congratulations!
                        <br />
                        <br /> Your application has been submitted successfully.
                        One of our experts will get in touch with you in next 24
                        hours.
                      </h3>
                    </div>
                  </>
                ) : (
                  <ApplicationFormFull
                    onChange={(d: any) => setFormData({ ...d })}
                    schema={schema}
                    onSubmit={onSubmit}
                    disabled={loading}
                    loading={loading}
                  />
                )}
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
                <Button onClick={() => navigate("/contact")}>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutUsStrap />

      {/* <CommonStrap /> */}
      <ReachOutBox />
    </div>
  )
}

export default RegisterContainer
