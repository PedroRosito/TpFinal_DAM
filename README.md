# Introducción
Este repositorio cuenta con una aplicación compuesta por un backend y un frontend. Del lado del backend tenemos una base de datos en un contenedor de docker que se gestiona a través de unaAPI en NodeJs. Del lado del frontend tenemos una aplicación creada utilizando el framework Ionic.
<br> Este proyecto se encuadra como trabajo final de la materia Desarrollo de aplicaciones multiplataforma de la Carrera de Especialización en IoT de la UBA.

# Estructura del proyecto

TpFinal_DAM <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/db <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/dump (contiene .sql para crear y llenar la base de datos DAM) <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;docker-compose.yml (contiene comandos para levantar el docker-compose) <br> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/tpfinal (contiene los archivos de la app de Ionic) <br> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/tpfinal_API (contiene los archivos necesarios para utilizar la API de NodeJs) <br>

# Requisitos

Para correr el presente trabajo es necesario tener instalado: <br>
* Docker y docker-compose
* NodeJs
* Ionic

## Dependencias de Node y Ionic

Una vez clonado el repositorio será necesaria correr los siguientes comandos:
- En la carpeta /tpfinal_API:
  - `npm i express --save`
  - `npm i mysql --save`
  - `npm i cors --save`
- En la carpeta /tpfinal:
  - `npm i moment --save`
  - `npm i @swimlane/ngx-datatable --save`
  - `npm i highcharts --save`
 
# Para correr el proyecto

Una vez realizadas todas las instalaciones necesarias seguir los siguientes pasos respetando el orden:
1. Crear un proyecto de ionic en blanco con el siguiente comando `ionic start ionicapp_DAM blank` y copiar todo el contenido de la carpeta /tpfinal dentro de la carpeta generada por el comando (/ionicapp_DAM).
2. Abrir una ventana de comandos dentro de la carpeta TpFinal_DAM y correr `docker-compose up`.
3. Abrir una ventana de comandos dentro de la carpeta /tpfinal_API y correr el comando `node index.js`.
4. Finalmente abrir una ventana de comandos dentro de la carpeta /ionicapp_DAM y correr el comando `ionic serve`.
<br> Si todo funcionó correctamente se abrirá una ventana en su explorador por defecto mostrando una lista de sensores.

# Trabajo futuro

Seguir mejorando la parte visual e integrar la incorporación de datos reales tomados por un sensor.
