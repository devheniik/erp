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
    href: { name: 'finance-advance-reports-view' },
    icon: 'CurrencyDollarIcon',
    current: false,
    uname: 'finance-advance-reports-view',
    child: [
      {
        name: 'Авансы',
        href: { name: 'finance-advance-reports-view' },
        icon: 'CollectionIcon',
        current: false,
        uname: 'finance-advance-reports-view',
        child: [
          {
            name: 'Список',
            href: { name: 'finance-advance-reports-view' },
            icon: 'ViewListIcon',
            current: false,
            uname: 'finance-advance-reports-view',
            child: []
          },
          {
            name: 'Карточки',
            href: { name: 'finance-advance-reports-update', params: { id: 4577952  } },
            icon: 'CollectionIcon',
            current: false,
            uname: 'finance-advance-reports-update',
            child: []
          },
        ]
      },
      {
        name: 'Налоговая',
        href: { name: 'finance-tax-invoices-view'},
        icon: 'ViewListIcon',
        current: false,
        uname: 'finance-tax-invoices-view',
        child: [
          {
            name: 'Карточки',
            href: { name: 'finance-tax-invoices-view'},
            icon: 'ViewListIcon',
            current: false,
            uname: 'finance-tax-invoices-view',
            child: []
          },
        ]
      },
      
    ]
  },
  {
    name: 'Организации',
    href: { name: 'firm-view' },
    icon: 'AdjustmentsIcon',
    current: false,
    uname: 'firm-view',
    child: [
      {
        name: 'Список',
        href: { name: 'firm-view' },
        icon: 'ViewListIcon',
        current: false,
        uname: 'firm-view',
        child: []
      },
      {
        name: 'Карточки',
        href: { name: 'firm-update', params: { id: 133920 } },
        icon: 'CollectionIcon',
        current: false,
        uname: 'firm-update',
        child: []
      },
    ]
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
        href: { name: 'person-update', params: { id: '83'  } },
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
    href: { name: 'product-view' },
    icon: 'TagIcon',
    current: false,
    uname: 'text',
    child: [
      {
        name: 'Каталог товаров',
        href: { name: 'product-view' },
        icon: 'ViewListIcon',
        current: false,
        uname: 'product-view',
        child: []
      },
      {
        name: 'Карточки',
        href: { name: 'product-update', params: { id: 125135 } },
        icon: 'CollectionIcon',
        current: false,
        uname: 'product-update',
        child: []
      },
    ]
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
    href: { name: 'operation-view' },
    icon: 'AdjustmentsIcon',
    current: false,
    uname: 'operation-view',
    child: [
      {
        name: 'Список',
        href: { name: 'operation-view' },
        icon: 'ViewListIcon',
        current: false,
        uname: 'operation-view',
        child: []
      },
      {
        name: 'Карточки',
        href: { name: 'operation-update', params: { id: 0 } },
        icon: 'CollectionIcon',
        current: false,
        uname: 'operation-update',
        child: []
      },
    ]
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
        name: 'Карточки',
        icon: 'CollectionIcon',
        href: { name: 'sale-update', params: { id: '2125780'} },
        current: false,
        uname: 'sale-update',
        child: []
      },
      {
        name: 'Товары',
        href: { name: 'sales-product-view' },
        icon: 'ArchiveIcon',
        current: false,
        uname: 'sales-product-view',
        child: [
          {
            name: 'Каталог',
            href: { name: 'sales-product-view' },
            icon: 'ViewListIcon',
            current: false,
            uname: 'sales-product-view',
            child: []
          },
        ]
      },
      {
        name: 'Отгрузки',
        href: { name: 'sales-shipment-view' },
        icon: 'ArchiveIcon',
        current: false,
        uname: 'sales-shipment-view',
        child: [
          {
            name: 'Список',
            href: { name: 'sales-shipment-view' },
            icon: 'ViewListIcon',
            current: false,
            uname: 'sales-shipment-view',
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