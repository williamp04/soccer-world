window.onload = () => {
    var polos_section = document.getElementById("polos_section").getBoundingClientRect();
    var pantalones_section = document.getElementById("pantalones_section").getBoundingClientRect();

    const polos_link = document.querySelector(".polos_link");
    const pantalones_link = document.querySelector(".pantalones_link")

    polos_link.addEventListener("click", () => changescroll(polos_section));
    pantalones_link.addEventListener("click", () => changescroll(pantalones_section));

    function changescroll (danna){
        window.scroll({top:(danna.y )})
    }

}