$(document).ready(() => {
    $('#generate').on('click', (e) => {
        getData();
        e.preventDefault();
    });
});


function getData() {
    const image = document.getElementById('pokemon');
    //Only using Generation 1 Pokemon
    const random = Math.floor((Math.random() * 151 ) + 1);
    $(document).ready(()=>{
        $.ajax({
            type:"GET",
            url : "https://pokeapi.co/api/v2/pokemon/"+random+"/",
            success:function(pokemon){
                image.src = pokemon.sprites.front_default;
            },
            error: function(){
                alert('Error');
            }
        });
    });
}