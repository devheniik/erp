import Pagination from "./table/Pagination.vue"
import Modal from "./Modal.vue"
import Table from "./table/Table.vue"
import Viewer from "./table/Viewer.vue"
import Search from "./filters/Search.vue"
import Checkbox from "./filters/Checkbox.vue"
import ModalSelect from "./filters/ModalSelect.vue"
import List from "./filters/List.vue"
import SideTableLayout from "./table/SideTableLayout.vue"
import SideBarLayout from "./table/SideBarLayout.vue"
import DoubleTable from "./table/DoubleTable.vue"
import RollUp from "./table/RollUp.vue"
import Date from "./filters/Date.vue"
import Loading from "./loading/Loading.vue"
import Field from "./forms/Field.vue"
import Bar from "./table/Bar.vue"
import SubTable from "./table/SubTable.vue"
import Alert from "./table/Alert.vue"
import Toast from "./notifications/Toast.vue"
import Zakokrugdo from "./modals/zakokrugdo.vue"
import Zaktipceny from "./modals/zaktipceny.vue"


export default app => {
  app.component("zaktipceny", Zaktipceny)
  app.component("zakokrugdo", Zakokrugdo)
  app.component("toast", Toast)
  app.component("alert", Alert)
  app.component("sub-table", SubTable)
  app.component("bar", Bar)
  app.component("field", Field)
  app.component("loading", Loading)
  app.component("date", Date)
  app.component("double-table", DoubleTable)
  app.component("side-table", SideTableLayout)
  app.component("side-bar", SideBarLayout)
  app.component("roll-up", RollUp)
  app.component("list", List)
  app.component("ModalSelect", ModalSelect)
  app.component("checkbox", Checkbox)
  app.component("search", Search)
  app.component("viewer", Viewer)
  app.component("utable", Table)
  app.component("modal", Modal)
  app.component("pagination", Pagination)
}