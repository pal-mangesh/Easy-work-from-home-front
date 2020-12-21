import ContactForm from "@hoc/ContactFrom"
import CommonUtils from "@utils/CommonUtils"
import React, { ReactElement } from "react"
import { connect } from "redux-zero/react"

interface Props {
  visible?: boolean
  property?: any
}

function ArrangeCallbackForm({ visible, property }: Props): ReactElement {
  return visible ? (
    <div
      className="fixed top-0 right-0 left-0 bottom-0 text-white p-4"
      style={{ zIndex: 100 }}
    >
      <div
        onClick={() => {
          CommonUtils.CallToAction.setContactFormVisible(false, undefined)
        }}
        className="absolute left-0 top-0 right-0 bottom-0"
        style={{ background: "rgba(0,0,0,0.7)", zIndex: -1 }}
      ></div>
      <div
        style={{ marginTop: "100px" }}
        className="relative md:w-1/2 bg-white mx-auto text-black p-4 rounded-lg"
      >
        <div
          onClick={() => {
            CommonUtils.CallToAction.setContactFormVisible(false, undefined)
          }}
          className="absolute cursor-pointer"
          style={{ right: "-20px", top: "-20px" }}
        >
          <img src={require("@images/close-icon.svg")} />
        </div>
        <div>
          <h3 className="text-2xl text-center">Arrange Callback</h3>
          {property ? (
            <h3 className=" text-center">Interested in : {property.title}</h3>
          ) : (
            ""
          )}
          <h3 className="text-gray-600 text-center">
            Please enter below details and you will be contacted by one of our
            agents shortly!
          </h3>
        </div>
        <div>
          <ContactForm
            property={property?._id}
            reason="ARRANGE CALLBACK"
            successMessage="Thanks for showing interest! One of our agents will get back to you shortly."
          />
        </div>
      </div>
    </div>
  ) : (
    <></>
  )
}

const mapToProps = (state: any) => ({
  visible: state.arrangeCallbackFormVisible,
  property: state.contactFormLinkedProperty,
})

export default connect<any, Props>(mapToProps)(ArrangeCallbackForm)
