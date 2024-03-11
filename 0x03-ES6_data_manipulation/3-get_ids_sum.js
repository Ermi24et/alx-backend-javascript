import getListStudentIds from './1-get_list_student_ids';

export default function getStudentIdSum(stdList) {
  const stdIds = getListStudentIds(stdList);
  const sumIds = stdIds.reduce((prev, curr) => prev + curr);
  return sumIds;
}
