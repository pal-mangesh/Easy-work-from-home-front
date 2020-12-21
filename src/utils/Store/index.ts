import createStore from "redux-zero"

const initialState = {
  hello: "world",
}
export const Store = createStore(initialState as any)

export default {
  setState: (newState: any) => {
    Store.setState((state: any) => ({ ...state, ...newState }))
  },
  getState: Store.getState,
}
