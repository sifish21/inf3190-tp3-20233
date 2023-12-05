// ÉVÈNEMENT DE LA BARRE DE RECHERCHE
var search_bar = document.getElementById('search-bar');
var submit_button = document.getElementById('submit-search-bar');

search_bar.addEventListener('input', function() {
    if(search_bar.value.trim() != ''){
        submit_button.disabled = false;
        submit_button.style.backgroundColor = 'crimson';
        submit_button.style.color = 'white';

    } else {
        submit_button.disabled = true;
        submit_button.style.color = 'ligthgrey'
        submit_button.style.backgroundColor = 'rgba(220,20,60,0.3)';
    }
    
});

// ÉVÈNEMENT DE LA VEDETTE DE LA SEMAINE
var boutton_vedette = document.getElementById('boutton-vedette');

boutton_vedette.addEventListener('mousedown', function(){
    boutton_vedette.style.backgroundColor = 'crimson';
    document.getElementById('nom-vedette-semaine').style.color = 'white';
})

boutton_vedette.addEventListener('click', function() {
    window.location = '/animal/' + 13;
})

//ÉVÈNEMENT DES 5 VEDETTES ALÉATOIRES
var content_list = document.getElementById('vedette-liste');
var animals_list = content_list.querySelectorAll('div > div');    
var nb_animals = animals_list.length;
for(let i = 1; i <= nb_animals; i++){
    (function(id) {
        document.getElementById(id).addEventListener('mousedown', function() {
            document.getElementById(id).style.backgroundColor = 'rgb(106, 11, 30)';
        });
        document.getElementById(id).addEventListener('mouseup', function(){
            document.getElementById(id).style.backgroundColor = 'rgba(220, 20, 60, 0.2)';
        });
        document.getElementById(id).addEventListener('click', function() {
            animal_id = 'id-vedette_' + i;
            id_number = document.getElementById(animal_id).innerHTML;
            window.location.href = '/animal/' + id_number;
        });
    })("vedette_" + i);
}