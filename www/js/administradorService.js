angular.module('starter.administradorService', [])

.factory('Administradores', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var administradores = [{
    id: 0,
    name: 'Ben Sparrow',
    cpf: '000.000.001-91',
    email: 'email@email.com',
    senha: '1234',
    situacao: 'Cadastro 09/10/2014',
  }, {
    id: 1,
    name: 'Max Lynx',
    cpf: '000.000.001-91',
    email: 'email@email.com',
    senha: '1234',
    situacao: 'Cadastro 10/10/2014',
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    cpf: '000.000.001-91',
    email: 'email@email.com',
    senha: '1234',
    situacao: 'Cadastro 06/10/2014',
  }, {
    id: 3,
    name: 'Perry Governor',
    cpf: '000.000.001-91',
    email: 'email@email.com',
    senha: '1234',
    situacao: 'Cadastro 09/10/2014',
  }, {
    id: 4,
    name: 'Mike Harrington',
    cpf: '000.000.001-91',
    email: 'email@email.com',
    senha: '1234',
    situacao: 'Cadastro 09/10/2014',
  }];

  return {
    all: function() {
      return administradores;
    },
    remove: function(administrador) {
      administradores.splice(administradores.indexOf(administrador), 1);
    },
    get: function(administradorId) {
      for (var i = 0; i < administradores.length; i++) {
        if (administradores[i].id === parseInt(administradorId)) {
          return administradores[i];
        }
      }
      return null;
    }
  };
});
