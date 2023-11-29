
var nom_field = document.getElementById('nom');
var espece_field = document.getElementById('espece');
var race_field = document.getElementById('race');
var age_field = document.getElementById('age');
var email_field = document.getElementById('email');
var num_civique_field = document.getElementById('num-civique');
var ville_field = document.getElementById('ville');
var code_postal_field = document.getElementById('code-postal');
var description_field = document.getElementById('description');

//ÉVÈNEMMENTS DU FORMULAIRE

document.getElementById('submit-button').addEventListener('mousedown', function() {
    console.log('event');
    document.getElementById('submit-button').style.backgroundColor = 'rgb(106, 11, 30)';
});
document.getElementById('submit-button').addEventListener('mouseup', function() {
    console.log('event');
    document.getElementById('submit-button').style.backgroundColor = 'rgb(220,20,60)';
});

nom_field.addEventListener('change', function(){
    if(checkNomField()){
        document.getElementById('error-nom').style.display = 'none';
    } else {
        document.getElementById('error-nom').style.display = 'flex';
    }
});

espece_field.addEventListener('change', function(){
    if(checkEspeceField()){
        document.getElementById('error-espece').style.display = 'none';
    } else {
        document.getElementById('error-espece').style.display = 'flex';
    }
});

race_field.addEventListener('change', function(){
    if(checkEspeceField()){
        document.getElementById('error-race').style.display = 'none';
    } else {
        document.getElementById('error-race').style.display = 'flex';
    }
});

age_field.addEventListener('change', function() {
    if(checkAgeField()){
        document.getElementById('error-age').style.display = 'none';
    } else {
        document.getElementById('error-age').style.display = 'flex';
    }
});

email_field.addEventListener('change', function() {
    if(checkCourrielField()){
        document.getElementById('error-email').style.display = 'none';
    } else {
        document.getElementById('error-email').style.display = 'flex';
    }
});

num_civique_field.addEventListener('change', function() {
    if(checkNumCiviqueField()){
        document.getElementById('error-num-civique').style.display = 'none';
    } else {
        document.getElementById('error-num-civique').style.display = 'flex';
    }
});

ville_field.addEventListener('change', function() {
    if(checkNomVilleField()){
        document.getElementById('error-ville').style.display = 'none';
    } else {
        document.getElementById('error-ville').style.display = 'flex';
    }
});

code_postal_field.addEventListener('change', function() {
    if(checkCodePostalField()){
        document.getElementById('error-code-postal').style.display = 'none';
    } else {
        document.getElementById('error-code-postal').style.display = 'flex';
    }
});

description_field.addEventListener('change', function() {
    if(checkDescriptionField()){
        document.getElementById('error-description').style.display = 'none';
    } else {
        document.getElementById('error-description').style.display = 'flex';
    }
})

// CHECKFIELDS

function checkNomVilleField() {
    var regex = new RegExp("^[a-zA-Z]{2,}$");
    return regex.test(nom_field.value);
}

function checkEspeceRaceField() {
    var regex = new RegExp("^[a-zA-Z]{3,}$");
    return regex.test(espece_field.value);
}

function checkAgeField() {
    return age_field.value > 0 && age_field.value < 40;
}

function checkCourrielField() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email_field.value);
}

function checkNumCiviqueField() {
    return num_civique_field.value > 0 && num_civique_field.value < 100000;
}

function checkCodePostalField() {
    const postalCodeWithSpaceRegex = /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/;
    const postalCodeRegex = /^[A-Za-z]\d[A-Za-z]\d[A-Za-z]\d$/;
    return postalCodeRegex.test(code_postal_field.value) ||
     postalCodeWithSpaceRegex.test(code_postal_field.value);
}

function checkDescriptionField() {
    return description_field.textContent.length > 1 &&
    description_field.textContent.length < 150;
}


