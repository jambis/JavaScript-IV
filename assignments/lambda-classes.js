// CODE here for your Lambda Classes
class Person {
  constructor(attr) {
    this.name = attr.name;
    this.age = attr.age;
    this.location = attr.location;
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}

class Instructors extends Person {
  constructor(attr) {
    super(attr);
    this.specialty = attr.specialty;
    this.favLanguage = attr.favLanguage;
    this.catchPhrase = attr.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}.`;
  }

  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }

  randomGrade(student) {
    function gradeChange() {
      const min = 4;
      const max = 8;
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let deltaGrade = gradeChange();

    if (Math.round(Math.random())) {
      //if (1) we add a random number from 4 to 8 to the existing student grade
      if (student.grade + deltaGrade > 100) {
        return (student.grade = 100);
      } else {
        return (student.grade += deltaGrade);
      }
    } else {
      //if (0) we subtract a random number from 4 to 8 to the existing student grade
      if (student.grade - deltaGrade < 0) {
        return (student.grade = 0);
      } else {
        return (student.grade -= deltaGrade);
      }
    }
  }
}

class Students extends Person {
  constructor(attr) {
    super(attr);
    this.previousBackground = attr.previousBackground;
    this.className = attr.className;
    this.favSubjects = attr.favSubjects;
    this.grade = attr.grade;
  }

  listsSubjects() {
    this.favSubjects.forEach(subject => console.log(subject));
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }

  sprintChallenge(subject) {
    return `${this.name} has begun the challenge on ${subject}`;
  }

  graduate(instructor) {
    if (this.grade >= 70) {
      return `Congratulations you have graduated with a grade of ${this.grade}`;
    } else {
      while (this.grade < 70) {
        instructor.randomGrade(this);
        console.log(`Your grade is now: ${this.grade}`);
      }
      return `Congratulations you have graduated with a grade of ${this.grade}`;
    }
  }
}

class ProjectManagers extends Instructors {
  constructor(attr) {
    super(attr);
    this.gradClassName = attr.gradClassName;
    this.favInstructor = attr.favInstructor;
  }

  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`;
  }

  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

//============================ Creating Objects for each class ============================
//============> Instructors

const fred = new Instructors({
  name: "Fred",
  location: "Los Angeles",
  age: 33,
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: "Don't forget the homies"
});

const nick = new Instructors({
  name: "Nick",
  location: "Boston",
  age: 38,
  favLanguage: "C#",
  specialty: "UX",
  catchPhrase: `Nick catchphrase`
});

const sally = new Instructors({
  name: "Sally",
  location: "Houston",
  age: 29,
  favLanguage: "Python",
  specialty: "Data science",
  catchPhrase: `Discovery requires experimentation`
});

//============> Students

const william = new Students({
  name: "William",
  location: "Dallas",
  age: 24,
  previousBackground: "Computer Science",
  className: "Web 24",
  favSubjects: ["Data Structures", "Algorithms"],
  grade: 100
});

const ana = new Students({
  name: "Ana",
  location: "Seattle",
  age: 20,
  previousBackground: "Waitress",
  className: "DS8",
  favSubjects: ["Algebra", "Physics"],
  grade: 90
});

const john = new Students({
  name: "John",
  location: "Las Vegas",
  age: 32,
  previousBackground: "Musician",
  className: "UX5",
  favSubjects: ["Art", "Choir"],
  grade: 60
});

//============> Project Managers

const daniel = new ProjectManagers({
  name: "Daniel",
  location: "Austin",
  age: 28,
  favLanguage: "C#",
  specialty: "UX",
  catchPhrase: `Daniel catchphrase`,
  gradClassName: "UX1",
  favInstructor: "Nick"
});

const christina = new ProjectManagers({
  name: "Christina",
  location: "Atlanta",
  age: 35,
  favLanguage: "C++",
  specialty: "Full stack web",
  catchPhrase: `Chirstina catchphrase`,
  gradClassName: "Web10",
  favInstructor: "Fred"
});

const joseph = new ProjectManagers({
  name: "Joseph",
  location: "Portland",
  age: 33,
  favLanguage: "Python",
  specialty: "DS",
  catchPhrase: `joseph catchphrase`,
  gradClassName: "DS1",
  favInstructor: "Sally"
});

//Console Table of Instructors, Project Managers and Students
console.table([sally, fred, nick]);
console.table([daniel, christina, joseph]);
console.table([william, ana, john]);

//Console log of Instructors methods
console.log(sally.speak());
console.log(nick.demo("Math"));
console.log(fred.grade(william, "Biology"));

//Console log of Project Managers methods
console.log(daniel.debugsCode(william, "Python"));
console.log(christina.standUp("Web24_christina"));

//Console log of Students methods
william.listsSubjects();
console.log(ana.PRAssignment("Javascript-IV"));
console.log(john.sprintChallenge("React"));
console.log(john.graduate(sally));
