export const languages = ["RU", "UA", "EN", "PL"] as const;
export type Language = (typeof languages)[number];

export const labels: Record<Language, Record<string, string>> = {
  RU: {
    home: "Главная",
    servers: "Серверы",
    store: "Магазин",
    cart: "Корзина",
    login: "Вход",
    profile: "Профиль",
    rules: "Правила",
    contacts: "Контакты",
    discord: "Discord"
  },
  UA: {
    home: "Головна",
    servers: "Сервери",
    store: "Крамниця",
    cart: "Кошик",
    login: "Вхід",
    profile: "Профіль",
    rules: "Правила",
    contacts: "Контакти",
    discord: "Discord"
  },
  EN: {
    home: "Home",
    servers: "Servers",
    store: "Store",
    cart: "Cart",
    login: "Login",
    profile: "Profile",
    rules: "Rules",
    contacts: "Contacts",
    discord: "Discord"
  },
  PL: {
    home: "Start",
    servers: "Serwery",
    store: "Sklep",
    cart: "Koszyk",
    login: "Logowanie",
    profile: "Profil",
    rules: "Zasady",
    contacts: "Kontakt",
    discord: "Discord"
  }
};
