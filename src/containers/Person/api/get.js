// import toast

export default async function (params) {
  try {
    // axios.get('route/route')
  } catch (error) {

  } finally {

  }

  return { 
      filters: {
          request: {
              filial: null,
              checkbox: null,
              search: '123',
              job: null,
              color: null
          },
          response: [
              {
                  entity: "search",  label: "Поиск", component: "search"
              },
              {
                entity: "checkbox",  label: "Label", component: "checkbox"
              },
              {
                  entity: "filial",  label: "Текущий филиал", component: "list", list: [
                      {
                          label: 'Текущие',
                          value: '*'
                      }
                  ]
              },
              {
                  entity: "job",  label: "Должность", component: "modal-select", entityLink: '/jobs'
              },
              {
                  entity: "color",  label: "Цвета", component: "list", list: [
                      {
                          label: 'Красный',
                          value: 'red'
                      }
                  ]
              },
          ]
      },
    result: {
      headers: [
        'Имя', 'Должность', 'Отдел', 'Номер', 'Департамент', 'Статус', 'Организация'
      ],
      body:
        [{
          uid: '34435',
          values: {
            name: 'Наталья Бугильная',
            job: 'Отдел збыта ЛФ',
            otdel: 'Отдел збыта по строительным организациям',
            number: '+3807456376',
            department: 'Optimization',
            status: 'Активен',
            org: 'мизол'
          }
        },
        {
          uid: '12312',
          values: {
            name: 'Наталья Бугильная',
            job: 'Отдел збыта ЛФ',
            otdel: 'Отдел збыта по строительным организациям',
            number: '+3807456376',
            department: 'Optimization',
            status: 'Активен',
            org: 'мизол'
          }
        },
        {
          uid: '12312',
          values: {
            name: 'Наталья Бугильная',
            job: 'Отдел збыта ЛФ',
            otdel: 'Отдел збыта по строительным организациям',
            number: '+3807456376',
            department: 'Optimization',
            status: 'Активен',
            org: 'мизол'
          }
        },
        {
          uid: '12312',
          values: {
            name: 'Наталья Бугильная',
            job: 'Отдел збыта ЛФ',
            otdel: 'Отдел збыта по строительным организациям',
            number: '+3807456376',
            department: 'Optimization',
            status: 'Активен',
            org: 'мизол'
          }
        },
        {
          uid: '12312',
          values: {
            name: 'Наталья Бугильная',
            job: 'Отдел збыта ЛФ',
            otdel: 'Отдел збыта по строительным организациям',
            number: '+3807456376',
            department: 'Optimization',
            status: 'Активен',
            org: 'мизол'
          }
        },
        {
          uid: '12312',
          values: {
            name: 'Наталья Бугильная',
            job: 'Отдел збыта ЛФ',
            otdel: 'Отдел збыта по строительным организациям',
            number: '+3807456376',
            department: 'Optimization',
            status: 'Активен',
            org: 'мизол'
          }
        },
        {
          uid: '12312',
          values: {
            name: 'Наталья Бугильная',
            job: 'Отдел збыта ЛФ',
            otdel: 'Отдел збыта по строительным организациям',
            number: '+3807456376',
            department: 'Optimization',
            status: 'Активен',
            org: 'мизол'
          }
        },
        {
          uid: '12312',
          values: {
            name: 'Наталья Бугильная',
            job: 'Отдел збыта ЛФ',
            otdel: 'Отдел збыта по строительным организациям',
            number: '+3807456376',
            department: 'Optimization',
            status: 'Активен',
            org: 'мизол'
          }
        },
        {
          uid: '12312',
          values: {
            name: 'Наталья Бугильная',
            job: 'Отдел збыта ЛФ',
            otdel: 'Отдел збыта по строительным организациям',
            number: '+3807456376',
            department: 'Optimization',
            status: 'Активен',
            org: 'мизол'
          }
        },
        {
          uid: '12312',
          values: {
            name: 'Наталья Бугильная',
            job: 'Отдел збыта ЛФ',
            otdel: 'Отдел збыта по строительным организациям',
            number: '+3807456376',
            department: 'Optimization',
            status: 'Активен',
            org: 'мизол'
          }
        },
        {
          uid: '12312',
          values: {
            name: 'Наталья Бугильная',
            job: 'Отдел збыта ЛФ',
            otdel: 'Отдел збыта по строительным организациям',
            number: '+3807456376',
            department: 'Optimization',
            status: 'Активен',
            org: 'мизол'
          }
        },
        {
          uid: '12312',
          values: {
            name: 'Наталья Бугильная',
            job: 'Отдел збыта ЛФ',
            otdel: 'Отдел збыта по строительным организациям',
            number: '+3807456376',
            department: 'Optimization',
            status: 'Активен',
            org: 'мизол'
          }
        },
        {
          uid: '12312',
          values: {
            name: 'Наталья Бугильная',
            job: 'Отдел збыта ЛФ',
            otdel: 'Отдел збыта по строительным организациям',
            number: '+3807456376',
            department: 'Optimization',
            status: 'Активен',
            org: 'мизол'
          }
        },
        {
          uid: '12312',
          values: {
            name: 'Наталья Бугильная',
            job: 'Отдел збыта ЛФ',
            otdel: 'Отдел збыта по строительным организациям',
            number: '+3807456376',
            department: 'Optimization',
            status: 'Активен',
            org: 'мизол'
          }
        }
        ]
    },
    pagination: {
      "total": 50,
      "per_page": 15,
      "current_page": 1,
      "last_page": 4,
      "prev_page_url": null,
      "from": 1,
      "to": 15
    }
  }
}