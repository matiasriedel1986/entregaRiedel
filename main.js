let totalEmpleados

let presentes = 0

let ausentes = 0

let ingresados = 1

let i

 

totalEmpleados = Number(prompt("Por favor ingresar la cantidad total de empleados de la empresa"))

 

    for(let ingresados = 1;ingresados <= totalEmpleados;ingresados++){

      i = prompt(`El trabajador ${ingresados} esta (P) presente o (A) ausente?`)

      if(i == 'P'){

       presentes++

      }

      else if (i == 'A'){

        ausentes++

      }}

      let presentismo = (presentes * 100)/totalEmpleados

    alert(`El número total de empleados es: ${totalEmpleados}`) 

    alert (`Hay ${presentes} trabajadores presentes`)

    alert (`Hay ${ausentes} trabajadores ausentes`)

    alert (`El porcentaje de presentismo es ${presentismo} %`)

function saludo() {

    alert("Gracias por usar el sistema de gestión de presentismo")   

};

saludo ();