function calcularIMC(){
    var peso = [];
    var altura = [];
    var IMC = [];
    
    for(i = 0; i < 10; i++) {
        peso[i] = parseFloat(prompt("Qual o seu peso?"));

        altura[i] = parseFloat(prompt("Qual a sua altura?"));

        IMC[i] = peso[i] / altura[i]**2;

        if(IMC[i] < 18.5){
            alert("Abaixo do peso normal");
        }
        
        else if(IMC[i] > 18.5 && IMC[i] < 24.9){
            alert("Peso normal");
        } 
        
        else if(IMC[i] > 24.9 && IMC[i] < 29.9){
            alert("Excesso de peso");
        } 
        
        else if(IMC[i] > 29.9 && IMC[i] < 34.9){
            alert("Obesidade classe I");
        } 
        
        else if(IMC[i] > 34.9 && IMC[i] < 39.9){
            alert("Obesidade classe II");
        } 
        
        else {
            alert("Obesidade classe III");
        }
    }
}
