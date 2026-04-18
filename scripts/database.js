const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        { id: 1, name: "Pioneering Spirit", dockId: 1 },
        { id: 2, name: "Boaty McBoatface", dockId: 1 },
        { id: 3, name: "Seawise Giant", dockId: 2 },
        { id: 4, name: "Maersk Triple E", dockId: 3 },
        { id: 5, name: "Ever Given", dockId: 4 }
    ],
    shippingShips: [
        { id: 1, name: "Palais Royal", haulerId: 1 },
        { id: 2, name: "Pacific Explorer", haulerId: 1 },
        { id: 3, name: "Blue Horizon", haulerId: 2 },
        { id: 4, name: "Nordic Star", haulerId: 3 },
        { id: 5, name: "Atlantic Dream", haulerId: 3 },
        { id: 6, name: "Ocean Titan", haulerId: 4 },
        { id: 7, name: "Gulf Voyager", haulerId: 5 },
        { id: 8, name: "Silver Mist", haulerId: 5 }
    ]
}

export const getDocks = () => {
    return [...database.docks]
}

export const getHaulingShips = () => {
    return [...database.haulers]
}

export const getShippingShips = () => {
    return [...database.shippingShips]
}
