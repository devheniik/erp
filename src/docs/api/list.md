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
    data: [
      {
        name: 'Метки',
        child: [
          {
            name: "Сохранить в документе",
            disabled:  false,
            type:'modal'/'promt'/'action'/'route',
            value: '',//Обязательный параметр, передавать его в поле из config.action_param_name
            url: 'url/function/..',
            params: {
              //параметры для фронта
            }
          },
          {
            name: "Округление цен",
            disabled:  false,
            type: 'modal',
            value: '',//Обязательный параметр, передавать его в поле из config.action_param_name
            url: 'sales/zakokrugdo'
          }
        ]
      }
    ],
    config: {
      promt_param_name: 'название переменной которую нужно модифицировать', // modal
      action_param_name: 'название переменной которую нужно модифицировать', // action
      params:{
        //список hidden переменных их формы
      }
    }
  },
  headers: [
      {
        label: 'Номер',
        value: 'number',
        show: true
      }
    ],
  data: [
      [ // строка
        color: '#fff',
        id: '67',
        selected: false,
        value: {
          id: { // ячейка
            label: 'Компания x',
            type: 'window',
            data: {
              params: {
                api: 'buisness_transactions/adding
              },
              query: {
                POSTER: 'Adding',
                ZAKAZ: '123'
              },
              name: 'umodal' 
            }
          },
          fio: '123123',
          zakaz: '123',
          tr: '12332'
        }
      ]
    ],
  components: {
    start: [
      {
        component: 'sub-table', // суб таблица
        config: { 
          // 
         },
        data: [
          [ // порная коллонка
            { // Строка 
                label: 'Всего, в вал. операций',
                value: 0 
            },
            {
                label: 'Всего, в вал. операций',
                value: 0
            }
          ]
        ]
      }
    ],
    end: [
      {
        component: 'alert', // сообщение 
        config: { 
          type: ['warning', 'danger'] // default - INFO
         },
        data: 'Текст сообщения' // String
      },
      {
        component: 'button', // сообщение 
        config: { 
            type: ['warning', 'danger', 'success'], // default - INFO
            action: 'window',
            label: 'Экспорт',
            data: {
              api: '',
              params: {
              //...
            }
          }, 
        }
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

const json = {
  type: ['warning', 'danger'] // default - INFO,
  data: {
    message: 'Текст сообщения' // String
  }
  component: 'toast'
}


```


## alert 

Пример - https://prnt.sc/1xhwgo8
 
       
```jsx
      <div class="w-full flex items-center"> 
          <alert v-bind="{
                  type: 'danger'
              }"></alert>
      </div>
      <div class="w-full flex items-center"> 
          <alert v-bind="{
                  type: 'warning'
              }"></alert>
      </div>
      <div class="w-full flex items-center"> 
          <alert  ></alert>
      </div>
```


---



## sub-table 

Пример - https://prnt.sc/1xhzy90
  
