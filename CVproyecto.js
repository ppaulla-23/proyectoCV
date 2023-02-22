document.getElementById("botonmas").addEventListener('click', function(){
    document.getElementById("lista").style.display='inline';
    document.getElementById('botonmas').style.display='none';
    document.getElementById('botonmenos').style.display='inline';
})

document.getElementById("botonmenos").addEventListener('click', function(){
    document.getElementById("lista").style.display='none';
    document.getElementById('botonmas').style.display='inline';
    document.getElementById('botonmenos').style.display='none';
})
