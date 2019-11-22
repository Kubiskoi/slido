import moment from 'moment'

export default function (date, time) {
  const momentObject = moment(date + ' ' + time)
  return momentObject.unix()
}
