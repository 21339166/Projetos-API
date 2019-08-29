angular.module('myApp').controller('CpfController', CpfController);

CpfController.$inject = ["$scope"]

const mongoose = require("mongoose");
const Cpf = mongoose.model("Cpf");

module.expors = {
    async html(req, res){
        const Cpf = await Cpf.find();

        return res.json(Cpf);
    },
};

module.exports = router;

function CpfController(){
    var vm = this;
    this.myTitle = 'GeradorCpf';
}

