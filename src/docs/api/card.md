# Card CRUD 


```javascript
[{
    "config": {
        "id": 0,
        "title": "Общие данные",
        "cols": 2,
        "dop_fields": true,
        "dop_open": false,
        "visible": true
    },
    "childs": [{
        "base": [{
            "section": 0,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Артикул",
                "id": "ARTIKUL",
                "name": "ARTIKUL",
                "value": "",
                "placeholder": ""
            }
        }, {
            "section": 0,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Инфо",
                "id": "INFO",
                "name": "INFO",
                "value": "",
                "placeholder": ""
            }
        }, {
            "section": 0,
            "col": 1,
            "field": {
                "type": "group",
                "label": "Тип",
                "content": {
                    "type": "input",
                    "label": "",
                    "id": "USLUGANAZ",
                    "name": "USLUGANAZ",
                    "value": "Товар",
                    "placeholder": "",
                    "hidden": {
                        "name": "USLUGA",
                        "value": "1138"
                    }
                }
            }
        }],
        "full": [{
            "section": 0,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Сокр. название",
                "id": "SHORTNAZ",
                "name": "SHORTNAZ",
                "value": "",
                "placeholder": ""
            }
        }, {
            "section": 0,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Назв. тамож.",
                "id": "CUSTOMNAZ",
                "name": "CUSTOMNAZ",
                "value": "",
                "placeholder": ""
            }
        }, {
            "section": 0,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Код ТНВЭД",
                "id": "TNVED",
                "name": "TNVED",
                "value": "",
                "placeholder": ""
            }
        }, {
            "section": 0,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Штрих код",
                "id": "BARCODE",
                "name": "BARCODE",
                "value": "",
                "placeholder": ""
            }
        }, {
            "section": 0,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Кассовый код",
                "id": "KASSACODE",
                "name": "KASSACODE",
                "value": "",
                "placeholder": ""
            }
        }, {
            "section": 0,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Гарантия, мес.",
                "id": "GARMES",
                "name": "GARMES",
                "value": "0",
                "placeholder": ""
            }
        }, {
            "section": 0,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Пор. сортировки",
                "id": "TOVORDER",
                "name": "TOVORDER",
                "value": "0",
                "placeholder": ""
            }
        }, {
            "section": 0,
            "col": 1,
            "field": {
                "type": "group",
                "label": "Признак",
                "content": {
                    "type": "input",
                    "label": "",
                    "id": "PRIZNAKNAZ",
                    "name": "PRIZNAKNAZ",
                    "value": "",
                    "placeholder": "",
                    "hidden": {
                        "name": "PRIZNAK",
                        "value": "0"
                    }
                }
            }
        }, {
            "section": 0,
            "col": 1,
            "field": {
                "type": "group",
                "label": "Дерево",
                "content": {
                    "type": "input",
                    "label": "",
                    "id": "TREEIDNAZ",
                    "name": "TREEIDNAZ",
                    "value": "NULL",
                    "placeholder": "",
                    "hidden": {
                        "name": "TREEID",
                        "value": "0"
                    }
                }
            }
        }, {
            "section": 0,
            "col": 1,
            "field": {
                "type": "group",
                "label": "Базов. аналитика",
                "content": {
                    "type": "input",
                    "label": "",
                    "id": "BUDGETPRIZNAKNAZ",
                    "name": "BUDGETPRIZNAKNAZ",
                    "value": "",
                    "placeholder": "",
                    "hidden": {
                        "name": "BUDGETPRIZNAK",
                        "value": "0"
                    }
                }
            }
        }, {
            "section": 0,
            "col": 1,
            "field": {
                "type": "group",
                "label": "ABC",
                "content": {
                    "type": "input",
                    "label": "",
                    "id": "ABCNAZ",
                    "name": "ABCNAZ",
                    "value": "",
                    "placeholder": "",
                    "hidden": {
                        "name": "ABC",
                        "value": "0"
                    }
                }
            }
        }, {
            "section": 0,
            "col": 1,
            "field": {
                "type": "group",
                "label": "XYZ",
                "content": {
                    "type": "input",
                    "label": "",
                    "id": "XYZNAZ",
                    "name": "XYZNAZ",
                    "value": "",
                    "placeholder": "",
                    "hidden": {
                        "name": "XYZ",
                        "value": "0"
                    }
                }
            }
        }, {
            "section": 0,
            "col": 1,
            "field": {
                "type": "group",
                "label": "QRS",
                "content": {
                    "type": "input",
                    "label": "",
                    "id": "QRSNAZ",
                    "name": "QRSNAZ",
                    "value": "",
                    "placeholder": "",
                    "hidden": {
                        "name": "QRS",
                        "value": "0"
                    }
                }
            }
        }, {
            "section": 0,
            "col": 1,
            "field": {
                "type": "group",
                "label": "Спец. ставка НДС",
                "content": {
                    "type": "input",
                    "label": "",
                    "id": "SPECSTAVKANAZ",
                    "name": "SPECSTAVKANAZ",
                    "value": "",
                    "placeholder": "",
                    "hidden": {
                        "name": "SPECSTAVKA",
                        "value": "0"
                    }
                }
            }
        }]
    }, {
        "base": [{
            "section": 0,
            "col": 2,
            "field": {
                "type": "group",
                "label": "Категория",
                "content": {
                    "type": "input",
                    "label": "",
                    "id": "KATEGORYNAZ",
                    "name": "KATEGORYNAZ",
                    "value": "",
                    "placeholder": "",
                    "hidden": {
                        "name": "KATEGORY",
                        "value": "0"
                    }
                }
            }
        }, {
            "section": 0,
            "col": 2,
            "field": {
                "type": "boolean",
                "value": "+",
                "label": "Вкл. в прайс",
                "content": [{
                    "label": "Да",
                    "value": "+",
                    "selected": "selected"
                }, {
                    "label": "Нет",
                    "value": "-"
                }]
            }
        }, {
            "section": 0,
            "col": 2,
            "field": {
                "type": "boolean",
                "value": "-",
                "label": "Заблокирован",
                "content": [{
                    "label": "Да",
                    "value": "+"
                }, {
                    "label": "Нет",
                    "value": "-",
                    "selected": "selected"
                }],
                "disabled": "disabled"
            }
        }],
        "full": [{
            "section": 0,
            "col": 2,
            "field": {
                "type": "boolean",
                "value": "-",
                "label": "Снят с произв.",
                "content": [{
                    "label": "Да",
                    "value": "+"
                }, {
                    "label": "Нет",
                    "value": "-",
                    "selected": "selected"
                }]
            }
        }, {
            "section": 0,
            "col": 2,
            "field": {
                "type": "boolean",
                "value": "-",
                "label": "Буфер",
                "content": [{
                    "label": "Да",
                    "value": "+"
                }, {
                    "label": "Нет",
                    "value": "-",
                    "selected": "selected"
                }]
            }
        }, {
            "section": 0,
            "col": 2,
            "field": {
                "type": "boolean",
                "value": "+",
                "label": "e-shop",
                "content": [{
                    "label": "Да",
                    "value": "+",
                    "selected": "selected"
                }, {
                    "label": "Нет",
                    "value": "-"
                }]
            }
        }, {
            "section": 0,
            "col": 2,
            "field": {
                "type": "boolean",
                "value": "+",
                "label": "Покупной",
                "content": [{
                    "label": "Да",
                    "value": "+",
                    "selected": "selected"
                }, {
                    "label": "Нет",
                    "value": "-"
                }]
            }
        }, {
            "section": 0,
            "col": 2,
            "field": {
                "type": "boolean",
                "value": "-",
                "label": "Акциз",
                "content": [{
                    "label": "Да",
                    "value": "+"
                }, {
                    "label": "Нет",
                    "value": "-",
                    "selected": "selected"
                }]
            }
        }, {
            "section": 0,
            "col": 2,
            "field": {
                "type": "boolean",
                "value": "-",
                "label": "Акциз. накл.",
                "content": [{
                    "label": "Да",
                    "value": "+"
                }, {
                    "label": "Нет",
                    "value": "-",
                    "selected": "selected"
                }]
            }
        }, {
            "section": 0,
            "col": 2,
            "field": {
                "type": "input",
                "label": "www",
                "id": "EMAIL",
                "name": "EMAIL",
                "value": "",
                "placeholder": ""
            }
        }, {
            "section": 0,
            "col": 2,
            "field": {
                "type": "group",
                "label": "Оприход. как",
                "content": {
                    "type": "input",
                    "label": "",
                    "id": "OPRIHASNAZ",
                    "name": "OPRIHASNAZ",
                    "value": "ТМЦ",
                    "placeholder": "",
                    "hidden": {
                        "name": "OPRIHAS",
                        "value": "1149"
                    }
                }
            }
        }, {
            "section": 0,
            "col": 2,
            "field": {
                "type": "group",
                "label": "Счёт доходов",
                "content": {
                    "type": "input",
                    "label": "",
                    "id": "DOHODACCNAZ",
                    "name": "DOHODACCNAZ",
                    "value": "",
                    "placeholder": "",
                    "hidden": {
                        "name": "DOHODACC",
                        "value": "0"
                    }
                }
            }
        }, {
            "section": 0,
            "col": 2,
            "field": {
                "type": "group",
                "label": "Счёт расходов",
                "content": {
                    "type": "input",
                    "label": "",
                    "id": "RASHODACCNAZ",
                    "name": "RASHODACCNAZ",
                    "value": "",
                    "placeholder": "",
                    "hidden": {
                        "name": "RASHODACC",
                        "value": "0"
                    }
                }
            }
        }, {
            "section": 0,
            "col": 2,
            "field": {
                "type": "group",
                "label": "Счёт оприход.",
                "content": {
                    "type": "input",
                    "label": "",
                    "id": "DEFAULTACCNAZ",
                    "name": "DEFAULTACCNAZ",
                    "value": "",
                    "placeholder": "",
                    "hidden": {
                        "name": "DEFAULTACC",
                        "value": "0"
                    }
                }
            }
        }, {
            "section": 0,
            "col": 2,
            "field": {
                "type": "group",
                "label": "Бренд",
                "content": {
                    "type": "input",
                    "label": "",
                    "id": "BRANDNAZ",
                    "name": "BRANDNAZ",
                    "value": "",
                    "placeholder": "",
                    "hidden": {
                        "name": "BRAND",
                        "value": "0"
                    }
                }
            }
        }, {
            "section": 0,
            "col": 2,
            "field": {
                "type": "group",
                "label": "Страна",
                "content": {
                    "type": "input",
                    "label": "",
                    "id": "STRANANAZ",
                    "name": "STRANANAZ",
                    "value": "Украина",
                    "placeholder": "",
                    "hidden": {
                        "name": "STRANA",
                        "value": "769"
                    }
                }
            }
        }, {
            "section": 0,
            "col": 2,
            "field": {
                "type": "select",
                "value": "",
                "label": "Раскраска",
                "name": "",
                "content": {
                    "type": "options",
                    "name": "0",
                    "options": [{
                        "label": "Все",
                        "value": "0"
                    }, {
                        "label": "Жёлтый",
                        "value": "1806"
                    }, {
                        "label": "Зелёный",
                        "value": "1808"
                    }, {
                        "label": "Коричневый",
                        "value": "1812"
                    }, {
                        "label": "Красный",
                        "value": "1805"
                    }, {
                        "label": "Оранжевый",
                        "value": "1811"
                    }, {
                        "label": "Розовый",
                        "value": "1810"
                    }, {
                        "label": "Синий",
                        "value": "1807"
                    }, {
                        "label": "Фиолетовый",
                        "value": "1809"
                    }, {
                        "label": "Чёрный",
                        "value": "1860"
                    }]
                }
            }
        }, {
            "section": 0,
            "col": 2,
            "field": {
                "type": "group",
                "label": "Товар для бухг.",
                "content": {
                    "type": "input",
                    "label": "",
                    "id": "BUCHTOVNAZ",
                    "name": "BUCHTOVNAZ",
                    "value": "",
                    "placeholder": "",
                    "hidden": {
                        "name": "BUCHTOV",
                        "value": "0"
                    }
                }
            }
        }, {
            "section": 0,
            "col": 2,
            "field": {
                "type": "label",
                "value": "",
                "label": "Добавил",
                "name": "",
                "extra_text": " "
            }
        }, {
            "section": 0,
            "col": 2,
            "field": {
                "type": "label",
                "value": "",
                "label": "Изменил",
                "name": "",
                "extra_text": " "
            }
        }]
    }]
}, {
    "config": {
        "id": 1,
        "title": "Производители и поставщики",
        "cols": 2,
        "dop_fields": true,
        "dop_open": false,
        "visible": true
    },
    "childs": [{
        "base": [{
            "section": 1,
            "col": 1,
            "field": {
                "type": "group",
                "label": "Произв.",
                "content": {
                    "type": "input",
                    "label": "",
                    "id": "MANUFACTERNAZ",
                    "name": "MANUFACTERNAZ",
                    "value": "",
                    "placeholder": "",
                    "hidden": {
                        "name": "MANUFACTER",
                        "value": "0"
                    }
                }
            }
        }],
        "full": [{
            "section": 1,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Арт. произв.",
                "id": "ARTMANUF",
                "name": "ARTMANUF",
                "value": "",
                "placeholder": ""
            }
        }, {
            "section": 1,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Наз. произв.",
                "id": "NAZMANUF",
                "name": "NAZMANUF",
                "value": "",
                "placeholder": ""
            }
        }, {
            "section": 1,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Срок годности",
                "id": "SROKGODN",
                "name": "SROKGODN",
                "value": "0",
                "placeholder": ""
            }
        }]
    }, {
        "base": [{
            "section": 1,
            "col": 2,
            "field": {
                "type": "group",
                "label": "Поставщик",
                "content": {
                    "type": "input",
                    "label": "",
                    "id": "POSTAVSHNAZ",
                    "name": "POSTAVSHNAZ",
                    "value": "",
                    "placeholder": "",
                    "hidden": {
                        "name": "POSTAVSH",
                        "value": "0"
                    }
                }
            }
        }],
        "full": [{
            "section": 1,
            "col": 2,
            "field": {
                "type": "input",
                "label": "Арт. поставщ.",
                "id": "ARTPOSTAV",
                "name": "ARTPOSTAV",
                "value": "",
                "placeholder": ""
            }
        }, {
            "section": 1,
            "col": 2,
            "field": {
                "type": "input",
                "label": "Наз. поставщ.",
                "id": "NAZPOSTAV",
                "name": "NAZPOSTAV",
                "value": "",
                "placeholder": ""
            }
        }, {
            "section": 1,
            "col": 2,
            "field": {
                "type": "input",
                "label": "Срок поставки",
                "id": "SROKPOSTAV",
                "name": "SROKPOSTAV",
                "value": "0",
                "placeholder": ""
            }
        }]
    }]
}, {
    "config": {
        "id": 2,
        "title": "Количество и вес",
        "cols": 2,
        "dop_fields": true,
        "dop_open": false,
        "visible": true
    },
    "childs": [{
        "base": [{
            "section": 2,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Вес",
                "id": "VES",
                "name": "VES",
                "value": "0",
                "placeholder": ""
            }
        }, {
            "section": 2,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Мин. запас",
                "id": "MINZAPAS",
                "name": "MINZAPAS",
                "value": "0",
                "placeholder": ""
            }
        }],
        "full": [{
            "section": 2,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Объём",
                "id": "OBIEM",
                "name": "OBIEM",
                "value": "0",
                "placeholder": ""
            }
        }, {
            "section": 2,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Площадь",
                "id": "FLOORSPACE",
                "name": "FLOORSPACE",
                "value": "0",
                "placeholder": ""
            }
        }, {
            "section": 2,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Фасовка",
                "id": "FASOVKA",
                "name": "FASOVKA",
                "value": "1",
                "placeholder": ""
            }
        }, {
            "section": 2,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Мин. деление",
                "id": "MINFAS",
                "name": "MINFAS",
                "value": "0",
                "placeholder": ""
            }
        }, {
            "section": 2,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Ур. перезаказа",
                "id": "PEREZAKAZ",
                "name": "PEREZAKAZ",
                "value": "0",
                "placeholder": ""
            }
        }, {
            "section": 2,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Норма закупки",
                "id": "ZAKUPKOL",
                "name": "ZAKUPKOL",
                "value": "0",
                "placeholder": ""
            }
        }, {
            "section": 2,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Вес, нетто",
                "id": "NETTO",
                "name": "NETTO",
                "value": "0",
                "placeholder": ""
            }
        }]
    }, {
        "base": [{
            "section": 2,
            "col": 2,
            "field": {
                "type": "group",
                "label": "Ед. измерения",
                "content": {
                    "type": "input",
                    "label": "",
                    "id": "EDIZMERNAZ",
                    "name": "EDIZMERNAZ",
                    "value": "шт",
                    "placeholder": "",
                    "hidden": {
                        "name": "EDIZMER",
                        "value": "184"
                    }
                }
            }
        }, {
            "section": 2,
            "col": 2,
            "field": {
                "type": "input",
                "label": "Макс. запас",
                "id": "MAXZAPAS",
                "name": "MAXZAPAS",
                "value": "0",
                "placeholder": ""
            }
        }],
        "full": [{
            "section": 2,
            "col": 2,
            "field": {
                "type": "input",
                "label": "Норма брака",
                "id": "NORMABRAK",
                "name": "NORMABRAK",
                "value": "0",
                "placeholder": ""
            }
        }, {
            "section": 2,
            "col": 2,
            "field": {
                "type": "input",
                "label": "Мин парт, Рекомендуемая цена",
                "id": "MINCENA1",
                "name": "MINCENA1",
                "value": "0",
                "placeholder": ""
            }
        }, {
            "section": 2,
            "col": 2,
            "field": {
                "type": "input",
                "label": "Мин парт, Цена 2",
                "id": "MINCENA2",
                "name": "MINCENA2",
                "value": "0",
                "placeholder": ""
            }
        }, {
            "section": 2,
            "col": 2,
            "field": {
                "type": "input",
                "label": "Мин парт, Цена 3",
                "id": "MINCENA3",
                "name": "MINCENA3",
                "value": "0",
                "placeholder": ""
            }
        }, {
            "section": 2,
            "col": 2,
            "field": {
                "type": "input",
                "label": "Мин парт, Цена 4",
                "id": "MINCENA4",
                "name": "MINCENA4",
                "value": "0",
                "placeholder": ""
            }
        }, {
            "section": 2,
            "col": 2,
            "field": {
                "type": "input",
                "label": "Ширина",
                "id": "SHIRINA",
                "name": "SHIRINA",
                "value": "0",
                "placeholder": ""
            }
        }, {
            "section": 2,
            "col": 2,
            "field": {
                "type": "group",
                "label": "Тип места",
                "content": {
                    "type": "input",
                    "label": "",
                    "id": "PLACETIPNAZ",
                    "name": "PLACETIPNAZ",
                    "value": "",
                    "placeholder": "",
                    "hidden": {
                        "name": "PLACETIP",
                        "value": "0"
                    }
                }
            }
        }]
    }]
}, {
    "config": {
        "id": 3,
        "title": "Сборка",
        "cols": 2,
        "dop_fields": true,
        "dop_open": false,
        "visible": true
    },
    "childs": [{
        "base": [{
            "section": 3,
            "col": 1,
            "field": {
                "type": "boolean",
                "value": "-",
                "label": "Сборка",
                "content": [{
                    "label": "Да",
                    "value": "+"
                }, {
                    "label": "Нет",
                    "value": "-",
                    "selected": "selected"
                }]
            }
        }],
        "full": [{
            "section": 3,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Время сборки",
                "id": "ASSEMBLTIME",
                "name": "ASSEMBLTIME",
                "value": "0",
                "placeholder": ""
            }
        }, {
            "section": 3,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Опер. сборки",
                "id": "ASSEMBLLEAD",
                "name": "ASSEMBLLEAD",
                "value": "0",
                "placeholder": ""
            }
        }, {
            "section": 3,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Опер. заказа",
                "id": "ZAKAZLEAD",
                "name": "ZAKAZLEAD",
                "value": "0",
                "placeholder": ""
            }
        }, {
            "section": 3,
            "col": 1,
            "field": {
                "type": "boolean",
                "value": "+",
                "label": "Автопересчёт",
                "content": [{
                    "label": "Да",
                    "value": "+",
                    "selected": "selected"
                }, {
                    "label": "Нет",
                    "value": "-"
                }]
            }
        }, {
            "section": 3,
            "col": 1,
            "field": {
                "type": "boolean",
                "value": "-",
                "label": "Автосборка",
                "content": [{
                    "label": "Да",
                    "value": "+"
                }, {
                    "label": "Нет",
                    "value": "-",
                    "selected": "selected"
                }]
            }
        }, {
            "section": 3,
            "col": 1,
            "field": {
                "type": "boolean",
                "value": "-",
                "label": "Пересчитывать комплектующие",
                "content": [{
                    "label": "Да",
                    "value": "+"
                }, {
                    "label": "Нет",
                    "value": "-",
                    "selected": "selected"
                }]
            }
        }]
    }, {
        "base": [{
            "section": 3,
            "col": 2,
            "field": {
                "type": "select",
                "value": "",
                "label": "Метод сборки",
                "name": "",
                "content": {
                    "type": "options",
                    "name": "0",
                    "options": [{
                        "label": "Все",
                        "value": "0"
                    }, {
                        "label": "Не собирается",
                        "value": "1143"
                    }, {
                        "label": "Собирается в заказе",
                        "value": "1145"
                    }, {
                        "label": "Собирается в производстве",
                        "value": "1146"
                    }, {
                        "label": "Фантомная сборка",
                        "value": "1144"
                    }]
                }
            }
        }],
        "full": [{
            "section": 3,
            "col": 2,
            "field": {
                "type": "input",
                "label": "Материалы",
                "id": "MATERIALCOST",
                "name": "MATERIALCOST",
                "value": "0",
                "placeholder": ""
            }
        }, {
            "section": 3,
            "col": 2,
            "field": {
                "type": "input",
                "label": "Работа",
                "id": "LABOURCOST",
                "name": "LABOURCOST",
                "value": "0",
                "placeholder": ""
            }
        }, {
            "section": 3,
            "col": 2,
            "field": {
                "type": "input",
                "label": "Накладные",
                "id": "OVERHEAD",
                "name": "OVERHEAD",
                "value": "0",
                "placeholder": ""
            }
        }, {
            "section": 3,
            "col": 2,
            "field": {
                "type": "input",
                "label": "Сложность",
                "id": "DIFICULTY",
                "name": "DIFICULTY",
                "value": "0",
                "placeholder": ""
            }
        }, {
            "section": 3,
            "col": 2,
            "field": {
                "type": "select",
                "value": "",
                "label": "Тип операции",
                "name": "",
                "content": {
                    "type": "options",
                    "name": "0",
                    "options": [{
                        "label": "Все",
                        "value": "0"
                    }, {
                        "label": "Разборка",
                        "value": "195"
                    }, {
                        "label": "Ремонт",
                        "value": "198"
                    }, {
                        "label": "Сборка",
                        "value": "194"
                    }, {
                        "label": "Сборка со склада(без незавершёнки)",
                        "value": "197"
                    }, {
                        "label": "Сборка-разборка",
                        "value": "2100"
                    }, {
                        "label": "Смешивание со склада(без незавершёнки)",
                        "value": "1822"
                    }]
                }
            }
        }]
    }]
}, {
    "config": {
        "id": 4,
        "title": "Цены 0 ",
        "cols": 3,
        "dop_fields": true,
        "dop_open": false,
        "visible": true
    },
    "childs": [{
        "base": [{
            "section": 4,
            "col": 1,
            "field": {
                "type": "boolean",
                "value": "-",
                "label": "Цена по запросу",
                "content": [{
                    "label": "Да",
                    "value": "+"
                }, {
                    "label": "Нет",
                    "value": "-",
                    "selected": "selected"
                }]
            }
        }, {
            "section": 4,
            "col": 1,
            "field": {
                "type": "boolean",
                "value": "-",
                "label": "Инд. ценообраз.",
                "content": [{
                    "label": "Да",
                    "value": "+"
                }, {
                    "label": "Нет",
                    "value": "-",
                    "selected": "selected"
                }]
            }
        }],
        "full": [{
            "section": 4,
            "col": 1,
            "field": {
                "type": "label",
                "value": "0",
                "label": "Курс",
                "name": ""
            }
        }, {
            "section": 4,
            "col": 1,
            "field": {
                "type": "label",
                "value": "0",
                "label": "Себест., ред.",
                "name": ""
            }
        }, {
            "section": 4,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Единица цены",
                "id": "PRICEUNIT",
                "name": "PRICEUNIT",
                "value": "1",
                "placeholder": ""
            }
        }]
    }, {
        "base": [{
            "section": 4,
            "col": 2,
            "field": {
                "type": "boolean",
                "value": "+",
                "label": "НДС",
                "content": [{
                    "label": "Да",
                    "value": "+",
                    "selected": "selected"
                }, {
                    "label": "Нет",
                    "value": "-"
                }]
            }
        }, {
            "section": 4,
            "col": 2,
            "field": {
                "type": "boolean",
                "value": "-",
                "label": "Налог 2",
                "content": [{
                    "label": "Да",
                    "value": "+"
                }, {
                    "label": "Нет",
                    "value": "-",
                    "selected": "selected"
                }]
            }
        }],
        "full": [{
            "section": 4,
            "col": 2,
            "field": {
                "type": "input",
                "label": "Макс. скидка, %",
                "id": "MAXSKIDPROC",
                "name": "MAXSKIDPROC",
                "value": "100",
                "placeholder": ""
            }
        }, {
            "section": 4,
            "col": 2,
            "field": {
                "type": "label",
                "value": "0",
                "label": "Себест.",
                "name": ""
            }
        }, {
            "section": 4,
            "col": 2,
            "field": {
                "type": "label",
                "value": "0",
                "label": "Закуп. цена",
                "name": ""
            }
        }, {
            "section": 4,
            "col": 2,
            "field": {
                "type": "label",
                "value": "0",
                "label": "Средняя себест.",
                "name": ""
            }
        }]
    }, {
        "base": [{
            "section": 4,
            "col": 3,
            "field": {
                "type": "boolean",
                "value": "-",
                "label": "ПФ",
                "content": [{
                    "label": "Да",
                    "value": "+"
                }, {
                    "label": "Нет",
                    "value": "-",
                    "selected": "selected"
                }]
            }
        }, {
            "section": 4,
            "col": 3,
            "field": {
                "type": "boolean",
                "value": "-",
                "label": "Налог 4",
                "content": [{
                    "label": "Да",
                    "value": "+"
                }, {
                    "label": "Нет",
                    "value": "-",
                    "selected": "selected"
                }]
            }
        }],
        "full": []
    }]
}, {
    "config": {
        "id": 5,
        "title": "Запасы",
        "cols": 2,
        "dop_fields": true,
        "dop_open": false,
        "visible": true
    },
    "childs": [{
        "base": [{
            "section": 5,
            "col": 1,
            "field": {
                "type": "label",
                "value": "0",
                "label": "Всего",
                "name": ""
            }
        }],
        "full": [{
            "section": 5,
            "col": 1,
            "field": {
                "type": "label",
                "value": "0",
                "label": "Резервов",
                "name": ""
            }
        }, {
            "section": 5,
            "col": 1,
            "field": {
                "type": "label",
                "value": "0",
                "label": "В незавершёнке",
                "name": ""
            }
        }, {
            "section": 5,
            "col": 1,
            "field": {
                "type": "label",
                "value": "0",
                "label": "На консигнации",
                "name": ""
            }
        }, {
            "section": 5,
            "col": 1,
            "field": {
                "type": "label",
                "value": "0",
                "label": "Прогноз",
                "name": ""
            }
        }, {
            "section": 5,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Бокс",
                "id": "BOX",
                "name": "BOX",
                "value": "1",
                "placeholder": ""
            }
        }, {
            "section": 5,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Стойка",
                "id": "STOYKA",
                "name": "STOYKA",
                "value": "1",
                "placeholder": ""
            }
        }]
    }, {
        "base": [{
            "section": 5,
            "col": 2,
            "field": {
                "type": "label",
                "value": "0",
                "label": "В наличии",
                "name": ""
            }
        }],
        "full": [{
            "section": 5,
            "col": 2,
            "field": {
                "type": "label",
                "value": "0",
                "label": "Отложено",
                "name": ""
            }
        }, {
            "section": 5,
            "col": 2,
            "field": {
                "type": "label",
                "value": "0",
                "label": "В незавершёнке ф.",
                "name": ""
            }
        }, {
            "section": 5,
            "col": 2,
            "field": {
                "type": "label",
                "value": "0",
                "label": "На консигнации ф.",
                "name": ""
            }
        }, {
            "section": 5,
            "col": 2,
            "field": {
                "type": "label",
                "value": "0",
                "label": "Прогноз ф.",
                "name": ""
            }
        }, {
            "section": 5,
            "col": 2,
            "field": {
                "type": "input",
                "label": "Стеллаж",
                "id": "STELLAV",
                "name": "STELLAV",
                "value": "1",
                "placeholder": ""
            }
        }, {
            "section": 5,
            "col": 2,
            "field": {
                "type": "input",
                "label": "Ячейка",
                "id": "YACHEYKA",
                "name": "YACHEYKA",
                "value": "1",
                "placeholder": ""
            }
        }, {
            "section": 5,
            "col": 2,
            "field": {
                "type": "input",
                "label": "Код ячейки",
                "id": "KODYACH",
                "name": "KODYACH",
                "value": "",
                "placeholder": ""
            }
        }]
    }]
}, {
    "config": {
        "id": 6,
        "title": "Характеристики",
        "cols": 1,
        "dop_fields": true,
        "dop_open": false,
        "visible": true
    },
    "childs": [{
        "base": [],
        "full": [{
            "section": 6,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Характеристика 1",
                "id": "PAR1",
                "name": "PAR1",
                "value": "",
                "placeholder": ""
            }
        }, {
            "section": 6,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Характеристика 2",
                "id": "PAR2",
                "name": "PAR2",
                "value": "",
                "placeholder": ""
            }
        }, {
            "section": 6,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Характеристика 3",
                "id": "PAR3",
                "name": "PAR3",
                "value": "",
                "placeholder": ""
            }
        }, {
            "section": 6,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Характеристика 4",
                "id": "PAR4",
                "name": "PAR4",
                "value": "",
                "placeholder": ""
            }
        }, {
            "section": 6,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Характеристика 5",
                "id": "PAR5",
                "name": "PAR5",
                "value": "",
                "placeholder": ""
            }
        }, {
            "section": 6,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Характеристика 6",
                "id": "PAR6",
                "name": "PAR6",
                "value": "",
                "placeholder": ""
            }
        }, {
            "section": 6,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Характеристика 7",
                "id": "PAR7",
                "name": "PAR7",
                "value": "",
                "placeholder": ""
            }
        }, {
            "section": 6,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Характеристика 8",
                "id": "PAR8",
                "name": "PAR8",
                "value": "",
                "placeholder": ""
            }
        }, {
            "section": 6,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Характеристика 9",
                "id": "PAR9",
                "name": "PAR9",
                "value": "",
                "placeholder": ""
            }
        }, {
            "section": 6,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Характеристика 10",
                "id": "PAR10",
                "name": "PAR10",
                "value": "",
                "placeholder": ""
            }
        }, {
            "section": 6,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Характеристика 11",
                "id": "PAR11",
                "name": "PAR11",
                "value": "",
                "placeholder": ""
            }
        }, {
            "section": 6,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Характеристика 12",
                "id": "PAR12",
                "name": "PAR12",
                "value": "",
                "placeholder": ""
            }
        }, {
            "section": 6,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Характеристика 13",
                "id": "PAR13",
                "name": "PAR13",
                "value": "",
                "placeholder": ""
            }
        }, {
            "section": 6,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Характеристика 14",
                "id": "PAR14",
                "name": "PAR14",
                "value": "",
                "placeholder": ""
            }
        }, {
            "section": 6,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Характеристика 15",
                "id": "PAR15",
                "name": "PAR15",
                "value": "",
                "placeholder": ""
            }
        }, {
            "section": 6,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Характеристика 16",
                "id": "PAR16",
                "name": "PAR16",
                "value": "",
                "placeholder": ""
            }
        }, {
            "section": 6,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Характеристика 17",
                "id": "PAR17",
                "name": "PAR17",
                "value": "",
                "placeholder": ""
            }
        }, {
            "section": 6,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Характеристика 18",
                "id": "PAR18",
                "name": "PAR18",
                "value": "",
                "placeholder": ""
            }
        }, {
            "section": 6,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Характеристика 19",
                "id": "PAR19",
                "name": "PAR19",
                "value": "",
                "placeholder": ""
            }
        }, {
            "section": 6,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Характеристика 20",
                "id": "PAR20",
                "name": "PAR20",
                "value": "",
                "placeholder": ""
            }
        }]
    }]
}, {
    "config": {
        "id": 7,
        "title": "Описание",
        "cols": 1,
        "dop_fields": true,
        "dop_open": false,
        "visible": true
    },
    "childs": [{
        "base": [],
        "full": [{
            "section": 7,
            "col": 1,
            "field": {
                "type": "textarea",
                "name": "OPISAN",
                "value": "",
                "label": "Описание"
            }
        }]
    }]
}, {
    "config": {
        "id": 8,
        "title": "Дополнительные данные",
        "cols": 1,
        "dop_fields": true,
        "dop_open": false,
        "visible": true
    },
    "childs": [{
        "base": [{
            "section": 8,
            "col": 1,
            "field": {
                "type": "input",
                "label": "Примечание",
                "id": "TOVPRIM",
                "name": "TOVPRIM",
                "value": "",
                "placeholder": ""
            }
        }],
        "full": [{
            "section": 8,
            "col": 1,
            "field": [{
                "type": "group",
                "label": "Классы товаров",
                "content": {
                    "type": "input",
                    "label": "",
                    "id": "A_R1NAZ",
                    "name": "A_R1NAZ",
                    "value": "",
                    "placeholder": "",
                    "hidden": {
                        "name": "A_R1",
                        "value": "0"
                    }
                }
            }, {
                "type": "group",
                "label": "Статусы товаров",
                "content": {
                    "type": "input",
                    "label": "",
                    "id": "A_R2NAZ",
                    "name": "A_R2NAZ",
                    "value": "",
                    "placeholder": "",
                    "hidden": {
                        "name": "A_R2",
                        "value": "0"
                    }
                }
            }, {
                "type": "group",
                "label": "Сопутствующие товары и категории",
                "content": {
                    "type": "input",
                    "label": "",
                    "id": "A_R3NAZ",
                    "name": "A_R3NAZ",
                    "value": "",
                    "placeholder": "",
                    "hidden": {
                        "name": "A_R3",
                        "value": "0"
                    }
                }
            }, {
                "type": "group",
                "label": "Наша стройка ТГ",
                "content": {
                    "type": "input",
                    "label": "",
                    "id": "A_R4NAZ",
                    "name": "A_R4NAZ",
                    "value": "",
                    "placeholder": "",
                    "hidden": {
                        "name": "A_R4",
                        "value": "0"
                    }
                }
            }, {
                "type": "group",
                "label": "ТГ_для_ПК1_2",
                "content": {
                    "type": "input",
                    "label": "",
                    "id": "A_R5NAZ",
                    "name": "A_R5NAZ",
                    "value": "",
                    "placeholder": "",
                    "hidden": {
                        "name": "A_R5",
                        "value": "0"
                    }
                }
            }, {
                "type": "group",
                "label": "Признак",
                "content": {
                    "type": "input",
                    "label": "",
                    "id": "A_R6NAZ",
                    "name": "A_R6NAZ",
                    "value": "",
                    "placeholder": "",
                    "hidden": {
                        "name": "A_R6",
                        "value": "0"
                    }
                }
            }, {
                "type": "group",
                "label": "Подгруппа",
                "content": {
                    "type": "input",
                    "label": "",
                    "id": "A_R7NAZ",
                    "name": "A_R7NAZ",
                    "value": "",
                    "placeholder": "",
                    "hidden": {
                        "name": "A_R7",
                        "value": "0"
                    }
                }
            }, {
                "type": "group",
                "label": "Кат_2012",
                "content": {
                    "type": "input",
                    "label": "",
                    "id": "A_R8NAZ",
                    "name": "A_R8NAZ",
                    "value": "",
                    "placeholder": "",
                    "hidden": {
                        "name": "A_R8",
                        "value": "0"
                    }
                }
            }, {
                "type": "group",
                "label": "ПланМизол",
                "content": {
                    "type": "input",
                    "label": "",
                    "id": "A_R9NAZ",
                    "name": "A_R9NAZ",
                    "value": "",
                    "placeholder": "",
                    "hidden": {
                        "name": "A_R9",
                        "value": "0"
                    }
                }
            }, {
                "type": "group",
                "label": "ТГ",
                "content": {
                    "type": "input",
                    "label": "",
                    "id": "A_R10NAZ",
                    "name": "A_R10NAZ",
                    "value": "",
                    "placeholder": "",
                    "hidden": {
                        "name": "A_R10",
                        "value": "0"
                    }
                }
            }, {
                "type": "input",
                "label": "ROTO2014кво. бонусов",
                "id": "A_F2",
                "name": "A_F2",
                "value": "0",
                "placeholder": ""
            }, {
                "type": "input",
                "label": "Фасовка с РЦ",
                "id": "A_F3",
                "name": "A_F3",
                "value": "0",
                "placeholder": ""
            }, {
                "type": "input",
                "label": "Остатки поставщика (НС)",
                "id": "A_F7",
                "name": "A_F7",
                "value": "0",
                "placeholder": ""
            }, {
                "type": "input",
                "label": "% Нарушения для z-price",
                "id": "A_F8",
                "name": "A_F8",
                "value": "0",
                "placeholder": ""
            }, {
                "type": "input",
                "label": "Категория мотивации",
                "id": "A_F9",
                "name": "A_F9",
                "value": "0",
                "placeholder": ""
            }, {
                "type": "input",
                "label": "Макс.Скидка для Кон.Покупателя",
                "id": "A_F10",
                "name": "A_F10",
                "value": "0",
                "placeholder": ""
            }, {
                "type": "input",
                "label": "Название RU",
                "id": "A_S1",
                "name": "A_S1",
                "value": "",
                "placeholder": ""
            }, {
                "type": "input",
                "label": "Основной товар",
                "id": "A_S2",
                "name": "A_S2",
                "value": "",
                "placeholder": ""
            }, {
                "type": "input",
                "label": "Название для nasha-stroyka.com.ua",
                "id": "A_S9",
                "name": "A_S9",
                "value": "",
                "placeholder": ""
            }, {
                "type": "input",
                "label": "ABC_из_Мин.ЗапасовРЦ",
                "id": "A_S10",
                "name": "A_S10",
                "value": "",
                "placeholder": ""
            }, {
                "type": "boolean",
                "value": "-",
                "label": "Дубль товара ?",
                "content": [{
                    "label": "Да",
                    "value": "+"
                }, {
                    "label": "Нет",
                    "value": "-",
                    "selected": "selected"
                }]
            }, {
                "type": "boolean",
                "value": "-",
                "label": "ROTO2014?",
                "content": [{
                    "label": "Да",
                    "value": "+"
                }, {
                    "label": "Нет",
                    "value": "-",
                    "selected": "selected"
                }]
            }, {
                "type": "boolean",
                "value": "-",
                "label": "",
                "content": [{
                    "label": "Да",
                    "value": "+"
                }, {
                    "label": "Нет",
                    "value": "-",
                    "selected": "selected"
                }]
            }, {
                "type": "boolean",
                "value": "-",
                "label": "",
                "content": [{
                    "label": "Да",
                    "value": "+"
                }, {
                    "label": "Нет",
                    "value": "-",
                    "selected": "selected"
                }]
            }, {
                "type": "boolean",
                "value": "-",
                "label": "",
                "content": [{
                    "label": "Да",
                    "value": "+"
                }, {
                    "label": "Нет",
                    "value": "-",
                    "selected": "selected"
                }]
            }, {
                "type": "boolean",
                "value": "-",
                "label": "",
                "content": [{
                    "label": "Да",
                    "value": "+"
                }, {
                    "label": "Нет",
                    "value": "-",
                    "selected": "selected"
                }]
            }, {
                "type": "boolean",
                "value": "-",
                "label": "POS?",
                "content": [{
                    "label": "Да",
                    "value": "+"
                }, {
                    "label": "Нет",
                    "value": "-",
                    "selected": "selected"
                }]
            }, {
                "type": "boolean",
                "value": "-",
                "label": "",
                "content": [{
                    "label": "Да",
                    "value": "+"
                }, {
                    "label": "Нет",
                    "value": "-",
                    "selected": "selected"
                }]
            }, {
                "type": "boolean",
                "value": "-",
                "label": "Участвует в рассылке прайсов?",
                "content": [{
                    "label": "Да",
                    "value": "+"
                }, {
                    "label": "Нет",
                    "value": "-",
                    "selected": "selected"
                }]
            }, {
                "type": "boolean",
                "value": "-",
                "label": "НС?",
                "content": [{
                    "label": "Да",
                    "value": "+"
                }, {
                    "label": "Нет",
                    "value": "-",
                    "selected": "selected"
                }]
            }]
        }]
    }]
}, {
    "config": {
        "id": 9,
        "title": "Ключевые слова",
        "cols": 1,
        "dop_fields": true,
        "dop_open": false,
        "visible": true
    },
    "childs": [{
        "base": [],
        "full": [{
            "section": 9,
            "col": 1,
            "field": {
                "type": "textarea",
                "name": "KEYWORDS",
                "value": "",
                "label": "Ключевые слова"
            }
        }]
    }]
}]
```
