//validar formulario
//validar formulario con metodo post oara enviarl al servidor

document.addEventListener("DOMContentLoaded", function () {
    // Agrega el evento onsubmit al formulario
    var formulario = document.getElementById('formularioPrediccion');

    if (formulario) {
        formulario.addEventListener('submit', function (event) {
            // Evitar que el formulario se envíe normalmente
            event.preventDefault();

            console.log('Validando formulario...');

            // Obtener valores de los campos
            // Obtener valores de los campos
var nproducto = document.getElementById('nproducto').value;
var cproducto = document.getElementById('cproducto').value;
var nombreM = document.getElementById('inputnombreM').value;
var inputDesc = document.getElementById('inputDesc').value;
var inputColorP = document.getElementById('inputColorP').value;
var inputStock = document.getElementById('inputStock').value;
var inputCantDescuento = document.getElementById('inputCantDescuento').value;
var inputMontoDev = document.getElementById('inputMontoDev').value;
var inputCantVenta = document.getElementById('inputCantVenta').value;
var canal = document.getElementById('canal').value;
var inputnombreT = document.getElementById('inputnombreT').value;
var inputOcupacionC = document.getElementById('inputOcupacionC').value;
var NHijos = document.getElementById('NHijos').value;
var THijos = document.getElementById('THijos').value;
var NAutos = document.getElementById('NAutos').value;
var ingresosA = document.getElementById('ingresosA').value;
var TipoP = document.getElementById('TipoP').value;
var Ciudad = document.getElementById('Ciudad').value;
var fechaSelector = document.getElementById('fechaSelector').value;
var CUnitario = document.getElementById('CUnitario').value;
var PrecioU = document.getElementById('PrecioU').value;
var inputSubC = document.getElementById('inputSubC').value;
var inputPesoP = document.getElementById('inputPesoP').value;
var inputDesc = document.getElementById('inputDesc').value;
var inputDevo = document.getElementById('inputDevo').value;
var inputVentaT = document.getElementById('inputVentaT').value;
var inputGanancias = document.getElementById('inputGanancias').value;
var inputEstadoC = document.getElementById('inputEstadoC').value;
var genero = document.getElementById('genero').value;
var inputEDUC = document.getElementById('inputEDUC').value;
var casa = document.getElementById('casa').value;
var inputPromociones = document.getElementById('inputPromociones').value;
var inputpoDesc = document.getElementById('inputpoDesc').value;
var pais = document.getElementById('pais').value;
var region = document.getElementById('region').value;

// Verificar si algún campo está vacío
if (
    nproducto === '' ||
    cproducto === '' ||
    nombreM === '' ||
    inputDesc === '' ||
    inputColorP === '' ||
    inputStock === '' ||
    inputCantDescuento === '' ||
    inputMontoDev === '' ||
    inputCantVenta === '' ||
    canal === '' ||
    inputnombreT === '' ||
    inputOcupacionC === '' ||
    NHijos === '' ||
    THijos === '' ||
    NAutos === '' ||
    ingresosA === '' ||
    TipoP === '' ||
    Ciudad === '' ||
    fechaSelector === '' ||
    CUnitario === '' ||
    PrecioU === '' ||
    inputSubC === '' ||
    inputPesoP === '' ||
    inputDesc === '' ||
    inputDevo === '' ||
    inputVentaT === '' ||
    inputGanancias === '' ||
    inputEstadoC === '' ||
    genero === '' ||
    inputEDUC === '' ||
    casa === '' ||
    inputPromociones === '' ||
    inputpoDesc === '' ||
    pais === '' ||
    region === ''
) {
    alert('Por favor, complete todos los campos obligatorios antes de predecir.');
} else {
    // Realizar la predicción solo si la validación es exitosa
    alert('Realizando predicción para ' + nproducto + ', ' + cproducto + ', ' + nombreM);

    // Preparar datos del formulario como un objeto JSON
    var formData = {
        'nproducto': nproducto,
        'cproducto': cproducto,
        'inputnombreM': nombreM,
        'inputColorP': inputColorP,
        'inputStock': inputStock,
        'inputCantDescuento': inputCantDescuento,
        'inputMontoDev': inputMontoDev,
        'inputCantVenta': inputCantVenta,
        'canal': canal,
        'inputnombreT': inputnombreT,
        'inputOcupacionC': inputOcupacionC,
        'NHijos': NHijos,
        'THijos': THijos,
        'NAutos': NAutos,
        'ingresosA': ingresosA,
        'TipoP': TipoP,
        'Ciudad': Ciudad,
        'dia': dia,
        'mes': mes,
        'CUnitario': CUnitario,
        'PrecioU': PrecioU,
        'inputSubC': inputSubC,
        'inputPesoP': inputPesoP,
        'inputDesc': inputDesc,
        'inputDevo': inputDevo,
        'inputVentaT': inputVentaT,
        'inputGanancias': inputGanancias,
        'inputEstadoC': inputEstadoC,
        'genero': genero,
        'inputEDUC': inputEDUC,
        'casa': casa,
        'inputPromociones': inputPromociones,
        'inputpoDesc': inputpoDesc,
        'pais': pais,
        'region': region,
        // Agrega más campos según sea necesario...
    };

    // Realizar la solicitud POST al servidor
    fetch('/resultados', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
        .then(response => response.json())
        .then(data => {
            // Manipular la respuesta JSON como sea necesario
            console.log('Respuesta del servidor:', data);
            // Puedes actualizar la interfaz de usuario con los datos recibidos
             realizarPrediccion();
        })
        .catch(error => {
            console.error('Error al realizar la solicitud:', error);
        });
}
        });
    } else {
        console.error("El formulario con ID 'formularioPrediccion' no se encontró en el DOM.");
    }
});

 //metodo prediccion
async function realizarPrediccion() {
    const nproducto = document.getElementById('nproducto').value;
    const cproducto = document.getElementById('cproducto').value;
    const nombreM = document.getElementById('inputnombreM').value;

    const response = await fetch(`/prediccion?nproducto=${nproducto}&cproducto=${cproducto}&inputnombreM=${nombreM}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();

    // Lógica para manejar la predicción en el lado del cliente
    const prediccionInput = document.getElementById('prediccion');
    prediccionInput.value = data.categoria_predicha;
    // Puedes agregar más manipulación DOM según sea necesario...
}





// Declarar variables globales para dia y mes
var dia;
var mes;
// Configuración del Datepicker
$(document).ready(function () {
    $('#fechaSelector').datepicker({
        format: 'dd/mm/yyyy',
        autoclose: true,
        todayHighlight: true
    }).on('changeDate', function (e) {
        // Se ejecutará cuando cambie la fecha seleccionada

        // Obtener el día y el mes
        var fechaSeleccionada = e.date;
         dia = fechaSeleccionada.getDate();
         mes = fechaSeleccionada.getMonth() + 1; // Los meses en JavaScript son de 0 a 11, sumamos 1 para obtener el mes real

    });
});


function validarSoloLetras(input) {
    // Expresión regular que permite solo letras (sin espacios)
    const regex = /^[A-Za-z]+$/;

    if (!regex.test(input.value)) {
        // Si el valor no cumple con la expresión regular, limpia el campo
        input.value = input.value.replace(/[^A-Za-z]/g, '');
    }}

    function validarSoloNumeros(input) {
        // Elimina caracteres no numéricos y puntos decimales
        input.value = input.value.replace(/[^\d]/g, '');
    
        // Si deseas permitir solo números enteros, descomenta la siguiente línea
        // input.value = Math.floor(input.value);
    }


    function validarSoloNumerosCos(input) {
        // Reemplaza todo lo que no sea un dígito o un punto decimal con una cadena vacía
        input.value = input.value.replace(/[^\d.]/g, '');
    
        // Asegúrate de que solo haya un punto decimal permitido
        let countDecimals = (str) => (str.split('.').length - 1);
        if (countDecimals(input.value) > 1) {
            let parts = input.value.split('.');
            input.value = parts[0] + '.' + parts.slice(1).join('');
        }
    }
    

    function enviarFormulario(event) {
        // Capturar los datos del formulario
        var formData = capturarDatosFormulario();
    // Agregar dia y mes al objeto formData
    //formData.dia = dia;
    //formData.mes = mes;
        // Asignar los datos al campo oculto
        document.getElementById('datosFormulario').value = JSON.stringify(formData);
    
        // Si todo está bien, puedes dejar que el formulario se envíe
        return true;
    }
    