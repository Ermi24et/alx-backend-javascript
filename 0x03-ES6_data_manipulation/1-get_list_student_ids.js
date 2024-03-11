export default function getListStudentIds(stdList) {
  if (!(stdList instanceof Array)) {
    return [];
  }
  const newList = stdList.map((value) => value.id);
  return newList;
}
