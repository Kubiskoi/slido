import moment from 'moment'

export default function (ts, type) {
  const momentObj = moment.unix(ts)
  let formated = {}
  if (type === 'show') {
    formated.date = momentObj.format('D-MMM YYYY')
  }
  if (type === 'edit') {
    formated.date = momentObj.format('YYYY-M-D')
  }
  formated.time = momentObj.format('HH:mm')
  return formated
}
