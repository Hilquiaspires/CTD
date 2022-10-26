
//função n.1

function converpolegadasemcentimetros (polegadas) {
    const resultado = polegadas * 2.54;
    return resultado;

}
const totalpolecent = converpolegadasemcentimetros(10);
console.log(totalpolecent + " centímetros");

//função n.2

function url (nomeSite) {
    console.log("http://www." + nomeSite + ".com.br")
}

url("Amazon");

//função n.3

function imperativo (palavra) {
    console.log(palavra + "!");
}

imperativo("Olá");

//função n.4

function idadeCaes (idadeHumano) {
    console.log(idadeHumano * 7);
}

idadeCaes (10);

//função n.5

function horaTrabalho (salario) {
    console.log(salario / 160 + " Reais por hora");
}

horaTrabalho(1200);

//função n.6

function imc(altura, peso) {
    let alturaMetro = altura / 100;
    alturaMetro = alturaMetro * alturaMetro; //seria altura ao quadrado
    console.log(peso / alturaMetro);
}

imc(183, 62);

//função n.7

function conversor (palavraMinus) {
    console.log(palavraMinus.toUpperCase());
}

conversor("não estou gritando");

//função n.8

function whatIsIt (QualquerCoisa) {
    console.log ("O tipo é " + typeof QualquerCoisa);
}

whatIsIt (09);

//função n.9

function circunf (raioMetro) {
    let piM = Math.PI * 2;
    console.log (piM * raioMetro);
}

circunf(2); //recebe o valor do raio em metro

function componentes (estudante1, estudante2, estudante3) {
    console.log ("\nComponentes:\n" + estudante1 + " " + estudante2 + " " + estudante3 + "." + "\nÓtima aula, professor!");
}

componentes("Hilquias Pires", "Jose Paulo", "Tamires Sousa");