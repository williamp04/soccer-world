window.onload = () => {
    var zapatillas_section = document.getElementById("zapatillas_section").getBoundingClientRect();
    var polos_section = document.getElementById("polos_section").getBoundingClientRect();
    var promos_section = document.getElementById("promos_section").getBoundingClientRect();
    var search_button = document.getElementById("search-button");
    
    const zapatillas_link = document.querySelectorAll(".zapatillas_link");
    const polos_link = document.querySelector(".polos_link");
    const promos_link = document.querySelector(".promos_link");
    
    for (var i = 0; i < zapatillas_link.length; i++) {
        zapatillas_link[i].addEventListener("click", () => changescroll(zapatillas_section));
    }
    promos_link.addEventListener("click", () => changescroll(promos_section));
    polos_link.addEventListener("click", () => changescroll(polos_section));
    search_button.addEventListener("click",() => searchscroll());
    
    function searchscroll(){
        var search_input = document.getElementById("search-input").value;
        console.log(search_input)
        //search_input = search_input.toLowerCase();
        if(search_input == "zapatillas"){
           // zapatillas_section = document.getElementById("zapatillas_section").getBoundingClientRect();
            changescroll(zapatillas_section)
        }else if(search_input == "polos"){
            //polos_section = document.getElementById("polos_section").getBoundingClientRect();
            changescroll(polos_section)
        }else if(search_input == "promos"){
            //promos_section = document.getElementById("promos_section").getBoundingClientRect();
            changescroll(promos_section)
        }
    }

    function changescroll(danna){
        window.scroll({top:(danna.y - 150)})
        console.log(danna.y)
    }
}
