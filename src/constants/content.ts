export const CONTENT = {
  brand: {
    name: "Fluent Mind",
    tagline: "Online Language School",
  },
  navigation: {
    home: "Главная",
    about: "О школе",
    teachers: "Наши специалисты",
    careers: "Карьера",
    contact: "Записаться",
    trialLesson: "Пробный урок",
  },
  hero: {
    badge: "Английский и русский онлайн",
    title: "Языковая школа для любого ума:\nнейроотличного и нейротипичного.",
    description:
      "Онлайн-школа иностранных языков с нейродружелюбным подходом. Индивидуальные занятия и мини-группы для детей, подростков и взрослых. Мы учитываем особенности памяти, внимания и восприятия, чтобы обучение было по-настоящему эффективным.",
    cta: {
      primary: "Записаться на пробный урок",
      secondary: "Смотреть специалистов",
    },
    features: [
      "Индивидуальные занятия",
      "Гибкий онлайн-график",
      "Авторские материалы",
    ],
    form: {
      title: "Пробный урок",
      description:
        "Оставьте контакты — мы подберём формат занятий и уровень именно под вас.",
      fields: {
        name: "Ваше имя",
        contact: "Email или Telegram",
        language: "Какой язык вас интересует?",
      },
      languageOptions: ["Английский", "Русский", "Оба языка"],
      submit: "Отправить заявку",
      disclaimer:
        "Нажимая кнопку, вы соглашаетесь на обработку персональных данных. Форма пока не отправляет данные — это прототип.",
    },
  },
  about: {
    title: "Наша миссия",
    subtitle: "Mission Statement",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit.",
    ],
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    quoteAuthor: "Fluent Mind",
  },
  teachers: {
    title: "Наши специалисты",
    description:
      "Дальше можно будет добавить отдельные карточки для каждого учителя.",
    placeholderCards: [
      "Будущая карточка преподавателя. Здесь можно будет добавить фото, специализацию и краткое описание.",
      "Ещё одна карточка для расширения команды Fluent Mind.",
    ],
  },
  careers: {
    title: "Карьера в Fluent Mind",
    subtitle: "Присоединяйтесь к нашей команде",
    description:
      "Мы ищем талантливых преподавателей, которые разделяют наш подход к нейродружелюбному обучению. Если вы увлечены языками и хотите помогать людям достигать своих целей, мы будем рады с вами познакомиться.",
    benefits: {
      title: "Что мы предлагаем",
      items: [
        "Гибкий график работы",
        "Удалённый формат занятий",
        "Поддержка и обучение",
        "Конкурентная оплата",
        "Работа с интересными студентами",
        "Возможность профессионального роста",
      ],
    },
    openPositions: {
      title: "Открытые вакансии",
      noPositions: "В данный момент у нас нет открытых вакансий, но мы всегда рады рассмотреть ваше резюме.",
    },
    application: {
      title: "Отправить резюме",
      description:
        "Отправьте нам своё резюме и расскажите о себе. Мы свяжемся с вами, если появится подходящая вакансия.",
      form: {
        name: "Ваше имя",
        email: "Email",
        phone: "Телефон (опционально)",
        experience: "Опыт преподавания",
        languages: "Какие языки вы преподаёте?",
        message: "Расскажите о себе и почему вы хотите работать в Fluent Mind",
        submit: "Отправить резюме",
      },
      disclaimer:
        "Отправляя форму, вы соглашаетесь на обработку персональных данных. Форма пока не отправляет данные — это прототип.",
    },
  },
  contact: {
    title: "Давайте подберём формат обучения",
    description:
      "Здесь можно будет подключить реальную форму, интеграцию с Telegram, WhatsApp или календарём. Сейчас это статический прототип.",
    email: "hello@fluentmind.school",
    phone: "+1 (234) 567-89-00",
    phoneNote: "(Подставь реальные контакты, когда будут готовы)",
    form: {
      title: "Быстрая заявка",
      description: "Форма-заглушка для демонстрации верстки.",
      fields: {
        name: "Имя",
        contact: "Как с вами связаться?",
        goals: "Кратко о ваших целях (например: разговорный английский для работы)",
      },
      submit: "Оставить заявку",
    },
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} Fluent Mind.`,
    tagline: "Онлайн-школа английского и русского языков.",
  },
} as const;

