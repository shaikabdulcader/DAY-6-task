//Write a “person” class to hold all the details

class Person{
    constructor(name, id, role){
        this.name = name;
        this.id = id;
        this.role = role;
    }
    getcandidate(){
        return `Good Moring Sir this is ${this.name} and this is my application id ${this.id} and i'm apply for ${this.role} role in your company`;
    }
}
var p1 = new Person("Shaik Abdul Cader", "Emp-2312", "Developer");
console.log(p1.getcandidate());
