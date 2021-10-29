<template>
    <div>
  <div class=" rounded-lg col-span-1 lg:col-span-1 md:col-span-1 ">
                <h1 class="label-big mx-5">
                    Дополнительные данные 
                </h1>
                <div class="space-y-4 mx-5">
                     <div class="tl">
                            <label class="label-primary"> Дата:</label>
                            <div class="flex justify-between items-center">
                                <flat-pickr class="input-primary" v-model="data.CURDATE"></flat-pickr>
                                <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                            </div>
                        </div>
                        <div class="tl">
                            <div>
                                <modal-select :data="{
                                        label:'Алгоритм',
                                        api: 'uniprops/props/color',
                                        meanKey: 'a_s1'
                                            }" v-model="data.FIFONAZ"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <div>
                                <modal-select :data="{
                                        label:'Склад',
                                        api: 'uniprops/props/color',
                                        meanKey: 'a_s1'
                                            }" v-model="data.SKLADNAZ"></modal-select>
                            </div>
                        </div>
                        
                        <div class="tl">
                            <label class="label-primary"> Мин. ост. на карте:</label>
                            <input type="text" class="input-primary" v-model="data.MINKOL" />
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Макс. ост. на карте:</label>
                            <input type="text" class="input-primary" v-model="data.MAXKOL" />
                        </div>
                           <div class="tl">
                            <div>
                                <modal-select :data="{
                                        label:'Счёт',
                                        api: 'uniprops/props/color',
                                        meanKey: 'a_s1'
                                            }" v-model="data.SCHETNAZ"></modal-select>
                            </div>
                        </div>
                         <div class="tl">
                            <label class="label-primary">Партия:</label>
                            <input type="text" class="input-primary" v-model="data.PARTIANAZ" />
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Карта учёта:</label>
                            <input type="text" class="input-primary" v-model="data.KARTANAZ" />
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Количество:</label>
                            <input type="text" class="input-primary" v-model="data.NEWKOL" />
                        </div>
                       
                        <div class="tl">
                            <label class="label-primary">Фасовка:</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.FASMODE">
                                    <option :value="false">Любая</option>
                                    <option :value="true">Сначала указанная</option>
                                    <option :value="true">Только указанная</option>
                                </select>
                            </div>
                        </div>
                       
                        <div class="tl">
                            <label class="label-primary">Склад/Прогноз:</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.FROMPROGMOZ">
                                    <option :value="false">Склад</option>
                                    <option :value="true">Прогноз</option>
                                </select>
                            </div>
                        </div>
                   

                </div>
                <div class="mt-4 flex justify-center">
                    <div class="button-hover-primary">Резервировать</div>
                </div>
            </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
const data = ref({
    
	"CURDATE": "29.10.2021",
	"FIFONAZ": "%CF%EE+%EC%E8%ED.+%E4%E0%F2%E5",
	"FIFO": "964",
	"SKLADNAZ": "%CC%B3%E7%EE%EB+%D0%D6+%C3%EE%F0%EE%E4%EE%F6%FC%EA%E0+%2F%CC%B3%E7%EE%EB+",
	"SKLAD": "747",
	"MINKOL": "0",
	"MAXKOL": "0",
	"SCHETNAZ": "%C2%F1%E5+%F1%F7%E5%F2%E0",
	"SCHET": "0",
	"PARTIANAZ": "%C2%F1%E5+%EF%E0%F0%F2%E8%E8",
	"KARTANAZ": "%C2%F1%E5+%EA%E0%F0%F2%FB",
	"NEWKOL": "1",
	"FASMODE": "0",
	"FROMPROGMOZ": "0",
	"FASOVKA": "1",
	"SRCTIP": "ZAKAZSPEC",
	"NAZ": "%D0%E5%E7%E5%F0%E2%E8%F0%EE%E2%E0%ED%E8%E5+%F2%EE%E2%E0%F0%E0+503773+13578+%CD%E0%E7%E2%E0%ED%E8%E5+%F2%EE%E2%E0%F0%E0",
	"EDITID": "11201244",
	"POSTER": "DoReserv",
	"ZAKAZ": "2125780",
	"PROJECT": "0",
	"show_prog": "1",
	"TLISTMULTISELECT": "",
	"KARTA": "0",
	"PARTIA": "0",
	"OPERID": "0",
	"TOVAR": "13578",
	"fkarta": "",
	"FASKOL": "1",
	"FASEDIZM": "184",
	"FASEDIZMNAZ": "%F8%F2+",
	"BEDIZMERNAZ": "%F8%F2+",
	"SUBMIT_NAME": "%D0%E5%E7%E5%F0%E2%E8%F0%EE%E2%E0%F2%FC",
	"SKLAD_FLTR": "+AND+(PROPCNT+IN+(747,749,751,752,753,756,100361,101571,102253,102263,102264,102266,102279,102280,102641,102642,102657,102658,102689,102690,103054,103312,103686,103691,103727,103732,103880,105015,106487,106538,106659,111452,112355,112661,113663,117490,118354,119072,121199,122150,122487,124259,125888,129575,129576,131082,131984,131985,132240,146236,148840,148841,261394,262021,262127,270209,270885,270886,270887,376837,392907,395793,412913,507822,514675,538455,539425,540479,625424,626472,635713,744778,774773,775481,781742,1103740,1150109,1162310,1191343))+",
	"KSKLAD_FLTR": "+AND+(K.SKLAD+IN+(747,749,751,752,753,756,100361,101571,102253,102263,102264,102266,102279,102280,102641,102642,102657,102658,102689,102690,103054,103312,103686,103691,103727,103732,103880,105015,106487,106538,106659,111452,112355,112661,113663,117490,118354,119072,121199,122150,122487,124259,125888,129575,129576,131082,131984,131985,132240,146236,148840,148841,261394,262021,262127,270209,270885,270886,270887,376837,392907,395793,412913,507822,514675,538455,539425,540479,625424,626472,635713,744778,774773,775481,781742,1103740,1150109,1162310,1191343))+",
	"ONLY_OPLACH": "",
	"CHANGEKOL": "0"

})
</script>

<style lang="scss" scoped>

</style>