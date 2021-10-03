# [GET] /persons

## Structure

### Example

```
    { 
        filters: {
            filtersRequest: {
                filial: null,
                search: null,
                job: null,
                colorL null
            }
            filtersResponse: [
                {
                    valueName: "search",  label: "Поиск", component: "search"
                },
                {
                    valueName: "filial",  label: "Текущий филиал", component: "list", list: [
                        {
                            label: 'Текущие',
                            value: '*'
                        }
                    ]
                },
                {
                    valueName: "job",  label: "Должность", component: "modalSelect", entityLink: '/jobs'
                },
                {
                    valueName: "color",  label: "Цвета", component: "list", list: [
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
            filtersRequest: {
                filial: null
            }
            filtersResponse: [
                {
                    valueName (Название переменной в объекте filterRequest): "filial",  label: "Текущий филиал", component (компонент): "list", entityLink (ссылка на сущьность нужно только в modal(compornnt)): null, list (список опций для выбора): [
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
