import Pagination from "./Pagination.vue"
import Modal from "./Modal.vue"
import Table from "./Table.vue"

export default app => {
  app.component("utable", Table)
  app.component("modal", Modal)
  app.component("pagination", Pagination)
}