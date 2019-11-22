import moment from 'moment'

export default function () {
  const m = moment()
  return m.unix()
}
