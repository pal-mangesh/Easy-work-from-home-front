import DataEditor, { IField } from "@components/DataEditor"
import Network from "@utils/Network"
import React, { ReactElement } from "react"

interface Props {
  property?: string
  reason?: string
  successMessage?:string
}

function ContactForm({ property, reason, successMessage }: Props): ReactElement {
  const [formData, setFormData] = React.useState({} as any)
  const [done, setDone] = React.useState(false)
  const [fetching, setFetching] = React.useState(false)

  const schema = [
    {
      title: "Name",
      name: "firstName",
      type: "INPUT",
      validations: [{ type: "REQUIRED", value: true }],
    },
    {
      title: "Phone",
      name: "phone",
      type: "INPUT",
      validations: [{ type: "MIN_LEN", value: 6 }],
    },
    {
      title: "Email",
      name: "email",
      type: "INPUT",
      validations: [
        {
          type: "REGEX",
          value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi,
        },
      ],
    },
    {
      title: "Message",
      name: "message",
      type: "TEXT_AREA",
    },
    {
      title: "SUBMIT",
      type: "BUTTON",
      onClick: (err: any, data: any) => {
        if (Object.keys(err || {}).length <= 0) {
          submitLead(data)
        } else {
          alert("Please fill required fields!")
        }
      },
    },
  ] as IField[]

  const fillUpDefaults = (data: any) => {
    const _d = { ...data }
    if (property && property.length) {
      _d.property = property
    }
    if (reason && reason.length) {
      _d.reason = reason
    }
    return _d
  }

  const submitLead = async (formData: any) => {
    try {
      setFetching(true)
      setDone(false)
      const _data = fillUpDefaults(formData)
      const { data } = await Network.post("leads/new", { ..._data })
      if (data && data._id) {
        setDone(true)
      }
    } catch (e) {
      console.error(e)
    } finally {
      setFetching(false)
    }
  }

  const updateData = (nData: any) => {
    setFormData({ ...nData })
  }
  return (
    <div className="relative">
      {fetching ? (
        <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center">
          <img className="w-16 h-16" src={require("@images/loading.gif")} />
        </div>
      ) : (
        ""
      )}
      {done ? (
        <div className="flex items-center flex-col">
          <div className="flex items-center">
            <img src={require("@images/confirmed_icon.svg")} />
          </div>
          <div className="text-2xl text-center">
           {successMessage}
          </div>
        </div>
      ) : (
        <DataEditor
          schema={schema}
          validation={true}
          data={formData}
          onChange={updateData}
        />
      )}
    </div>
  )
}

export default ContactForm
