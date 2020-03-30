function* createNewId() {
    let i = 0;
    while (true) { //generate infinite ids
        yield i;
        i++;
    }
}

let itr = createNewId() //create iterator

function createNewAccount(email) {
    let res = itr.next(); //get next yield value
    let id = res.value; //store yield value in id
    let user = {
        email,
        id
    }
    console.log("new user created", user)
}

createNewAccount("aj@iw.org") 

createNewAccount("ma@nn.com")

//createNewAccount("pjw@sn.com")

