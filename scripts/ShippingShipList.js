import { getShippingShips, getHaulingShips } from "./database.js"

export const ShippingShipList = () => {
    const ships = getShippingShips()

    let shipsHTML = "<ul>"

    for (const ship of ships) {
        shipsHTML += `<li data-id="${ship.id}" data-type="shippingShip" data-hauler-id="${ship.haulerId}">${ship.name}</li>`
    }

    shipsHTML += "</ul>"

    return shipsHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "shippingShip") {
            const haulerId = parseInt(itemClicked.dataset.haulerId)
            const shipName = itemClicked.textContent.trim()
            const haulers = getHaulingShips()

            let haulingShip = { name: "Incorrect" }

            for (const hauler of haulers) {
                if (hauler.id === haulerId) {
                    haulingShip = hauler
                }
            }

            window.alert(`${shipName} is being hauled by ${haulingShip.name}`)
        }
    }
)
