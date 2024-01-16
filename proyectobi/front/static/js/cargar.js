document.addEventListener("DOMContentLoaded", async function() {
    await loaded();
});

async function loaded() {
    const select = document.getElementById("nombre_tienda");

    try {
        const shops = await fetch("static/data/Select.csv");

        const csv = await shops.text();

        csv.split("\n")
            .filter(e => e !== "")
            .forEach(e => {
                const text = document.createTextNode(e);
                const option = document.createElement("option");
                option.className = "clas1";  // Corrige el nombre de la propiedad
                option.appendChild(text);

                select.appendChild(option);
            });
    } catch (error) {
        console.error("Error al cargar el archivo CSV:", error);
    }
}
document.addEventListener("DOMContentLoaded", async function() {
    await loadedSubcategoria();
});

async function loadedSubcategoria() {
    const selectSubcategoria = document.getElementById("subcategoria");

    try {
        // Cambia la ruta del archivo CSV según sea necesario
        const subcategoriaCSV = await fetch("static/data/Subcategoria.csv");

        const csvSubcategoria = await subcategoriaCSV.text();

        csvSubcategoria.split("\n")
            .filter(e => e !== "")
            .forEach(e => {
                const text = document.createTextNode(e);
                const option = document.createElement("option");
                option.className = "clas1";  // Corrige el nombre de la propiedad
                option.appendChild(text);

                selectSubcategoria.appendChild(option);
            });
    } catch (error) {
        console.error("Error al cargar el archivo CSV de subcategoría:", error);
    }
    
}

document.addEventListener("DOMContentLoaded", async function() {
    await loadedOcupacionCliente();
});

async function loadedOcupacionCliente() {
    const selectOcupacionCliente = document.getElementById("ocupacion_cliente");

    try {
        // Cambia la ruta del archivo CSV según sea necesario
        const ocupacionClienteCSV = await fetch("static/data/ocupacionCliente.csv");

        const csvOcupacionCliente = await ocupacionClienteCSV.text();

        csvOcupacionCliente.split("\n")
            .filter(e => e !== "")
            .forEach(e => {
                const text = document.createTextNode(e);
                const option = document.createElement("option");
                option.className = "clas1";  // Corrige el nombre de la propiedad
                option.appendChild(text);

                selectOcupacionCliente.appendChild(option);
            });
    } catch (error) {
        console.error("Error al cargar el archivo CSV de ocupación del cliente:", error);
    }
}

function capturarDatosFormulario() {
    // Objeto para almacenar los datos del formulario
    var formData = {};

    // Obtener todos los elementos del formulario
    var formElements = document.getElementById('formularioPrediccion').elements;

    // Recorrer los elementos del formulario
    for (var i = 0; i < formElements.length; i++) {
        var element = formElements[i];

        // Verificar si el elemento tiene un atributo 'name'
        if (element.name) {
            // Agregar el valor al objeto formData
            formData[element.name] = element.value;
        }
    }

    return formData;
}

