import DataEditor, { IField } from "@components/DataEditor"
import DateTimeDisplay from "@components/DateTimeDisplay"
import Image from "@hoc/Image"
import Auth from "@utils/Auth"
import DateTime from "@utils/DateTime"
import Network from "@utils/Network"
import React, { ReactElement } from "react"
import { connect } from "redux-zero/react"
const styles = require("./index.module.css")
interface IProps {
  property?: any
  loggedIn?: any
}

function CheckoutDisplay({ property, loggedIn }: IProps): ReactElement {
  const [order, setOrder] = React.useState({
    agreement: true,
  } as any)
  const [error, setError] = React.useState("")
  const [ordering, setOrdering] = React.useState(false)
  const [placedOrder, setPlacedOrder] = React.useState() as any

  const { url } = property && property.images && property.images[0]
  const {
    availableFrom,
    availableTill,
    pickupPlace,
    dropoffPlace,
    name,
  } = property
  const fromDate = DateTime.Moment(availableFrom)
  const toDate = DateTime.Moment(availableTill)
  const diff = DateTime.Moment.duration(toDate.diff(fromDate)).asHours()

  const getOrderSchema = (): IField[] => {
    return [
      {
        type: "DIVIDER",
        title: "Payment Details",
      },
      {
        type: "INPUT",
        name: "cardName",
        title: "Name ( as displayed on the card )",
        validations: [
          {
            type: "REQUIRED",
          },
          {
            type: "MIN_LEN",
            value: 3,
          },
        ],
      },
      {
        type: "INPUT",
        name: "cardNumber",
        title: "Card Number",
        validations: [
          {
            type: "REGEX",
            value: /^[0-9]{4}[ ]{0,1}[0-9]{4}[ ]{0,1}[0-9]{4}[ ]{0,1}[0-9]{4}[ ]{0,1}$/gi,
          },
        ],
      },
      {
        type: "INPUT",
        name: "cardCVV",
        title: "CVV",
        flexBasis: "50%",
        validations: [
          {
            type: "REGEX",
            value: /^[0-9 ]{3,4}$/,
          },
        ],
      },
      {
        type: "INPUT",
        name: "cardExpiry",
        title: "Expiry Date (MM/YY)",
        flexBasis: "50%",
        validations: [
          {
            type: "REGEX",
            value: /^[0-9 ]{2}\/[0-9 ]{2}$/,
          },
        ],
      },
      {
        type: "DIVIDER",
        title: "Driver Details",
      },
      {
        type: "INPUT",
        name: "driverName",
        title: "Driver's Full Name",
        validations: [
          {
            type: "REQUIRED",
          },
          {
            type: "MIN_LEN",
            value: 3,
          },
        ],
      },
      {
        type: "INPUT",
        name: "driverPhone",
        title: "Phone No.",
        validations: [
          {
            type: "REGEX",
            value: /^[\d ]{8,20}$/gi,
          },
        ],
      },
      {
        type: "INPUT",
        name: "driverEmail",
        title: "Email",
        flexBasis: "100%",
        validations: [
          {
            type: "REGEX",
            value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          },
        ],
      },
      {
        type: "SELECT",
        name: "driverGender",
        title: "Gender",
        flexBasis: "50%",
        list: [
          { name: "female", title: "Fe-Male", value: "FEMALE" },
          { name: "male", title: "Male", value: "MALE" },
        ],
      },
      {
        type: "INPUT",
        name: "driverDOB",
        title: "Date Of Birth (MM/DD/YYYY)",
        flexBasis: "50%",
        validations: [
          {
            type: "REGEX",
            value: /^[0-9 ]{2}\/[0-9 ]{2}\/[0-9 ]{4}$/,
          },
        ],
      },
      {
        type: "INPUT",
        name: "driverAddress",
        title: "Home Address",
        validations: [
          {
            type: "REQUIRED",
          },
          {
            type: "MIN_LEN",
            value: 3,
          },
        ],
      },
      {
        type: "CHECKBOX",
        name: "agreement",
        title: "I Agree to the terms and conditions",
        flexBasis: "75%",
      },
      {
        type: "BUTTON",
        title: "Confirm",
        flexBasis: "25%",
        onClick: onPlaceOrder,
        disabled: ordering,
      },
    ]
  }

  const onPlaceOrder = (err: any, data: any) => {
    setError("")
    const ot =
      (document.getElementById("ORDER_FORM")?.getBoundingClientRect().top ||
        0) + window.scrollY
    window.scrollTo({ top: ot - 150 })
    try {
      const errs = Object.keys(err).length
      if (errs) {
        setError("Please fill required fields!")
      } else {
        saveOrder({
          ...data,
          from: availableFrom,
          to: availableTill,
          pickupPlace,
          dropoffPlace,
          propertyName: name,
        })
      }
    } catch (e) {
      setError(e + "")
    }
    // const errs = validationFn(getOrderSchema())
  }

  const onOrderChange = (updatedOrder: any) => {
    setOrder({ ...order, ...updatedOrder })
  }

  const saveOrder = async (order: any) => {
    setOrdering(true)
    try {
      const { data } = await Network.post("bookings/create", { ...order })
      if (data && data._id) {
        setPlacedOrder(data)
      }
    } catch (e) {
      console.error(e)
    } finally {
      setTimeout(() => {
        setOrdering(false)
      }, 2000)
    }
  }

  const onLoginClick = () => {
    Auth.showLogin()
  }

  const phCost = parseInt((property.costPerHour || 0) + "", 10)
  const tax = phCost * 0.025
  const discounts = phCost * 0.01
  const cost = (phCost * (diff || 1) + tax + discounts).toFixed(2)

  return (
    <>
      <div className="mb-16">
        {/* {JSON.stringify(property, null, 2)} */}
        <div className="flex flex-col">
          <div className="flex-1  text-center py-8 border border-b-2">
            <h2 className="text-xl font-bold text-gray-500">
              {placedOrder ? "Booking Confirmed" : "Confirm Booking"}
            </h2>
            {loggedIn ? (
              ""
            ) : (
              <span className="">
                ( As Guest or{" "}
                <a onClick={onLoginClick} className="text-purple-500" href="#">
                  Login
                </a>
                )
              </span>
            )}
          </div>
          {placedOrder ? (
            <>
              <div className="p-8 max-w-1366 mx-auto text-center flex flex-col items-center justify-center">
                <img src={require("@images/confirmed_icon.svg")} />
                <h5>Thank you! Your booking has been confirmed.</h5>
                <div className="text-center pt-4">
                  <div>Booking ID</div>
                  <div className="text-3xl">
                    {placedOrder.bookingId || "Unknown"}
                  </div>
                </div>
                <div className="text-center pt-4">
                  <div>Checkout</div>
                  <div className="text-3xl">
                    {placedOrder.propertyName || "Unknown"}
                  </div>
                </div>
                <h5 className="mt-4">
                  A mail has been sent to your email id with booking details.
                  One of our representatives will reach you in next 24 hrs.
                </h5>
                <div className="bg-gray-300 p-4 m-4 rounded shadow-md">
                  Your details are safe with us! Your card won't be charged
                  untill the booked property is handed over to you!
                </div>
              </div>
            </>
          ) : (
            <div className="max-w-1366 mx-auto">
              <div className="flex flex-wrap px-8 md:pt-8 justify-center">
                <div className={styles.property_image}>
                  <Image className="w-128" url={url} />
                </div>
                <div className="flex flex-col">
                  <div className="w-full text-center mt-8 md:mt-0 text-lg font-bold">
                    {name}
                  </div>
                  <div className="flex items-center flex-wrap">
                    <div>
                      <DateTimeDisplay
                        from={availableFrom}
                        to={availableTill}
                      />
                    </div>
                    <div className="flex-shrink-0 w-full md:w-auto">
                      <div className="text-center text-md m-2">You pay</div>
                      <div className="text-center text-2xl m-2">${cost}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex p-4  w-full flex-wrap items-stretch flex-col-reverse md:flex-row ">
                <div className="w-full flex-1 flex pr-0 md:pr-4">
                  <div className="relative">
                    {ordering ? (
                      <div
                        className="absolute w-full h-full flex flex-col items-center justify-center"
                        style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
                      >
                        <div className="">
                          <img
                            className="w-16 h-16"
                            src={require("@images/loading.gif")}
                          />
                        </div>
                        <div className="text-xl">Please Wait ...</div>
                      </div>
                    ) : (
                      ""
                    )}
                    {error && error.length ? (
                      <div className="bg-yellow-500 text-yellow-800 p-4 rounded">
                        {error}
                      </div>
                    ) : (
                      ""
                    )}
                    <div id="ORDER_FORM">
                      <DataEditor
                        schema={getOrderSchema() as any}
                        data={order}
                        onChange={onOrderChange}
                        validation={true}
                      />
                    </div>
                  </div>
                </div>
                <div className="h-full w-full md:w-1/4 bg-gray-300 p-4 rounded-md mt-0 md:mt-5">
                  <h3 className="font-bold mb-4">Package Details</h3>
                  <hr />
                  <div className="">
                    <div className="flex items-center">
                      <div className="">{name}</div>
                      <div className="flex-1 flex justify-end">
                        ${phCost.toFixed(2)}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="">Taxes</div>
                      <div className="flex-1 flex justify-end">
                        ${tax.toFixed(2)}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="">Discounts</div>
                      <div className="flex-1 flex justify-end">
                        ${discounts.toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

const mapToProps = (state: any) => ({
  loggedIn: state.login__jwt,
})

export default connect(mapToProps)(CheckoutDisplay)
