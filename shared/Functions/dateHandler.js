export function dateHandler(when) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var date = new Date();
  if (when == "delivery") {
    date.setDate(date.getDate() + 5);
  }
  var day = days[date.getDay()];
  var dd = String(date.getDate());
  var mm = months[date.getMonth()];
  var yyyy = date.getFullYear();
  date = day + ", " + mm + " " + dd + ", " + yyyy;
  return date;
}
