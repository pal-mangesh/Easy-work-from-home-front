import { Store } from "@utils/Store"

const currencyFormatter = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
})

export default {
  jsonToQueryString: (json: any) => {
    return Object.keys(json)
      .map(function (key) {
        return encodeURIComponent(key) + "=" + encodeURIComponent(json[key])
      })
      .join("&")
  },
  queryStringToJSON: (qs: any) => {
    qs = qs || location.search.slice(1)

    var pairs = qs.split("&")
    var result: any = {}
    pairs.forEach(function (p: any) {
      var pair = p.split("=")
      var key = pair[0]
      var value = decodeURIComponent(pair[1] || "")

      if (result[key]) {
        if (Object.prototype.toString.call(result[key]) === "[object Array]") {
          result[key].push(value)
        } else {
          result[key] = [result[key], value]
        }
      } else {
        result[key] = value
      }
    })

    return JSON.parse(JSON.stringify(result))
  },
  Intl: {
    formatCurrency: (val: number) => currencyFormatter.format(val),
  },
  CallToAction: {
    setContactFormVisible: (state: boolean, property?: string) => {
      Store.setState({
        arrangeCallbackFormVisible: state,
        contactFormLinkedProperty: property,
      })
    },
  },
}
