class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    greet() {
      return "Hello, my name is " + this.name + " and I am " + this.age + " years old.";
    }
  }
  let person1 = new Person("yash", 20);
  document.getElementById("greeting").innerHTML = person1.greet();
