function iniciarCombate(){
    var registro = localStorage.getItem("storage");
    var array = JSON.parse(registro);
    var cont = 1;
    var criaturas = [];
    array.forEach(criatura => {
        let quantidade = criatura.quantidade;
        if(quantidade>1){
            for(i=1;i<=quantidade;i++){
                let num = (Math.floor(Math.random() * 20 )+1);
                let newPos = parseInt(num) + parseInt(criatura.iniciativa);
                criaturas.push({
                    nome: criatura.nome+" "+i,
                    iniciativa: criatura.iniciativa,
                    dex: criatura.dex,
                    rng: num,
                    quantidade: criatura.quantidade,
                    hp: criatura.hp,
                    pos: newPos
                });
            }
        }else if(quantidade = 1){
            let num = (Math.floor(Math.random() * 20 )+1);
            let newPos = parseInt(num) + parseInt(criatura.iniciativa);
            criaturas.push({
                nome: criatura.nome,
                iniciativa: criatura.iniciativa,
                dex: criatura.dex,
                rng: num,
                quantidade: criatura.quantidade,
                hp: criatura.hp,
                pos: newPos
            });
        }
    });
    criaturas.sort((a,b)=> {
        if(a.pos<b.pos){
            return 1;
        }else if(a.pos>b.pos){
            return -1;
        }else{
            if(a.dex<b.dex){
                return 1;
            }else if(a.dex>b.dex){
                return -1;
            }else{
                return 0;
            }
        }
    });
    var element = document.getElementById('tabelaCombate');
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

function deleteRow(linha){
    var teste = document.getElementById("tr"+linha);
    teste.parentNode.removeChild(teste);
}