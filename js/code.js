var line = 1;
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

(function(){
    window.onload = function comecar(){return addInput();};
})();