# [GET] / persons
 
## Example response

```javascript
const response = {
    data: [{
        uid: "83",
        color: [1 - 9], // null default
        object: "Persona",
        tableColor: "-",
        value: {
            fio: "-CORP- ФИО 83",
            dolvnost: "менеджер зі збуту по роботі з проектними організаціями",
            otdel: "відділ збуту по роботі з проектними організаціями",
            tel: "380900000083",
            filial: null,
            kandidat: "-",
            uvolen: "+",
            iscont: "-"
        }
    }],
    meta: {
        include: [],
        custom: [],
        pagination: {
            total: 45794,
            count: 10,
            per_page: 10,
            current_page: 1,
            total_pages: 4580,
            links: {
                next: "https://api.megatree.de/v1/persons?page=2"
            }
        }
    },
    filters: [{
        entity: "search",
        label: "Поиск",
        component: "search",
        value: null,
        searchOptions: [{
            entity: "fio",
            value: null,
            method: "like"
        }
    ]
    }, {
        entity: "filial",
        value: null,
        label: "Текущий филиал",
        component: "list",
        list: [{
            label: "Текущие",
            value: "1"
        }, {
            label: "Корпорация",
            value: "2"
        }, {
            label: "Все организации",
            value: "3"
        }, {
            label: "Все сотрудники",
            value: "4"
        }]
    }, {
        entity: "job",
        value: null,
        label: "Должность",
        meanKey: "name",
        component: "modal-select",
        api: "/jobs *"
    }, {
        entity: "color",
        value: null,
        label: "Цвета",
        component: "list",
        list: [{
            label: "Желтый",
            value: "1"
        }, {
            label: "Зеленый",
            value: "2"
        }, {
            label: "Коричневый",
            value: "3"
        }, {
            label: "Красный",
            value: "4"
        }, {
            label: "Оранжевый",
            value: "5"
        }, {
            label: "Розовый",
            value: "6"
        }, {
            label: "Синий",
            value: "7"
        }, {
            label: "Фиолетовый",
            value: "8"
        }, {
            label: "Черный",
            value: "9"
        }],
    }],
    headers: ["Ф.И.О.", "Должность", "Отдел", "Тел.", "Организация", "Канд.", "Увол.", "Примечание", "ЛПР", "к ЛК"],
    sort: null
}
```



## Example request


```javascript
const request = {
    page: 1,
    limit: 10,
    data: [],
    meta: {
        include: [],
        custom: [],
        pagination: {
            total: 45794,
            count: 10,
            per_page: 10,
            current_page: 1,
            total_pages: 4580,
            links: {
                next: "https://api.megatree.de/v1/persons?page=2"
            }
        }
    },
    filters: [{
        entity: "search",
        label: "Поиск",
        component: "search",
        value: null,
        searchOptions: [{
            entity: "fio",
            value: null,
            method: "like"
        }
    ]
    }, {
        entity: "filial",
        value: null,
        label: "Текущий филиал",
        component: "list",
        list: [{
            label: "Текущие",
            value: "1"
        }, {
            label: "Корпорация",
            value: "2"
        }, {
            label: "Все организации",
            value: "3"
        }, {
            label: "Все сотрудники",
            value: "4"
        }]
    }, {
        entity: "job",
        value: null,
        label: "Должность",
        meanKey: "name",
        component: "modal-select",
        api: "/jobs *"
    }, {
        entity: "color",
        value: null,
        label: "Цвета",
        component: "list",
        list: [{
            label: "Желтый",
            value: "1"
        }, {
            label: "Зеленый",
            value: "2"
        }, {
            label: "Коричневый",
            value: "3"
        }, {
            label: "Красный",
            value: "4"
        }, {
            label: "Оранжевый",
            value: "5"
        }, {
            label: "Розовый",
            value: "6"
        }, {
            label: "Синий",
            value: "7"
        }, {
            label: "Фиолетовый",
            value: "8"
        }, {
            label: "Черный",
            value: "9"
        }],
    }],
    headers: ["Ф.И.О.", "Должность", "Отдел", "Тел.", "Организация", "Канд.", "Увол.", "Примечание", "ЛПР", "к ЛК"],
    sort: 'Ф.О.И'
}
```

``` 
    {   (Explane)
        filters: (Фильтры) {
            request: {
                filial (имя переменной): null
            }
            response: [
                {
                    entity (Название переменной в объекте filterRequest): "filial", meanKey (Главный ключ к примеру имя пользователя или название филиала этот ключ не отправится на сервер он просто будет выделен для пользователя): 'name', label: "Текущий филиал", component (компонент): "list", api (ссылка на сущьность нужно только в modal(compornnt)): null, list (список опций для выбора): [
                        {
                            label (название option): 'text',
                            value (значение которое запишится про выборе): x
                        }
                    ]
                }
            ]
        },
        headers: (Список полей для шапки таблицы *примечание поле '№' - не нужно отправлять оно по умолчанию есть в таблице) [ 'ФИО', 'Отдел',  ... ],
        data: (Тело таблицы) [ 
                {
                    uid: 102 (Уникальный номер) ,
                    value: { (ячейки должны быть в том порядке котором отправленны поля шапки, для того чтоб они совпали)
                        name: 132 (имя полей и их значение),
                        bio: 123,
                        ...
                    }
                },
                ... 
        ],
        meta: {
            "include": [],
            "custom": [],
            pagination: {
                "total": 50,
                "per_page": 15,
                "current_page": 1,
                "last_page": 4,                      
                "prev_page_url": null, 
                "from": 1,
                "to": 15
            }
        }
    }
```
