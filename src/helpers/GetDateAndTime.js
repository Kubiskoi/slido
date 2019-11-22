import moment from 'moment'

export default function (ts) {
  const momentObj = moment.unix(ts)
  let formated = {}
  formated.date = momentObj.format('D-MMM YYYY')
  formated.time = momentObj.format('HH:mm')
  return formated
}
