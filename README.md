# HoopShoes🏀
Este es mi tercer proyecto Front-End. Se trata de un e-commerce ficticio realizado para el tercer curso de Coderhouse; completando así la carrera de Front-End. Es posible ampliar el detalle de cada producto sin recargar la página utilizando el routing de React.

## Github
Podés acceder al respositorio en github en el siguiente link: https://github.com/Mario-Coro/desafios-react

## React
Al hacer este proyecto, aprendí a usar la biblioteca React y reforcé otros conceptos importantes de programación.

## Paquetes y componentes de código abierto utilizados:
Usé React, CSS y ChakraUI para los estilos, así como los componentes:
* [React Router Dom](https://reactrouter.com/): Necesario para cambiar las vistas y navegar por los componentes.
* [ReactBootsrap] (https://react-bootstrap.github.io/): Usado maquetar estilos de los componentes.
* [Context](https://reactjs.org/docs/context.html): React Context ya viene con la instalación de React y fue importante para la realización de este proyecto.

## Firebase
También aprendimos a usar las base de datos de firebase durante este curso de programación. Las tres colecciones realizadas para este proyecto son:
* gameData: Se utiliza para almacenar información sobre cada juego, así como la ubicación de las imágenes.
* ventas: Se utiliza para almacenar las ventas realizadas por los usuarios y así simular lo que haría un e-commerce real después de recibir los datos del usuario.
* categorías: se utiliza para almacenar categorías de forma dinámica. Sin embargo, no sería muy dinámico porque agregar más categorías rompería la capacidad de respuesta y los estilos del menú desplegable. Se interactua con firebase principalmente con las funciones en la carpeta de helpers.

### Helpers
Cada una de estas carpetas recibe parametros; por ejemplo un id, un array de ids o una categoría, y devuelve información almacenada en firebase o en el local-storage. 

## Componentes
Hay muchos componentes y voy a dar un breve resumen de lo que hacen.
* ItemListContainer: Muestra todos los productos independiente de la categoria.
* ItemDetailContainer: Muestra el producto especifico con mas detalles al clickear en el mismo.


## Gracias por leer y espero que te guste!!