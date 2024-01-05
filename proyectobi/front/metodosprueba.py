@app.route('/resultados', methods=['POST'])
def resultados():
    if request.method == 'POST':
        # Obtener los datos del formulario en formato JSON
        form_data = request.get_json()

        # Aquí puedes realizar la lógica de procesamiento de datos según tus necesidades
           # Obtener todos los campos del formulario
        nombre_producto = form_data.get('nproducto')
        clase_producto = form_data.get('cproducto')
        nombre_marca = form_data.get('inputnombreM')
        color_producto = form_data.get('inputColorP')
        estado_stock = form_data.get('inputStock')
        cantidad_descuento = form_data.get('inputCantDescuento')
        monto_devolucion = form_data.get('inputMontoDev')
        cantidad_venta = form_data.get('inputCantVenta')
        canal = form_data.get('canal')
        nombre_tienda = form_data.get('inputnombreT')
        ocupacion_cliente = form_data.get('inputOcupacionC')
        hijos_en_casa = form_data.get('NHijos')
        total_hijos_en_casa = form_data.get('THijos')
        numero_autos = form_data.get('NAutos')
        ingresos_anuales = form_data.get('ingresosA')
        tipo_promocion = form_data.get('TipoP')
        ciudad = form_data.get('Ciudad')
        fecha = form_data.get('fechaSelector')
        costo_unitario = form_data.get('CUnitario')
        precio_unitario = form_data.get('PrecioU')
        subcategoria = form_data.get('inputSubC')
        peso_producto = form_data.get('inputPesoP')
        monto_descuento = form_data.get('inputDesc')
        cantidad_devolucion = form_data.get('inputDevo')
        venta_total = form_data.get('inputVentaT')
        ganancias = form_data.get('inputGanancias')
        estado_civil = form_data.get('inputEstadoC')
        genero = form_data.get('genero')
        educacion_cliente = form_data.get('inputEDUC')
        casa_propia = form_data.get('casa')
        promocion = form_data.get('inputPromociones')
        porcentaje_descuento = form_data.get('inputpoDesc')
        pais = form_data.get('pais')
        region = form_data.get('region')

        # Puedes agregar más lógica según sea necesario...

        # Devolver los datos en formato JSON
        return jsonify({
            'nombre_producto': nombre_producto,
            'clase_producto': clase_producto,
            'nombre_marca': nombre_marca,
            'color_producto': color_producto,
            'estado_stock': estado_stock,
            'cantidad_descuento': cantidad_descuento,
            'monto_devolucion': monto_devolucion,
            'cantidad_venta': cantidad_venta,
            'canal': canal,
            'nombre_tienda': nombre_tienda,
            'ocupacion_cliente': ocupacion_cliente,
            'hijos_en_casa': hijos_en_casa,
            'total_hijos_en_casa': total_hijos_en_casa,
            'numero_autos': numero_autos,
            'ingresos_anuales': ingresos_anuales,
            'tipo_promocion': tipo_promocion,
            'ciudad': ciudad,
            'fecha': fecha,
            'costo_unitario': costo_unitario,
            'precio_unitario': precio_unitario,
            'subcategoria': subcategoria,
            'peso_producto': peso_producto,
            'monto_descuento': monto_descuento,
            'cantidad_devolucion': cantidad_devolucion,
            'venta_total': venta_total,
            'ganancias': ganancias,
            'estado_civil': estado_civil,
            'genero': genero,
            'educacion_cliente': educacion_cliente,
            'casa_propia': casa_propia,
            'promocion': promocion,
            'porcentaje_descuento': porcentaje_descuento,
            'pais': pais,
            'region': region
            # Agrega más campos según sea necesario...
        })
    
    # Si la solicitud no es POST, devuelve un error 405
    return jsonify({'error': 'Método no permitido'}), 405
#metodo get
