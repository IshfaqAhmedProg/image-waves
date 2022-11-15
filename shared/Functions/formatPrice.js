export function formatPrice(value) {
  let result,
    price = value;
  price = Math.round(price * 100) / 100;
  if (price < 1.0) {
    result = (parseFloat(price) * 100).toString();
    result = result + "¢";
  } else {
    result = parseFloat(price).toString();
    result = result + "$";
  }
  return result;
}
