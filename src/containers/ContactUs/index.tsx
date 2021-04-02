import ApplicationFormFull, {
  IFormField,
  IFormSchema,
} from "@hoc/ApplicationForm"
import ContactForm from "@hoc/ContactFrom"
import ReachOutBox from "@hoc/ReachOutBox"
import Network from "@utils/Network"
import React, { ReactElement } from "react"

interface Props {}

function ContactUsContainer({}: Props): ReactElement {
  const [formData, setFormData] = React.useState({} as any)
  const [loading, setLoading] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const [schema, setSchema] = React.useState([] as any)

  React.useEffect(() => {
    initSchema()
  }, [])

  const initSchema = () => {
    setSchema([
      {
        title: "CONTACT US",
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
            validation: "required",
          },
          {
            label: "Phone No.",
            name: "phone",
            type: "input",
            placeholder: "required*",
            validation: "required",
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
        type: "input",
      },
    ])
  }

  const handleSubmit = async (form: any) => {
    setLoading(true)
    try {
      const { email } = form
      const { data } = await Network.post("leads/register", {
        email,
        data: form,
      })
      if (!data._id) {
        alert("Server Error! Please try again.")
        return
      }
      setSubmitted(true)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <div className="relative" style={{ width: "100%", height: "300px" }}>
        <div className="absolute w-full " style={{ zIndex: -1 }}>
          <iframe
            scrolling="no"
            style={{ width: "100%", height: "300px" }}
            src="https://www.openstreetmap.org/export/embed.html?bbox=-81.33178710937501%2C39.26628442213066%2C-75.25085449218751%2C42.94436044696629&amp;layer=mapnik"
          ></iframe>
        </div>
      </div>
      <div className="max-w-1366 mx-auto">
        <div
          className="md:w-3/4 rounded-lg mx-auto p-4 bg-white shadow-xl"
          style={{ marginTop: "-50px" }}
        >
          <div className="text-center mt-4">
            <h3 className="text-2xl">We are here to help you out!</h3>
          </div>
          {/* <ContactForm
            successMessage=" Successfully submitted! We will get in touch with you very soon!"
            reason="from contact-us page"
          /> */}
          <div className="mb-16 relative">
            {/* {JSON.stringify(formData)} */}
            {submitted ? (
              <>
                <div className="text-center my-16">
                  <h1 className="font-bold text-2xl text-green-700 mb-4">
                    SUCCESS!
                  </h1>
                  <h1 className="font-bold ">
                    Your query has been received at our end! One of our experts
                    will get in touch with you soon!
                  </h1>
                </div>
              </>
            ) : (
              <>
                {loading ? (
                  <>
                    <div
                      className="absolute w-full h-full z-10 flex items-center justify-center"
                      style={{ backgroundColor: "rgba(255,255,255,0.7)" }}
                    >
                      <h1 className="font-bold text-2xl">Sending query...</h1>
                    </div>
                  </>
                ) : (
                  ""
                )}
                <ApplicationFormFull
                  onChange={(d: any) => setFormData({ ...d })}
                  schema={schema}
                  onSubmit={handleSubmit}
                  disabled={loading}
                  loading={loading}
                />
              </>
            )}
          </div>
          {/* <div className="text-center pt-8">OR</div>
          <div className="px-4 my-4">
            <div className="flex items-center flex-wrap">
              <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <div className="flex flex-col justify-center items-center">
                  <img className="w-8" src={require("@images/chat-icon.svg")} />
                  <h3 className="text-2xl pt-2">Chat With Us Now</h3>
                  <h3 className="text-gray-500 pt-2">(Available 24x7)</h3>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex flex-col justify-center items-center">
                  <img className="w-8" src={require("@images/mail-icon.svg")} />
                  <h3 className="text-2xl pt-2">Send Us Email</h3>
                  <h3 className="text-gray-500 pt-2">
                    help@reactivemarketing.ca
                  </h3>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div>
        <ReachOutBox />
      </div>
    </div>
  )
}

export default ContactUsContainer
