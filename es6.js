var funcs = []
// 需要修改的函数
for (let i = 0; i < 10; i++) {
funcs.push(function() { console.log(i) })
}

funcs.forEach(function(func) {
func()
})


class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    speak() {
      console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  class Student extends Person {
    constructor(name, age, courses) {
      super(name, age);
      this.courses = courses;
    }
  
    speak() {
      super.speak();
      console.log(`I am a student and I am taking ${this.courses.length} courses.`);
    }
  }

  function sleep(duration) {
    return new Promise(resolve => {
      setTimeout(resolve, duration);
    });
  }
  
  function red() {
    console.log('red');
  }
  
  function green() {
    console.log('green');
  }
  
  function yellow() {
    console.log('yellow');
  }
  
  function trafficLight() {
    return sleep(3000).then(() => red())
                     .then(() => sleep(1000))
                     .then(() => green())
                     .then(() => sleep(2000))
                     .then(() => yellow())
                     .then(() => trafficLight());
  }
  
  trafficLight();


  let obj = {
    name:"Zx",
    age:19,
    gender:"male",
    level:"cai"
    }
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(key, obj[key]);
    }
  }  