# Codesa Frontend Test

## Link a la aplicación:

## Credenciales de administrador:
* usuario: darioparejadiaz
* contraseña: admin1234

## Descripción
### Rutas:
Esta aplicación cuenta con un router de 4 posibles paths:
* "/" la cual redigirirá a "/login" si hay no se ha logeado
* "/login": ruta por defecto
* "/users": Muestra la lista de usuarios y formulario de creación/actualización
* "/not-found": Ruta por defecto para cualquier path que no coincida con los anteriormente mencionados

### Guardian:
Esta aplicación cuenta con un guardian de acceso hacia el path "/users", el cual no permite la navegación hacia dicha ruta si no se está logueado con las credenciales de administrador.

### datos 
Esta aplicación no se encuentra conectada a ningún backend con base de datos, por lo cual todos los datos de usuarios y administrador se cargarán en memoria una vez ejecutado el programa. Toda manipulación de datos a través de operaciones CRUD persistirán siempre que la aplicación no se reinicie.
