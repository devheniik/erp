export default function (color) { 
    switch (color) {
        case 'Зелёный':
        return 'bg-lightGreen'

        case 'Жёлтый':
        return 'bg-lightYellow'

        case 'Красный':
        return 'bg-lightRed'

        case 'Коричневый':
        return 'bg-warmGray-200'

        case 'Фиолетовый':
        return 'bg-lightPurple'

        case 'Оранжевый':
        return 'bg-lightOrange'

        case 'Розовый':
        return 'bg-lightPink'

        case 'Синий':
        return 'bg-lightBlue'

        case 'Чёрный':
        return 'bg-gray-300'


        default: 
        return 'bg-white'
             
    }
}