import moment from 'moment'

export function calcTimestamp (date, time) {
  var momentObject = moment(date + ' ' + time)
  return momentObject.unix()
}
