# Codesa Frontend Test

## Link a la aplicación
https://codesa-frontend-test-dario-pareja.netlify.app

## Credenciales de administrador
* usuario: darioparejadiaz
* contraseña: admin1234

## Descripción

Esta es una aplicación web Frontend  desarrollada con el framework Angular. Su propósito es poder realizar operaciones CRUD de manera local a una lista de usuarios. Todas las vistas se renderizan de manera dinámica según la ruta utilizada y la manipulación de los datos en tiempo de ejecución. Todos los formularios cuentan con validación de datos.

### Rutas:
Esta aplicación cuenta con un router de 4 posibles paths:
* "/" la cual redigirirá a "/login" si hay no se ha logeado
* "/login": ruta por defecto
* "/users": Muestra la lista de usuarios y formulario de creación/actualización
* "/not-found": Ruta por defecto para cualquier path que no coincida con los anteriormente mencionados

### Guardian:
Esta aplicación cuenta con un guardian de acceso hacia el path "/users", el cual no permite la navegación hacia dicha ruta si no se está logueado con las credenciales de administrador.

### Datos:
Esta aplicación no se encuentra conectada a ningún backend con base de datos, por lo cual todos los datos de usuarios y administrador se cargarán en memoria una vez ejecutado el programa. Toda manipulación de datos a través de operaciones CRUD persistirán siempre que la aplicación no se reinicie.

### Persistencia de la sesión administradora:
La primera vez que se inicia la aplicación se solicita las credenciales administradoras para ingresar; dichos tokens se guardan en el navegador a través de local storage para posteriores ingresos sin necesidad de logueo, a menos que se de click explícitamente en el botón de logout, lo cual borrará las credenciales de la memoria del navegador. Se recomienda no usar esta práctica en producción; su uso en esta aplicación es solo con fines didácticos.
