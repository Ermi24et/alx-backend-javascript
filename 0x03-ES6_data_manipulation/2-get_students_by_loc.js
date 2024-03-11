export default function getStudentsByLocation(stdList, stdCity) {
  const filteredStd = stdList.filter((value) => value.location === stdCity);
  return filteredStd;
}
