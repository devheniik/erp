# Viewer


```javascript
{
  filters: [
      {
          entity: "search",
          label: "Поиск",
          component: "search",
          value: null
      }, 
      {
          entity: "filial",
          value: null,
          label: "Текущий филиал",
          component: "list",
          list: [
              {
                  label: "Текущие",
                  value: "1"
              }, 
              {
                  label: "Корпорация",
                  value: "2"
              }, 
              {
                  label: "Все организации",
                  value: "3"
              }, 
              {
                  label: "Все сотрудники",
                  value: "4"
              }
          ]
      }, 
      {
          entity: "job",
          value: null,
          label: "Должность",
          meanKey: "a_s1",
          component: "modal-select",
          api: "uniprops/post"
      }
  ],
  bar: {
    
  }
  data: {
    headers: [
      {
        label: 'Номер',
        value: 'number'
      }
    ],
    body: [
      [ // строка
        { // ячейка
          name: 'number',
          label: 'Компания x',
          params: {
            id: 123
          },
          clickable: true,
          modal: false,
          route: 'firm-view'
        }
      ]
    ]
  },
  components: {
    start: [
      {
        component: 'sub-table',
        bind: { ... },
        data: { ... },
        api: 'string' 
      }
    ],
    end: [
      {
        component: 'sub-table',
        bind: { ... },
        data: { ... },
        api: 'string' 
      }
    ],
  },
  page: 1,
  limit: 10,
  sort: { 
      field: null, 
      order: null 
  },
  meta: {
    include: [],
    custom: [],
    pagination: {
      total: 0,
      count: 0,
      per_page: 10,
      current_page: 1,
      total_pages: 1,
      links: {}
    }
  }
}

// [
//       [ // этот массив это первая колонка в этом апи она одна, но в других может быть несколько
//         {
//             label: 'Всего, в вал. операций',
//             value: 0 
//         },
//         {
//             label: 'Всего, в вал. операций',
//             value: 0
//         },
//         {
//             label: 'Всего, в вал. операций',
//             value: 0
//         },
//         {
//             label: 'Всего, в вал. операций',
//             value: 0
//         }
//       ]
//   ]
```