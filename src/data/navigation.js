export default [
  {
    name: 'Филиал',
    href: { name: 'filial' },
    icon: 'LibraryIcon',
    current: false,
    uname: 'filial',
    child: []
  },
  {
    name: 'Справка',
    href: '#',
    icon: 'BookOpenIcon',
    current: false,
    uname: 'text',
    child: []
  },
  {
    name: 'Финансы',
    href: '#',
    icon: 'CurrencyDollarIcon',
    current: false,
    uname: 'text',
    child: []
  },
  {
    name: 'Документы',
    href: { name: 'Home' },
    icon: 'PhotographIcon',
    current: false,
    uname: 'dashboard',
    child: []
  },
  {
    name: 'Персоны',
    href:  { name: 'person-view' },
    icon: 'UserGroupIcon',
    current: false,
    uname: 'person-view', 
    child: [{
        name: 'Список',
        icon: 'ViewListIcon',
        href: { name: 'person-view' },
        current: false,
        uname: 'person-view',
        child: []
      },
      {
        name: 'Карточки',
        icon: 'CollectionIcon',
        href: { name: 'person-update', params: { id: '83'} },
        current: false,
        uname: 'person-update',
        child: []
      },
      {
        name: 'Блокнот',
        icon: 'CheckCircleIcon',
        href: '',
        current: false,
        uname: 'text',
        child: []
      },
      {
        name: 'Свойства',
        icon: 'CheckCircleIcon',
        href: '',
        current: false,
        uname: 'text',
        child: []
      },
      {
        name: 'Сотрудники',
        icon: 'CheckCircleIcon',
        href: '',
        current: false,
        uname: 'text',
        child: []
      },
      {
        name: 'Фин структура',
        icon: 'CheckCircleIcon',
        href: '',
        current: false,
        uname: 'text',
        child: []
      },
      {
        name: 'Вертикаль',
        icon: 'CheckCircleIcon',
        href: '',
        current: false,
        uname: 'text',
        child: []
      },
      {
        name: 'Учет',
        icon: 'CheckCircleIcon',
        href: '',
        current: false,
        uname: 'text',
        child: []
      },
      {
        name: 'Вакансии',
        icon: 'CheckCircleIcon',
        href: '',
        current: false,
        uname: 'text',
        child: []
      },
      {
        name: 'Натройки',
        icon: 'CheckCircleIcon',
        href: '',
        current: false,
        uname: 'text',
        child: []
      },
      {
        name: 'Отчеты',
        icon: 'CheckCircleIcon',
        href: '',
        current: false,
        uname: 'text',
        child: []
      },
      {
        name: 'По сотрудникам',
        icon: 'CheckCircleIcon',
        href: '',
        current: false,
        uname: 'text',
        child: []
      },
      {
        name: 'Гос отчетность',
        icon: 'CheckCircleIcon',
        href: { name: 'Home2' },
        current: false,
        uname: 'dashboard-2', 
        child: [{
            name: 'Список',
            icon: 'CheckCircleIcon',
            href: '',
            current: false,
            uname: 'text',
            child: []
          },
          {
            name: 'Карточки',
            icon: 'CheckCircleIcon',
            href: '',
            current: false,
            uname: 'text',
            child: []
          },
          {
            name: 'Блокнот',
            icon: 'CheckCircleIcon',
            href: '',
            current: false,
            uname: 'text',
            child: []
          },
          {
            name: 'Свойства',
            icon: 'CheckCircleIcon',
            href: '',
            current: false,
            uname: 'text',
            child: []
          },
          {
            name: 'Сотрудники',
            icon: 'CheckCircleIcon',
            href: '',
            current: false,
            uname: 'text',
            child: []
          },
          {
            name: 'Фин структура',
            icon: 'CheckCircleIcon',
            href: '',
            current: false,
            uname: 'text',
            child: []
          },
          {
            name: 'Вертикаль',
            icon: 'CheckCircleIcon',
            href: '',
            current: false,
            uname: 'text',
            child: []
          },
          {
            name: 'Учет',
            icon: 'CheckCircleIcon',
            href: '',
            current: false,
            uname: 'text',
            child: []
          },
          {
            name: 'Вакансии',
            icon: 'CheckCircleIcon',
            href: '',
            current: false,
            uname: 'text',
            child: []
          },
          {
            name: 'Натройки',
            icon: 'CheckCircleIcon',
            href: '',
            current: false,
            uname: 'text',
            child: []
          },
          {
            name: 'Отчеты',
            icon: 'CheckCircleIcon',
            href: '',
            current: false,
            uname: 'text',
            child: []
          },
          {
            name: 'По сотрудникам',
            icon: 'CheckCircleIcon',
            href: '',
            current: false,
            uname: 'text',
            child: []
          },
          {
            name: 'Гос отчетность',
            icon: 'CheckCircleIcon',
            href: { name: 'Home2' },
            current: false,
            uname: 'dashboard-2'
          },
        ]
      },
    ]
  },
  {
    name: 'Группы',
    href: '#',
    icon: 'CollectionIcon',
    current: false,
    uname: 'text',
    child: []
  },
  {
    name: 'Органайзер',
    href: '#',
    icon: 'CogIcon',
    current: false,
    uname: 'text',
    child: []
  },
  {
    name: 'Бизнес',
    href: '#',
    icon: 'BriefcaseIcon',
    current: false,
    uname: 'text',
    child: []
  },
  {
    name: 'Пироекты',
    href: '#',
    icon: 'TableIcon',
    current: false,
    uname: 'text',
    child: []
  },
  {
    name: 'Товары',
    href: '#',
    icon: 'TagIcon',
    current: false,
    uname: 'text',
    child: []
  },
  {
    name: 'Курсы',
    href: '#',
    icon: 'PresentationChartLineIcon',
    current: false,
    uname: 'text',
    child: []
  },
  {
    name: 'Операции',
    href: '#',
    icon: 'AdjustmentsIcon',
    current: false,
    uname: 'text',
    child: []
  },
  {
    name: 'Продажи',
    href: { name: 'order-view' },
    icon: 'CurrencyDollarIcon',
    current: false,
    uname: 'order-view',
    child: [
      {
        name: 'Список заказов',
        href: { name: 'order-view' },
        icon: 'ViewListIcon',
        current: false,
        uname: 'order-view',
        child: []
      },
      {
        name: 'Продукты',
        href: { name: 'product-view' },
        icon: 'ArchiveIcon',
        current: false,
        uname: 'product-view',
        child: [
          {
            name: 'Каталог',
            href: { name: 'product-view' },
            icon: 'ViewListIcon',
            current: false,
            uname: 'product-view',
            child: []
          },
        ]
      },
    ]
  },
  {
    name: 'Консигнация',
    href: '#',
    icon: 'BeakerIcon',
    current: false,
    uname: 'text',
    child: [
      // {
      //   name: 'Список заказов',
      //   href: { name: 'orser-view' },
      //   icon: 'ViewListIcon',
      //   current: false,
      //   uname: 'order-view',
      //   child: []
      // },
    ]
  },
  {
    name: 'Закупки',
    href: '#',
    icon: 'ClipboardListIcon',
    current: false,
    uname: 'text',
    child: []
  },
  {
    name: 'Транспорт',
    href: '#',
    icon: 'SupportIcon',
    current: false,
    uname: 'text',
    child: []
  },
  {
    name: 'Склад',
    href: '#',
    icon: 'InboxIcon',
    current: false,
    uname: 'text',
    child: []
  },
  {
    name: 'Статистика',
    href: '#',
    icon: 'ChartPieIcon',
    current: false,
    uname: 'text',
    child: []
  },
  {
    name: 'Права',
    href: { name: 'roles-view' },
    icon: 'AcademicCapIcon',
    current: false,
    uname: 'roles-view',
    child: [
      {
        name: 'Пользователи',
        href: { name: 'roles-view' },
        icon: 'UsersIcon',
        current: false,
        uname: 'roles-view',
        child: [
          {
            name: 'Роли',
            href: { name: 'roles-view' },
            icon: 'ViewListIcon',
            current: false,
            uname: 'roles-view'
          },
        ]
      }
    ]
  },
  {
    name: 'Служебные',
    href: '#',
    icon: 'CogIcon',
    current: false,
    uname: 'text',
    child: []
  }
]