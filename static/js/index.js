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