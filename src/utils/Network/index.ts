import Axios from "axios"

const HOSTNAME = process.env.BACKEND_API_HOSTNAME || "localhost"
const PORT = process.env.BACKEND_API_PORT
const PROTOCOL = process.env.BACKEND_API_PROTOCOL || "http"

const ENDPOINT = PROTOCOL + "://" + HOSTNAME + (PORT ? ":" + PORT : "") + "/"

interface INetworkOpts {
  sameDomain: boolean
}

const defaultOpts: INetworkOpts = {
  sameDomain: true,
}
const axiosConf = {
  
}

export default {
  ENDPOINT,
  put: async (url: string, data: any, opts: INetworkOpts = defaultOpts) => {
    return await Axios.put(
      (opts.sameDomain ? ENDPOINT : "") + url,
      data,
      axiosConf
    )
  },
  delete: async (url: string, opts: INetworkOpts = defaultOpts) => {
    return await Axios.delete(
      (opts.sameDomain ? ENDPOINT : "") + url,
      axiosConf
    )
  },
  post: async (url: string, data: any, opts: INetworkOpts = defaultOpts) => {
    return await Axios.post(
      (opts.sameDomain ? ENDPOINT : "") + url,
      data,
      axiosConf
    )
  },
  get: async (url: string, opts: INetworkOpts = defaultOpts) => {
    console.log(opts)
    return await Axios.get((opts.sameDomain ? ENDPOINT : "") + url, axiosConf)
  },
}
