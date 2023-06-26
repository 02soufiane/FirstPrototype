function Student(){
  return "Hi Student!";
}

Student.prototype = {
  Name:"Student",
  Who:function(){
    return "Hello my Name is "+ this.Name;
  }
};

const s1 = new Student();
s1.Name="soufiane";
console.log(s1.Who());
