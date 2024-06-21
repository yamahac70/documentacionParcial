# Comparar Archivos

```python
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
 Esta funcion compara el archivo con el hash obtenido del json generado