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
    "Retiro": null,  // Anidado
    "Inventory": "https://shipping-bo.adminml.com/sauron/fulfillment/cx/inventory/",
    "Inbound": "https://shipping-bo.adminml.com/sauron/fulfillment/cx/inbound",
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
    "Item SBO": "https://shipping-bo.adminml.com/sauron/items/MLM2418322848",
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
    "Retiro": "https://shipping-bo.adminml.com/sauron/fulfillment/cx/withdrawal/",
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
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  const baseUrl = {
    "Chimera (case ID)": "https://cx-one.adminml.com/chimera/cases/",
    "Inventory": "https://shipping-bo.adminml.com/sauron/fulfillment/cx/inventory/",
    "Inbound": "https://shipping-bo.adminml.com/sauron/fulfillment/cx/inbound",
    "Mediacion V3": "https://cx-one.adminml.com/fenrir/spa?claim_id=",
    "Item SBO": "https://shipping-bo.adminml.com/sauron/items/MLM2418322848",
    "Nutela": "https://moderations.adminml.com/moderations/nutela/search/",
    "Retiro": "https://shipping-bo.adminml.com/sauron/fulfillment/cx/withdrawal/",
    "Remito Retiro": "https://envios.adminml.com/logistics/package-management/package/"
  }[info.menuItemId];

  if (baseUrl) {
    const selectedText = info.selectionText;
    const trackUrl = `${baseUrl}${selectedText}`;
    chrome.tabs.create({ url: trackUrl });
  }
});
