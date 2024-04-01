var output = document.getElementById('outputBox');
var ac = document.getElementById('ac');
var add = document.getElementById('add');
var subt = document.getElementById('subt');
var divd = document.getElementById('divd');
var mult = document.getElementById('mult');
var cls = document.getElementById('inpCls');
var cle = document.getElementById('Cle');
var rawN1 = document.getElementById('n1');
var rawN2 = document.getElementById('n2');

add.addEventListener('click', () => {
    var n1 = parseInt(rawN1.value);
    var n2 = parseInt(rawN2.value);
    var added = n1 + n2;
    output.value = added;
});

subt.addEventListener('click', () => {
    var n1 = parseInt(rawN1.value);
    var n2 = parseInt(rawN2.value);
    var subTed = n1 - n2;
    output.value = subTed;
});

divd.addEventListener('click', () => {
    var n1 = parseInt(rawN1.value);
    var n2 = parseInt(rawN2.value);
    var divided = n1 / n2;
    output.value = divided;
});

mult.addEventListener('click', () => {
    var n1 = parseInt(rawN1.value);
    var n2 = parseInt(rawN2.value);
    var mulTed = n1 * n2;
    output.value = mulTed;
});

ac.addEventListener('click', () => {
    output.value = '';
});

cls.addEventListener('click', () => {
    rawN1.value = '';
    rawN2.value = '';
});
window.addEventListener('close',  
clearLol = () => {

    output.value = '';
    rawN1.value = '';
    rawN2.value = '';
}
)
clearLol()