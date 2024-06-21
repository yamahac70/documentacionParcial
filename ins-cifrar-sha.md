# Características del algoritmo SHA-256

Un algoritmo hash funciona en una sola dirección: esto quiere decir que de cualquier contenido podemos generar su hash (su «huella dáctilar digital») pero de un hash no hay forma de generar el contenido asociado a él, salvo probando al azar hasta dar con el contenido.
Entre las diferentes formas de crear hashes, el algoritmo usado por SHA-256 es uno de los más usados por su equilibrio entre seguridad y coste computacional de generación, pues es un algoritmo muy eficiente para la alta resistencia de colisión que tiene.
Otra de las particularidades del SHA-256 es que la longitud del hash resultante es siempre igual, no importa lo extenso que sea el contenido que uses para generar el hash: ya sea de una letra o todas las palabras del libro de Harry Potter entero, el resultado siempre es una cadena de 64 de letras y números (con una codificación de 256 bits, 32 bytes).

## Codigo

```python
import hashlib
import os

def hashear_archivo(ruta_archivo, algoritmo='sha256'):
    # Crear un objeto de hash del algoritmo especificado
    hash_obj = hashlib.new(algoritmo)
    
    # Leer el archivo en modo binario y actualizar el objeto de hash
    with open(ruta_archivo, 'rb') as archivo:
        while True:
            # Leer el archivo en bloques de 4096 bytes
            bloque = archivo.read(4096)
            if not bloque:
                break
            hash_obj.update(bloque)
    
    # Obtener el hash final en formato hexadecimal
    hash_hex = hash_obj.hexdigest()
    
    # Obtener la carpeta donde se encuentra el archivo original
    carpeta_origen = os.path.dirname(ruta_archivo)
    
  
    return hash_hex

def verificar_hash(ruta_archivo, hash_guardado, algoritmo='sha256'):
    # Crear un objeto de hash del algoritmo especificado
    hash_obj = hashlib.new(algoritmo)
    
    # Leer el archivo en modo binario y actualizar el objeto de hash
    with open(ruta_archivo, 'rb') as archivo:
        while True:
            # Leer el archivo en bloques de 4096 bytes
            bloque = archivo.read(4096)
            if not bloque:
                break
            hash_obj.update(bloque)
    
    # Obtener el hash final en formato hexadecimal
    hash_calculado = hash_obj.hexdigest()
    
    # Comparar el hash calculado con el hash guardado
    if hash_calculado == hash_guardado:
        return True
    else:
        return False

 ```
 [Documentacion consultada](https://helix.stormhub.org/papers/SHA-256.pdf)