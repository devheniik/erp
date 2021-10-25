# Vertival menu

## response 

```php
//  [ "name" => "document-view", "paramss" =>  [ "id" =>  83 ] ]
[
    [
        "name" =>  "Коректировки",
        "child" =>  [
            [
                "name" =>  "Подогнать НДС под копейки",
                "disabled" => false,
                "route" => false, 
                "func"=> "NDScops",
                "params"=>  [ 0 ]
            ],
            [
                "name" =>  "Подогнать суммы под целое",
                "disabled" => false,
                "route" => false, 
                "func"=> "CenaWoCops",
                "params"=>  [ 0 ]
            ],
            [
                "name" =>  "Степень округления цен",
                "disabled" => flase,
                "route" => false, 
                "func"=> "NDScops",
                "params"=>  [ 0 ]
            ],
            [
                "name" =>  "Установить тип цены",
                "disabled" => true,
                "route" => false, 
                "func"=> "PopWindow(../zakazy/zaktipceny.php?ZAKAZ=2125780&ZAKTIP=1)",
                "params"=>  [ 0 ]
            ],
            [
                "name" =>  "Установить тип курса",
                "disabled" => true,
                "route" => false, 
                "func"=> "PopWindow(../zakazy/zaktipkurs.php?ZAKAZ=2125780&ZAKTIP=1)",
                "params"=>  [ 0 ]
            ],
            [
                "name" =>  "Обновить скидки",
                "disabled" => false,
                "route" => false, 
                "func"=> "RenewSkidki",
                "params"=>  [ 0 ]
            ],
            [
                "name" =>  "Установить скидки от сроков жизни",
                "disabled" => false,
                "route" => false, 
                "func"=> "SetSkidkiFromLivetime",
                "params"=>  [ 0 ]
            ],
            [
                "name" =>  "Назначить курс",
                "disabled" => false,
                "route" => false, 
                "func"=> "SetKurs",
                "params"=>  [ 0 ]
            ],
            [
                "name" =>  "Групповое изменение скидки",
                "disabled" => true,
                "route" => false, 
                "func"=> false,
                "params"=>  [ 0 ]
            ],
            [
                "name" =>  "Установить актуальный курс",
                "disabled" => false,
                "route" => false, 
                "func"=> "SetActualKurs",
                "params"=>  [ 0 ]
            ],
            [
                "name" =>  "Назначить скидку",
                "disabled" => false,
                "route" => false, 
                "func"=> "SetSkidka",
                "params"=>  [ 0 ]
            ],
            [
                "name" =>  "Изменить цены на %",
                "disabled" => false,
                "route" => false, 
                "func"=> "SetProc",
                "params"=>  [ 0 ]
            ],
            [
                "name" =>  "Разнести сумму",
                "disabled" => false,
                "route" => false, 
                "func"=> "RaznestiSumma",
                "params"=>  [ 0 ]
            ],
            [
                "name" =>  "Подогнать под сумму",
                "disabled" => false,
                "route" => false, 
                "func"=> "PodognatSumma",
                "params"=>  [ 0 ]
            ],
            [
                "name" =>  "Изменить валюту",
                "disabled" => true,
                "route" => false, 
                "func"=> "PopWindow(../zakazy/zakvaluta.php?ZAKAZ=2125780&ZAKTIP=1)",
                "params"=>  [ 0 ]
            ],
            [
                "name" =>  "Подогнать кол. под фасовку",
                "disabled" => false,
                "route" => false, 
                "func"=> "KolFasovka",
                "params"=>  [ 0 ]
            ],
            [
                "name" =>  "Округлить кол. под ед. покупателя",
                "disabled" => false,
                "route" => false, 
                "func"=> "KolEdizmPokup",
                "params"=>  [ 0 ]
            ],
            [
                "name" =>  "Установить ед. покупателя",
                "disabled" => false,
                "route" => false, 
                "func"=> "KolEdizmPokupSet",
                "params"=>  [ 0 ]
            ],
            [
                "name" =>  "Рассч. объём и вес",
                "disabled" => false,
                "route" => false, 
                "func"=> "RecalcVes",
                "params"=>  [ 0 ]
            ],
            [
                "name" =>  "Пересчитать склад. движения",
                "disabled" => false,
                "route" => false, 
                "func"=> "RecalcSklad",
                "params"=>  [ 0 ]
            ],
            [
                "name" =>  "Копировать заказ",
                "disabled" => true,
                "route" => false, 
                "func"=> "PopWindow(../zakazy/ei_zakazcopy.php?ZAKAZ=2125780&ZAKTIP=1)",
                "params"=>  [ 0 ]
            ],
            [
                "name" =>  "Установить кол. по фактически отгруженному",
                "disabled" => false,
                "route" => false, 
                "func"=> "KolFromOtgr",
                "params"=>  [ 0 ]
            ],
            [
                "name" =>  "Установить кол. по отложенному",
                "disabled" => false,
                "route" => false, 
                "func"=> "KolFromOtlov",
                "params"=>  [ 0 ]
            ],
            [
                "name" =>  "Установить кол. по зарезервированному",
                "disabled" => false,
                "route" => false, 
                "func"=> "KolFromReserv",
                "params"=>  [ 0 ]
            ],
            [
                "name" =>  "Установить отложено по подобранному",
                "disabled" => false,
                "route" => false, 
                "func"=> "OtlovFromPodbor",
                "params"=>  [ 0 ]
            ],
            [
                "name" =>  "Изменить № заказа",
                "disabled" => false,
                "route" => false, 
                "func"=> "ChKey",
                "params"=>  [ 0 ]
            ],
            [
                "name" =>  "Поменять менедж.",
                "disabled" => false,
                "route" => false, 
                "func"=> "ChangeManDispatch",
                "params"=>  [ 0 ]
            ],
            [
                "name" =>  "Поменять менедж. по штрих-коду",
                "disabled" => false,
                "route" => false, 
                "func"=> "DoChangeManBarkode",
                "params"=>  [ 0 ]
            ],
            [
                "name" =>  "Сбросить приоритет",
                "disabled" => false,
                "route" => false, 
                "func"=> "ClearPrioritet",
                "params"=>  [ 0 ]
            ],
            [
                "name" =>  "(EI) Изменить организацию-заказчика",
                "disabled" => true,
                "route" => false, 
                "func"=> false,
                "params"=>  [ 0 ]
            ]
        ]
    ],
    [
        "name" =>  "Документы",
        "current" => false,
        "child" =>  [
            [
            
                "name" =>  "Счёт со скидками",
                "disabled" => true,
                "route" => [ "name" => "document-view", "paramss" =>  [ "id" =>  2125780 ] ], 
                "func"=> false,
                "params"=>  [ 0 ] 
            ],
            [
            
                "name" =>  "Два счёта на одном листе",
                "disabled" => true,
                "route" => [ "name" => "document-view", "paramss" =>  [ "id" =>  2125780 ] ], 
                "func"=> false,
                "params"=>  [ 0 ] 
            ],
            [
            
                "name" =>  "Два счёта на одном листе (объединённый)",
                "disabled" => true,
                "route" => [ "name" => "document-view", "paramss" =>  [ "id" =>  2125780 ] ], 
                "func"=> false,
                "params"=>  [ 0 ] 
            ],
            [
            
                "name" =>  "Договор",
                "disabled" => true,
                "route" => [ "name" => "document-view", "paramss" =>  [ "id" =>  2125780 ] ], 
                "func"=> false,
                "params"=>  [ 0 ] 
            ],
            [
            
                "name" =>  "Счёт в валюте баланса",
                "disabled" => true,
                "route" => [ "name" => "document-view", "paramss" =>  [ "id" =>  2125780 ] ], 
                "func"=> false,
                "params"=>  [ 0 ] 
            ],
            [
            
                "name" =>  "Спецификация",
                "disabled" => true,
                "route" => [ "name" => "document-view", "paramss" =>  [ "id" =>  2125780 ] ], 
                "func"=> false,
                "params"=>  [ 0 ] 
            ],
            [
            
                "name" =>  "Счёт свёрнутый",
                "disabled" => true,
                "route" => [ "name" => "document-view", "paramss" =>  [ "id" =>  2125780 ] ], 
                "func"=> false,
                "params"=>  [ 0 ] 
            ],
            [
            
                "name" =>  "Акт свёрнутый",
                "disabled" => true,
                "route" => [ "name" => "document-view", "paramss" =>  [ "id" =>  2125780 ] ], 
                "func"=> false,
                "params"=>  [ 0 ] 
            ],
            [
            
                "name" =>  "Рахунок для послуг",
                "disabled" => true,
                "route" => [ "name" => "document-view", "paramss" =>  [ "id" =>  2125780 ] ], 
                "func"=> false,
                "params"=>  [ 0 ] 
            ],
            [
            
                "name" =>  "Печать счета без 'Код УКТ ЗЕД'",
                "disabled" => true,
                "route" => [ "name" => "document-view", "paramss" =>  [ "id" =>  2125780 ] ], 
                "func"=> false,
                "params"=>  [ 0 ] 
            ],
            [
            
                "name" =>  "Печать 'Старый бланк счёта РУС'",
                "disabled" => true,
                "route" => [ "name" => "document-view", "paramss" =>  [ "id" =>  2125780 ] ], 
                "func"=> false,
                "params"=>  [ 0 ] 
            ],
            [
            
                "name" =>  "Печать счета 'цены с ПДВ'",
                "disabled" => true,
                "route" => [ "name" => "document-view", "paramss" =>  [ "id" =>  2125780 ] ], 
                "func"=> false,
                "params"=>  [ 0 ] 
            ],
            [
            
                "name" =>  "Получить 'Старый бланк счёта РУС' в PDF",
                "disabled" => true,
                "route" => [ "name" => "document-view", "paramss" =>  [ "id" =>  2125780 ] ], 
                "func"=> false,
                "params"=>  [ 0 ] 
            ],
            [
            
                "name" =>  "Получить 'ТОВАРНЫЙ ЧЕК'",
                "disabled" => true,
                "route" => [ "name" => "document-view", "paramss" =>  [ "id" =>  2125780 ] ], 
                "func"=> false,
                "params"=>  [ 0 ] 
            ],
            [
            
                "name" =>  "Получить 'Счет в PDF'",
                "disabled" => true,
                "route" => [ "name" => "document-view", "paramss" =>  [ "id" =>  2125780 ] ], 
                "func"=> false,
                "params"=>  [ 0 ] 
            ], 
            [
            
                "name" =>  "Печать 'Доверенность'",
                "disabled" => true,
                "route" => [ "name" => "document-view", "paramss" =>  [ "id" =>  2125780 ] ], 
                "func"=> false,
                "params"=>  [ 0 ] 
            ],
            [
            
                "name" =>  "Получить 'Доверенность' в PDF",
                "disabled" => true,
                "route" => [ "name" => "document-view", "paramss" =>  [ "id" =>  2125780 ] ], 
                "func"=> false,
                "params"=>  [ 0 ] 
            ],
            [
            
                "name" =>  "Отправить 'Доверенность' на электронный ящик",
                "disabled" => true,
                "route" => [ "name" => "document-view", "paramss" =>  [ "id" =>  2125780 ] ], 
                "func"=> false,
                "params"=>  [ 0 ] 
            ],
            [
            
                "name" =>  "Отправить Счет в PDF на произвольный адрес",
                "disabled" => true,
                "route" => [ "name" => "document-view", "paramss" =>  [ "id" =>  2125780 ] ], 
                "func"=> false,
                "params"=>  [ 0 ] 
            ],
            [
            
                "name" =>  "Отправить Счет в PDF на 26733-fiskcode@mail.com",
                "disabled" => true,
                "route" => [ "name" => "document-view", "paramss" =>  [ "id" =>  2125780 ] ], 
                "func"=> false,
                "params"=>  [ 0 ] 
            ],
            [
            
                "name" =>  "Отправить 'Старый бланк счёта РУС' в PDF на 26733-fiskcode@mail.com",
                "disabled" => true,
                "route" => [ "name" => "document-view", "paramss" =>  [ "id" =>  2125780 ] ], 
                "func"=> false,
                "params"=>  [ 0 ] 
            ],
            [
            
                "name" =>  "Отправить счет с текстом сообщения на 26733-fiskcode@mail.com",
                "disabled" => true,
                "route" => [ "name" => "document-view", "paramss" =>  [ "id" =>  2125780 ] ], 
                "func"=> false,
                "params"=>  [ 0 ] 
            ],
            [
            
                "name" =>  "Отправить счет на электронный ящик",
                "disabled" => true,
                "route" => [ "name" => "document-view", "paramss" =>  [ "id" =>  2125780 ] ], 
                "func"=> false,
                "params"=>  [ 0 ] 
            ],
            [
            
                "name" =>  "(EI) Спецификация к договору",
                "disabled" => true,
                "route" => [ "name" => "document-view", "paramss" =>  [ "id" =>  2125780 ] ], 
                "func"=> false,
                "params"=>  [ 0 ] 
            ],
            [
            
                "name" =>  "Отгрузить все",
                "disabled" => false,
                "route" => false, 
                "func"=> "OtgrVse",
                "params"=>  [ 0 ] 
            ],
            [
            
                "name" =>  "Формирование договора",
                "disabled" => false,
                "route" => false, 
                "func"=> "ei_form_create_contract",
                "params"=>  [ 0 ] 
            ],
            [
            
                "name" =>  "(EI) Договір Доручення",
                "disabled" => false,
                "route" => false, 
                "func"=> "ei_dogDoruch",
                "params"=>  [  '2125780', 0 ] 
            ]    
        ]   
    ],
    [
        "name" =>  "Резерв",
        "child" =>  [
            [
            
                "name" =>  "Резервировать все",
                "disabled" => true,
                "route" => [ "name" => "rezerv-view", "paramss" =>  [ "id" =>  2125780 ] ], 
                "func"=> false,
                "params"=>  [ 0 ] 
            ],
            [
            
                "name" =>  "Резервировать оплач.",
                "disabled" => true,
                "route" => [ "name" => "rezerv-view", "paramss" =>  [ "id" =>  2125780 ] ], 
                "func"=> false,
                "params"=>  [ 0 ] 
            ],
            [
            
                "name" =>  "Отменить все рез.",
                "disabled" => false,
                "route" => false, 
                "func"=> "ResTovarOtmenaVse",
                "params"=>  [ 0 ] 
            ],
            [
            
                "name" =>  "Переместить резервированные на склад",
                "disabled" => true,
                "route" => [ "name" => "rezerv-view", "paramss" =>  [ "id" =>  2125780 ] ], 
                "func"=> false,
                "params"=>  [ 0 ] 
            ],
            [
            
                "name" =>  "Отложить все",
                "disabled" => true,
                "route" => [ "name" => "rezerv-view", "paramss" =>  [ "id" =>  2125780 ] ], 
                "func"=> false,
                "params"=>  [ 0 ] 
            ],
            [
            
                "name" =>  "Отложить оплач.",
                "disabled" => true,
                "route" => [ "name" => "rezerv-view", "paramss" =>  [ "id" =>  2125780 ] ], 
                "func"=> false,
                "params"=>  [ 0 ] 
            ], 
            [
            
                "name" =>  "Отменить все откл.",
                "disabled" => false,
                "route" => false, 
                "func"=> "OtlovTovarOtmenaVse",
                "params"=>  [ 0 ] 
            ],
            [
            
                "name" =>  "Переместить отложенные на склад",
                "disabled" => true,
                "route" => [ "name" => "rezerv-view", "paramss" =>  [ "id" =>  2125780 ] ], 
                "func"=> false,
                "params"=>  [ 0 ] 
            ],
            [
            
                "name" =>  "Резервировать и отложить все",
                "disabled" => true,
                "route" => [ "name" => "rezerv-view", "paramss" =>  [ "id" =>  2125780 ] ], 
                "func"=> false,
                "params"=>  [ 0 ] 
            ],
            [
            
                "name" =>  "Отменить все рез. и все откл.",
                "disabled" => false,
                "route" => false, 
                "func"=> "OtlovResTovarOtmenaVse",
                "params"=>  [ 0 ] 
            ],
            [
            
                "name" =>  "Очистить заявки",
                "disabled" => false,
                "route" => false, 
                "func"=> "ClearDeficit",
                "params"=>  [ 0 ] 
            ],
            [
            
                "name" =>  "Отправить дефицит в плановую поставку",
                "disabled" => false,
                "route" => false, 
                "func"=> "DeficitToPlan",
                "params"=>  [ 0 ] 
            ],
            [
            
                "name" =>  "Отправить дефицит в экспресс поставку",
                "disabled" => false,
                "route" => false, 
                "func"=> "DeficitToExpr",
                "params"=>  [ 0 ] 
            ]
        ]
    ],
    [
        "name" =>  "Добавить",
        "child" =>  [
        
        ]
    ],
    [
        "name" =>  "Удалить все",
        "child" =>  [
        
        ]
    ],
    [
        "name" =>  "Информация",
        "child" =>  [
        
        ]
    ],
    [
        "name" =>  "Провернить скидки",
        "child" =>  [
        
        ]
    ],
    [
        "name" =>  "В корзину",
        "child" =>  [
        
        ]
    ],
    [
        "name" =>  "Действия",
        "child" =>  [
        
        ]
    ]
]
```

