class User {
  constructor(name){
    this.name = name;
  }
}

class UserBuilder {
  constructor(name){
    this.user = new User(name)
  }

  setAge(age) {
    this.user.age = age;
    return this;
  }

  setAddress(address){
    this.user.address = address;
    return this;
  }

  setPhone(phone){
    this.user.phone = phone;
    return this;
  }

  build(){
    return this.user;
  }
}

let user = new UserBuilder('Bob').setAge(28).setAddress('ABC').setPhone('1234').build();
console.log(user);