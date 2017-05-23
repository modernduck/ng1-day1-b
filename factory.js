angular.module('myFactory', []).factory("userProvider",  () => {
    //need to return service object
    var users = [
                    {"id":1, "picture":"http://placehold.it/100x100", "name":"Sompop", "age":29, "salary":25000 },
                    {"id":5,"picture":"http://placehold.it/100x100", "name":"Zulu", "age":18, "salary":90000 },
                    {"id":2,"picture":"http://placehold.it/100x100", "name":"Bazoo", "age":67, "salary":10800 },
                    {"id":3,"picture":"http://placehold.it/100x100", "name":"Mocca", "age":39, "salary":5000 },
                    {"id":4,"picture":"http://placehold.it/100x100", "name":"Angular", "age":45, "salary":999888 }
    ];
    var userProvider = {
    
        getUserByID: (id)=> {

        },
        deletUserByID: (id) => {

        },
        updateUserByID : (id, name, age, salary, picture) => {

        },
        createUser: (name, age, salary, picture) => {
            //write the logic;
            //generate new id for user( users.length + som??)
            //

            var now = new Date();
            console.log('create user from factory' )
            var obj = {
                id:now.getTime(),
                name:name,
                age:age,
                salary:salary,
                picture:picture
            }
            users.push(obj);
        },
        getUsers : () => {
            return  users;
        }
    }
    return userProvider;
}  )