export function formatPrice(value, unit = true) {
  let result,
    price = Math.round(value * 100) / 100;
  if (unit == false) {
    return price;
  }
  if (price < 1.0) {
    result = (parseFloat(price) * 100).toString();
    result = result + "c";
  } else {
    result = parseFloat(price).toString();
    result = result + "USD";
  }
  return result;
}
