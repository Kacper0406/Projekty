//3.33
function suma_dow(){
    var i, wynik=0;
    var l_param = arguments.length;
    for(i=0;i<l_param;i++)
    {
        wynik+=arguments[i];
    }
    return wynik;
}