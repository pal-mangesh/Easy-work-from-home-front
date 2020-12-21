import DataEditor from "@components/DataEditor"
import LightBox from "@components/LightBox"
import Network from "@utils/Network"
import Auth from "@utils/Auth"
import { Store } from "@utils/Store"
import React, { ReactElement } from "react"
import { connect } from "redux-zero/react"
import Cookies from "@utils/Cookies"

interface Props {
  visible?: boolean
}

function SingleSignOn({ visible }: Props): ReactElement {
  const [signupMode, setSignupMode] = React.useState(false)
  const [creds, setCreds] = React.useState({} as any)
  const [signupForm, setSignupForm] = React.useState({ tnc: true } as any)
  const [error, setError] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  React.useEffect(() => {
    setSignupMode(false)
    setError("")
  }, [visible])

  React.useEffect(() => {
    setError("")
    setCreds({})
    setSignupForm({ tnc: true })
  }, [signupMode])

  React.useEffect(() => {
    setTimeout(async () => {
      const jwt = await Auth.isLoggedIn()
      if (jwt && jwt.length) {
        Store.setState({
          login__jwt: jwt,
        })
      }
    })
  }, [])

  const onSignupModeClick = () => {
    setSignupMode(true)
  }
  const onSigninClick = () => {
    setSignupMode(false)
  }

  const onHidden = () => {
    Store.setState({
      login__visible: false,
    })
  }

  const onCredsChange = (data: any) => {
    setCreds({ ...data })
  }
  const onSignupFormChange = (data: any) => {
    setSignupForm({ ...data })
  }

  const login = async (credentials: any) => {
    const res = await Auth.login(credentials)
    if (res === true) {
      Store.setState({
        login__visible: false,
      })
    } else {
      setError(res)
    }
  }
  const signup = async (form: any) => {
    const res = await Auth.signup(form)
    if (res === true) {
      Store.setState({
        login__visible: false,
      })
    } else {
      setError(res)
    }
  }
  const onLoginClick = (error: any, data: any) => {
    try {
      setError("")
      const k = Object.keys(error).length
      if (k <= 0) {
        setLoading(true)
        login(data)
      } else {
        setError("Please enter credentials!")
      }
    } catch (e) {
    } finally {
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }
  }

  const onSignupClick = (error: any, data: any) => {
    try {
      setLoading(true)
      setError("")
      const k = Object.keys(error).length
      const { tnc } = data
      if (k <= 0) {
        if (tnc === true) {
          signup({ ...data, username: data.email })
        } else {
          setError("Please read & accept the terms and conditions")
        }
      } else {
        setError("Please fill all fields!")
      }
    } catch (e) {
    } finally {
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }
  }

  return (
    <>
      <LightBox visible={visible} onHidden={onHidden}>
        <div className="relative focus:w-full md:w-3/4 lg:w-1/4 flex flex-col justify-center items-center bg-gray-100 p-4 rounded-md  mx-auto">
          {loading ? (
            <div
              className="absolute w-full h-full z-10 flex items-center justify-center"
              style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
            >
              <img src={require("@images/loading.gif")} className="w-16" />
            </div>
          ) : (
            ""
          )}
          {error && error.length ? (
            <div className="p-2 bg-yellow-500 text-yellow-800">{error}</div>
          ) : (
            ""
          )}
          {signupMode ? (
            <div className="">
              <div className="text-center my-4">
                <h3 className="text-xl">Register</h3>
              </div>
              <div className="flex flex-col ">
                <DataEditor
                  validation
                  schema={[
                    {
                      name: "email",
                      title: "Email",
                      type: "INPUT",
                      validations: [
                        {
                          type: "REGEX",
                          value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        },
                      ],
                    },
                    {
                      name: "phone",
                      title: "Phone",
                      type: "INPUT",
                      validations: [
                        {
                          type: "REGEX",
                          value: /^[\d ]{8,20}$/gi,
                        },
                      ],
                    },
                    {
                      name: "password",
                      title: "Password",
                      type: "PASSWORD",
                      validations: [
                        {
                          type: "MIN_LEN",
                          value: 3,
                        },
                      ],
                    },
                    {
                      name: "re-password",
                      title: "Repeat Password",
                      type: "PASSWORD",
                      validations: [
                        {
                          type: "MIN_LEN",
                          value: 3,
                        },
                      ],
                    },
                    {
                      name: "tnc",
                      title: "I agree to the terms & conditions",
                      type: "CHECKBOX",
                    },
                    {
                      name: "submit",
                      title: "Submit",
                      type: "BUTTON",
                      onClick: onSignupClick,
                    },
                  ]}
                  data={signupForm}
                  onChange={onSignupFormChange}
                />
              </div>
              <div className="mt-2 text-center text-sm">
                Already registered?{" "}
                <a onClick={onSigninClick} href="#">
                  Signin Now
                </a>
              </div>
            </div>
          ) : (
            <div className="w-full">
              <div className="text-center my-4">
                <h3 className="text-xl">Please sign in</h3>
              </div>
              <div className="flex flex-col">
                <DataEditor
                  validation
                  schema={[
                    {
                      name: "identifier",
                      title: "Email",
                      type: "INPUT",
                      validations: [
                        {
                          type: "MIN_LEN",
                          value: 3,
                        },
                      ],
                    },
                    {
                      name: "password",
                      title: "Password",
                      type: "PASSWORD",
                      validations: [
                        {
                          type: "MIN_LEN",
                          value: 3,
                        },
                      ],
                    },
                    {
                      name: "submit",
                      title: "Login",
                      type: "BUTTON",
                      onClick: onLoginClick,
                    },
                  ]}
                  data={creds}
                  onChange={onCredsChange}
                />
                <div className="mt-2 text-center text-sm">
                  or{" "}
                  <a onClick={onSignupModeClick} href="#">
                    Signup
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </LightBox>
    </>
  )
}

const mapToProps = (state: any) => ({
  visible: state.login__visible,
})

export default connect(mapToProps)(SingleSignOn)
