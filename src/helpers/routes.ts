import AboutPage from "@/app/[pageId]/components/AboutPage/AboutPage";
import ContactsPage from "@/app/[pageId]/components/ContactsPage/ContactsPage";
import DiscountPage from "@/app/[pageId]/components/DiscountPage/DiscountPage";

const ROUTES = [
  {
    id: 1,
    name: "Про нас",
    path: "/about",
    scalable: [],
    Component: AboutPage,
  },
  {
    id: 2,
    name: "Послуги",
    path: "/services",
    scalable: [
      { id: 1, text: "Моніторинг рухомих об’єктів" },
      {
        id: 2,
        text: "Проектування, монтаж та обслуговування систем контролю доступу",
      },
      {
        id: 3,
        text: "Проектування, монтаж і підключення до моніторингу ПЦС охоронної, тривожної та протипожежної систем сигналізації",
      },
      {
        id: 4,
        text: "Фізична охорона об’єктів різних форм власності",
      },
      {
        id: 5,
        text: "Моніторинг і охорона рухомих і нерухомих обʼєктів різних форм власності",
      },
    ],
    Component: DiscountPage,
  },
  {
    id: 3,
    name: "Тарифи",
    path: "/prices",
    scalable: [
      { id: 1, text: "«Тривожна сигналізація»" },
      {
        id: 2,
        text: "«Охоронна сигналізація»",
      },
      {
        id: 3,
        text: "«Охоронно-тривожна сигналізація»",
      },
      {
        id: 4,
        text: "«Охоронно-пожежна сигналізація»",
      },
    ],
    Component: DiscountPage,
  },
  {
    id: 4,
    name: "Акції",
    path: "/discounts",
    scalable: [],
    Component: DiscountPage,
  },

  {
    id: 5,
    name: "Контакти",
    path: "/contacts",
    scalable: [],
    Component: ContactsPage,
  },
];

export default ROUTES;
