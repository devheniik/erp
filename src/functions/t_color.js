export default function (color) { 
    switch (color) {
        case 'Зелёный':
        return 'bg-green'

        case 'Жёлтый':
        return 'bg-yellow'

        case 'Красный':
        return 'bg-red'

        case 'Коричневый':
        return 'bg-warmGray-300'

        case 'Фиолетовый':
        return 'bg-purple'

        case 'Оранжевый':
        return 'bg-orange'

        case 'Розовый':
        return 'bg-pink'

        case 'Синий':
        return 'bg-blue'

        case 'Чёрный':
        return 'bg-gray-600'


        default: 
        return 'bg-white'
             
    }
}