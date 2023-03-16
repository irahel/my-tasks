export function timeToSeconds(time: string): number {
  const [hours = "0", minutes = "0", seconds = "0"] = time.split(':');
  return _hoursToSeconds(hours)
        + _minutesToSeconds(minutes)
        + Number(seconds);
}

function _hoursToSeconds(hours: string): number {
  return Number(hours) * 3600;
}

function _minutesToSeconds(minutes: string): number {
  return Number(minutes) * 60;
}