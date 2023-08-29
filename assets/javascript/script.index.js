class user{
    constructor(tutor, namePet, specie, photo, date){
        this.tutor = tutor;
        this.namePet = namePet;
        this.specie = specie;
        this.photo = photo;
        this.date = date;
        console.log("oi")
    }
    calculateAge(){
        let today = new Date();
        let age = today.getFullYear() - date.getFullYear();
        let month = today.getMonth() - date.getMonth

        if(month === 0 && today.getDate() < this.date.getDate() ){
            age--;
        }
        console.log(calculateAge())
        return age
    }
}

class AllUser{
    constructor(){
        this.users = [];
    }
    add(tutor){
    if (isAnyInputEmpty()){
        sendErrorMsg("Preencha todos os campos")
    }else{
        this.users.push(user);
        successMsg("Pet cadastrado com Sucesso")
        clearInputs();
    }
}
}

function createUser(){
    let tutor = document.getElementById("tutor").value;
    let namePet = document.getElementById("namePet").value;
    let specie = document.getElementById("specie").value;
    let photo = document.getElementById("photo").value;
    let.date = document.getElementById("date").value;

    let user = new User(tutor, namePet, specie, photo, date );
    AllUser.add(user);
}