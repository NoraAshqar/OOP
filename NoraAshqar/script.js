function Student(name, age, gradeVal){
  this.name= name;
  this.age= age;
  let grade;
  if(gradeVal==="A" ||gradeVal==="F")
  {
    grade=gradeVal;
  }else{
    console.log("Invalid grade,please enter A or F");
  }
  this.setGrade= function(newGrade){
    if (newGrade === "A" || newGrade === "F") {
      grade = newGrade;
    } else {
      console.log("Invalid grade,please enter A or F");
    }
  };
  this.getGrade= function () {
    return grade;};
}
Student.prototype.introduce= function(){
    console.log(`Hi, my name is ${this.name}, I'm ${this.age} years old, and I'm in grade ${this.getGrade()}.`);
  };


const student= new Student("Nora",20,"A");
student.introduce(); 
student.setGrade("F");
console.log(student.getGrade());
