
Domain Driven Design - DDD

Domain - Definicion de tu negocio || Reglas del negocio
Applicacion - Casos de uso
Infraestructura -  Implementaciones || Conexion base de datos, Sistema de rutas, Controladores


Comunicacion Entre Capas

Infraestructura ->  Infraestructura 
Infraestructura ->  Aplicacion 
Infraestructura ->  Dominio 

Aplicacion ->  Aplicacion 
Aplicacion ->  Dominio 

Dominio ->  Dominio 

Si quisiesemos transformar cada una de las capas de nuestro negocio en un microservicio lo unico que deberiamos agregar 
en la capa de infraestructura es la conexion a la base de datos osea una carpeta db con el init a la base de datos
y su propio archivo app para lanzar el servicio.

Adicional :

Repository Pattern

Consiste en aplicar un patron de diseño en el que defines una serie de metodos por una interfaz que nunca van ha cambiar
ha esto le llamamos repository, lo que cambia es la manera de implementar estos metodos en funcion de la base de datos 
(en este caso, osea me refiero al DB que tu podrias aplicar este patron de diseño en tu vida comun para otro aspecto que 
no fuese una base de datos).


Implementaciones restantes/Futuras ampliables

Productos
Validacion de entrada de datos para la parte del dominio del usuario y la autenticacion
