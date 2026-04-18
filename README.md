# Shipping-Ship-Ships-Cdixon

Shipping Ship Ships assignment.

## Requirements Coverage by Feature

### 1. Render all docks, haulers, and shipping ships
- Requirement met by composing three list components in [scripts/main.js](scripts/main.js).
- [scripts/main.js](scripts/main.js) renders section headings and calls each list function:
	- DockList()
	- HaulerList()
	- ShippingShipList()
- The app mounts into the container defined in [index.html](index.html).

### 2. Keep data in a central database module
- Requirement met in [scripts/database.js](scripts/database.js).
- The database object stores:
	- docks
	- haulers
	- shippingShips
- Getter functions are exported for each collection so UI modules consume data through functions rather than direct mutation.

### 3. Show dock details when a dock is clicked
- Requirement met in [scripts/DockList.js](scripts/DockList.js).
- Implementation details:
	- Docks are rendered as list items with data attributes data-type="dock" and data-id.
	- A document-level click listener checks for dock clicks.
	- Matching haulers are filtered by dockId.
	- Alert message shows either:
		- Which haulers are unloading at that dock, or
		- A fallback message when none are assigned.

### 4. Show shipping ship count when a hauler is clicked
- Requirement met in [scripts/HaulerList.js](scripts/HaulerList.js).
- Implementation details:
	- Haulers are rendered with data-type="hauler" and data-id.
	- On click, the selected hauler id is compared against each shipping ship haulerId.
	- The total count is shown in an alert, including singular/plural grammar handling.

### 5. Show which hauler is moving a shipping ship
- Requirement met in [scripts/ShippingShipList.js](scripts/ShippingShipList.js).
- Implementation details:
	- Shipping ships are rendered with data-type="shippingShip" and data-hauler-id.
	- On click, the associated hauler is found from the hauler list.
	- Alert message displays: shipping ship name + hauler name.

### 6. Use modular JavaScript structure
- Requirement met by separating concerns across files:
	- [scripts/database.js](scripts/database.js): data source and getters
	- [scripts/DockList.js](scripts/DockList.js): dock UI + dock click behavior
	- [scripts/HaulerList.js](scripts/HaulerList.js): hauler UI + hauler click behavior
	- [scripts/ShippingShipList.js](scripts/ShippingShipList.js): shipping ship UI + shipping ship click behavior
	- [scripts/main.js](scripts/main.js): page composition

### 7. Provide basic styling and readable layout
- Requirement met in [styles/main.css](styles/main.css).
- Styling includes:
	- constrained centered layout
	- clear heading hierarchy
	- card-like list rows
	- hover feedback for interactive list items

## File-by-File Purpose Summary
- [index.html](index.html): entry page with app container and module script load.
- [scripts/main.js](scripts/main.js): combines all feature lists into one UI.
- [scripts/database.js](scripts/database.js): in-memory relational data.
- [scripts/DockList.js](scripts/DockList.js): dock rendering + dock-to-hauler relationship interaction.
- [scripts/HaulerList.js](scripts/HaulerList.js): hauler rendering + hauler-to-ship count interaction.
- [scripts/ShippingShipList.js](scripts/ShippingShipList.js): ship rendering + ship-to-hauler lookup interaction.
- [styles/main.css](styles/main.css): visual presentation and click affordance.

## How to Verify Requirements Quickly
1. Open the app in a browser.
2. Confirm all three lists appear: Docks, Hauling Ships, Shipping Ships.
3. Click a dock and verify the unloading hauler alert.
4. Click a hauler and verify the shipping ship count alert.
5. Click a shipping ship and verify the hauling ship name alert.
