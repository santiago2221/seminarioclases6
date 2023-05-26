function operacion(){
    let num1,num2;
    num1 = parseInt (document.getElementById("n1").value);
    num2 = parseInt (document.getElementById ("n2").value);
    if(num2==0){ alert("para realizar la division debe ser mayor a cero")}
    if (num1 ==0 ){ alert("para realizar la division debe ser mayor a cero")
    }
    sum = num1 + num2;
    res = num1 - num2;
    mul = num1 * num2;
    div = num1 / num2;
    alert("La suma es: " + sum + "\n" + 
    "La resta es: " + res + "\n" +
    "La multiplicacion es: " + mul + "\n" +
    "La division es: " + div + "\n");
   
}

