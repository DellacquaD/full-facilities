/*
chrome.runtime.onInstalled.addListener(() => {
  // Menú principal
  chrome.contextMenus.create({
    id: "parentMenu",
    title: "Full Facilities",
    contexts: ["selection"]
  });

  // Crear los submenús con URLs específicas
  const submenus = {
    "Chimera (case ID)": "https://cx-one.adminml.com/chimera/cases/",
    "Item ID": null, // submenú publicaciones
    "Retiro": null,  // submenú
    "Mercado Envíos": null, //submenú
    "Inventory": "https://shipping-bo.adminml.com/sauron/fulfillment/cx/inventory/",
    "Inbound": "https://shipping-bo.adminml.com/sauron/fulfillment/cx/inbound/",
    "Mediacion V3": "https://cx-one.adminml.com/fenrir/spa?claim_id="
  };

  for (const [id, url] of Object.entries(submenus)) {
    chrome.contextMenus.create({
      id: id,
      parentId: "parentMenu",
      title: id,
      contexts: ["selection"]
    });
  }

  // Submenú para "Item ID"
  const itemSubmenus = {
    "Item SBO": "https://shipping-bo.adminml.com/sauron/items/",
    "Nutela": "https://moderations.adminml.com/moderations/nutela/search/"
  };

  for (const [id, url] of Object.entries(itemSubmenus)) {
    chrome.contextMenus.create({
      id: id,
      parentId: "Item ID",
      title: id,
      contexts: ["selection"]
    });
  }

  // Submenú para "Retiro"
  const retiroSubmenus = {
    "Retiro SBO": "https://shipping-bo.adminml.com/sauron/fulfillment/cx/withdrawal/",
    "Remito Retiro": "https://envios.adminml.com/logistics/package-management/package/"
  };

  for (const [id, url] of Object.entries(retiroSubmenus)) {
    chrome.contextMenus.create({
      id: id,
      parentId: "Retiro",
      title: id,
      contexts: ["selection"]
    });
  }

  const meSubmenus = {
    "Order ID": "https://shipping-bo.adminml.com/sauron/fulfillment/cx/withdrawal/",
    "Pack ID": "https://envios.adminml.com/logistics/package-management/package/",
    "Shipment ID": "https://shipping-bo.adminml.com/sauron/shipments/cx/shipment/",
  };
  
  for (const [id, url] of Object.entries(meSubmenus)) {
    chrome.contextMenus.create({
      id: id,
      parentId: "Mercado Envíos",
      title: id,
      contexts: ["selection"]
    });
  }
});

// Submenú para "Mercado Envíos"

chrome.contextMenus.onClicked.addListener((info, tab) => {
  const baseUrl = {
    "Chimera (case ID)": "https://cx-one.adminml.com/chimera/cases/",
    "Inventory": "https://shipping-bo.adminml.com/sauron/fulfillment/cx/inventory/",
    "Inbound": "https://shipping-bo.adminml.com/sauron/fulfillment/cx/inbound/",
    "Mediacion V3": "https://cx-one.adminml.com/fenrir/spa?claim_id=",
    "Item SBO": "https://shipping-bo.adminml.com/sauron/items/",
    "Nutela": "https://moderations.adminml.com/moderations/nutela/search/",
    "Retiro SBO": "https://shipping-bo.adminml.com/sauron/fulfillment/cx/withdrawal/",
    "Remito Retiro": "https://envios.adminml.com/logistics/package-management/package/",
    "Order ID": "https://shipping-bo.adminml.com/sauron/shipments/cx/order/",
    "Pack ID": "https://envios.adminml.com/logistics/package-management/package/",
    "Shipment ID": "https://shipping-bo.adminml.com/sauron/shipments/cx/shipment/",
  }[info.menuItemId];

  if (baseUrl) {
    const selectedText = info.selectionText;
    const trackUrl = `${baseUrl}${selectedText}`;
    chrome.tabs.create({ url: trackUrl });
  }
});
*/

