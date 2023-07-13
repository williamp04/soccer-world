window.onload = () => {
    var zapatillas_section = document.getElementById("zapatillas_section").getBoundingClientRect();
    var tachos_section = document.getElementById("tachos_section").getBoundingClientRect();

    const zapatillas_link = document.querySelector(".zapatillas_link");
    const tachos_link = document.querySelector(".tachos_link");

    zapatillas_link.addEventListener("click", () => changescroll(zapatillas_section));
    tachos_link.addEventListener("click", () => changescroll(tachos_section));

    function changescroll (zamora){
        window.scroll({top:(zamora.y )})
        console.log(zamora)
    }
}