from flask import Flask, render_template, request, jsonify
import json
import neural_network as rn
import pandas as pd

# Crea una instancia de la aplicación Flask
app = Flask(__name__)

# Ruta principal
@app.route('/')
def index():
    return render_template('vista.html')

@app.route('/resultados', methods=['POST'])
def resultados():
    if request.method == 'POST':

        form_data = request.get_json()

        # Obtener todos los campos del formulario
        nombre_producto = form_data.get('nproducto')
        clase_producto = form_data.get('cproducto')
        nombre_marca = form_data.get('inputnombreM')
        #color_producto = form_data.get('inputColorP')
        estado_stock = form_data.get('inputStock')
        #cantidad_descuento = form_data.get('inputCantDescuento')
        monto_devolucion = form_data.get('inputMontoDev')
        #cantidad_venta = form_data.get('inputCantVenta')
        canal = form_data.get('canal')
        #nombre_tienda = form_data.get('inputnombreT')
        ocupacion_cliente = form_data.get('inputOcupacionC')
        #hijos_en_casa = form_data.get('NHijos')
        total_hijos = form_data.get('THijos')
        numero_autos = form_data.get('NAutos')
        ingresos_anuales = form_data.get('ingresosA')
        tipo_promocion = form_data.get('TipoP')
        #ciudad = form_data.get('Ciudad')
        dia = form_data.get('dia')
        mes = form_data.get('mes')
        costo_unitario = form_data.get('CUnitario')
        precio_unitario = form_data.get('PrecioU')
        subcategoria = form_data.get('inputSubC')
        #peso_producto = form_data.get('inputPesoP')
        monto_descuento = form_data.get('inputDesc')
        #cantidad_devolucion = form_data.get('inputDevo')
        venta_total = form_data.get('inputVentaT')
        ganancias = form_data.get('inputGanancias')
        estado_civil = form_data.get('inputEstadoC')
        genero = form_data.get('genero')
        educacion_cliente = form_data.get('inputEDUC')
        casa_propia = form_data.get('casa')
        #promocion = form_data.get('inputPromociones')
        porcentaje_descuento = form_data.get('inputpoDesc')
        pais = form_data.get('pais')
        region = form_data.get('region')

        # Puedes agregar más lógica según sea necesario...

        # Devolver los datos en formato JSON
        return jsonify({
            'nombre_producto': nombre_producto,
            'clase_producto': clase_producto,
            'nombre_marca': nombre_marca,
            #'color_producto': color_producto,
            'estado_stock': estado_stock,
            #'cantidad_descuento': cantidad_descuento,
            'monto_devolucion': monto_devolucion,
            #'cantidad_venta': cantidad_venta,
            'canal': canal,
            #'nombre_tienda': nombre_tienda,
            'ocupacion_cliente': ocupacion_cliente,
            #'hijos_en_casa': hijos_en_casa,
            'total_hijos_en_casa': total_hijos,
            'numero_autos': numero_autos,
            'ingresos_anuales': ingresos_anuales,
            'tipo_promocion': tipo_promocion,
            #'ciudad': ciudad,
            'dia':dia,
            'mes':mes,
            'costo_unitario': costo_unitario,
            'precio_unitario': precio_unitario,
            'subcategoria': subcategoria,
            #'peso_producto': peso_producto,
            'monto_descuento': monto_descuento,
            #'cantidad_devolucion': cantidad_devolucion,
            'venta_total': venta_total,
            'ganancias': ganancias,
            'estado_civil': estado_civil,
            'genero': genero,
            'educacion_cliente': educacion_cliente,
            'casa_propia': casa_propia,
            #'promocion': promocion,
            'porcentaje_descuento': porcentaje_descuento,
            'pais': pais,
            'region': region
        })
    
    return jsonify({'error': 'Método no permitido'}), 405


# Ruta para la predicción
@app.route('/prediccion', methods=['GET'])
def realizar_prediccion():

    json_data = resultados()
    df = pd.DataFrame([json_data])
    df = rn.modelo_predictivo(df)
    df = rn.onehot_encoding(df)
    df = rn.preparar_datos(df)
  
    categoria_predicha = rn.modelo_predictivo(df)

    # Devuelve la predicción en formato JSON
    return jsonify({
        'categoria_predicha': categoria_predicha
    })



if __name__ == '__main__':
    app.run(debug=True)