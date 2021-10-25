<template>
    <div class="flex flex-col flex-grow  border-r border-gray-200 pb-4 bg-white overflow-y-auto w-full h-full">  
        <div v-if="data" class="mt-1 flex-grow flex flex-col">
            <nav class="flex-1 px-2 bg-white"> 
                <template v-for="item in data.data" :key="item.name"> 
                    <Disclosure v-if="item.category.data" as="div" class="space-y-100" v-slot="{ open }"> 
                        <DisclosureButton  @click="disabled ? null : [ $log(item.uid), $emit('select', item.uid)]" :class="[open ? 'bg-secondary-300 text-gray-900' : 'bg-secondary-100 text-gray-600 hover:bg-primary-100 hover:text-gray-900', 'group w-full flex items-center justify-between pr-2 py-1 text-left text-sm font-medium focus:outline-none focus:ring-b focus:ring-primary-500']">
                             
                                <span class=" pl-2 w-full text-center whitespace-nowrap truncate">
                                    {{ item.name + ' ' + item.current  }} 
                                </span>  
                        </DisclosureButton>
                        <transition
                          enter-active-class="transition duration-100 ease-out"
                          enter-from-class="transform scale-y-0 opacity-0"
                          enter-to-class="transform scale-y-100 opacity-100"
                          leave-active-class="transition duration-75 ease-out"
                          leave-from-class="transform scale-y-100 opacity-100"
                          leave-to-class="transform scale-y-0 opacity-0"
                        >

                          <DisclosurePanel>
                              <a v-for="subItem in item.category.data" :key="subItem.name" @click="$emit('select', subItem.uid)" :class="[open ? 'bg-secondary-300' : 'bg-secondary-100', 'group w-full flex items-center justify-between py-1 text-sm font-medium text-gray-600  hover:text-gray-900  hover:bg-primary-50']">                                 
                                      <span class=" pl-2 w-full text-center whitespace-nowrap truncate">
                                          {{ subItem.name }} {{item.current }}
                                      </span>  
                              </a>
                          </DisclosurePanel>
                        </transition>
                    </Disclosure>
                </template>
            </nav> 
        </div>
    </div>
</template>


