var line = 1;

(function(){
    window.onload = function comecar(){return addInput();};
})();

function addInput() {
    if(line<=20){
        var newdiv = document.createElement('div');
        newdiv.innerHTML  = '<div class="w50px center">[' + line + ']</div>';
        newdiv.innerHTML += '<input class="txtCriatura" type="text" name="criatura'+line +'" id="criatura'+line +'">';
        newdiv.innerHTML += '<input class="w50px" type="number" name="iniciativa'+line +'" id="iniciativa'+line +'">';
        newdiv.innerHTML += '<input class="w50px" maxlength="2" type="number" name="quantidade'+line +'" id="quantidade'+line +'">';
        newdiv.innerHTML += '<input class="w50px" maxlength="2" type="number" name="dex'+line +'" id="dex'+line +'">';
        newdiv.innerHTML += '<input class="txtHP" maxlength="4" type="number" name="hp'+line +'" id="hp'+line +'">';
        document.getElementById('lines').appendChild(newdiv);
        line++;
    }

}

function iniciarCombate(){
    var registro = localStorage.getItem("storage");
    var array = JSON.parse(registro);
    var criaturas = [];
    array.forEach(criatura => {
        let quantidade = parseInt(criatura.quantidade);
        for(i=1;i<=quantidade;i++){
            let rng = rollD20();
            let newPos = rng + parserInt(criatura.iniciativa);
            let nomeCriatura;
            if (quantidade == 1){ nomeCriatura = criatura.nome;}
            else{                 nomeCriatura = criatura.nome+" "+i;}

            criaturas.push({
                nome: nomeCriatura,
                iniciativa: parserInt(criatura.iniciativa),
                dex: parserInt(criatura.dex),
                rng: rng,
                hp: criatura.hp,
                pos: newPos
            });
        }
    });

    criaturas.sort((a,b)=> {
        if      (a.pos<b.pos){ return 1;}
        else if (a.pos>b.pos){ return -1;}
        else{
            if      (a.dex<b.dex){return 1;}
            else if (a.dex>b.dex){return -1;}
            else{return 0;}
        }
    });
    
    let cont = 1;
    let element = document.getElementById('tabelaCombate');
    element.innerHTML += '<tr><td>ID</id><td class="txtCriatura">Criatura</td><td>Inic.</td><td>Dex</td><td>Rng</td><td class="txtLocal">Posição</td><td class="txtHPAtual">HP</td><td>M</td><td>Del.</td></tr>';
    criaturas.forEach(criatura => {
        element.innerHTML +='<tr id="tr'+ cont +'"><td>'+cont+'</td>'+
                            '<td>'+criatura.nome +'</td>'+
                            '<td>'+criatura.iniciativa +'</td>'+
                            '<td>'+criatura.dex+'</td>'+
                            '<td>'+criatura.rng+'+'+criatura.iniciativa+'</td>'+
                            '<td><input class="txtLocal" type="text" maxlength="20"></td>'+
                            '<td><input class="txtHP" type="number" value="'+criatura.hp+'"></td>'+
                            '<td><input type="checkbox"></td>'+
                            '<td><button type="button" onclick="deleteRow('+ cont +')">Del</input></td></tr>';
        cont++;
    });
    
}

function rollD20(){
    return parseInt((Math.floor(Math.random() * 20 )+1));
}

function parserInt(numero){
    if (numero == ""){  return 0;}
    else{               return parseInt(numero);}
}

function deleteRow(linha){
    var teste = document.getElementById("tr"+linha);
    teste.parentNode.removeChild(teste);
}