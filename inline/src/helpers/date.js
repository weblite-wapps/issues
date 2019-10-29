// modules
import * as R from 'ramda'
import moment from 'jalali-moment'

const persianNums = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']

const weekDayMap = {
  Sat: 'شنبه',
  Sun: 'یکشنبه',
  Mon: 'دوشنبه',
  Tue: 'سه شنبه',
  Wed: 'چهارشنبه',
  Thu: 'پنج شنبه',
  Fri: 'جمعه',
}

const months = [
  'فروردین',
  'اردیبهشت',
  'خرداد',
  'تیر',
  'مرداد',
  'شهریور',
  'مهر',
  'آبان',
  'آذر',
  'دی',
  'بهمن',
  'اسفند',
]

export const toPersianNumber = num =>
  R.reduce(R.concat, '', R.map(i => persianNums[i], String(num)))

export const convertToPersianFormat = date => {
  const dateArray = R.map(
    Number,
    R.split('/')(
      moment(date)
        .locale('fa')
        .format('YYYY/MM/DD'),
    ),
  )
  const weekDay = R.split(' ', date.toDateString())[0]
  const hour = new Date(date).getHours()
  const minutes = new Date(date).getMinutes()

  return `${weekDayMap[weekDay]} ${toPersianNumber(dateArray[2])} ${
    months[dateArray[1] - 1]
  } - ${toPersianNumber(hour)}:${toPersianNumber(minutes)}`
}
