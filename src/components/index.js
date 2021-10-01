import Pagination from "./Pagination.vue"
import Modal from "./Modal.vue"

export default app => {
  app.component("modal", Modal)
  app.component("pagination", Pagination)
}