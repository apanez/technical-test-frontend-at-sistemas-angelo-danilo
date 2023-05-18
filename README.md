# Proyecto de prueba

El repositorio replica una sistema de inicio de sesión.
Hay una página de inicio que te da la bienvenida con los datos de la sesión guardados en el store de la aplicación.
En caso de no haber iniciado sesión te redirige a la página de login.

## Inicializa el proyecto

Instala las dependencias antes de inicializar la app, ejecuta

```
$ npm install
```

Para que el servicio de login funcione correctamente ejecuta

```
$ npm run server
```

Para correr la aplicación ejecuta

```
$ npm run start
```

Genera una carpeta /build para producción. Los archivos que genera estan minimizados y optimizados. Ejecuta

```
$ npm run test
```

Corre los test unitarios

```
$ npm run test:coverage
```

Corre los test unitarios y te muestra la cobertura. Desde la carpeta generada coverage se puede abrir en el navegador la cobertura

## Probar

Para probar el login se pueden usar estos datos

```
$ Usuario: test@test.com
$ Contraseña: test
```

O se puede crear un nuevo usuario desde postman. Una vez que el proceso de json-server este corriendo, se puede usar el endpoint `http://localhost:3200/register` usando el método post y pasando un objeto json con el email y el password en el body.

## Enfoque

Se usa json-server y json-server-auth para crear un servicio login de prueba.
En la carpeta services se crean todas las peticiones a los servicios.
Tenemos una carpeta reducers para gestionar los diferentes stores que puede tener la aplicacion, estos se uniran en el `store/index.ts`.
En la carpeta componentes tenemos todos los componentes necesarios.
Se usa styled-components para dar forma a los componentes.
El archivo `./routes` gestiona las rutas de la aplicación.

### Librerias

- React
- Typescript
- Redux
- Redux-saga
- json-server y json-server-auth
- axios

### Mejoras a futuro

Se puede agregar un fichero .env para gestionar diferentes entornos
Se puede agregar storybook para crear una interfaz de los componentes creados
