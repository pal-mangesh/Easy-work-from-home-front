import { Store } from "@utils/Store"
import Cookies from "@utils/Cookies"
import Network from "@utils/Network"

export default {
  showLogin: async () => {
    Store.setState({
      login__visible: true,
    })
  },
  login: async (credentials: any) => {
    try {
      const { data } = await Network.post("auth/local", { ...credentials })
      if (data) {
        Cookies.setCookie("jwt", data.jwt)
        Store.setState({
          login__jwt: data.jwt,
        })
        return true
      } else {
        return "Invalid login attempt!"
      }
    } catch (e) {
      const { data } = e.response

      const msg = data.data[0].messages[0].message || ""
      return msg + ""
    }
  },
  signup: async (form: any) => {
    try {
      const { data } = await Network.post("auth/local/register", { ...form })
      if (data) {
        Cookies.setCookie("jwt", data.jwt)
        Store.setState({
          login__jwt: data.jwt,
        })
        return true
      } else {
        return "Invalid login attempt!"
      }
    } catch (e) {
      const { data } = e.response

      const msg = data.data[0].messages[0].message || ""
      return msg + ""
    }
  },
  isLoggedIn: async () => {
    return Cookies.getCookie("jwt")
  },
}
