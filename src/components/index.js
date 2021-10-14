import Pagination from "./Pagination.vue"
import Modal from "./Modal.vue"
import Table from "./Table.vue"
import Viewer from "./Viewer.vue"
import Search from "./Search.vue"
import Checkbox from "./Checkbox.vue"
import ModalSelect from "./ModalSelect.vue"
import List from "./List.vue"
import SideTableLayout from "./SideTableLayout.vue"
import SideBarLayout from "./SideBarLayout.vue"
import DoubleTable from "./DoubleTable.vue"
import Date from "./Date.vue"



export default app => {
  app.component("date", Date)
  app.component("double-table", DoubleTable)
  app.component("side-table", SideTableLayout)
  app.component("side-bar", SideBarLayout)
  app.component("list", List)
  app.component("ModalSelect", ModalSelect)
  app.component("checkbox", Checkbox)
  app.component("search", Search)
  app.component("viewer", Viewer)
  app.component("utable", Table)
  app.component("modal", Modal)
  app.component("pagination", Pagination)
}