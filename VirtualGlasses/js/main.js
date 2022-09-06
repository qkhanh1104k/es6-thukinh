let dataGlasses = [
    {
        id: "G1",
        src: "./img/g1.jpg",
        virtualImg: "./img/v1.png",
        brand: "Armani Exchange",
        name: "Bamboo wood",
        color: "Brown",
        price: 150,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? ",
    },
    {
        id: "G2",
        src: "./img/g2.jpg",
        virtualImg: "./img/v2.png",
        brand: "Arnette",
        name: "American flag",
        color: "American flag",
        price: 150,
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio.",
    },
    {
        id: "G3",
        src: "./img/g3.jpg",
        virtualImg: "./img/v3.png",
        brand: "Burberry",
        name: "Belt of Hippolyte",
        color: "Blue",
        price: 100,
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
        id: "G4",
        src: "./img/g4.jpg",
        virtualImg: "./img/v4.png",
        brand: "Coarch",
        name: "Cretan Bull",
        color: "Red",
        price: 100,
        description: "In assumenda earum eaque doloremque, tempore distinctio.",
    },
    {
        id: "G5",
        src: "./img/g5.jpg",
        virtualImg: "./img/v5.png",
        brand: "D&G",
        name: "JOYRIDE",
        color: "Gold",
        price: 180,
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?",
    },
    {
        id: "G6",
        src: "./img/g6.jpg",
        virtualImg: "./img/v6.png",
        brand: "Polo",
        name: "NATTY ICE",
        color: "Blue, White",
        price: 120,
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
        id: "G7",
        src: "./img/g7.jpg",
        virtualImg: "./img/v7.png",
        brand: "Ralph",
        name: "TORTOISE",
        color: "Black, Yellow",
        price: 120,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam.",
    },
    {
        id: "G8",
        src: "./img/g8.jpg",
        virtualImg: "./img/v8.png",
        brand: "Polo",
        name: "NATTY ICE",
        color: "Red, Black",
        price: 120,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim.",
    },
    {
        id: "G9",
        src: "./img/g9.jpg",
        virtualImg: "./img/v9.png",
        brand: "Coarch",
        name: "MIDNIGHT VIXEN REMIX",
        color: "Blue, Black",
        price: 120,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet.",
    },
];

/* function renderGlasses (dataGlasses){
    let html ="";
    for( let i=0; i<dataGlasses.length;i++){
        var gls = dataGlasses[i]
        html +=`
        <div class="col-4 pb-3">
            <img src="${gls.src}" alt="" class="img-thumbnail cursor-pointer" onclick="productDetail('${gls}')">
        </div>
        `;
    }
    document.querySelector('#vglassesList').innerHTML=html;
}
window.onload =function(){
    renderGlasses(dataGlasses);
} */
function renderGlasses(dataGlasses) {
    let html = "";
    for (let [index, prof] of dataGlasses.entries()) {
        html += `
             <div class="col-4 pb-3">
                 <img src="${prof.src}" alt="" class="img-thumbnail cursor-pointer" onclick="productDetail('${index}')">
             </div>
         `;
    }
    document.querySelector("#vglassesList").innerHTML = html;
}
renderGlasses(dataGlasses);

window.productDetail = (index) => {
    let html = "";
    let imgGlasses = "";
    var gls = dataGlasses[index];
    console.log(gls);
    html = `
    <h4>${gls.name} - ${gls.brand}(${gls.color})</h4>
    <p class="text-light bg-danger d-inline-block">$${gls.price}</p>
    <span class="text-success">Stocking</span>
    <p>${gls.description}</p>
    `;
    imgGlasses = `
    <img src="${gls.virtualImg}" alt="" class="glasses-wear" >
    `;
    document.querySelector("#avatar").innerHTML = imgGlasses;
    document.querySelector("#glassesInfo").innerHTML = html;
    document.querySelector(".vglasses__info").style.display = "block";
};
function removeGlasses(value){
    if(value ==="before"){
        document.querySelector("glasses-wear").removeAttribute("src")
    }
}