chrome.runtime.onInstalled.addListener(() => {
  // Menú principal
  chrome.contextMenus.create({
    id: "parentMenu",
    title: "Full Facilities",
    contexts: ["selection"]
  });

  // Crear los submenús con URLs específicas
  const submenus = {
    "Chimera (case ID)": "https://cx-one.adminml.com/chimera/cases/",
    "Item ID": null,
    "Retiro": null,
    "Mercado Envíos": null,
    "Inventory": "https://shipping-bo.adminml.com/sauron/fulfillment/cx/inventory/",
    "Inbound": "https://shipping-bo.adminml.com/sauron/fulfillment/cx/inbound/",
    "Mediacion V3": "https://cx-one.adminml.com/fenrir/spa?claim_id="
  };

  for (const [id, url] of Object.entries(submenus)) {
    chrome.contextMenus.create({
      id: id,
      parentId: "parentMenu",
      title: id,
      contexts: ["selection"]
    });
  }

  // Submenú para "Item ID"
  const itemSubmenus = {
    "Item SBO": "https://shipping-bo.adminml.com/sauron/items/",
    "Nutela": "https://moderations.adminml.com/moderations/nutela/search/"
  };

  for (const [id, url] of Object.entries(itemSubmenus)) {
    chrome.contextMenus.create({
      id: id,
      parentId: "Item ID",
      title: id,
      contexts: ["selection"]
    });
  }

  // Submenú para "Retiro"
  const retiroSubmenus = {
    "Retiro SBO": "https://shipping-bo.adminml.com/sauron/fulfillment/cx/withdrawal/",
    "Remito Retiro": "https://envios.adminml.com/logistics/package-management/package/"
  };

  for (const [id, url] of Object.entries(retiroSubmenus)) {
    chrome.contextMenus.create({
      id: id,
      parentId: "Retiro",
      title: id,
      contexts: ["selection"]
    });
  }

  // Submenú para "Mercado Envíos"
  const meSubmenus = {
    "Order ID": "https://shipping-bo.adminml.com/sauron/shipments/cx/order/",
    "Pack ID": "https://envios.adminml.com/logistics/package-management/package/",
    "Shipment ID": "https://shipping-bo.adminml.com/sauron/shipments/cx/shipment/",
    "Ruta de envío": null
  };

  for (const [id, url] of Object.entries(meSubmenus)) {
    chrome.contextMenus.create({
      id: id,
      parentId: "Mercado Envíos",
      title: id,
      contexts: ["selection"]
    });
  }

  // Submenú para "Ruta de envío"
  const rutaSubmenus = {
    "MLA": "https://envios.adminml.com/logistics/monitoring-distribution/detail/",
    "MLM": "https://envios.adminml.com/logistics/monitoring-distribution/detail/",
    "MLC": "https://envios.adminml.com/logistics/monitoring-distribution/detail/",
    "MCO": "https://envios.adminml.com/logistics/monitoring-distribution/detail/"
  };

  for (const [id, url] of Object.entries(rutaSubmenus)) {
    chrome.contextMenus.create({
      id: `ruta-${id}`,
      parentId: "Ruta de envío",
      title: id,
      contexts: ["selection"]
    });
  }
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  let selectedText = info.selectionText;
  let baseUrl = {
    "Chimera (case ID)": "https://cx-one.adminml.com/chimera/cases/",
    "Inventory": "https://shipping-bo.adminml.com/sauron/fulfillment/cx/inventory/",
    "Inbound": "https://shipping-bo.adminml.com/sauron/fulfillment/cx/inbound/",
    "Mediacion V3": "https://cx-one.adminml.com/fenrir/spa?claim_id=",
    "Item SBO": "https://shipping-bo.adminml.com/sauron/items/",
    "Nutela": "https://moderations.adminml.com/moderations/nutela/search/",
    "Retiro SBO": "https://shipping-bo.adminml.com/sauron/fulfillment/cx/withdrawal/",
    "Remito Retiro": "https://envios.adminml.com/logistics/package-management/package/",
    "Order ID": "https://shipping-bo.adminml.com/sauron/shipments/cx/order/",
    "Pack ID": "https://envios.adminml.com/logistics/package-management/package/",
    "Shipment ID": "https://shipping-bo.adminml.com/sauron/shipments/cx/shipment/"
  }[info.menuItemId];

  if (info.menuItemId.startsWith("ruta-")) {
    const site = info.menuItemId.split("-")[1];
    baseUrl = `https://envios.adminml.com/logistics/monitoring-distribution/detail/${selectedText}?site=${site}`;
  }

  if (baseUrl) {
    chrome.tabs.create({ url: baseUrl });
  }
});
