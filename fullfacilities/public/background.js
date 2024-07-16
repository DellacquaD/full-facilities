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
      "Inventory": "https://shipping-bo.adminml.com/sauron/fulfillment/cx/inventory/",
      "Inbound": "https://shipping-bo.adminml.com/sauron/fulfillment/cx/inbound",
      "Retiro": "https://shipping-bo.adminml.com/sauron/fulfillment/cx/withdrawal/",
      "Remito Retiro": "https://envios.adminml.com/logistics/package-management/package/",
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
  
    // Crear submenús anidados bajo "ME"
    const itemSubmenus = {
      "Item SBO": "https://shipping-bo.adminml.com/sauron/items/MLM2418322848",
      "Nutela": "https://moderations.adminml.com/moderations/nutela/search/",
    };
  
    for (const [id, url] of Object.entries(itemSubmenus)) {
      chrome.contextMenus.create({
        id: id,
        parentId: "Item ID",
        title: id,
        contexts: ["selection"]
      });
    }
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId in {"Chimera (case ID)": 1, "Item ID": 1, "Inventory": 1, "Inbound": 1, "Retiro": 1, "Remito Retiro": 1, "Mediacion V3": 1, "Option3": 1}) {
      const selectedText = info.selectionText;
      const baseUrl = {
        "Caso": "https://cx-one.adminml.com/chimera/cases/",
        "ME": null, // No URL para ME porque tiene submenús
        "IS": "https://example.com/is?number=",
        "Retiro": "https://example.com/retiro?number=",
        "Mp": "https://example.com/mp?number=",
        "Option1": "https://example.com/me/option1?number=",
        "Option2": "https://example.com/me/option2?number=",
        "Option3": "https://example.com/me/option3?number="
      }[info.menuItemId];
      
      if (baseUrl) {
        const trackUrl = `${baseUrl}${selectedText}`;
        chrome.tabs.create({ url: trackUrl });
      }
    }
  });