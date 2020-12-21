import ContactForm from "@hoc/ContactFrom"
import React, { ReactElement } from "react"

interface Props {}

function ContactUsContainer({}: Props): ReactElement {
  return (
    <div>
      <div className="relative" style={{ width: "100%", height: "300px" }}>
        <div className="absolute w-full " style={{ zIndex: -1 }}>
          <iframe
            scrolling="no"
            style={{ width: "100%", height: "300px" }}
            src="https://www.openstreetmap.org/export/embed.html?bbox=-80.6609344482422%2C43.428115261315334%2C-80.47554016113283%2C43.535358296966415&amp;layer=mapnik"
          ></iframe>
        </div>
      </div>
      <div className="max-w-1366 mx-auto">
        <div
          className="md:w-1/2 rounded-lg mx-auto p-4 bg-white shadow-xl"
          style={{ marginTop: "-50px" }}
        >
          <div className="text-center">
            <h3 className="text-2xl">Contact Us</h3>
          </div>
          <ContactForm
            successMessage=" Successfully submitted! We will get in touch with you very soon!"
            reason="from contact-us page"
          />
          <div className="text-center pt-8">OR</div>
          <div className="px-4 my-4">
            <div className="flex items-center flex-wrap">
              <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <div className="flex flex-col justify-center items-center">
                  <img
                    className="w-8"
                    src={require("@images/chat-icon.svg")}
                  />
                  <h3 className="text-2xl pt-2">Chat With Us Now</h3>
                  <h3 className="text-gray-500 pt-2">(Available 24x7)</h3>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex flex-col justify-center items-center">
                  <img
                    className="w-8"
                    src={require("@images/mail-icon.svg")}
                  />
                  <h3 className="text-2xl pt-2">Send Us Email</h3>
                  <h3 className="text-gray-500 pt-2">touch@propsmart.ca</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUsContainer
