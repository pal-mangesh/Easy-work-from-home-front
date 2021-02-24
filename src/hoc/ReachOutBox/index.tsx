import React, { ReactElement } from "react"

interface Props {}

function ReachOutBox({}: Props): ReactElement {
  const contactInfo = [
    {
      imageURL: require("@images/location-blue-icon.svg"),
      title: "CA : ",
    },
    {
      imageURL: require("@images/location-blue-icon.svg"),
      title: "UK : 71-75, Shelton Street, Covent Garden, London, WC2H 9JQ, UNITED KINGDOM.",
    },
    {
      imageURL: require("@images/mail-blue-icon.svg"),
      title: "help@reactivemarketing.ca",
    },
    {
      imageURL: require("@images/phone-blue-icon.svg"),
      title: "+1-905-267-5595",
    },
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
              <div className="flex flex-col md:flex-row px-8">
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
