import AboutPage from "@/app/[pageId]/components/AboutPage/AboutPage";
import ContactsPage from "@/app/[pageId]/components/ContactsPage/ContactsPage";
import DiscountPage from "@/app/[pageId]/components/DiscountPage/DiscountPage";
import EquipmentPage from "@/app/[pageId]/components/EquipmentPage/EquipmentPage";
import PricesPage from "@/app/[pageId]/components/PricesPage/PricesPage";
import ServicesPage from "@/app/[pageId]/components/ServicesPage/ServicesPage";

export interface ScalableItem {
  id: number;
  title: string;
  text: string;
  subtitle: string;
  icon: string;
  src: string;
  specs: string[];
}

export type RoutesType = {
  id: number;
  name: string;
  path: string;
  desc: string;
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
    desc: "Сторінка про компанію Alfa Security",
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
    desc: "Сторінка про послуги компанії Alfa Security",
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
    desc: "Сторінка про тарифи компанії Alfa Security",
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
    name: "Обладнання",
    path: "/equipment",
    desc: "Сторінка про обладнання, яке продає компанія Alfa Security",
    scalable: [],
    Component: EquipmentPage,
  },
  {
    id: 5,
    name: "Акції",
    path: "/discounts",
    desc: "Сторінка про знижки компанії Alfa Security",
    scalable: [
      {
        id: 1,
        src: "/images/auction-cards/image-1.jpg",
        title: "Дві акції, що сумуються",
        text: `Максимальна вигода для нових клієнтів!
        Скористайтеся подвійною акцією від нашої охоронної фірми та отримайте максимальну економію.
        Літня жара: Літо без абонплати!
        Безкоштовне обслуговування протягом всього літа.
        Рік без ПДВ: Знижка 20%!
        20% знижка на абонплату протягом всього року.
        Не втрачайте можливість скористатися одразу двома вигідними пропозиціями! Захистіть своє майно та заощаджуйте з нами.
`,
      },
      {
        id: 2,
        src: "/images/auction-cards/image-2.jpg",
        title: "Спеціальна пропозиція для сімей воїнів ЗСУ!",
        text: `Спеціальна пропозиція для сімей воїнів ЗСУ!
        Ми щиро вдячні нашим захисникам за їхню мужність, тому, як знак вдячності пропонуємо спеціальну акцію для сімей військовослужбовців Збройних Сил України.
        Знижка на абонплату до 30%! Забезпечте безпеку свого дому за вигідними умовами.
        Безкоштовний монтаж сигналізації! Ми подбаємо про встановлення системи безпеки без додаткових витрат.
        Ця акція – наша маленька подяка за великий внесок ваших близьких у захист нашої країни.`,
      },
      {
        id: 3,
        src: "/images/auction-cards/image-3.png",
        title:
          "Півроку безкоштовного сервісу для постраждалих від дій агресора РФ!",
        text: "Наша охоронна фірма підтримує тих, хто постраждав від агресії РФ, надаючи безкоштовний сервіс на півроку. Ми забезпечимо повний спектр охоронних послуг, включаючи цілодобовий моніторинг і технічну підтримку. Залиште заявку на нашому сайті або зателефонуйте нам для отримання детальної інформації та швидкої організації встановлення.",
      },
    ],
    Component: DiscountPage,
  },

  {
    id: 6,
    name: "Контакти",
    path: "/contacts",
    desc: "Сторінка контактів компанії Alfa Security",
    scalable: [],
    Component: ContactsPage,
  },
];

export default ROUTES;
