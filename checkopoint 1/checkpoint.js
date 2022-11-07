function microondas(comida, tempo = 0) {
    const tempoPipoca = 10;
    const tempoaMacarrao = 8;
    const tempoCarne = 15;
    const tempoFeijao = 12;
    const tempoBrigadeiro = 8;

    if (comida === ("pipoca") && (tempo === tempoPipoca || tempo < tempoPipoca * 2)) {
        return console.log("Prato pronto, bom apetite ;D");
    } else if (comida === "Pipoca" || "pipoca" && tempo >= tempoPipoca * 3) {
        return console.log("kabumm!!! ;o;");
    } else if (comida === "Pipoca" || "pipoca" && tempo < tempoPipoca) {
        return console.log("Tempo, insuficiente :(");
    } else if (comida === "Pipoca" || "pipoca" && tempo > tempoPipoca * 2) {
        return console.log("Comida queimou ;-;");
    }

    if (comida === ("macarrão") && (tempo === tempoaMacarrao || tempo < tempoaMacarrao * 2)) {
        return console.log("Prato pronto, bom apetite ;D");
    } else if (comida === "Macarrão" || "macarrão" && tempo >= tempoaMacarrao * 3) {
        return console.log("kabumm!!! ;o;");
    } else if (comida === "Macarrão" || "macarrão" && tempo < tempoaMacarrao) {
        return console.log("Tempo, insuficiente :(");
    } else if (comida === "Macarrão" || "macarrão" && tempo > tempoaMacarrao * 2) {
        return console.log("Comida queimou ;-;");
    }

    if (comida === ("carne") && (tempo === tempoCarne || tempo < tempoCarne * 2)) {
        return console.log("Prato pronto, bom apetite ;D");
    } else if (comida === "Carne" || "carne" && tempo >= tempoCarne * 3) {
        return console.log("kabumm!!! ;o;");
    } else if (comida === "Carne" || "carne" && tempo < tempoCarne) {
        return console.log("Tempo, insuficiente :(");
    } else if (comida === "Carne" || "carne" && tempo > tempoCarne * 2) {
        return console.log("Comida queimou ;-;");
    }

    if (comida === ("feijão") && (tempo === tempoFeijao || tempo < tempoFeijao * 2)) {
        return console.log("Prato pronto, bom apetite ;D");
    } else if (comida === "Feijão" || "feijão" && tempo >= tempoFeijao * 3) {
        return console.log("kabumm!!! ;o;");
    } else if (comida === "Feijão" || "feijão" && tempo < tempoFeijao) {
        return console.log("Tempo, insuficiente :(");
    } else if (comida === "Feijão" || "feijão" && tempo > tempoFeijao * 2) {
        return console.log("Comida queimou ;-;");
    }

    if (comida === ("brigadeiro") && (tempo === tempoBrigadeiro || tempo < tempoBrigadeiro * 2)) {
        return console.log("Prato pronto, bom apetite ;D");
    } else if (comida === "Brigadeiro" || "brigadeiro" && tempo >= tempoBrigadeiro * 3) {
        return console.log("kabumm!!! ;o;");
    } else if (comida === "Brigadeiro" || "brigadeiro" && tempo < tempoBrigadeiro) {
        return console.log("Tempo, insuficiente :(");
    } else if (comida === "Brigadeiro" || "brigadeiro" && tempo > tempoBrigadeiro * 2) {
        return console.log("Comida queimou ;-;");
    }

    if(comida !== 'pipoca' && comida !== 'macarrao' && comida !== 'carne' && comida !== 'feijao' && comida !== 'brigadeiro') 
    console.log('Prato inexistente!');
}

microondas("pipoca",10);