<script setup> 
import {ref} from 'vue'
import get from '@/hooks/get'
const props = defineProps({
    api: String
})

    // const {
    //     data,
    //     load,
    //     isLoad
    // } = get(props.api)

    const data  = ref({
  data: [
    {
      name: "Посуд Horeca",
      current: false,
      category: {
        data: [
          {
            uid: 1609,
            name: "Magnifico",
            current: false
          },
          {
            uid: 1613,
            name: "Elegante",
            current: false
          },
          {
            uid: 1603,
            name: "APS",
            current: false
          },
          {
            uid: 1604,
            name: "Contacto",
            current: false
          },
          {
            uid: 1605,
            name: "Sola",
            current: false
          },
          {
            uid: 1606,
            name: "Sola набори",
            current: false
          },
          {
            uid: 1607,
            name: "Insieme",
            current: false
          },
          {
            uid: 1608,
            name: "Bach",
            current: false
          },
          {
            uid: 1610,
            name: "Prestige",
            current: false
          },
          {
            uid: 1611,
            name: "Sublime",
            current: false
          },
          {
            uid: 1612,
            name: "Supremo",
            current: false
          },
          {
            uid: 1614,
            name: "Prezioso",
            current: false
          },
          {
            uid: 1615,
            name: "Pictura",
            current: false
          },
          {
            uid: 1616,
            name: "Glitter",
            current: false
          },
          {
            uid: 1617,
            name: "Thermic Glass",
            current: false
          },
          {
            uid: 1618,
            name: "Глечики, графіни, декантери",
            current: false
          },
          {
            uid: 1619,
            name: "LB різне",
            current: false
          },
          {
            uid: 1620,
            name: "Інше (Horeca)",
            current: false
          },
          {
            uid: 1621,
            name: "Riflessi, Gocce",
            current: false
          }
        ]
      }
    },
    {
      name: "Стекловата",
      current: false,
      category: {
        data: [
          {
            uid: 1481,
            name: "Стекловата Isover",
            current: false
          },
          {
            uid: 1482,
            name: "Стекловата KNAUF Insulation",
            current: false
          },
          {
            uid: 1590,
            name: "Стекловата Isover полу-жесткая",
            current: false
          },
          {
            uid: 1515,
            name: "Стекловата Isover RU",
            current: false
          }
        ]
      }
    },
    {
      name: "Водосточные системы",
      current: false,
      category: {
        data: [
          {
            uid: 1380,
            name: "Водосток Plannja",
            current: false
          },
          {
            uid: 1381,
            name: "Водосток Profil",
            current: false
          },
          {
            uid: 1382,
            name: "Водосток Wijo",
            current: false
          },
          {
            uid: 1383,
            name: "Водосток Фарватер",
            current: false
          },
          {
            uid: 1531,
            name: "Водосток Raiko",
            current: false
          },
          {
            uid: 1516,
            name: "Водосток Holzplast RU",
            current: false
          },
          {
            uid: 1635,
            name: "Водосток Fitt",
            current: false
          },
          {
            uid: 1711,
            name: "Водосток Grand Line",
            current: false
          },
          {
            uid: 3119,
            name: "Водосток Regenau",
            current: false
          }
        ]
      }
    },
    {
      name: "Древесина",
      current: false,
      category: {
        data: [
          {
            uid: 1633,
            name: "Готовая продукция Пиломатериалы",
            current: false
          },
          {
            uid: 1644,
            name: "Отходы",
            current: false
          },
          {
            uid: 1651,
            name: "Сырье",
            current: false
          },
          {
            uid: 1661,
            name: "Готовая продукция Поддоны",
            current: false
          },
          {
            uid: 1756,
            name: "Готова продукція Паливні гранули (пелети)",
            current: false
          },
          {
            uid: 1750,
            name: "Готовая продукция Пергола",
            current: false
          },
          {
            uid: 1742,
            name: "Готовая продукция Ящики",
            current: false
          }
        ]
      }
    },
    {
      name: "Valrom",
      current: false,
      category: {
        data: []
      }
    },
    {
      name: "Товары РФ",
      current: false,
      category: {
        data: [
          {
            uid: 500,
            name: "Краксы (Рекл) РФ",
            current: false
          },
          {
            uid: 473,
            name: "Мембраны Eurovent РФ",
            current: false
          },
          {
            uid: 476,
            name: "JUTA (сетки) РФ",
            current: false
          },
          {
            uid: 477,
            name: "Ленты РФ",
            current: false
          },
          {
            uid: 478,
            name: "PLASTTER РФ",
            current: false
          },
          {
            uid: 479,
            name: "Мембраны DuPont РФ",
            current: false
          },
          {
            uid: 480,
            name: "Пленки JUTA РФ",
            current: false
          },
          {
            uid: 481,
            name: "Ветрозащитная мембрана JUTA РФ",
            current: false
          },
          {
            uid: 482,
            name: "Водостоки Plannja РФ",
            current: false
          },
          {
            uid: 484,
            name: "Мембраны Корея РФ",
            current: false
          },
          {
            uid: 485,
            name: "КРАКСЫ Вентиляция и защита РФ",
            current: false
          },
          {
            uid: 486,
            name: "КРАКСЫ Безопастность Заказные РФ",
            current: false
          },
          {
            uid: 487,
            name: "КРАКСЫ Отвод воды и герметизация РФ",
            current: false
          },
          {
            uid: 488,
            name: "КРАКСЫ Крепление кровельного покрытия РФ",
            current: false
          },
          {
            uid: 489,
            name: "PAROC РФ",
            current: false
          },
          {
            uid: 490,
            name: "Svitap РФ",
            current: false
          },
          {
            uid: 491,
            name: "ISOVER_RUR РФ",
            current: false
          },
          {
            uid: 493,
            name: "Панели СОФФИТЫ РФ",
            current: false
          },
          {
            uid: 496,
            name: "Планки FaSiding (Старые цвета) РФ",
            current: false
          },
          {
            uid: 497,
            name: "Пленки Строительные РФ",
            current: false
          },
          {
            uid: 498,
            name: "Сетки TENAX РФ",
            current: false
          },
          {
            uid: 499,
            name: "Пленки ГРН РФ",
            current: false
          },
          {
            uid: 502,
            name: "Сайдинг FaSiding (Старые цвета) РФ",
            current: false
          },
          {
            uid: 507,
            name: "Рекламная продукция РФ",
            current: false
          },
          {
            uid: 518,
            name: "Гидропояс РФ",
            current: false
          },
          {
            uid: 474,
            name: "Мембраны JUTA РФ",
            current: false
          },
          {
            uid: 483,
            name: "Пленки Корея РФ",
            current: false
          },
          {
            uid: 494,
            name: "JUTA РФ",
            current: false
          },
          {
            uid: 495,
            name: "Планки СОФФИТЫ РФ",
            current: false
          },
          {
            uid: 464,
            name: "Водостоки Альта Профил РФ",
            current: false
          }
        ]
      }
    },
    {
      name: "Подсолнух",
      current: false,
      category: {
        data: [
          {
            uid: 1537,
            name: "Подсолнух1",
            current: false
          }
        ]
      }
    },
    {
      name: "HOREKA",
      current: false,
      category: {
        data: [
          {
            uid: 1375,
            name: "Аксесуари для готелів",
            current: false
          },
          {
            uid: 1393,
            name: "Електромеханічне обладнання",
            current: false
          },
          {
            uid: 1490,
            name: "Теплове обладнання",
            current: false
          },
          {
            uid: 1500,
            name: "Холодильне обладнання",
            current: false
          },
          {
            uid: 1394,
            name: "Запчастини",
            current: false
          },
          {
            uid: 1402,
            name: "Кухонний інвентар",
            current: false
          },
          {
            uid: 1417,
            name: "Нейтральне обладнання",
            current: false
          },
          {
            uid: 1424,
            name: "Посуд: прилади, скло, фарфор, кераміка",
            current: false
          },
          {
            uid: 1425,
            name: "Посудомийне обладнання",
            current: false
          },
          {
            uid: 1426,
            name: "Пральне обладнання",
            current: false
          },
          {
            uid: 1726,
            name: "Распродажа",
            current: false
          },
          {
            uid: 1722,
            name: "Muhldorfer",
            current: false
          },
          {
            uid: 1724,
            name: "Oberglass",
            current: false
          },
          {
            uid: 1723,
            name: "Luigi Bormioli",
            current: false
          },
          {
            uid: 1725,
            name: "Contacto",
            current: false
          }
        ]
      }
    },
    {
      name: "Дренажные материалы",
      current: false,
      category: {
        data: [
          {
            uid: 1313,
            name: "GeoDrain",
            current: false
          },
          {
            uid: 2779,
            name: "DYKA",
            current: false
          }
        ]
      }
    },
    {
      name: "Пленки и мембраны",
      current: false,
      category: {
        data: [
          {
            uid: 1379,
            name: "Ветробарьер",
            current: false
          },
          {
            uid: 1392,
            name: "Евробарьер",
            current: false
          },
          {
            uid: 1530,
            name: "Пленки JUTA короткие рулоны",
            current: false
          },
          {
            uid: 1415,
            name: "Мембраны SD",
            current: false
          },
          {
            uid: 1420,
            name: "Пленки JUTA",
            current: false
          },
          {
            uid: 1421,
            name: "Пленки Корея",
            current: false
          },
          {
            uid: 1423,
            name: "Пленки и мембраны (старые позиции)",
            current: false
          },
          {
            uid: 1511,
            name: "Наноизол RU",
            current: false
          },
          {
            uid: 1570,
            name: "Мембраны Сен Гобен",
            current: false
          },
          {
            uid: 1589,
            name: "TOP мембраны",
            current: false
          },
          {
            uid: 1669,
            name: "Пленки Silver",
            current: false
          },
          {
            uid: 1671,
            name: "Aerotop",
            current: false
          },
          {
            uid: 3059,
            name: "Подкровельные мембраны",
            current: false
          },
          {
            uid: 2999,
            name: "Плёнки Juta RU",
            current: false
          },
          {
            uid: 3039,
            name: "Пароизоляция в широких рулонах",
            current: false
          },
          {
            uid: 1713,
            name: "InterVent",
            current: false
          }
        ]
      }
    },
    {
      name: "Винтовые Лестницы",
      current: false,
      category: {
        data: [
          {
            uid: 1407,
            name: "Лестницы ARKE",
            current: false
          }
        ]
      }
    },
    {
      name: "Геомембрана",
      current: false,
      category: {
        data: [
          {
            uid: 1371,
            name: "XAVAN",
            current: false
          },
          {
            uid: 1314,
            name: "GeoSvit HDPE",
            current: false
          },
          {
            uid: 1315,
            name: "GeoSvit LDPE",
            current: false
          }
        ]
      }
    },
    {
      name: "Зенитные фонари",
      current: false,
      category: {
        data: [
          {
            uid: 1358,
            name: "SKYLUX",
            current: false
          },
          {
            uid: 1303,
            name: "F80 (хлам)",
            current: false
          },
          {
            uid: 1675,
            name: "Lamilux",
            current: false
          }
        ]
      }
    },
    {
      name: "Чердачные лестницы",
      current: false,
      category: {
        data: [
          {
            uid: 1409,
            name: "Лестницы DOLLE",
            current: false
          },
          {
            uid: 1408,
            name: "Лестницы ATRIUM",
            current: false
          },
          {
            uid: 1410,
            name: "Лестницы OMAN",
            current: false
          },
          {
            uid: 1411,
            name: "Лестницы ROTO",
            current: false
          }
        ]
      }
    },
    {
      name: "Отражающая изоляция",
      current: false,
      category: {
        data: [
          {
            uid: 1347,
            name: "POLYNUM",
            current: false
          }
        ]
      }
    },
    {
      name: "Послуги отримані",
      current: false,
      category: {
        data: [
          {
            uid: 375,
            name: "Витрати на збут (отримані)",
            current: false
          },
          {
            uid: 376,
            name: "Інші витрати (отримані)",
            current: false
          },
          {
            uid: 381,
            name: "Витрати на собівартість",
            current: false
          },
          {
            uid: 374,
            name: "Адміністративні витрати (отримані)",
            current: false
          },
          {
            uid: 380,
            name: "Загальновиробничі витрати",
            current: false
          },
          {
            uid: 1602,
            name: "Експедиційні послуги",
            current: false
          }
        ]
      }
    },
    {
      name: "Минеральная вата ROCKWOOL",
      current: false,
      category: {
        data: [
          {
            uid: 1351,
            name: "Rockwool (жесткая)",
            current: false
          },
          {
            uid: 1352,
            name: "Rockwool (мягкая)",
            current: false
          },
          {
            uid: 1512,
            name: "Rockwool (жесткая) RU",
            current: false
          },
          {
            uid: 1513,
            name: "Rockwool (мягкая) RU",
            current: false
          },
          {
            uid: 1514,
            name: "Rockwool (п.жесткая) RU",
            current: false
          },
          {
            uid: 1353,
            name: "Rockwool (п.жесткая)",
            current: false
          },
          {
            uid: 1631,
            name: "Rockwool_RUR",
            current: false
          },
          {
            uid: 1678,
            name: "Rockwool (мягкая UAH)",
            current: false
          }
        ]
      }
    },
    {
      name: "Наша стройка",
      current: false,
      category: {
        data: [
          {
            uid: 1545,
            name: "Быт_Климат",
            current: false
          },
          {
            uid: 1252,
            name: "Дом_подарки",
            current: false
          },
          {
            uid: 1541,
            name: "Дім_вазони",
            current: false
          },
          {
            uid: 1534,
            name: "Стройка_Фасад",
            current: false
          },
          {
            uid: 1262,
            name: "Сад_товары для пикника",
            current: false
          },
          {
            uid: 1265,
            name: "Сад_ограждения_ковка",
            current: false
          },
          {
            uid: 1546,
            name: "Бытовая Техника",
            current: false
          },
          {
            uid: 1547,
            name: "Дом_текстиль",
            current: false
          },
          {
            uid: 1548,
            name: "Сад_Садовая мебель",
            current: false
          },
          {
            uid: 1550,
            name: "Быт_мелкий быт",
            current: false
          },
          {
            uid: 1543,
            name: "Дом_посуда",
            current: false
          },
          {
            uid: 1567,
            name: "Сад_садовая техника",
            current: false
          },
          {
            uid: 1568,
            name: "Стройка_техника",
            current: false
          },
          {
            uid: 1594,
            name: "Сад_садовые зонты",
            current: false
          },
          {
            uid: 1581,
            name: "Сад_декоративные ограждения",
            current: false
          },
          {
            uid: 542,
            name: "Техніка_конвектора",
            current: false
          },
          {
            uid: 537,
            name: "Дети_Спортивные уголки",
            current: false
          },
          {
            uid: 539,
            name: "Дети_Детская мебель",
            current: false
          },
          {
            uid: 540,
            name: "Дети_Игры на улице",
            current: false
          },
          {
            uid: 543,
            name: "Дети_Для самых маленьких",
            current: false
          },
          {
            uid: 544,
            name: "Сад_садовий декор",
            current: false
          },
          {
            uid: 552,
            name: "Техніка_Рушниковсушка",
            current: false
          },
          {
            uid: 553,
            name: "Техніка_водонагрівачі",
            current: false
          },
          {
            uid: 570,
            name: "Дом_Мебель",
            current: false
          },
          {
            uid: 581,
            name: "Дом_текстильльль",
            current: false
          },
          {
            uid: 583,
            name: "Дом_Интерьер",
            current: false
          },
          {
            uid: 584,
            name: "Сад_все для растений",
            current: false
          },
          {
            uid: 598,
            name: "Дети_Зима",
            current: false
          },
          {
            uid: 599,
            name: "Дом_Отоп._Водоснаб.",
            current: false
          },
          {
            uid: 603,
            name: "Сад_меблі для відпочинку",
            current: false
          },
          {
            uid: 609,
            name: "Стройка_Оборудование",
            current: false
          },
          {
            uid: 610,
            name: "Дім_драбини_строймакс_руб",
            current: false
          },
          {
            uid: 1536,
            name: "Дитина_санки",
            current: false
          },
          {
            uid: 1518,
            name: "Сад_оборудование",
            current: false
          },
          {
            uid: 1561,
            name: "Быт_мелкий быт",
            current: false
          },
          {
            uid: 1565,
            name: "TEST",
            current: false
          },
          {
            uid: 1573,
            name: "тест",
            current: false
          },
          {
            uid: 1580,
            name: "Сад_Сетки садовые",
            current: false
          },
          {
            uid: 1583,
            name: "Сад_Заборы",
            current: false
          },
          {
            uid: 1584,
            name: "Сад_Товары для туризма и спорта",
            current: false
          },
          {
            uid: 1585,
            name: "Дом_Подарки и сувениры",
            current: false
          },
          {
            uid: 1587,
            name: "Стройка_Инструменты",
            current: false
          },
          {
            uid: 1591,
            name: "Дом_Хозтовары",
            current: false
          },
          {
            uid: 1592,
            name: "Стройка_Лестницы",
            current: false
          },
          {
            uid: 1593,
            name: "Дети_Игрушки",
            current: false
          },
          {
            uid: 1596,
            name: "Инструмент ручной и аксессуары",
            current: false
          },
          {
            uid: 1601,
            name: "Стройка_Кровля",
            current: false
          },
          {
            uid: 1662,
            name: "Я_Теперь_их_больше_нет",
            current: false
          },
          {
            uid: 3019,
            name: "Сад_Садовая мебель ",
            current: false
          },
          {
            uid: 3139,
            name: "Дом_Отоп._Водоснаб",
            current: false
          },
          {
            uid: 1701,
            name: "Стройка_Электрика",
            current: false
          },
          {
            uid: 1716,
            name: "Стройка_Водопровод и канализация",
            current: false
          },
          {
            uid: 2819,
            name: "Горшки PLASTKON",
            current: false
          },
          {
            uid: 2820,
            name: "Сад_садовый декор",
            current: false
          },
          {
            uid: 1710,
            name: "Стройка_Отделочные материалы",
            current: false
          },
          {
            uid: 1754,
            name: "Леска для мотокос и триммеров",
            current: false
          },
          {
            uid: 2919,
            name: "KETER TOOL STORAGE",
            current: false
          },
          {
            uid: 1727,
            name: "Стройка_Геосинтетика",
            current: false
          },
          {
            uid: 2979,
            name: "Тканые георешетки",
            current: false
          },
          {
            uid: 1757,
            name: "Стройка_Инструменты",
            current: false
          }
        ]
      }
    },
    {
      name: "Агроволокно",
      current: false,
      category: {
        data: [
          {
            uid: 1373,
            name: "Агроволокно PLANT-PROTEX",
            current: false
          },
          {
            uid: 1374,
            name: "Агроволокно ГЕКСА",
            current: false
          },
          {
            uid: 1564,
            name: "Агроволокно Greentex",
            current: false
          }
        ]
      }
    },
    {
      name: "Фиброцементные плиты и панели",
      current: false,
      category: {
        data: [
          {
            uid: 1403,
            name: "ЛТМ",
            current: false
          },
          {
            uid: 1404,
            name: "Латонит",
            current: false
          },
          {
            uid: 1744,
            name: "SCALAMID",
            current: false
          }
        ]
      }
    },
    {
      name: "Детские товары",
      current: false,
      category: {
        data: [
          {
            uid: 1274,
            name: "PalPlay",
            current: false
          },
          {
            uid: 1305,
            name: "FemStar",
            current: false
          },
          {
            uid: 1622,
            name: "STEP 2",
            current: false
          },
          {
            uid: 1628,
            name: "Санки Plastkon",
            current: false
          },
          {
            uid: 1740,
            name: "KidsKit",
            current: false
          },
          {
            uid: 1733,
            name: "Korbo",
            current: false
          }
        ]
      }
    },
    {
      name: "Продукция Baumit",
      current: false,
      category: {
        data: [
          {
            uid: 1293,
            name: "Baumit",
            current: false
          }
        ]
      }
    },
    {
      name: "Агроткань",
      current: false,
      category: {
        data: [
          {
            uid: 1284,
            name: "Agrojutex",
            current: false
          },
          {
            uid: 2859,
            name: "Agrocover",
            current: false
          }
        ]
      }
    },
    {
      name: "Бентонитовые маты",
      current: false,
      category: {
        data: [
          {
            uid: 1326,
            name: "Laviosa",
            current: false
          }
        ]
      }
    },
    {
      name: "Битумная мембрана",
      current: false,
      category: {
        data: [
          {
            uid: 1321,
            name: "ISOLTEMA",
            current: false
          }
        ]
      }
    },
    {
      name: "Узкосезонные товары",
      current: false,
      category: {
        data: [
          {
            uid: 1533,
            name: "Подставки под елки",
            current: false
          },
          {
            uid: 1577,
            name: "Ритуальные вазы",
            current: false
          },
          {
            uid: 1672,
            name: "Лопаты для уборки снега",
            current: false
          },
          {
            uid: 1747,
            name: "Коврики MultyHome",
            current: false
          }
        ]
      }
    },
    {
      name: "Битумная черепица",
      current: false,
      category: {
        data: [
          {
            uid: 1320,
            name: "IKO",
            current: false
          }
        ]
      }
    },
    {
      name: "Битумный волнистый лист",
      current: false,
      category: {
        data: [
          {
            uid: 1337,
            name: "Onduline Easyfix",
            current: false
          }
        ]
      }
    },
    {
      name: "Волнистые листы",
      current: false,
      category: {
        data: [
          {
            uid: 1510,
            name: "Волнистые листы (другое)",
            current: false
          },
          {
            uid: 1357,
            name: "SALUX",
            current: false
          },
          {
            uid: 1318,
            name: "GUTTA",
            current: false
          },
          {
            uid: 1641,
            name: "Rober",
            current: false
          },
          {
            uid: 1759,
            name: "Brett Martin",
            current: false
          },
          {
            uid: 2759,
            name: "Аксессуары",
            current: false
          }
        ]
      }
    },
    {
      name: "Grond Meester",
      current: false,
      category: {
        data: [
          {
            uid: 1558,
            name: "Кокосовый субстрат",
            current: false
          },
          {
            uid: 1624,
            name: "Торфяные субстраты",
            current: false
          },
          {
            uid: 1578,
            name: "Крепления для растений",
            current: false
          },
          {
            uid: 1654,
            name: "Капельное орошение",
            current: false
          },
          {
            uid: 1721,
            name: "Минераловатные субстраты",
            current: false
          }
        ]
      }
    },
    {
      name: "Габионы",
      current: false,
      category: {
        data: [
          {
            uid: 1331,
            name: "MGC Slovakia",
            current: false
          }
        ]
      }
    },
    {
      name: "Газонные решетки",
      current: false,
      category: {
        data: [
          {
            uid: 1503,
            name: "Экопарк",
            current: false
          }
        ]
      }
    },
    {
      name: "Георешетки",
      current: false,
      category: {
        data: [
          {
            uid: 1361,
            name: "Жесткие георешетки",
            current: false
          },
          {
            uid: 1289,
            name: "Armatex RSM",
            current: false
          },
          {
            uid: 1286,
            name: "Тканые георешетки",
            current: false
          },
          {
            uid: 1287,
            name: "Armatex M",
            current: false
          },
          {
            uid: 1288,
            name: "Armatex RS",
            current: false
          },
          {
            uid: 1290,
            name: "Сетки для асфальта (PET/PVA)",
            current: false
          },
          {
            uid: 1292,
            name: "Сетки для асфальта (GLASS/BASALT)",
            current: false
          },
          {
            uid: 1650,
            name: "STRADEX PET",
            current: false
          }
        ]
      }
    },
    {
      name: "Геосинтетика для DIY",
      current: false,
      category: {
        data: [
          {
            uid: 1317,
            name: "GreenVista",
            current: false
          }
        ]
      }
    },
    {
      name: "Геосоты",
      current: false,
      category: {
        data: [
          {
            uid: 1387,
            name: "ГРП",
            current: false
          },
          {
            uid: 2840,
            name: "GEOCORD",
            current: false
          },
          {
            uid: 2839,
            name: "ArmAll GeoCell",
            current: false
          }
        ]
      }
    },
    {
      name: "Геотекстиль нетканый иглопробивной",
      current: false,
      category: {
        data: [
          {
            uid: 1364,
            name: "Tipptex",
            current: false
          },
          {
            uid: 1298,
            name: "Enkatex",
            current: false
          },
          {
            uid: 1316,
            name: "GeoSvit PET",
            current: false
          },
          {
            uid: 1335,
            name: "NETEX",
            current: false
          }
        ]
      }
    },
    {
      name: "Геотекстиль нетканый термически скрепленный",
      current: false,
      category: {
        data: [
          {
            uid: 1366,
            name: "Typar",
            current: false
          },
          {
            uid: 1626,
            name: "DuPont Geoproma",
            current: false
          }
        ]
      }
    },
    {
      name: "Геотекстиль тканый",
      current: false,
      category: {
        data: [
          {
            uid: 1325,
            name: "Kortex",
            current: false
          }
        ]
      }
    },
    {
      name: "Геотекстильние изделия Bonar",
      current: false,
      category: {
        data: [
          {
            uid: 1294,
            name: "Bonar",
            current: false
          }
        ]
      }
    },
    {
      name: "Горизонтальная отсекающая гидроизоляция",
      current: false,
      category: {
        data: [
          {
            uid: 1386,
            name: "ГИДРОПОЯС PVC",
            current: false
          },
          {
            uid: 1595,
            name: "ГИДРОПОЯС HDPE",
            current: false
          }
        ]
      }
    },
    {
      name: "Горшки",
      current: false,
      category: {
        data: [
          {
            uid: 1390,
            name: "Горшки PLASTKON",
            current: false
          },
          {
            uid: 1632,
            name: "Горшки Scheurich",
            current: false
          }
        ]
      }
    },
    {
      name: "Дренажный геокомпозит",
      current: false,
      category: {
        data: [
          {
            uid: 1296,
            name: "ENKADRAIN",
            current: false
          }
        ]
      }
    },
    {
      name: "Другое",
      current: false,
      category: {
        data: [
          {
            uid: 1378,
            name: "Битумная черепица",
            current: false
          },
          {
            uid: 1384,
            name: "Водосточные системы",
            current: false
          },
          {
            uid: 1385,
            name: "Вспененный полиэтилен",
            current: false
          },
          {
            uid: 1388,
            name: "Габионы",
            current: false
          },
          {
            uid: 1389,
            name: "Геосинтетика",
            current: false
          },
          {
            uid: 1391,
            name: "Другое (Прочее)",
            current: false
          },
          {
            uid: 1473,
            name: "Сетки",
            current: false
          },
          {
            uid: 1488,
            name: "ТИ Thermaflex",
            current: false
          },
          {
            uid: 1485,
            name: "ТИ (укр)",
            current: false
          },
          {
            uid: 1486,
            name: "ТИ Eurobatex",
            current: false
          },
          {
            uid: 1487,
            name: "ТИ Isover",
            current: false
          },
          {
            uid: 1491,
            name: "Тест",
            current: false
          },
          {
            uid: 1494,
            name: "Утеплители Danko",
            current: false
          },
          {
            uid: 1495,
            name: "Утеплители Izovat",
            current: false
          },
          {
            uid: 1496,
            name: "Утеплители Mizol",
            current: false
          },
          {
            uid: 1497,
            name: "Утеплители Nobasil",
            current: false
          },
          {
            uid: 1498,
            name: "Утеплители Rockwool",
            current: false
          },
          {
            uid: 1499,
            name: "Утеплители Техно",
            current: false
          },
          {
            uid: 1501,
            name: "Черепица Braas",
            current: false
          },
          {
            uid: 1502,
            name: "Штукатурки/грунтовки",
            current: false
          },
          {
            uid: 1504,
            name: "Экструзия",
            current: false
          },
          {
            uid: 1509,
            name: "Софиты",
            current: false
          },
          {
            uid: 185,
            name: "Інше (товар, 281)",
            current: false
          },
          {
            uid: 189,
            name: "Voestalpine",
            current: false
          },
          {
            uid: 152,
            name: "Пенопласт",
            current: false
          },
          {
            uid: 1412,
            name: "Листы LEWIS",
            current: false
          },
          {
            uid: 1399,
            name: "Композитная черепица",
            current: false
          },
          {
            uid: 1405,
            name: "Ленты",
            current: false
          },
          {
            uid: 1416,
            name: "Металлочерепица",
            current: false
          },
          {
            uid: 1422,
            name: "Пленки и мембраны",
            current: false
          },
          {
            uid: 164,
            name: "JUTA (Інше)",
            current: false
          },
          {
            uid: 169,
            name: "PENOPLEX",
            current: false
          },
          {
            uid: 171,
            name: "POLYGLASS",
            current: false
          },
          {
            uid: 173,
            name: "TEGLASS",
            current: false
          },
          {
            uid: 174,
            name: "TIF Elettronica",
            current: false
          },
          {
            uid: 179,
            name: "Крепление для мембраны",
            current: false
          },
          {
            uid: 398,
            name: "Обладнання для зварки мембрани",
            current: false
          },
          {
            uid: 606,
            name: "FIN",
            current: false
          },
          {
            uid: 1342,
            name: "Paroc СИ",
            current: false
          },
          {
            uid: 334,
            name: "Товар 3ppl",
            current: false
          },
          {
            uid: 297,
            name: "Консигнация",
            current: false
          },
          {
            uid: 366,
            name: "Звукоизоляция TEXSA",
            current: false
          },
          {
            uid: 413,
            name: "Бібліотекарь",
            current: false
          },
          {
            uid: 43,
            name: "Суміші",
            current: false
          }
        ]
      }
    },
    {
      name: "Инженерные системы",
      current: false,
      category: {
        data: [
          {
            uid: 1368,
            name: "VIEGA",
            current: false
          },
          {
            uid: 1414,
            name: "Медные трубы",
            current: false
          },
          {
            uid: 1428,
            name: "Разное",
            current: false
          },
          {
            uid: 1310,
            name: "Flexalen",
            current: false
          },
          {
            uid: 1332,
            name: "MIELTERM",
            current: false
          },
          {
            uid: 1333,
            name: "Mizol",
            current: false
          },
          {
            uid: 1346,
            name: "Plomyplas",
            current: false
          },
          {
            uid: 1348,
            name: "PROFIL канализация",
            current: false
          }
        ]
      }
    },
    {
      name: "Керосиновые лампы",
      current: false,
      category: {
        data: [
          {
            uid: 1329,
            name: "Mars",
            current: false
          }
        ]
      }
    },
    {
      name: "Конструкции",
      current: false,
      category: {
        data: [
          {
            uid: 1253,
            name: "Пеликан",
            current: false
          },
          {
            uid: 230,
            name: "Вешалка ВАРИАНТ",
            current: false
          },
          {
            uid: 1553,
            name: "KETER HOME ORGANIZATION",
            current: false
          },
          {
            uid: 1554,
            name: "KETER KIDS",
            current: false
          },
          {
            uid: 1555,
            name: "KETER OUTDOOR STORAGE",
            current: false
          },
          {
            uid: 1556,
            name: "KETER TOOL STORAGE",
            current: false
          },
          {
            uid: 1551,
            name: "KETER BATH",
            current: false
          },
          {
            uid: 1552,
            name: "KETER GARDENING",
            current: false
          },
          {
            uid: 1312,
            name: "FlyGoodbye",
            current: false
          },
          {
            uid: 1340,
            name: "Palram Application",
            current: false
          },
          {
            uid: 1557,
            name: "Evelekt",
            current: false
          }
        ]
      }
    },
    {
      name: "Крепежи",
      current: false,
      category: {
        data: [
          {
            uid: 1401,
            name: "Крепления Amex",
            current: false
          },
          {
            uid: 1646,
            name: "Крепеж для сайдинга",
            current: false
          },
          {
            uid: 1729,
            name: "Саморезы для водостока",
            current: false
          }
        ]
      }
    },
    {
      name: "Кровельные аксессуары",
      current: false,
      category: {
        data: [
          {
            uid: 1400,
            name: "Краксы",
            current: false
          },
          {
            uid: 1300,
            name: "Euroflex",
            current: false
          }
        ]
      }
    },
    {
      name: "Ленты",
      current: false,
      category: {
        data: [
          {
            uid: 1309,
            name: "FIXIT",
            current: false
          },
          {
            uid: 1344,
            name: "PLASTTER PROF",
            current: false
          },
          {
            uid: 1345,
            name: "PLASTTER ST",
            current: false
          },
          {
            uid: 1645,
            name: "IZOLON",
            current: false
          }
        ]
      }
    },
    {
      name: "Листы OSB/QSB",
      current: false,
      category: {
        data: [
          {
            uid: 1413,
            name: "Листы_OSB/QSB",
            current: false
          }
        ]
      }
    },
    {
      name: "Мансардные окна",
      current: false,
      category: {
        data: [
          {
            uid: 1355,
            name: "Roto",
            current: false
          },
          {
            uid: 1356,
            name: "Roto Premium",
            current: false
          }
        ]
      }
    },
    {
      name: "Подложки под стул",
      current: false,
      category: {
        data: [
          {
            uid: 1328,
            name: "Mapal",
            current: false
          },
          {
            uid: 1338,
            name: "Chair mat Palram",
            current: false
          },
          {
            uid: 1640,
            name: "Rober Clear Style",
            current: false
          }
        ]
      }
    },
    {
      name: "Полимерные мембраны",
      current: false,
      category: {
        data: [
          {
            uid: 1362,
            name: "Soprema Flag",
            current: false
          }
        ]
      }
    },
    {
      name: "Продукты ТОМО Дизайн",
      current: false,
      category: {
        data: [
          {
            uid: 1489,
            name: "ТОМО Дизайн",
            current: false
          }
        ]
      }
    },
    {
      name: "Продукция Valrom",
      current: false,
      category: {
        data: [
          {
            uid: 1367,
            name: "Valrom",
            current: false
          }
        ]
      }
    },
    {
      name: "Продукция КЕМА",
      current: false,
      category: {
        data: [
          {
            uid: 1427,
            name: "Продукция КЕМА",
            current: false
          }
        ]
      }
    },
    {
      name: "Противоэрозионные маты",
      current: false,
      category: {
        data: [
          {
            uid: 1297,
            name: "ENKAMAT",
            current: false
          },
          {
            uid: 1311,
            name: "FlexiTex",
            current: false
          },
          {
            uid: 1323,
            name: "JUTENON",
            current: false
          }
        ]
      }
    },
    {
      name: "Радиаторы",
      current: false,
      category: {
        data: [
          {
            uid: 1522,
            name: "COMRAD",
            current: false
          },
          {
            uid: 1349,
            name: "PURMO",
            current: false
          },
          {
            uid: 1563,
            name: "Сервисные для радиаторов",
            current: false
          },
          {
            uid: 3199,
            name: "IDMAR",
            current: false
          }
        ]
      }
    },
    {
      name: "Растопочные материалы",
      current: false,
      category: {
        data: [
          {
            uid: 1429,
            name: "Растопочка",
            current: false
          }
        ]
      }
    },
    {
      name: "Реклама",
      current: false,
      category: {
        data: [
          {
            uid: 1443,
            name: "Реклама (Kortex)",
            current: false
          },
          {
            uid: 1440,
            name: "Реклама (IKO)",
            current: false
          },
          {
            uid: 1441,
            name: "Реклама (Isover)",
            current: false
          },
          {
            uid: 1442,
            name: "Реклама (Keter)",
            current: false
          },
          {
            uid: 1444,
            name: "Реклама (Lamilux)",
            current: false
          },
          {
            uid: 1445,
            name: "Реклама (Oman)",
            current: false
          },
          {
            uid: 1446,
            name: "Реклама (Plannja)",
            current: false
          },
          {
            uid: 1447,
            name: "Реклама (Plaskton)",
            current: false
          },
          {
            uid: 1448,
            name: "Реклама (Plastter)",
            current: false
          },
          {
            uid: 1449,
            name: "Реклама (Plomyplas)",
            current: false
          },
          {
            uid: 1450,
            name: "Реклама (Profil)",
            current: false
          },
          {
            uid: 1451,
            name: "Реклама (Радиаторы)",
            current: false
          },
          {
            uid: 1452,
            name: "Реклама (Rockwool)",
            current: false
          },
          {
            uid: 1453,
            name: "Реклама (Roto)",
            current: false
          },
          {
            uid: 1456,
            name: "Реклама (Thermaflex)",
            current: false
          },
          {
            uid: 1454,
            name: "Реклама (Salux)",
            current: false
          },
          {
            uid: 1455,
            name: "Реклама (Tenax)",
            current: false
          },
          {
            uid: 1457,
            name: "Реклама (Typar)",
            current: false
          },
          {
            uid: 1458,
            name: "Реклама (Viega)",
            current: false
          },
          {
            uid: 1459,
            name: "Реклама (Vox)",
            current: false
          },
          {
            uid: 1460,
            name: "Реклама (Гидропояс)",
            current: false
          },
          {
            uid: 1461,
            name: "Реклама (Изолит)",
            current: false
          },
          {
            uid: 1462,
            name: "Реклама (Кер.лампы)",
            current: false
          },
          {
            uid: 1463,
            name: "Реклама (Краксы)",
            current: false
          },
          {
            uid: 1464,
            name: "Реклама (ПВХ мембрана)",
            current: false
          },
          {
            uid: 1465,
            name: "Реклама (Пленки и мембраны)",
            current: false
          },
          {
            uid: 1466,
            name: "Реклама (Прочее)",
            current: false
          },
          {
            uid: 1467,
            name: "Реклама (СЛВ)",
            current: false
          },
          {
            uid: 1468,
            name: "Реклама (Софиты)",
            current: false
          },
          {
            uid: 1266,
            name: "Реклама (Tipptex)",
            current: false
          },
          {
            uid: 1430,
            name: "Реклама (3ppl)",
            current: false
          },
          {
            uid: 1431,
            name: "Реклама (ARKE)",
            current: false
          },
          {
            uid: 1432,
            name: "Реклама (Armall)",
            current: false
          },
          {
            uid: 1433,
            name: "Реклама (Armatex)",
            current: false
          },
          {
            uid: 1434,
            name: "Реклама (Atrium)",
            current: false
          },
          {
            uid: 1435,
            name: "Реклама (Eurobatex)",
            current: false
          },
          {
            uid: 1436,
            name: "Реклама (Fasiding)",
            current: false
          },
          {
            uid: 1437,
            name: "Реклама (Fineber)",
            current: false
          },
          {
            uid: 1438,
            name: "Реклама (Fixit)",
            current: false
          },
          {
            uid: 1439,
            name: "Реклама (Geosvit)",
            current: false
          },
          {
            uid: 1627,
            name: "Реклама (Form-Plastic)",
            current: false
          },
          {
            uid: 1542,
            name: "Реклама (Raiko)",
            current: false
          },
          {
            uid: 1520,
            name: "Реклама (Holzplast)",
            current: false
          },
          {
            uid: 1539,
            name: "Реклама Oman, Roto  ответ хранение (209 – 809)",
            current: false
          },
          {
            uid: 1540,
            name: "Реклама (Не использовать)",
            current: false
          },
          {
            uid: 1519,
            name: "Реклама (Paroc)",
            current: false
          },
          {
            uid: 1535,
            name: "Реклама (Стенды)",
            current: false
          },
          {
            uid: 1572,
            name: "Реклама (PolyHort)",
            current: false
          },
          {
            uid: 1588,
            name: "Реклама (PalPlay)",
            current: false
          },
          {
            uid: 1597,
            name: "Реклама (Greentex)",
            current: false
          },
          {
            uid: 1598,
            name: "Реклама (KARATZIS)",
            current: false
          },
          {
            uid: 1599,
            name: "Реклама (Plant-Protex)",
            current: false
          },
          {
            uid: 1600,
            name: "Реклама (AGROJUTEX)",
            current: false
          },
          {
            uid: 1625,
            name: "Реклама (Egeria panel)",
            current: false
          },
          {
            uid: 1676,
            name: "Реклама (Remaplan)",
            current: false
          },
          {
            uid: 1636,
            name: "Реклама (GrondMeester)",
            current: false
          },
          {
            uid: 1639,
            name: "Реклама (Fitt)",
            current: false
          },
          {
            uid: 1642,
            name: "Реклама (Scheurich)",
            current: false
          },
          {
            uid: 1647,
            name: "Реклама (VOX RU)",
            current: false
          },
          {
            uid: 1660,
            name: "Реклама (ЦСП БЗС)",
            current: false
          },
          {
            uid: 1653,
            name: "Реклама (Rober)",
            current: false
          },
          {
            uid: 1659,
            name: "Прочее (ресурс, 201-801)",
            current: false
          },
          {
            uid: 1667,
            name: "Реклама (Profil канализация)",
            current: false
          },
          {
            uid: 1670,
            name: "Реклама (STEP 2)",
            current: false
          },
          {
            uid: 1683,
            name: "Реклама (Asphaltex)",
            current: false
          },
          {
            uid: 1734,
            name: "Реклама (Геотекстильные изделия Бонар)",
            current: false
          },
          {
            uid: 1743,
            name: "Реклама (Крепежи)",
            current: false
          },
          {
            uid: 2959,
            name: "Реклама Sita",
            current: false
          },
          {
            uid: 1737,
            name: "Реклама (Enkamat)",
            current: false
          },
          {
            uid: 2899,
            name: "Реклама VarioTerm",
            current: false
          },
          {
            uid: 1732,
            name: "Реклама (HoReCa)",
            current: false
          },
          {
            uid: 1746,
            name: "Реклама (Polifort)",
            current: false
          },
          {
            uid: 1758,
            name: "Реклама (PIR)",
            current: false
          },
          {
            uid: 3079,
            name: "Реклама (BretMartin)",
            current: false
          },
          {
            uid: 1702,
            name: "Реклама (ПВХ покрытия для ТИ)",
            current: false
          },
          {
            uid: 1715,
            name: "Реклама (Плёнки С/Х)",
            current: false
          },
          {
            uid: 1731,
            name: "Реклама (Материалы для садоводства)",
            current: false
          },
          {
            uid: 1752,
            name: "Реклама (Добра сіточка)",
            current: false
          },
          {
            uid: 1712,
            name: "Реклама (Grand Line)",
            current: false
          },
          {
            uid: 1719,
            name: "Реклама (Компенсации)",
            current: false
          },
          {
            uid: 1745,
            name: "Реклама (Scalamid)",
            current: false
          }
        ]
      }
    },
    {
      name: "СПК",
      current: false,
      category: {
        data: [
          {
            uid: 1507,
            name: "Sunlite",
            current: false
          }
        ]
      }
    },
    {
      name: "Сайдинг",
      current: false,
      category: {
        data: [
          {
            uid: 1370,
            name: "VOX MAX-3",
            current: false
          },
          {
            uid: 1508,
            name: "Альта-Профиль",
            current: false
          },
          {
            uid: 1304,
            name: "FaSiding",
            current: false
          },
          {
            uid: 1307,
            name: "FineBer",
            current: false
          },
          {
            uid: 1562,
            name: "FaSiding Блокхаус",
            current: false
          },
          {
            uid: 1718,
            name: "FaSiding WoodHouse",
            current: false
          }
        ]
      }
    },
    {
      name: "Сетки полимерные",
      current: false,
      category: {
        data: [
          {
            uid: 1474,
            name: "Сетки Juta",
            current: false
          },
          {
            uid: 1475,
            name: "Сетки Tenax",
            current: false
          },
          {
            uid: 1476,
            name: "Сетки KARATZIS",
            current: false
          },
          {
            uid: 1477,
            name: "Сетки москитные",
            current: false
          },
          {
            uid: 1549,
            name: "Сетки Nowmax",
            current: false
          },
          {
            uid: 1571,
            name: "Сетки Добра сіточка",
            current: false
          },
          {
            uid: 1736,
            name: "Огородження Добра сіточка",
            current: false
          }
        ]
      }
    },
    {
      name: "Системы линейного водоотвода",
      current: false,
      category: {
        data: [
          {
            uid: 1360,
            name: "STORA",
            current: false
          },
          {
            uid: 1365,
            name: "TOP",
            current: false
          },
          {
            uid: 1372,
            name: "АТТ",
            current: false
          },
          {
            uid: 1319,
            name: "HAURATON",
            current: false
          },
          {
            uid: 1334,
            name: "MUFLE",
            current: false
          },
          {
            uid: 1336,
            name: "NICE",
            current: false
          },
          {
            uid: 2799,
            name: "СепараторыAQUAFIX",
            current: false
          }
        ]
      }
    },
    {
      name: "Солары",
      current: false,
      category: {
        data: [
          {
            uid: 1478,
            name: "Солары Roto",
            current: false
          }
        ]
      }
    },
    {
      name: "Софиты",
      current: false,
      category: {
        data: [
          {
            uid: 1480,
            name: "Соффит",
            current: false
          },
          {
            uid: 1291,
            name: "ASKO NEO",
            current: false
          },
          {
            uid: 1586,
            name: "Айдахо",
            current: false
          },
          {
            uid: 1730,
            name: "VOX Infratop",
            current: false
          }
        ]
      }
    },
    {
      name: "Строительная химия",
      current: false,
      category: {
        data: [
          {
            uid: 1330,
            name: "MAXIT",
            current: false
          }
        ]
      }
    },
    {
      name: "Техническая изоляция",
      current: false,
      category: {
        data: [
          {
            uid: 1359,
            name: "SMAY",
            current: false
          },
          {
            uid: 1363,
            name: "THERMAFLEX",
            current: false
          },
          {
            uid: 1354,
            name: "Rockwool ТИ",
            current: false
          },
          {
            uid: 1472,
            name: "Сервисные для ТИ",
            current: false
          },
          {
            uid: 1418,
            name: "ПВХ покрытие для изоляции",
            current: false
          },
          {
            uid: 1285,
            name: "ARMAFLEХ",
            current: false
          },
          {
            uid: 1299,
            name: "EUROBATEX",
            current: false
          },
          {
            uid: 1322,
            name: "ISOTEK",
            current: false
          },
          {
            uid: 1327,
            name: "LINK",
            current: false
          },
          {
            uid: 1341,
            name: "Palziv",
            current: false
          },
          {
            uid: 1343,
            name: "Paroc ТИ",
            current: false
          },
          {
            uid: 1668,
            name: "PA-FLEX",
            current: false
          },
          {
            uid: 1714,
            name: "SKAMOL",
            current: false
          }
        ]
      }
    },
    {
      name: "Фасадные панели",
      current: false,
      category: {
        data: [
          {
            uid: 1377,
            name: "Альта-Профиль",
            current: false
          },
          {
            uid: 1579,
            name: "KERRAFRONT",
            current: false
          },
          {
            uid: 1308,
            name: "FineBer",
            current: false
          },
          {
            uid: 1637,
            name: "VOX Solid",
            current: false
          }
        ]
      }
    },
    {
      name: "Шиповидная геомембрана",
      current: false,
      category: {
        data: [
          {
            uid: 1397,
            name: "Изолит",
            current: false
          }
        ]
      }
    },
    {
      name: "Штукатурные стеклосетки",
      current: false,
      category: {
        data: [
          {
            uid: 1483,
            name: "Стеклосетки",
            current: false
          }
        ]
      }
    },
    {
      name: "Экструзия",
      current: false,
      category: {
        data: [
          {
            uid: 1492,
            name: "Техноплекс",
            current: false
          },
          {
            uid: 1505,
            name: "Экструзия (Прочее)",
            current: false
          },
          {
            uid: 1419,
            name: "Пеноплекс",
            current: false
          },
          {
            uid: 1524,
            name: "Ravatherm",
            current: false
          },
          {
            uid: 1295,
            name: "DOW",
            current: false
          },
          {
            uid: 1302,
            name: "Europlex",
            current: false
          },
          {
            uid: 1306,
            name: "FIBRAN",
            current: false
          },
          {
            uid: 1525,
            name: "Ravatherm",
            current: false
          }
        ]
      }
    },
    {
      name: "Послуги надані",
      current: false,
      category: {
        data: [
          {
            uid: 1277,
            name: "Оренда приміщень (надані/713)",
            current: false
          },
          {
            uid: 367,
            name: "Будівельні/наукові роботи (надані)",
            current: false
          },
          {
            uid: 371,
            name: "Реклама (надані)",
            current: false
          },
          {
            uid: 369,
            name: "Оренда авто (надані)",
            current: false
          },
          {
            uid: 379,
            name: "Інші (надані)",
            current: false
          },
          {
            uid: 368,
            name: "Логістичні послуги (надані)",
            current: false
          },
          {
            uid: 370,
            name: "Оренда приміщень (надані)",
            current: false
          },
          {
            uid: 1657,
            name: "Послуги не для відгрузок",
            current: false
          }
        ]
      }
    },
    {
      name: "Послуги",
      current: false,
      category: {
        data: [
          {
            uid: 202,
            name: "ІНШІ рекламні",
            current: false
          },
          {
            uid: 55,
            name: "Маркетингові",
            current: false
          },
          {
            uid: 596,
            name: "Послуги",
            current: false
          },
          {
            uid: 225,
            name: "Обслуговування будівель",
            current: false
          },
          {
            uid: 227,
            name: "Оренда складських приміщень",
            current: false
          },
          {
            uid: 226,
            name: "Персонал",
            current: false
          },
          {
            uid: 232,
            name: "Таможенні послуги",
            current: false
          },
          {
            uid: 258,
            name: "Оренда/ремонт/обслуговування приміщень",
            current: false
          },
          {
            uid: 259,
            name: "Оренда авто",
            current: false
          },
          {
            uid: 260,
            name: "Будівельні/наукові роботи",
            current: false
          },
          {
            uid: 261,
            name: "Грузоперевозки",
            current: false
          },
          {
            uid: 262,
            name: "Кадрові",
            current: false
          },
          {
            uid: 263,
            name: "Командировки",
            current: false
          },
          {
            uid: 264,
            name: "Залізниця",
            current: false
          },
          {
            uid: 265,
            name: "Мито/збори",
            current: false
          },
          {
            uid: 267,
            name: "Реклама и маркетинг (послуги)",
            current: false
          },
          {
            uid: 268,
            name: "Страховка",
            current: false
          },
          {
            uid: 269,
            name: "Ремонт/ТО авто",
            current: false
          },
          {
            uid: 270,
            name: "Послуги по збуту",
            current: false
          },
          {
            uid: 271,
            name: "Послуги зв'язку,Почта і підписка",
            current: false
          },
          {
            uid: 272,
            name: "Хозяйственные",
            current: false
          },
          {
            uid: 54,
            name: "Логістичні",
            current: false
          },
          {
            uid: 68,
            name: "Транспортні (додаткові)",
            current: false
          },
          {
            uid: 69,
            name: "Фінансові",
            current: false
          },
          {
            uid: 70,
            name: "Юридичні",
            current: false
          },
          {
            uid: 120,
            name: "Оренда офісних приміщень",
            current: false
          },
          {
            uid: 293,
            name: "Продаж ОЗ",
            current: false
          }
        ]
      }
    },
    {
      name: "Необоротні активи",
      current: false,
      category: {
        data: [
          {
            uid: 301,
            name: "Інструменти (вартість більше 20000грн.без пдв,106/831)",
            current: false
          },
          {
            uid: 593,
            name: "Нематеріальні активи (127/833)",
            current: false
          },
          {
            uid: 461,
            name: "Оргтехника РФ",
            current: false
          },
          {
            uid: 1521,
            name: "Для ввода ОС",
            current: false
          },
          {
            uid: 200,
            name: "Інші (вартість менше 20000грн.без пдв,112/832)",
            current: false
          },
          {
            uid: 209,
            name: "Меблі  (вартість більше 20000грн.без пдв,106/831)",
            current: false
          },
          {
            uid: 275,
            name: "Мобільні телефони (вартість більше 20000грн.без пдв,104/831)",
            current: false
          },
          {
            uid: 61,
            name: "Складське обладнання (вартість більше 20000грн.без пдв,104/831)",
            current: false
          },
          {
            uid: 39,
            name: "Автомобілі легкові (105/831)",
            current: false
          },
          {
            uid: 46,
            name: "Бідівлі та спорудження (103/831)",
            current: false
          },
          {
            uid: 113,
            name: "Автомобілі вантажні (105/831)",
            current: false
          },
          {
            uid: 300,
            name: "Оргтехніка (вартість більше 20000грн.без пдв,104/831)",
            current: false
          },
          {
            uid: 289,
            name: "Побутова техніка (вартість більше 20000грн.без пдв,106/831)",
            current: false
          },
          {
            uid: 585,
            name: "Інструменти (вартість менше 20000грн.без пдв,112/832)",
            current: false
          },
          {
            uid: 586,
            name: "Інші (вартість більше 20000грн.без пдв,106/831)",
            current: false
          },
          {
            uid: 587,
            name: "Меблі  (вартість менше 20000грн.без пдв,112/832)",
            current: false
          },
          {
            uid: 588,
            name: "Мобільні телефони  (вартість менше 20000грн.без пдв,112/832)",
            current: false
          },
          {
            uid: 589,
            name: "Оргтехніка (вартість менше 20000грн.без пдв,112/832)",
            current: false
          },
          {
            uid: 590,
            name: "Побутова техніка (вартість менше 20000грн.без пдв,112/832)",
            current: false
          },
          {
            uid: 591,
            name: "Складське обладнання (вартість меньше 20000грн.без пдв,112/832)",
            current: false
          },
          {
            uid: 287,
            name: "Автомобілі орендовані (105/831)",
            current: false
          }
        ]
      }
    },
    {
      name: "-",
      current: false,
      category: {
        data: [
          {
            uid: 0,
            name: "-",
            current: false
          },
          {
            uid: 1717,
            name: "Klockner",
            current: false
          }
        ]
      }
    },
    {
      name: "МБП",
      current: false,
      category: {
        data: [
          {
            uid: 235,
            name: "Спецодяг (Ресурс,22)",
            current: false
          },
          {
            uid: 564,
            name: "Запчастини (Ресурс, 207- 806)",
            current: false
          },
          {
            uid: 566,
            name: "Канцтовари (Ресурс,201- 801)",
            current: false
          },
          {
            uid: 567,
            name: "інше",
            current: false
          },
          {
            uid: 568,
            name: "Будівельні матеріали (Ресурс,205 - 805)",
            current: false
          },
          {
            uid: 234,
            name: "Інше (Ресурс,22)",
            current: false
          }
        ]
      }
    },
    {
      name: "Матеріали",
      current: false,
      category: {
        data: [
          {
            uid: 257,
            name: "Сертифікація EURO",
            current: false
          },
          {
            uid: 112,
            name: "Сертифікація",
            current: false
          },
          {
            uid: 563,
            name: "Спецодяг (Ресурс,22)",
            current: false
          },
          {
            uid: 565,
            name: "Інше (Ресурс,22)",
            current: false
          },
          {
            uid: 310,
            name: "Для обмена с новой 1С",
            current: false
          },
          {
            uid: 350,
            name: "Будматеріали Гідрозахист (Товар,205- 805)",
            current: false
          },
          {
            uid: 400,
            name: "Тара (товар, 284- 801)",
            current: false
          },
          {
            uid: 460,
            name: "Канцтовари РФ",
            current: false
          },
          {
            uid: 221,
            name: "Adiabata_Материалы",
            current: false
          },
          {
            uid: 236,
            name: "Запчастини (Ресурс, 207- 806)",
            current: false
          },
          {
            uid: 237,
            name: "інше",
            current: false
          },
          {
            uid: 238,
            name: "Канцтовари (Ресурс,201- 801)",
            current: false
          },
          {
            uid: 239,
            name: "Комплектуючі до компьютера (Ресурс, 207- 806 )",
            current: false
          },
          {
            uid: 240,
            name: "Паливо (ресурс, 203- 803)",
            current: false
          },
          {
            uid: 281,
            name: "Будівельні матеріали (Ресурс,205 - 805)",
            current: false
          },
          {
            uid: 1569,
            name: "Сертифікація НЕ для членів корпорації",
            current: false
          },
          {
            uid: 1634,
            name: "Материалы для изготовления ОС (товар, 207- 806)",
            current: false
          }
        ]
      }
    },
    {
      name: "Подставки под елки",
      current: false,
      category: {
        data: []
      }
    },
    {
      name: "Модульная черепица",
      current: false,
      category: {
        data: [
          {
            uid: 1623,
            name: "Dachpol",
            current: false
          }
        ]
      }
    },
    {
      name: "Пленки для С/Х",
      current: false,
      category: {
        data: [
          {
            uid: 1566,
            name: "Пленки POLITIV",
            current: false
          },
          {
            uid: 1638,
            name: "Плёнка Греция",
            current: false
          },
          {
            uid: 1664,
            name: "Плёнка Испания",
            current: false
          },
          {
            uid: 1738,
            name: "Плёнка тепличная Sotrafa",
            current: false
          },
          {
            uid: 1739,
            name: "Плёнка мульчирующая Politiv",
            current: false
          }
        ]
      }
    },
    {
      name: "HoReCa",
      current: false,
      category: {
        data: []
      }
    },
    {
      name: "Детские стулья",
      current: false,
      category: {
        data: []
      }
    },
    {
      name: "Наноизол RU/Российские пленки",
      current: false,
      category: {
        data: []
      }
    },
    {
      name: "Тюковочные материалы",
      current: false,
      category: {
        data: [
          {
            uid: 1656,
            name: "Шпагат тюковочный",
            current: false
          },
          {
            uid: 3179,
            name: "Сетка тюковочная",
            current: false
          }
        ]
      }
    },
    {
      name: "Листы ЦСП",
      current: false,
      category: {
        data: [
          {
            uid: 1658,
            name: "Листы_ЦСП",
            current: false
          }
        ]
      }
    },
    {
      name: "Лестницы Мельника",
      current: false,
      category: {
        data: [
          {
            uid: 1665,
            name: "Лестницы Мельника OMAN",
            current: false
          }
        ]
      }
    },
    {
      name: "VOX RU",
      current: false,
      category: {
        data: [
          {
            uid: 1643,
            name: "Cоффиты RU",
            current: false
          },
          {
            uid: 1673,
            name: "Сайдинг RU",
            current: false
          },
          {
            uid: 1674,
            name: "Айдахо RU",
            current: false
          },
          {
            uid: 1706,
            name: "Сайдинг Solid Regular Brick/Stone RU",
            current: false
          },
          {
            uid: 1703,
            name: "Сайдинг Unicolor RU",
            current: false
          },
          {
            uid: 1707,
            name: "Сайдинг Nature RU",
            current: false
          },
          {
            uid: 1708,
            name: "Сайдинг Max-3 RU",
            current: false
          },
          {
            uid: 1751,
            name: "Kerrafront",
            current: false
          }
        ]
      }
    },
    {
      name: "Продукция WEBER",
      current: false,
      category: {
        data: [
          {
            uid: 1677,
            name: "WEBER",
            current: false
          }
        ]
      }
    },
    {
      name: "Двери для кладовок Oman",
      current: false,
      category: {
        data: [
          {
            uid: 1680,
            name: "DK EXTRA",
            current: false
          },
          {
            uid: 1682,
            name: "DK POLAR",
            current: false
          },
          {
            uid: 1679,
            name: "DK TERMO",
            current: false
          },
          {
            uid: 1681,
            name: "DK MAXI",
            current: false
          }
        ]
      }
    },
    {
      name: "Наша стрйока",
      current: false,
      category: {
        data: [
          {
            uid: 3159,
            name: "Стройка_Инструменты",
            current: false
          },
          {
            uid: 3160,
            name: "Сад_садовая техника",
            current: false
          },
          {
            uid: 3161,
            name: "Сад_оборудование",
            current: false
          },
          {
            uid: 3162,
            name: "Стройка_техника",
            current: false
          },
          {
            uid: 3163,
            name: "Дом_посуда",
            current: false
          }
        ]
      }
    },
    {
      name: "Материалы для садоводства",
      current: false,
      category: {
        data: [
          {
            uid: 1728,
            name: "Агрошпалера Extrusion",
            current: false
          }
        ]
      }
    },
    {
      name: "Компостеры",
      current: false,
      category: {
        data: []
      }
    },
    {
      name: "Системы водоотвода для плоских кровель",
      current: false,
      category: {
        data: [
          {
            uid: 1749,
            name: "Sita",
            current: false
          }
        ]
      }
    },
    {
      name: "Листы ЦПП",
      current: false,
      category: {
        data: [
          {
            uid: 3219,
            name: "Листы_ЦПП",
            current: false
          }
        ]
      }
    },
    {
      name: "Товары для сада",
      current: false,
      category: {
        data: [
          {
            uid: 1350,
            name: "Remaplan",
            current: false
          },
          {
            uid: 1709,
            name: "Multy Home",
            current: false
          },
          {
            uid: 1720,
            name: "Кормушки для птиц",
            current: false
          },
          {
            uid: 1735,
            name: "Agrodrip",
            current: false
          }
        ]
      }
    },
    {
      name: "Технобазальт",
      current: false,
      category: {
        data: [
          {
            uid: 2939,
            name: "Технобазальт",
            current: false
          }
        ]
      }
    },
    {
      name: "Компенсация от поставщиков",
      current: false,
      category: {
        data: [
          {
            uid: 1748,
            name: "Компенсация от поставщиков",
            current: false
          }
        ]
      }
    },
    {
      name: "Теплоизоляция PIR",
      current: false,
      category: {
        data: [
          {
            uid: 1755,
            name: "PIR Gor-Stal",
            current: false
          }
        ]
      }
    },
    {
      name: "Радиаторная арматура",
      current: false,
      category: {
        data: [
          {
            uid: 2879,
            name: "VarioTerm",
            current: false
          }
        ]
      }
    }
  ],
  meta: {
    include: [],
    custom: []
  }
})


 
    


// ui 
// const handle = item => {
//     items.for
// }
 
</script>

<style lang="scss" scoped>

</style>