# Quantum Mart API
<img width="1920" alt="quantum-mart-api" src="https://github.com/edgarlopezcalomarde/quantum-mart-api/assets/24995646/8a820fd1-360d-46b1-b55c-47d740042e6a">

## Acerca de Quantum Mart API

Se trata de una API REST que envuelve la logica detras de una tienda online (en este caso de dispositivos electronicos),
esta cuenta con un sistema de autenticacion, gestion de usuario y un punto de acceso para mostrar productos, atualizar su 
stock / caractericas y dar de baja un producto.

### Arquitectura - Domain Driven Design(DDD) + MICROSERVICIO

Esta arquitectura se base en : 

Domain - Definicion de tu negocio || Reglas del negocio
Applicacion - Casos de uso
Infraestructura -  Implementaciones || Conexion base de datos, Sistema de rutas, Controladores

#### Comunicacion Entre Capas

Infraestructura ->  Infraestructura
Infraestructura ->  Aplicacion
Infraestructura ->  Dominio

Aplicacion ->  Aplicacion
Aplicacion ->  Dominio

Dominio ->  Dominio


#### Enfoque como MICROSERVICIO

Si quisiesemos transformar cada una de las capas de nuestro API en un microservicio lo unico que deberiamos agregar 
en la capa de infraestructura es la conexion a la base de datos osea una carpeta db con el init a la base de datos
y su propio archivo app para lanzar el servicio.


#### Adicional aplicacion del patron Repository
Para esta API REST se ha aplicado el patron de diseño Repository en el que defines una serie de metodos por una interfaz 
que nunca van ha cambiar ha esto le llamamos repository, lo que cambia es la manera de implementar estos metodos en f
uncion de la base de datos (en este caso, osea me refiero al DB que tu podrias aplicar este patron de diseño en tu vida 
comun para otro aspecto que no fuese una base de datos).


## Tecnologías 🛠
- [HTML](https://developer.mozilla.org/es/docs/Web/HTML)
- [Javascript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [Typescript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [Vite](https://vitejs.dev/guide/)
- [Node](https://nodejs.org/es/docs)

## Librerias
- [valibot](https://valibot.dev/)
- [express](https://expressjs.com/es/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [mysql2](https://www.npmjs.com/package/mysql2)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)


## Autor 🐱‍🐉
**Edgar Lopez Calomarde**

- [edgarlopezcalomarde@gmail.com](micorreo@midominio.com)
- [LinkedIn](https://www.linkedin.com/in/edgar-lopez-calomarde-971966212/)
- [Portfolio](https://edgarlopezcalomarde.github.io/)

## Instalación 

Ejecute los siguientes comandos en el directorio raiz del proyecto:

```bash
    npm i
    npm run dev
```
  
