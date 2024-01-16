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
        nombre_producto = form_data.get('nomb_producto')
        clase_producto = form_data.get('clase_producto')
        costo_unitario = form_data.get('costo_unitario')
        precio_unitario = form_data.get('precio_unitario')
        nombre_marca = form_data.get('nombre_marca')
        #color_producto = form_data.get('color_producto')
        subcategoria = form_data.get('subcategoria')
        #peso_producto = form_data.get('peso_producto')
        estado_stock = form_data.get('estado_stock')
        #cant_descuento = form_data.get('cant_descuento')
        monto_descuento = form_data.get('inputDesc')
        #cantidad_devolucion = form_data.get('cantidad_devolucion')
        monto_devolucion = form_data.get('monto_devolucion')
        #cantidad_venta = form_data.get('cantidad_venta')
        venta_total = form_data.get('Venta_total')
        ganancia = form_data.get('ganancia')
        #nombre_tienda = form_data.get('nombre_tienda')
        canal = form_data.get('canal')
        estado_civil = form_data.get('estado_civil')
        genero_cliente = form_data.get('genero_cliente')
        ocupacion_cliente = form_data.get('ocupacion_cliente')
        #hijos_en_casa = form_data.get('hijos_en_casa')
        total_hijos = form_data.get('total_hijos')
        educacion_cliente = form_data.get('educacion_cliente')
        tiene_casa = form_data.get('tiene_casa')
        numero_autos = form_data.get('numero_autos')
        ingresos_anuales = form_data.get('ingresos_anuales')
        nomb_promocion = form_data.get('nomb_promocion')
        porcentaje_descuento = form_data.get('porcentaje_descuento')
        tipo_promocion = form_data.get('tipo_promocion')
        #ciudad = form_data.get('Ciudad')
        pais = form_data.get('pais')
        region = form_data.get('region')
        dia = form_data.get('dia')
        mes = form_data.get('mes')
       
        
        # Puedes agregar más lógica según sea necesario...

        # Devolver los datos en formato JSON
        return jsonify({
            'nombre_producto': nombre_producto,
            'clase_producto': clase_producto,
            'costo_unitario': costo_unitario,
            'precio_unitario': precio_unitario,
            'nombre_marca': nombre_marca,
            #'color_producto': color_producto,
            'subcategoria': subcategoria,
             #'peso_producto': peso_producto,
            'estado_stock': estado_stock,
            #'cantidad_descuento': cantidad_descuento,
            'monto_descuento': monto_descuento,
            #'cantidad_devolucion': cantidad_devolucion,
            'monto_devolucion': monto_devolucion,
            #'cantidad_venta': cantidad_venta,
            'venta_total': venta_total,
            'ganancia': ganancia,
            #'nombre_tienda': nombre_tienda,
            'canal': canal,
            'estado_civil': estado_civil,
            'genero_cliente': genero_cliente,
            'ocupacion_cliente': ocupacion_cliente,
            #'hijos_en_casa': hijos_en_casa,
            'total_hijos': total_hijos,
            'educacion_cliente': educacion_cliente,
            'tiene_casa': tiene_casa,
            'numero_autos': numero_autos,
            'ingresos_anuales': ingresos_anuales,
            'nomb_promocion': nomb_promocion,
            'porcentaje_descuento': porcentaje_descuento,
            'tipo_promocion': tipo_promocion,
            'pais': pais,
            'region': region,
            'dia': dia,
            'mes': mes
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
