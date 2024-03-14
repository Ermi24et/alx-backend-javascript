interface Teacher {
    readonly firstName: string;
    lastName: string;
    readonly fullTimeEmployee: boolean;
    yearsOfExprience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

interface isStudent {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements isStudent {
    constructor(public firstName: string, public lastName: string) { }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

const st1 = new StudentClass("first", "last");
console.log(st1);
console.log(st1.workOnHomework());
console.log(st1.displayName());
