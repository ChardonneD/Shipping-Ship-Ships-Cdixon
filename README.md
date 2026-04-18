# Shipping-Ship-Ships-Cdixon

Shipping Ship Ships assignment.

## File-by-File Purpose Summary
- [index.html](index.html): entry page with app container and module script load.
- [scripts/main.js](scripts/main.js): combines all feature lists into one UI.
- [scripts/database.js](scripts/database.js): in-memory relational data.
- [scripts/DockList.js](scripts/DockList.js): dock rendering + dock-to-hauler relationship interaction.
- [scripts/HaulerList.js](scripts/HaulerList.js): hauler rendering + hauler-to-ship count interaction.
- [scripts/ShippingShipList.js](scripts/ShippingShipList.js): ship rendering + ship-to-hauler lookup interaction.
- [styles/main.css](styles/main.css): visual presentation and click affordance.

## How to Verify Reqs
1. Open the app in a browser.
2. Confirm all three lists appear: Docks, Hauling Ships, Shipping Ships.
3. Click a dock and verify the unloading hauler alert.
4. Click a hauler and verify the shipping ship count alert.
5. Click a shipping ship and verify the hauling ship name alert.
