# [GET] /persons


## Structure

```
    {
        filtersRequest: { 
            search: null,
            filial: null,
            jobId: null,
            color: null
        },
        filtersResponse: { 
            filials: [ 
                {
                    label: 'Текущий фииал',
                    value: 1
                },
                ...
            ],
            jobs: '/jobs',
            colors: [ 
                {
                    label: 'Красный',
                    color: '#b00000',
                    value: 'red'
                },
                ... 
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