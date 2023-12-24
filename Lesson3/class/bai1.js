class User {
    constructor(name, password, uid){
        (this.name = name), (this.password = password), (this.uid = uid);
    }
}

const Lam = new User("Lam",123,21000139)
console.log(Lam);

class Game extends User{
    constructor(name,password,uid, gamename){
        super(name, password, uid),(this.gamename = gamename);
    }
}

const ten = new Game("Lam",123,21000139,"GI") 

console.log(ten);

