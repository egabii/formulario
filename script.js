// IIFE = Funciones que son invocadas inmediatamente
(function(){
  // patron modulo - encapsula logica

  var formulario = document.getElementById('formulario');

  formulario.addEventListener('submit', enviar);

  function enviar(e) {
    if(e) {
      e.preventDefault();
    }

    const checkboxes = document.querySelectorAll(".tipo-problema");
    const inputs = document.querySelectorAll('input[type="text"]');
    const filledOutEmail =  document.querySelector('#email-address');
    const description = document.querySelector("#description");

    const someIsChecked = Array.prototype.some.call(checkboxes, function(elem){
     return elem.checked
    });

    var allInputsAreFilled = Array.prototype.every.call(inputs, function(elem){
      return elem.value
     })


    if (
      someIsChecked 
      && allInputsAreFilled
      && filledOutEmail.value
      && description.value
    ) {
      alert('Formulario Enviado Satisfactoriamente');
    } else {
      alert('No se pudo enviar el formulario, compruebe que todos los campos obligatorios esten rellenados');
    }
    
  };
})()