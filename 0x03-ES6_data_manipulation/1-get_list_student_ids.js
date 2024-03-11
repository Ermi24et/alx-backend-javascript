export default function getListStudentIds(stdList) {
  if (!(stdList.constructor === Array)) {
    return [];
  }
  const newList = stdList.map((value) => value.id);
  return newList;
}
