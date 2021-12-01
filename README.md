# rollos3d-server
Backend para gestrionar rollos de impresion 3d por medio de una api perzonalizada

## Caracteristicas
* Dashboard de control como punto de concatco con la api (en un futuro ofrecera graficas y un diseño mas agradable).
* Arquitectura de diseño eficas por medio del patron de diseño MVC ( en las proximas actualizaciones se agregara el patron DTO).
* Pruebas automatizadas por ahora solo pruebas unitarias, se espera en el futuro agregar pruebas de extremo a extremo.
* Scrupts perzonalizados para la automatizacion de tareas como cargar la base de datos y ejecutar pruebas.

## Instalacion
1. Clone el proyecto desde `https://github.com/Andres-Fernandez-Caballero/rollos3d-server`
2. Dentro de la carpeta del proyecto cambie el nombre del archivo `.env.example` por `.env`
3. En el archivo `.env` cambie los valores de la base de datos a los correspondientes en su entorno de desarrolo y guarde los cambios
4. Abra un terminal de comandos y ejecute `npm install` esto instalara todas las dependecias y finalmente creara una base de datos y la llenara con datos de prueba.
5. Para ejecutar el proyecyo en modo produccion ejecute `npm run start`, para ejcutarlo en modo develpment ejecute `npm run dev`.
