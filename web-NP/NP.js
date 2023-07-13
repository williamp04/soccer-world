window.onload = () => {
    var balones_section = document.getElementById("balones_section").getBoundingClientRect();
    var medias_section = document.getElementById("medias_section").getBoundingClientRect();
    var canilleras_section = document.getElementById("canilleras_section").getBoundingClientRect();

    const balones_link = document.querySelector(".balones_link");
    const medias_link = document.querySelector(".medias_link");
    const canilleras_link = document.querySelector(".canilleras_link");

    balones_link.addEventListener("click", () => changescroll(balones_section));
    medias_link.addEventListener("click", () => changescroll(medias_section));
    canilleras_link.addEventListener("click", () => changescroll(canilleras_section));

    function changescroll(nicol){
        window.scroll({top:(nicol.y)})
        console.log(nicol)
    }
}
