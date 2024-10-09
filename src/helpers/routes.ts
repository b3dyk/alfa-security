import AboutPage from "@/app/[pageId]/components/AboutPage/AboutPage";
import ContactsPage from "@/app/[pageId]/components/ContactsPage/ContactsPage";
import DiscountPage from "@/app/[pageId]/components/DiscountPage/DiscountPage";
import PricesPage from "@/app/[pageId]/components/PricesPage/PricesPage";
import ServicesPage from "@/app/[pageId]/components/ServicesPage/ServicesPage";

export interface ScalableItem {
  id: number;
  title: string;
  text: string;
  subtitle: string;
  icon: string;
  specs: string[];
}

export type RoutesType = {
  id: number;
  name: string;
  path: string;
  scalable: Partial<ScalableItem>[];
  Component: React.FC<{ scalable: Partial<ScalableItem>[] }>;
}[];

export interface PageProps {
  scalable: Partial<ScalableItem>[];
}

const ROUTES: RoutesType = [
  {
    id: 1,
    name: "Про нас",
    path: "/about",
    scalable: [
      {
        id: 1,
        text: "Залежно від запиту клієнта та з урахуванням потенційних ризиків ми розробляємо технічне рішення та на професійному рівні виконуємо інсталяцію й налаштування систем безпеки, проводимо навчання користувачів.",
        title: "МОНТАЖ СИСТЕМИ",
        subtitle: "Встановлення обладнання для охорони",
        icon: "tool",
      },
      {
        id: 2,
        text: "Цілодобовий контроль за станом систем безпеки на об’єкті дозволяє оперативно реагувати на тривоги та своєчасно виявляти поломки або збої в роботі обладнання.",
        title: "МОНІТОРИНГ",
        subtitle: "Постійний контроль ситуації",
        icon: "camera",
      },
      {
        id: 3,
        text: "При отриманні сигналу тривоги про проникнення або пожежу на об’єкт виїжджає група мобільного реагування для запобігання протиправним діям, збереження майна клієнта та усунення ймовірних ризиків.",
        title: "РЕАГУВАННЯ",
        subtitle: "Мінімальний час прибуття",
        icon: "time",
      },
      {
        id: 4,
        text: "Ми проводимо обслуговування систем безпеки та забезпечуємо технічну підтримку кожного об’єкта. У разі виникнення несправностей або збоїв в роботі обладнання, на об’єкт виїжджають фахівці для усунення неполадок.",
        title: "ТЕХНІЧНА ПІДТРИМКА",
        subtitle: "Забезпечення безперебійної роботи систем",
        icon: "headset",
      },
    ],
    Component: AboutPage,
  },
  {
    id: 2,
    name: "Послуги",
    path: "/services",
    scalable: [
      { id: 1, title: "Моніторинг рухомих об’єктів" },
      {
        id: 2,
        title: "Проектування, монтаж та обслуговування систем контролю доступу",
      },
      {
        id: 3,
        title:
          "Проектування, монтаж і підключення до моніторингу ПЦС охоронної, тривожної та протипожежної систем сигналізації",
      },
      {
        id: 4,
        title: "Фізична охорона об’єктів різних форм власності",
      },
      {
        id: 5,
        title:
          "Моніторинг і охорона рухомих і нерухомих обʼєктів різних форм власності",
      },
    ],
    Component: ServicesPage,
  },
  {
    id: 3,
    name: "Тарифи",
    path: "/prices",
    scalable: [
      {
        id: 1,
        title: "«Тривожна сигналізація»",
        specs: [
          "кнопка тривожної сигналізації",
          "моніторинг 24/7",
          "виїзд групи реагування",
          "технічна підтримка",
        ],
      },
      {
        id: 2,
        title: "«Охоронна сигналізація»",
        specs: [
          "захист від проникнення",
          "моніторинг 24/7",
          "виїзд групи реагування",
          "матеріальна відповідальність",
          "технічна підтримка",
        ],
      },
      {
        id: 3,
        title: "«Охоронно-тривожна сигналізація»",
        specs: [
          "кнопка тривожної сигналізації",
          "захист від проникнення",
          "моніторинг 24/7",
          "виїзд групи реагування",
          "матеріальна відповідальність",
          "технічна підтримка",
        ],
      },
      {
        id: 4,
        title: "«Охоронно-пожежна сигналізація»",
        specs: [
          "захист від проникнення",
          "моніторинг 24/7",
          "виїзд групи реагування",
          "матеріальна відповідальність",
          "технічна підтримка",
          "інформування про загоряння",
          "виклик служб ДСНС",
        ],
      },
    ],
    Component: PricesPage,
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
