/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
var student1 = {
    firstName: "Ermias",
    lastName: "Teklehaymanot",
    age: 24,
    location: "Addis Abeba"
};
var student2 = {
    firstName: "John",
    lastName: "Daniel",
    age: 30,
    location: "Dubai"
};
// Array containing the students
var studentsList = [student1, student2];
function renderStudentsTable() {
    var table = document.createElement("table");
    var headerRow = table.insertRow();
    var header1 = document.createElement("th");
    var header2 = document.createElement("th");
    header1.textContent = "First Name";
    header2.textContent = "Location";
    headerRow.appendChild(header1);
    headerRow.appendChild(header2);
    studentsList.forEach(function (student) {
        var row = table.insertRow();
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        cell1.textContent = student.firstName;
        cell2.textContent = student.location;
    });
    document.body.appendChild(table);
}
renderStudentsTable();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBT0EsSUFBTSxRQUFRLEdBQVk7SUFDdEIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsUUFBUSxFQUFFLGVBQWU7SUFDekIsR0FBRyxFQUFFLEVBQUU7SUFDUCxRQUFRLEVBQUUsYUFBYTtDQUMxQixDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQVk7SUFDdEIsU0FBUyxFQUFFLE1BQU07SUFDakIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsR0FBRyxFQUFFLEVBQUU7SUFDUCxRQUFRLEVBQUUsT0FBTztDQUNwQixDQUFDO0FBRUYsZ0NBQWdDO0FBQ2hDLElBQU0sWUFBWSxHQUFjLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBRXJELFNBQVMsbUJBQW1CO0lBQ3hCLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUMsSUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3BDLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxPQUFPLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQztJQUNuQyxPQUFPLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztJQUNqQyxTQUFTLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLFNBQVMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFL0IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxpQkFBTztRQUN4QixJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDOUIsSUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQy9CLElBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMvQixLQUFLLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFDdEMsS0FBSyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO0lBQ3pDLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDckMsQ0FBQztBQUVELG1CQUFtQixFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFN0dWRlbnQge1xuICAgIGZpcnN0TmFtZTogc3RyaW5nO1xuICAgIGxhc3ROYW1lOiBzdHJpbmc7XG4gICAgYWdlOiBudW1iZXI7XG4gICAgbG9jYXRpb246IHN0cmluZztcbn1cblxuY29uc3Qgc3R1ZGVudDE6IFN0dWRlbnQgPSB7XG4gICAgZmlyc3ROYW1lOiBcIkVybWlhc1wiLFxuICAgIGxhc3ROYW1lOiBcIlRla2xlaGF5bWFub3RcIixcbiAgICBhZ2U6IDI0LFxuICAgIGxvY2F0aW9uOiBcIkFkZGlzIEFiZWJhXCJcbn07XG5cbmNvbnN0IHN0dWRlbnQyOiBTdHVkZW50ID0ge1xuICAgIGZpcnN0TmFtZTogXCJKb2huXCIsXG4gICAgbGFzdE5hbWU6IFwiRGFuaWVsXCIsXG4gICAgYWdlOiAzMCxcbiAgICBsb2NhdGlvbjogXCJEdWJhaVwiXG59O1xuXG4vLyBBcnJheSBjb250YWluaW5nIHRoZSBzdHVkZW50c1xuY29uc3Qgc3R1ZGVudHNMaXN0OiBTdHVkZW50W10gPSBbc3R1ZGVudDEsIHN0dWRlbnQyXTtcblxuZnVuY3Rpb24gcmVuZGVyU3R1ZGVudHNUYWJsZSgpIHtcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgICBjb25zdCBoZWFkZXJSb3cgPSB0YWJsZS5pbnNlcnRSb3coKTtcbiAgICBjb25zdCBoZWFkZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICAgIGNvbnN0IGhlYWRlcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG4gICAgaGVhZGVyMS50ZXh0Q29udGVudCA9IFwiRmlyc3QgTmFtZVwiO1xuICAgIGhlYWRlcjIudGV4dENvbnRlbnQgPSBcIkxvY2F0aW9uXCI7XG4gICAgaGVhZGVyUm93LmFwcGVuZENoaWxkKGhlYWRlcjEpO1xuICAgIGhlYWRlclJvdy5hcHBlbmRDaGlsZChoZWFkZXIyKTtcblxuICAgIHN0dWRlbnRzTGlzdC5mb3JFYWNoKHN0dWRlbnQgPT4ge1xuICAgICAgICBjb25zdCByb3cgPSB0YWJsZS5pbnNlcnRSb3coKTtcbiAgICAgICAgY29uc3QgY2VsbDEgPSByb3cuaW5zZXJ0Q2VsbCgpO1xuICAgICAgICBjb25zdCBjZWxsMiA9IHJvdy5pbnNlcnRDZWxsKCk7XG4gICAgICAgIGNlbGwxLnRleHRDb250ZW50ID0gc3R1ZGVudC5maXJzdE5hbWU7XG4gICAgICAgIGNlbGwyLnRleHRDb250ZW50ID0gc3R1ZGVudC5sb2NhdGlvbjtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGFibGUpO1xufVxuXG5yZW5kZXJTdHVkZW50c1RhYmxlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9