export default function (events, eventId) {
  const compareIndex = (event) => event.eventId === eventId
  return events.findIndex(compareIndex)
}
