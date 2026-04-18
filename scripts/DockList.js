import { getDocks, getHaulingShips } from "./database.js"

export const DockList = () => {
    const docks = getDocks()

    let docksHTML = "<ul>"

    for (const dock of docks) {
        docksHTML += `<li data-id="${dock.id}" data-type="dock">${dock.location} (Max capacity: ${dock.volume}M tons)</li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "dock") {
            const dockId = parseInt(itemClicked.dataset.id)
            const docks = getDocks()
            const haulers = getHaulingShips()

            const dock = docks.find(d => d.id === dockId)
            const dockHaulers = haulers.filter(h => h.dockId === dockId)

            if (dockHaulers.length === 0) {
                window.alert(`The ${dock.location} dock is currently unloading nothing`)
            } else {
                const haulerNames = dockHaulers.map(h => h.name).join(", ")
                window.alert(`The ${dock.location} dock is currently unloading ${haulerNames}`)
            }
        }
    }
)
