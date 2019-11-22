import moment from 'moment'

export default function (date, time) {
  var momentObject = moment(date + ' ' + time)
  return momentObject.unix()
}
