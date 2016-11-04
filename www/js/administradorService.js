angular.module('starter.administradorService', [])

.factory('Administradores', function(Restangular, ApiEndpoint) {
  // Might use a resource here that returns a JSON array
  var administradores = Restangular.all('getAll').getList().$object;

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
