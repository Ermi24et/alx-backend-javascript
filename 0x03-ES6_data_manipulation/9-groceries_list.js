export default function groceriesList() {
  const arr = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];
  const res = new Map();
  for (const element of arr) res.set(element[0], element[1]);
  return res;
}
