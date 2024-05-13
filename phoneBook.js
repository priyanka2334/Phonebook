function user(name,phone,age,Email){
    return{
        firstname:name,
        age:age,
        phone:phone,
        Email:Email,
    }
}
let user1=user("preeti",1234567890,19,"preeti@gmail.com");
let user2=user("paras",2351678459,20,"paras@gmail.com");
let user3=user("priyanka",9876549823,20,"priyanka@gmail.com");
let user4=user("Amit",9876578965,23,"Amit@gmail.com");

const arr=[];
arr.push({...user1});
arr.push({...user2});
arr.push({...user3});
arr.push({...user4});

function person(person){
    let a=arr.filter(e=>{
       if(e.firstname==person){
            return e;
        }
    });
    return a;
}
console.log(person('priyanka'));

function update(phone,newphone){
    let b=arr.filter(e=>{
        if(e.phone===newphone){
            return e;
        }
    })
    b.phone=newphone;
    return b;
}
console.log(update(1234567890,123433455));
console.log(arr);


function deleteperson(person) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].firstname === person) {
            arr.splice(i, 1);
            break;
        }
    }
}

console.log(deleteperson('priyanka')); 
console.log(arr);