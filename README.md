#ADMINISTRAR Y GESTIONAR PEDIDOS
-

### 1. ¿Qué es el proyecto?

El proyecto consiste en la creación de un sistema de gestión de pedidos para una empresa de venta de productos `GASTRONOMICO`. El sistema debe permitir la creación de nuevos pedidos, la gestión de los mismos (incluido el seguimiento del estado del pedido), la actualización de la información de los clientes y la generación de reportes de ventas.



### 2. ¿Cuál es la arquitectura del sistema?

El sistema se implementará utilizando tecnologías como `NODE`, `EXPRESS`, `MONGODB` y para la interface `REACT - TAILWAIND`. La arquitectura del sistema será una arquitectura de tipo MVC (Modelo-Vista-Controlador), donde los modelos representarán los datos, las vistas serán las interfaces de usuario y los controladores serán los encargados de manejar las peticiones y respuestas del sistema.

#Descarga
-
Podrán descargar el repositorio al hacer clic en el botón verde `<> Code` de Github y hacer clic en `Download ZIP` para que se les descargue todo el repositorio.

Otra opción también es hacer clic en el botón verde `<> Code` de Github y hacer clic en HTTPS y copiar el link.

Luego ir a la carpeta de nuestra computadora donde queremos guardar nuestro proyecto y ejecutar el comando:
```
git clone <link HTTPS>
```

#Instalación
-
Para probar el proyecto primero deberán posicionarse dentro de la carpeta del proyecto y ejecutar los comandos:

En primer lugar se deberá copiar el archivo 	`.env.example` y renombrarlo como `.env` y completar las variables de entorno `PORT`, `DB_CNN` y `SECRET_JWT`.

En caso de no hacerlo el proyecto no se ejecutará por no tener el link de conexión con la base de datos MongoDB y faltara la seed para generar los JSON Web Token.

Si no se ingresa un puerto, el proyecto se ejecutará por defecto en el puerto 3000.

Para instalar todas las dependencias:
```
npm install
```
Otra opción seria ejecutar el comando:
```
npm i .
```
Para ejecutar el proyecto:
```
npm run dev
```



