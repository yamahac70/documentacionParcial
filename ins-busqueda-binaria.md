# Busqueda binaria

## Insercion
```python

def Insercion(hashes):
    copia_hashes = hashes[:]
    for i in range(1, len(copia_hashes)):
        key = copia_hashes[i]
        j = i - 1
        while j >= 0 and key["archivo"] < copia_hashes[j]["archivo"]:
            copia_hashes[j + 1] = copia_hashes[j]
            j -= 1
        copia_hashes[j + 1] = key
    return copia_hashes


```
## Busqueda con la lista ordenada


```python
def busquedaArchivo(archivo, hashes):
    #genero la lista ordenada 
    hasList = insercion(hashes)
    inf = 0
    sup = len(hasList) - 1
    while inf <= sup:
        #busco el medio
        med = (inf + sup) // 2
        if archivo == hasList[med]["archivo"]:
            return hasList[med]
        elif archivo < hasList[med]["archivo"]:
            sup = med - 1
        else:
            inf = med + 1
    return None
 ```