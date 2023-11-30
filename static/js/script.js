
var nom_field = document.getElementById('nom');
var espece_field = document.getElementById('espece');
var race_field = document.getElementById('race');
var age_field = document.getElementById('age');
var email_field = document.getElementById('email');
var num_civique_field = document.getElementById('num-civique');
var ville_field = document.getElementById('ville');
var code_postal_field = document.getElementById('code-postal');
var description_field = document.getElementById('description');

var form = document.getElementById('form');
var submit_button = document.getElementById('submit-button');

//ÉVÈNEMMENTS DU FORMULAIRE

form.addEventListener('change', function() {
    if(checkAllFields()){
        submit_button.style.backgroundColor = 'rgb(220, 20, 60)';
        submit_button.disabled = false;
    } else {
        submit_button.style.backgroundColor = 'lightgrey';
    }
});

submit_button.addEventListener('mousedown', function() {
    if(checkAllFields()){
        submit_button.style.backgroundColor = 'rgb(106, 11, 30)';
    }
});
submit_button.addEventListener('mouseup', function() {
    if(checkAllFields()){
        submit_button.style.backgroundColor = 'rgb(220, 20, 60)';
    }
});

nom_field.addEventListener('change', function(){
    if(checkNomField()){
        document.getElementById('error-nom').style.display = 'none';
    } else {
        document.getElementById('error-nom').style.display = 'flex';
    }
});

espece_field.addEventListener('change', function(){
    if(checkEspeceRaceVilleField(espece_field.value)){
        document.getElementById('error-espece').style.display = 'none';
    } else {
        document.getElementById('error-espece').style.display = 'flex';
    }
});

race_field.addEventListener('change', function(){
    if(checkEspeceRaceVilleField(race_field.value)){
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
    if(checkEspeceRaceVilleField(ville_field.value)){
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
});

// CHECKFIELDS

function checkNomField() {
    var regex = new RegExp("^[a-zA-Z]{3,20}$");
    return regex.test(nom_field.value);
}

function checkEspeceRaceVilleField(value_to_check) {
    var regex = new RegExp("^[a-zA-Z-]{2,}$");
    return regex.test(value_to_check) && value_to_check.includes(',') == false;
}

function checkAgeField() {
    if(isNaN(age_field.value)){
        return false;
    } else {
        return age_field.value >= 0 && age_field.value <= 30 &&
        age_field.value.includes(',') == false;
    }
}

function checkCourrielField() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email_field.value) &&
     email_field.value.includes(',') == false;
}

function checkNumCiviqueField() {
    if(isNaN(num_civique_field.value)){
        return false;
    }else {
        return num_civique_field.value > 0 && num_civique_field.value < 100000 &&
        num_civique_field.value.includes(',') == false;
    }
}

function checkCodePostalField() {
    const postalCodeWithSpaceRegex = /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/;
    const postalCodeRegex = /^[A-Za-z]\d[A-Za-z]\d[A-Za-z]\d$/;
    return postalCodeRegex.test(code_postal_field.value) ||
     postalCodeWithSpaceRegex.test(code_postal_field.value) &&
      code_postal_field.value.includes(',') == false;
}

function checkDescriptionField() {
    return description_field.value.length > 1 &&
    description_field.value.length < 150 && description_field.value.includes(',') == false;
}

function checkAllFields() {
    return checkNomField() && checkAgeField() && checkCodePostalField() && checkCourrielField() &&
    checkEspeceRaceVilleField(espece_field.value) && checkEspeceRaceVilleField(race_field.value) &&
    checkEspeceRaceVilleField(ville_field.value) && checkDescriptionField() && checkNumCiviqueField();
}


