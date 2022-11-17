const kierunek_a = document.querySelector('#prosta_a1')
const kierunek_b = document.querySelector('#prosta_b1')
const wartosc_a = document.querySelector('#prosta_a2')
const wartosc_b = document.querySelector('#prosta_b2')
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let a = parseFloat(kierunek_a.value);
    let b = parseFloat(kierunek_b.value);

    if(a*b === -1){
        wynik.innerHTML = `prosta y=${a}x+${wartosc_a.value} jest prostopadła do prostej y=${b}x+${wartosc_b.value}`;
    }else{
        wynik.innerHTML = `prosta y=${a}x+${wartosc_a.value} nie jest prostopadła do prostej y=${b}x+${wartosc_b.value}`;
    }
})