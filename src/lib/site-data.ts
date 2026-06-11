export type ServerId = "nord-1" | "nord-2" | "nord-3";

export const servers = [
  {
    id: "nord-1",
    name: "DayZ Nord #1",
    subtitle: "Namalsk PvP",
    map: "Namalsk",
    mode: "PvP",
    online: 0,
    slots: 100,
    ip: "play.dayznord.example:2302",
    status: "online",
    description: "Hardcore northern PvP with fog, snow, military zones and fast conflict around high-value loot.",
    rules: ["No cheats or exploits", "No combat logging", "Raid windows follow global rules"]
  },
  {
    id: "nord-2",
    name: "DayZ Nord #2",
    subtitle: "Chernarus PvP",
    map: "Chernarus",
    mode: "PvP",
    online: 0,
    slots: 100,
    ip: "play.dayznord.example:2402",
    status: "online",
    description: "Classic Chernarus PvP with custom loot routes, bases and moderated raid disputes.",
    rules: ["No duping", "Respect base limits", "Voice and chat rules apply"]
  },
  {
    id: "nord-3",
    name: "DayZ Nord #3",
    subtitle: "Deer Isle PvE/PvP",
    map: "Deer Isle",
    mode: "PvE/PvP",
    online: 0,
    slots: 100,
    ip: "play.dayznord.example:2502",
    status: "offline",
    description: "Mixed survival server with PvE travel, PvP zones, events and support for slower group progression.",
    rules: ["PvP only in marked zones", "No griefing PvE bases", "Event rules override zone defaults"]
  }
] as const;

export const whyNord = [
  "Stable server infrastructure",
  "Active administration",
  "Regular events",
  "Custom loot balance",
  "Discord community"
] as const;

export const team = [
  ["Admin", "NordLead", "Server policy, monetization approval and infrastructure."],
  ["Moderator", "Frost", "Reports, disputes, chat moderation and raid checks."],
  ["Support", "Vega", "Tickets, store questions, refunds and new player help."]
] as const;

export const storeCategories = [
  "VIP / Priority Queue",
  "Cosmetics",
  "Base decorations",
  "Starter cosmetic packs",
  "Vehicles skins",
  "Custom flags",
  "Support donations"
] as const;

export const products = [
  {
    id: "priority-queue",
    serverId: "nord-1",
    category: "VIP / Priority Queue",
    image: "/dayz-nord-hero.png",
    name: "Priority Queue",
    description: "Faster queue access only. No loot, combat stats, spawn or economy advantage.",
    price: { eur: 7.99, uah: 340, pln: 35 }
  },
  {
    id: "nord-flag",
    serverId: "nord-1",
    category: "Custom flags",
    image: "/dayz-nord-hero.png",
    name: "Custom Nord Flag",
    description: "Cosmetic community flag review for your group. No storage or gameplay bonus.",
    price: { eur: 4.99, uah: 210, pln: 22 }
  },
  {
    id: "base-lights",
    serverId: "nord-2",
    category: "Base decorations",
    image: "/dayz-nord-hero.png",
    name: "Base Decoration Pack",
    description: "Approved non-functional decoration request for base identity.",
    price: { eur: 5.99, uah: 255, pln: 26 }
  },
  {
    id: "vehicle-skin",
    serverId: "nord-2",
    category: "Vehicles skins",
    image: "/dayz-nord-hero.png",
    name: "Vehicle Skin",
    description: "Cosmetic vehicle skin request. Does not change speed, armor, storage or spawn chance.",
    price: { eur: 6.49, uah: 275, pln: 29 }
  },
  {
    id: "starter-cosmetic",
    serverId: "nord-3",
    category: "Starter cosmetic packs",
    image: "/dayz-nord-hero.png",
    name: "Starter Cosmetic Pack",
    description: "Visual-only starter identity pack. No weapons, armor, medical items or survival supplies.",
    price: { eur: 3.99, uah: 170, pln: 18 }
  },
  {
    id: "support-donation",
    serverId: "nord-3",
    category: "Support donations",
    image: "/dayz-nord-hero.png",
    name: "Support Donation",
    description: "Voluntary support for hosting and moderation. No gameplay reward.",
    price: { eur: 4.99, uah: 210, pln: 22 }
  }
] as const;

export const ruleGroups = [
  ["General rules", ["Respect staff decisions", "No exploiting, duping or abuse of bugs", "Reports must include evidence when possible"]],
  ["PvP rules", ["No combat logging", "No stream sniping", "PvP zones on mixed servers must be respected"]],
  ["Anti-cheat", ["Cheats, macros and external advantages are banned", "Ban evasion leads to permanent removal"]],
  ["Base rules", ["Follow base size limits", "Do not block military loot zones", "No unreachable or glitched bases"]],
  ["Raid rules", ["Raid only during allowed windows", "No item despawn griefing", "Respect event-specific raid restrictions"]],
  ["Communication rules", ["No hate speech or threats", "No spam in tickets", "Keep disputes factual"]]
] as const;

export const currencies = ["EUR", "UAH", "PLN"] as const;
export type Currency = (typeof currencies)[number];

