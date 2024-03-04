export default function createReportObject(employeesList) {
  const objct = {
    allEmployees: employeesList,
    getNumberOfDepartments() { return Object.keys(employeesList).length; },
  };
  return objct;
}
