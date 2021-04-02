import React, { ReactElement } from "react"

interface Props {}

function ReachOutBox({}: Props): ReactElement {
  const contactInfo = [
    // {
    //   imageURL: require("@images/location-blue-icon.svg"),
    //   title: "CA : 1210 Summit drive Unit 230, suite# 168 Kamloops, BC V2C 6M1",
    // },
    {
      imageURL: require("@images/location-blue-icon.svg"),
      title: "US : 925 Rose Ln Hatfield, Pennsylvania(PA), 19440",
    },
    {
      imageURL: require("@images/mail-blue-icon.svg"),
      title: "help@easy-workfromhome.com",
    },
    // {
    //   imageURL: require("@images/phone-blue-icon.svg"),
    //   // title: "+1-905-267-5595",
    //   title: "+1-123-456-7890",
    // },
  ]
  return (
    <div>
      <div
        className="py-24 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${require("@images/home-contact-us-bg.png")})`,
        }}
      >
        <div className="max-w-1366 mx-auto flex justify-center items-center text-white">
          <div>
            <div className="text-center">
              <h3 className="text-2xl font-bold">How to reach us out?</h3>
              <h5 className="py-2">Not too close, not too far!</h5>
            </div>
            <div className="py-4">
              <div className="flex flex-col md:flex-row justify-center px-8">
                {contactInfo.map((ci: any) => (
                  <>
                    <div className="p-4 flex flex-col items-center text-center w-full md:w-1/3">
                      <img src={ci.imageURL} />
                      <span className="py-8">{ci.title}</span>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReachOutBox
