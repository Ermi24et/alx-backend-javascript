export default function appendToEachArrayValue(array, appendString) {
  const arrayUpd = [];

  for (const value of array) {
    arrayUpd.push(appendString + value);
  }

  return arrayUpd;
}
