  angular.module('hello', ['myFactory'])
            .controller("HomeController", ['userProvider', function(userProvider){
                var hello = this;
                hello.users = userProvider.getUsers();

            } ])