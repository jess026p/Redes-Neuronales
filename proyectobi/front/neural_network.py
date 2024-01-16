import pandas as pd
from sklearn.preprocessing import LabelEncoder
import tensorflow as tf

# función para normlaizar df
def normalizar_df(df):
    columnas_numericas = ['costo_unitario', 'precio_unitario', 'monto_descuento', 'monto_devolucion', 'dia',
                        'total_hijos', 'tiene_casa', 'Venta_total', 'ganancia', 'ingresos_anuales', 'porcentaje_descuento', 'numero_autos']

    # Convertir todas las columnas a números
    df[columnas_numericas] = df[columnas_numericas].replace(',', '.', regex=True)
    df[columnas_numericas] = df[columnas_numericas].apply(pd.to_numeric, errors='coerce')

    # Obtener los valores mínimo y máximo
    minimos = df[columnas_numericas].min()
    maximos = df[columnas_numericas].max()
    df[columnas_numericas] = (df[columnas_numericas] - minimos) / (maximos - minimos)
    return df

# función para hacer one-hot encoding df
def onehot_encoding(df):
    categorical_columns = ['nomb_producto', 'clase_producto', 'nombre_marca', 'subcategoria', 'canal', 'estado_civil', 
                        'genero_cliente', 'ocupacion_cliente', 'educacion_cliente', 'estado_stock',
                          'tipo_promocion', 'pais', 'region', 'mes', 'trimestre']
    for varname in categorical_columns:
        if varname in df.columns:
            dummy_var = pd.get_dummies(df[varname], prefix=varname)
            dummy_var = dummy_var.astype(int)
            df = pd.concat([df, dummy_var], axis=1)
            df = df.drop(varname, axis=1)
    return df

# preparar dataframe
def preparar_datos(df):
    etiqueta_columna = 'categoria'
    # Convertir las etiquetas a números
    label_encoder = LabelEncoder()
    df[etiqueta_columna] = label_encoder.fit_transform(df[etiqueta_columna])

    # Obtener características (X)
    df = df.drop(etiqueta_columna, axis=1)

    # Convertir características a tipo numérico
    df = df.apply(pd.to_numeric, errors='coerce')
    df.insert(0, 'bias', 1)

    return df


def modelo_predictivo(df):
    # Cargar el modelo y los pesos
    model = tf.keras.Sequential([
        tf.keras.layers.Dense(12, activation='sigmoid', kernel_regularizer=tf.keras.regularizers.l2(0.01), input_shape=(df.shape[1],)),
        tf.keras.layers.Dropout(0.4),
        tf.keras.layers.Dense(7, activation='tanh', kernel_regularizer=tf.keras.regularizers.l2(0.01)),
        tf.keras.layers.Dropout(0.3),
        tf.keras.layers.Dense(3, activation='sigmoid', kernel_regularizer=tf.keras.regularizers.l2(0.01)),
        tf.keras.layers.Dense(4, activation='softmax')  # 4 clases (labels)
    ])
    model.load_weights('pesos_entrenados.h5')

    predicciones = model.predict(df)

    label_encoder = LabelEncoder()
    labels = label_encoder.inverse_transform(tf.argmax(predicciones, axis=1).numpy())

    return labels[0] 

