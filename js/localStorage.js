(function () {
    function adicionar() {
        var dados = [];
        for(let i = 1; i <= 20; i++){
            if(document.querySelector("input[name=criatura"+i+"]") != null && document.querySelector("input[name=criatura"+i+"]") != undefined){
                dados.push({
                    nome : document.querySelector("input[name=criatura"+i+"]").value,
                    iniciativa : document.querySelector("input[name=iniciativa"+i+"]").value,
                    quantidade : document.querySelector("input[name=quantidade"+i+"]").value,
                    dex : document.querySelector("input[name=dex"+i+"]").value,
                    hp : document.querySelector("input[name=hp"+i+"]").value,
                });
            };
        };
        localStorage.setItem("storage",JSON.stringify(dados));
        return true;
    }

    var form = document.querySelector("form");
    form.addEventListener("submit", function () {
        return adicionar();
    });
})();