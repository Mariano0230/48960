Este proyecto consiste en la construcción de un analizador léxico, sintáctico e intérprete básico utilizando ANTLR4 y JavaScript.
El mismo permite procesar un archivo con código fuente escrito en un sublenguaje reducido y adaptado de JavaScript.
Entre sus funcionalidades se incluyen: validación del código fuente, construcción del árbol de análisis sintáctico, generación de tabla de tokens y ejecución del código como lo haría un intérprete básico.

Requisitos para poder ejecutarlo:

* Node.js versión 18 o superior
* ANTLR4 versión 4.13.2
* Git (opcional, para clonar el repositorio)

Clonación del Repositorio

Abrir una terminal (cmd, PowerShell, Bash, etc.).
Ejecutar el siguiente comando para clonar el repositorio:

git clone https://github.com/Mariano0230/48960

cd 48960

Instalar las dependencias necesarias:

npm install


Estructura del Proyecto


Calculator.g4: Archivo con la gramática ANTLR.

CustomCalculatorListener.js y CustomCalculatorVisitor.js: Módulos personalizados generados a partir de la gramática.

index.js: Archivo principal del proyecto que ejecuta el análisis e interpretación.

input.txt: Archivo de entrada donde se colocan los programas escritos en el sublenguaje definido.

generated/: Carpeta donde ANTLR genera los archivos léxicos y sintácticos.

Generación del Parser con ANTLR

Si es necesario regenerar los archivos del parser, ejecutar el siguiente comando desde la raíz del proyecto:

antlr4 -Dlanguage=JavaScript -o generated Calculator.g4

Ejecución del Analizador

Editar el archivo input.txt con el código que se desea analizar. Ejemplos válidos e inválidos se presentan a continuación.


Ejecutar el proyecto con:


npm start

El resultado se mostrará en la terminal. Este incluye:

Validación del análisis léxico y sintáctico

Árbol de derivación del programa ingresado

Ejecución del código si es válido

Ejemplos de Entrada

Ejemplo Correcto 1

let a = [1, 2, 3];
for (a = 0; a = 5) {
  console.log(a);
}

Ejemplo Correcto 2

let x = [5];
console.log(x);

Ejemplo Incorrecto 1 (falta punto y coma)

let b = [1, 2, 3]

Ejemplo Incorrecto 2 (uso de palabra no reconocida)

print(a);


Notas Finales


El analizador indica la línea y el tipo de error en caso de encontrarse alguno.
El proyecto sigue las especificaciones requeridas por la cátedra, incluyendo análisis, generación de tokens, árbol sintáctico e interpretación del código.
