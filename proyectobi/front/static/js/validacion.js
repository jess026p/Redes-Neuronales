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
var nomb_producto = document.getElementById('nomb_producto').value;
var clase_producto = document.getElementById('clase_producto').value;
var nombre_marca = document.getElementById('nombre_marca').value;
var monto_descuento = document.getElementById('monto_descuento').value;
//var color_producto = document.getElementById('color_producto').value;
var estado_stock = document.getElementById('estado_stock').value;
//var cant_descuento = document.getElementById('cant_descuento').value;
var monto_devolucion = document.getElementById('monto_devolucion').value;
//var cantidad_venta = document.getElementById('cantidad_venta').value;
var canal = document.getElementById('canal').value;
var tiene_casa = document.getElementById('tiene_casa').value;
//var nombre_tienda = document.getElementById('nombre_tienda').value;
var ocupacion_cliente = document.getElementById('ocupacion_cliente').value;
//var hijos_en_casa = document.getElementById('hijos_en_casa').value;
var total_hijos = document.getElementById('total_hijos').value;
var numero_autos = document.getElementById('numero_autos').value;
var ingresos_anuales = document.getElementById('ingresos_anuales').value;
var tipo_promocion = document.getElementById('tipo_promocion').value;
//var Ciudad = document.getElementById('Ciudad').value;
var fechaSelector = document.getElementById('fechaSelector').value;
var costo_unitario = document.getElementById('costo_unitario').value;
var precio_unitario = document.getElementById('precio_unitario').value;
var subcategoria = document.getElementById('subcategoria').value;
//var peso_producto = document.getElementById('peso_producto').value;
//var cantidad_devolucion = document.getElementById('cantidad_devolucion').value;
var Venta_total = document.getElementById('Venta_total').value;
var ganancia = document.getElementById('ganancia').value;
var estado_civil = document.getElementById('estado_civil').value;
var genero_cliente = document.getElementById('genero_cliente').value;
var educacion_cliente = document.getElementById('educacion_cliente').value;
//var casa = document.getElementById('casa').value;
//var nomb_promocion = document.getElementById('nomb_promocion').value;
var porcentaje_descuento = document.getElementById('porcentaje_descuento').value;
var pais = document.getElementById('pais').value;
var region = document.getElementById('region').value;

// Verificar si algún campo está vacío
if (
    nomb_producto === '' ||
    clase_producto === '' ||
    nombre_marca === '' ||
    monto_descuento === '' ||
    //color_producto === '' ||
    estado_stock === '' ||
    //cant_descuento === '' ||
    monto_devolucion === '' ||
    //cantidad_venta === '' ||
    canal === '' ||
    //nombre_tienda === '' ||
    ocupacion_cliente === '' ||
    //hijos_en_casa === '' ||
    total_hijos === '' ||
    numero_autos === '' ||
    ingresos_anuales === '' ||
    tipo_promocion === '' ||
    //Ciudad === '' ||
    fechaSelector === '' ||
    costo_unitario === '' ||
    precio_unitario === '' ||
    subcategoria === '' ||
    //peso_producto === '' ||
    monto_descuento === '' ||
    //cantidad_devolucion === '' ||
    Venta_total === '' ||
    ganancia === '' ||
    estado_civil === '' ||
    genero_cliente === '' ||
    educacion_cliente === '' ||
    tiene_casa === '' ||
    //nomb_promocion === '' ||
    porcentaje_descuento === '' ||
    pais === '' ||
    region === ''
) {
    alert('Por favor, complete todos los campos obligatorios antes de predecir.');
} else {
    // Realizar la predicción solo si la validación es exitosa
    alert('Realizando predicción para ' + nomb_producto + ', ' + clase_producto + ', ' + nombre_marca);

    // Preparar datos del formulario como un objeto JSON
    var formData = {
        'nomb_producto': nomb_producto,
        'clase_producto': clase_producto,
        'nombre_marca': nombre_marca,
        //'color_producto': color_producto,
        'estado_stock': estado_stock,
        //'cant_descuento': cant_descuento,
        'monto_devolucion': monto_devolucion,
        //'cantidad_venta': cantidad_venta,
        'canal': canal,
        //'nombre_tienda': nombre_tienda,
        'ocupacion_cliente': ocupacion_cliente,
        //'hijos_en_casa': hijos_en_casa,
        'total_hijos': total_hijos,
        'numero_autos': numero_autos,
        'ingresos_anuales': ingresos_anuales,
        'tipo_promocion': tipo_promocion,
        //'Ciudad': Ciudad,
        'dia': dia,
        'mes': mes,
        'trimestre':trimestre, 
        'costo_unitario': costo_unitario,
        'precio_unitario': precio_unitario,
        'subcategoria': subcategoria,
        //'peso_producto': peso_producto,
        'monto_descuento': monto_descuento,
        //'cantidad_devolucion': cantidad_devolucion,
        'Venta_total': Venta_total,
        'ganancia': ganancia,
        'estado_civil': estado_civil,
        'genero_cliente': genero_cliente,
        'educacion_cliente': educacion_cliente,
        'tiene_casa': tiene_casa,
        //'nomb_promocion': nomb_promocion,
        'porcentaje_descuento': porcentaje_descuento,
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
    const nomb_producto = document.getElementById('nomb_producto').value;
    const clase_producto = document.getElementById('clase_producto').value;
    const nombre_marca = document.getElementById('nombre_marca').value;

   
    const response = await fetch(`/prediccion?nomb_producto=${nomb_producto}&clase_producto=${clase_producto}&nombre_marca=${nombre_marca}`, {
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
var trimestre;
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
        
         if (mes >= 1 && mes <= 3) {
             trimestre = 1;
         } else if (mes >= 4 && mes <= 6) {
             trimestre = 2;
         } else if (mes >= 7 && mes <= 9) {
             trimestre = 3;
         } else {
             trimestre = 4;
         }
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
    