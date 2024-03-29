interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot Work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}

function createEmployee(salary: number | string) {
    if (typeof salary === "number" && salary < 500) return new Teacher();
    else return new Director();
}

function isDirector(employee: any) {
    return typeof employee["workDirectorTasks"] === "function";
}

function executeWork(employee: any) {
    if (isDirector(employee)) console.log(employee.workDirectorTasks());
    else console.log(employee.workTeacherTasks());
}

let Subjects: "Math" | "History";

function teachClass(todayClass: typeof Subjects) {
    return `Teaching $(todayClass)`;
}