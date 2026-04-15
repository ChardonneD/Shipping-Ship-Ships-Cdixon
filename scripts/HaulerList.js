import { getHaulingShips, getShippingShips } from "./database.js"

export const HaulerList = () => {
    const haulers = getHaulingShips()

    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        haulersHTML += `<li data-id="${hauler.id}" data-type="hauler">${hauler.name}</li>`
    }

    haulersHTML += "</ul>"

    return haulersHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "hauler") {
            const haulerId = parseInt(itemClicked.dataset.id)
            const shippingShips = getShippingShips()

            let count = 0

            for (const ship of shippingShips) {
                if (ship.haulerId === haulerId) {
                    count++
                }
            }

            window.alert(`This hauler is carrying ${count} shipping ship${count !== 1 ? "s" : ""}`)
        }
    }
)
