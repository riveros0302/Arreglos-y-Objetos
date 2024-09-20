import { propiedades_alquiler, propiedades_venta } from "./data.js";

const divVenta = document.querySelector("#venta .row");
const divAlquiler = document.querySelector("#alquiler .row");

export const renderCard = (array, div, limit) => {
  const propiedadesLimitadas = array.slice(0, limit);

  for (const propiedad of propiedadesLimitadas) {
    const card_properties = `
          <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${propiedad.src}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">${propiedad.nombre}</h5>
                <p class="card-text">
                 ${propiedad.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${
                    propiedad.habitaciones
                  } Habitaciones |
                  <i class="fas fa-bath"></i> ${propiedad.baños} Baños
                </p>
                <p>
                  <i class="fas fa-dollar-sign"></i> ${propiedad.costo}
                </p>
                ${
                  propiedad.smoke
                    ? `
                     <p class="text-success">
                        <i class="fas fa-smoking"></i> Permitido fumar
                      </p>`
                    : `
                    <p class="text-danger">
                      <i class="fas fa-smoking-ban"></i> No se permite fumar
                    </p>
                  `
                }
             ${
               propiedad.pets
                 ? `
                  <p class="text-success">
                    <i class="fas fa-paw"></i> Mascotas permitidas
                  </p>
              `
                 : `   
                 <p class="text-danger">
                      <i class="fas fa-ban"></i> No se permiten mascotas
                  </p>
              `
             }
               
              </div>
            </div>
          </div>`;

    div.innerHTML += card_properties;
  }
};

if (divVenta && divAlquiler) {
  renderCard(propiedades_venta, divVenta, 3);
  renderCard(propiedades_alquiler, divAlquiler, 3);
  console.log("ejecuta 1");
} else if (divVenta) {
  renderCard(propiedades_venta, divVenta);
  console.log("ejecuta 2");
} else if (divAlquiler) {
  renderCard(propiedades_alquiler, divAlquiler);
  console.log("ejecuta 3");
}
