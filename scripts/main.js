import { DockList } from "./DockList.js"
import { HaulerList } from "./HaulerList.js"
import { ShippingShipList } from "./ShippingShipList.js"

const mainContainer = document.querySelector("#container")

mainContainer.innerHTML = `
    <h2>Docks</h2>
    ${DockList()}

    <h2>Hauling Ships</h2>
    ${HaulerList()}

    <h2>Shipping Ships</h2>
    ${ShippingShipList()}
`
