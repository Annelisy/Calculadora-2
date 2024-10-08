function cisco(){
    const K = 8.9875 * Math.pow(10, 9);
    const q1 = parseFloat(document.getElementById('massa1').value);
    const q2 = parseFloat(document.getElementById('massa2').value);
    const D = parseFloat(document.getElementById('distancia').value);

    const result = K * Math.abs(Q1 * Q2) / Math.pow(D, 2);

    document.getElementById('result').innerText = result.toExponential(2);
    
}

function cisco1(){
    
    var q = parseFloat(document.getElementById('q').value);
    var v = parseFloat(document.getElementById('v').value);
    var b = parseFloat(document.getElementById('b').value);
    var sen = parseFloat(document.getElementById('sen').value);

   var resultado2 = q*v*b*sen
   document.getElementById('resultado2').innerText = resultado2;
    
}
    