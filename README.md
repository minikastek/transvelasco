## Plantilla front para Inscripciones y carreras

La base de una web con inscripciones para no empezar simplemente un proyecto de cero. Botones en navbar que navegan a las paginas que se le indica dejando el navbar y el footer siempre constantes, el logo tiene la ruta del home. 

El objetivo del proyecto es meramente educativo.

## Navegacion

Recorremos cada boton en el navbar para ir a las diversas screens que tenemos, algunas vacias, podemos clickear el logo para volver al inicio
Tambien podremos clickear el footer donde estan las categorias para cumplir la misma funcion junto con informacion extra

## Footer y Navbar

Enfocado a la navegacion, el navbar y el footer se encuentran constantes sin importar la screen en la que estemos para siempre tener el control de donde queremos ir. El navbar tiene el logo de la empresa que lleva al inicio y el footer se le suma informacion de contacto y diversos links de redes sociales

## Organizacion del proyecto

El proyecto esta organizado en una carpeta general llamada "src" dentro de ella encontraremos 3 carpetas importantes:  
-Assets, es el lugar donde dejaremos todos los elementos estaticos como imagenes o logos 
-Hooks, en esta carpeta tendremos los hooks que nos ayudaran a reutilizar el codigo en varias screens
-Components, donde tendremos todos los componentes de nuestro proyecto, en la carpeta de cada uno de los componentes, en caso de ser necesario tendran su propio archivo .css para sus respectivos estilos

## Como correr el codigo y como ver el funcionamiento 

En el modo desarollador la app corre con npm start (una vez realizado el propio npm install), para verlo en tu navegador [http://localhost:3000](http://localhost:3000) 

## Vercel

Se hizo un deploy de pruebas en vercel para poder compartirlo

https://transvelasco.vercel.app/
