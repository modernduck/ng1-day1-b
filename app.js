  //inject myFactory module to hello module
  angular.module('hello', ['myFactory'])
            .controller("HomeController", ['userProvider', function(userProvider){
                //inject userProvider to HomeController

                var home = this;
                home.users = userProvider.getUsers();

                home.createUser = () => {
                    console.log('createUser')
                    userProvider.createUser("randName", Math.round(Math.random()*30), Math.round(Math.random()*25000), "http://placehold.it/100x100"  )
                }
            } ])
            .controller('FormController', [ function(){
                

            }])

            