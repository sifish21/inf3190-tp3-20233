document.getElementById('submit-button').addEventListener('mousedown', function() {
    console.log('event');
    document.getElementById('submit-button').style.backgroundColor = 'rgb(106, 11, 30)';
});
document.getElementById('submit-button').addEventListener('mouseup', function() {
    console.log('event');
    document.getElementById('submit-button').style.backgroundColor = 'rgb(220,20,60)';
});

var nom_field = document.getElementById('nom');
var espece_field = document.getElementById('espece');
var race_field = document.getElementById('race');
var age_field = document.getElementById('age');
var email_field = document.getElementById('email');
var num_civique_field = document.getElementById('num-civique');
var ville_field = document.getElementById('ville');
var code_postal_field = document.getElementById('code-postal');
var description_field = document.getElementById('description');

nom_field.addEventListener('change', function() {
    if(checkNomField()){
        console.log('true');
        document.getElementById('error-nom').style.display = 'none';
    } else {
        console.log('false');
        document.getElementById('error-nom').style.display = 'flex';
    }
});

// CHECKFIELDS

function checkNomField() {
    var regex = new RegExp("^[a-zA-Z]{2,}$");
    return regex.test(nom_field.value)
}


