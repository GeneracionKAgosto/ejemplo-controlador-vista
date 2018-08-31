# Ejemplo de vista-controlador

## Controladores

Un controlador es una entidad que se encarga de administrar la lógica de
la aplicación.

En el caso de este repositorio lo estoy organizando en clases para que quede
bien estructurado.

## Vistas

Las vistas obtienen datos desde el controlador y lo dibujan en el DOM.
Si las vistas pueden ser funciones puras (sólo usan parametros) mejor.

* **Vista pura**: Un ejemplo sería el `views/users.mjs`, que no almacena
datos internos. Sólo coge los datos que le vienen por parámetros y los vuelca
en el DOM.

* **Vista impura**: Un ejemplo sería el `views/toggle-users.mjs`. Esta vista
almacena un dato para saber si ya se había bindeado el evento.
