export default function updateStudentGradeByCity(stdList, stdCity, newGrades) {
  return stdList
    .filter((value) => value.location === stdCity)
    .map((value) => {
      const matchGrade = newGrades.find((grade) => grade.studentId === value.id);
      if (matchGrade) {
        return { ...value, grade: matchGrade.grade };
      }
      return { ...value, grade: 'N/A' };
    });
}
