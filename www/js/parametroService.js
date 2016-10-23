angular.module('starter.parametroService', [])

.factory('Parametro', function() {

  var parametro = [{
    id:0,
    valorMinuto : '0.10',
    tolerancia : 15,
    justificativa : '',
  }];

  return {
    get: function(parametroId) {
      for (var i = 0; i < parametro.length; i++) {
        if (parametro[i].id === parseInt(parametroId)) {
          return parametro[i];
        }
      }
      return null;
    }
  };
});
