#### Instalación.
Clonar el proyecto y dentro de el ejecutar los siguientes comandos.

```bash
$ npm install
$ npm start
```


#### Decisiones🤯 .

Cree la aplicación con la siguiente arquitectura. Cree un espacio en una carpeta llamada container con la intención de tener ahí todos los componentes centralizado que componen la aplicación, también para realizar algún tipo de lógica si se llega a necesitar. 

Tengo una carpeta llamada components donde están todos los elementos de UI, desde elementos con un enfoque de átomos como puede ser el botton o el h5, como también algunos elementos unificados creando moleculas, como es el searchbar por ejemplo. Aparte de que tenemos un archivo donde se configura y despliega el elemento de gráficos.

Cree una carpeta llamada helpers donde tengo mi espacio para colocar mis variables de entorno, en este caso solo existe el token, como también tenemos un espacio para las consultas a la API, creando así un espacio único para poder llamar y obtener datos y reutilizarlos en cualquier otro componente que así lo necesitara.

Tenemos una carpeta donde llamada context donde se crea un AppContext, esto con la intención de crear un estado global para poder llevarlo a los diferentes componentes lógicos o presentaciones si así se necesitara, creando así la posibilidad de acceder a todo el estado en cualquier parte de la app.


Finalmente tengo una carpeta llamada Hooks, con un archivo llamado useInitialState, este es el estado inicial con el que inicia la aplicación dentro del context, dentro de este archivo encontramos todos los estados que pueden ser utilizados dentro de la aplicación, como diferentes funciones que están directamente relacionadas con peticiones a la API, dejando así la tarea única de peticiones al hook, de aquí se exportan a los demás componentes dentro del context.


#### Que me faltó para ser genial 🤔.

Haciendo una evaluación clara a este punto y del material que entrego, siento que a nivel de diseño puede ser muchísimo mejor como también tener un set de testing para corroborar que la aplicación tiene seguridad de sus funcionalidades. El principal factor fue no tener el suficiente tiempo para realizar un diseño que la rompiera, con un par de días más quedaba espectacular lo prometo 🤣👌 Quitando estos 2 temas, considero que la aplicación cumple con sus objetivos.



#### Conclusiones 🚀

Personalmente me divertí mucho haciendo esta aplicación, he leído mucho en cuanto a nuevas formas de arquitectura conocí temas de los hooks que no estaba del todo claro y por sobre todo aprendí, tanto por experiencia como por documentación, temas que me ayudarán para futuros proyectos. De verdad pese a no estar al 100% de lo pedido, considero que hice mi mejor esfuerzo y dedicación para tener una app lo más cercano posible.

Todo el feedback que me puedan dar lo apreciaría un montón, se que hay margen de mejora 🤞. 

Y para terminar espero de verdad entrar con ustedes, me gusta el producto, me gusta su cultura y siento que seria en reto profesional que quisiera afrontar 🖖 .
