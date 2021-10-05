import Pagination from "./Pagination.vue"
import Modal from "./Modal.vue"
import Table from "./Table.vue"
import Viewer from "./Viewer.vue"
import Search from "./Search.vue"
import Checkbox from "./Checkbox.vue"
import ModalSelect from "./ModalSelect.vue"
import List from "./List.vue"



export default app => {
  app.component("list", List)
  app.component("ModalSelect", ModalSelect)
  app.component("checkbox", Checkbox)
  app.component("search", Search)
  app.component("uviewer", Viewer)
  app.component("utable", Table)
  app.component("modal", Modal)
  app.component("pagination", Pagination)
}