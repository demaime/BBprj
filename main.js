const sendInfo = document.getElementById("sendInfo");

function cargar() {
  //   console.log("holi");
  const localInfo = {
    nameLocal: document.getElementById("local-team").value,
    nameVisitor: document.getElementById("visitor-team").value,
  };
  console.log(localInfo);
}

function sendMatch() {
  sendInfo.addEventListener("click", cargar);
}
// // // // // //

const pestanas = document.querySelectorAll(".pestana");
const changeCategory = Array.from(document.querySelectorAll(".topbar li"));
//TERCER INTENTO PERO CHETO
for (let i = 0; i < changeCategory.length; i++) {
  const categoriaClickeada = changeCategory[i];
  categoriaClickeada.addEventListener("click", () => {
    // seria el data-section-class de html
    const sectionClassDelClickeado = categoriaClickeada.dataset.sectionClass;

    for (let j = 0; j < pestanas.length; j++) {
      const pestana = pestanas[j];
      if (pestana.classList.contains(sectionClassDelClickeado)) {
        pestana.classList.remove("turnoff");
      } else {
        pestana.classList.add("turnoff");
      }
    }
  });
}

// con foreach
changeCategory.forEach((categoriaClickeada) => {
  categoriaClickeada.addEventListener("click", () => {
    // seria el data-section-class de html
    const sectionClassDelClickeado = categoriaClickeada.dataset.sectionClass;

    pestanas.forEach((pestana) => {
      if (pestana.classList.contains(sectionClassDelClickeado)) {
        pestana.classList.remove("turnoff");
      } else {
        pestana.classList.add("turnoff");
      }
    });
  });
});

//PRIMER INTENTO
// function showSelection () {
//   for (i=0; i<= changeCategory.length; i++) {
//     if (changeCategory[i] = changeCategory["data-selection=estadisticas"]) {
//       changeCategory[i].addEventListener("click", )
//     }
// }
// }

// console.log(contentData);

// -------------------------------------------------------------------------

//SEGUNDO INTENTO
// function otracosa() {
//   changeCategory[0].addEventListener("click", () => {
//     if (changeCategory[0].className === "turnoff") {
//       changeCategory[0].classList.remove("turnoff");
//     } else {
//       return;
//     }
//   });
// }
