/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import "./src/css/index.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import wrapWithProvider from "./src/hoc/ReduxStoreWrapper"
export const wrapRootElement = wrapWithProvider
