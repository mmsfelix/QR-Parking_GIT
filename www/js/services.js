angular.module('starter.services', [])

.factory('Administradores', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var administradores = [{
    id: 0,
    name: 'Ben Sparrow',
    situacao: 'Cadastro 09/10/2014',
  }, {
    id: 1,
    name: 'Max Lynx',
    situacao: 'Cadastro 10/10/2014',
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    situacao: 'Cadastro 06/10/2014',
  }, {
    id: 3,
    name: 'Perry Governor',
    situacao: 'Cadastro 09/10/2014',
  }, {
    id: 4,
    name: 'Mike Harrington',
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
