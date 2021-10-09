import lodash from "./lodash"
import log from "./log"

export default app => {
    app.use(log)
    app.use(lodash)
}