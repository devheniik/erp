# [GET] /persons

## Structure

### Example

```
    { 
        filters: {
            request: {
                filial: null,
                search: null,
                job: null,
                color: null
            }
            response: [
                {
                    entity: "search",  label: "Поиск", component: "search"
                },
                {
                    entity: "filial", meanKey: 'name', label: "Текущий филиал", component: "list", list: [
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
        result: [
            headers: [ 'ФИО', 'Отдел',  ... ],
            body: [
                {
                    uid: 102,
                    value: {
                        name: 132,
                        bio: 123,
                        ...
                    }
                },
                ...
            ]
        ],
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
```

### Explaning

```
    {
        filters: (Фильтры) {
            request: {
                filial (имя переменной): null
            }
            response: [
                {
                    entity (Название переменной в объекте filterRequest): "filial", meanKey (Главный ключ к примеру имя пользователя или название филиала этот ключ не отправится на сервер он просто будет выделен для пользователя): 'name', label: "Текущий филиал", component (компонент): "list", entityLink (ссылка на сущьность нужно только в modal(compornnt)): null, list (список опций для выбора): [
                        {
                            label (название option): 'text',
                            value (значение которое запишится про выборе): x
                        }
                    ]
                }
            ]
        },
        result: [
            headers: (Список полей для шапки таблицы *примечание поле '№' - не нужно отправлять оно по умолчанию есть в таблице) [ 'ФИО', 'Отдел',  ... ],
            body: [ (Тело таблицы)
                {
                    uid: 102 (Уникальный номер) ,
                    value: { (ячейки должны быть в том порядке котором отправленны поля шапки, для того чтоб они совпали)
                        name: 132 (имя полей и их значение),
                        bio: 123,
                        ...
                    }
                },
                ...
            ]
        ],
        pagination: (пагинация) {
            "total": 50,
            "per_page": 15,
            "current_page": 1,
            "last_page": 4,                      
            "prev_page_url": null, 
            "from": 1,
            "to": 15
        }
    }
```
