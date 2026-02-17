[ENGLISH]

Redux works as follows:
It looks similar to the Model–View–Controller (MVC) philosophy. Additionally, the controller role is represented by the Action and the Reducer.

You will have the View/UI (such as HTML with Vanilla JavaScript or any framework). When the View/UI reacts or makes a request to the server or interface, it generates a trigger called a dispatch. This dispatch encounters a set of actions, which at the programming level are a series of constants that must be defined. Each action that we want our application to execute will be defined with an Action.

An Action in Redux is a JavaScript object that has two properties: the action name (type) and what is known as the Payload (the data or load), which is the information being sent so the server or application can process it and later react back to the UI.

The Action carries both the data being sent and the instruction that must be executed.

The Action reaches the Reducers. Each Action corresponds to a Reducer. A Reducer is a function that, depending on the Action executed, performs certain functionality. Depending on the complexity of the application, it could be something simple like updating the UI or making an API request, connecting to a database, and waiting for the result.

This is similar to the Model–View–Controller (MVC) pattern:

* The View (View/UI).
* The Controller (Dispatch to Action and Action to Reducers).
* The Model (Store): It contains all the variables globally available to the application. Depending on what the Reducer executes—for example, making a request to an API—when the API returns a response, that response updates the global state (Store). When the global state changes, through a method called subscribe, it is connected to the View/UI.

In this way, every time an Action triggers a Reducer, the Store is affected. When the Store is affected, the subscription sends the changes to the View/UI, and the change is reflected.

That is how Redux works, where these 6 concepts exist:

View/UI → Dispatch → Action → Reducers → Store → Subscribe (cycle back to View/UI).

[SPANISH]
Redux trabaja de la siguiente forma:
Se ve similar a la filosfia de Modelo, Vista y Controlador (MVC).
Agregando, siendo el controlador en Action y Reducer.
Vas a tener View/UI (Como HTML, con Vanilla JavaScript o cualquier framework).
Cuando View/UI reacciona o hace una solicitud al servidor o a la interfaz, lo que va a hacer es generar un disparador (dispatch), y ese disparador se va a encontrar con un conjunto de acciones, a nivel de programación, va a ser una seria de constantes que se van a tener que definir. Cada una de las acciones que queremos que nuestra aplicación ejecute, se va a definir con una acción.
Una acción (Action) para Redux va a ser un objeto en JavaScript que tiene 2 propiedades, el nombre de la acción (Action) y lo que se conoce, como el Payload (Seria como el pago, la carga) que es justamente la información que se está mandando, para que servidor o la aplicación la procese y posteriormente vuelva a reaccionar con la UI.
La acción (Action) trae los datos que estamos enviando y la acción que se tiene que ejecutar.
La acción (Action), llega a los Reducers, por cada acción va a corresponder a cada Reducer, un Reducer es una función que dependiendo la acción que se ejecute, ejecutará cierta funcionalidad, dependiendo de la complejidad de la aplicación, podria ser simplemente algún cambio en la UI o hacer una petición a la API, conectarse a una base de datos, esperar el resultado.
Es similar al Modelos, Vista y Controlador (MVC).
* La vista (View/UI).
* El controlador (Dispatch hacia Action y de Action a Reducers).
* El modelo (Store): Va a tener todas esas variables va a tener de forma global disponible para nuestra aplicación y dependiendo de la función reductora (Reducer) ejecute, por ejemplo hace una solicitud (Request) hacia una API, cuando la API le devuelva la respuesta, esa respuesta va a modificar justamente en el estado global (Store) y cuando el estado global se modifica mediante un método que es el suscriptor (Subscribe), va a estar conectado a las vistas (View/UI).
De tal manera, que cada vez, mediante alguna acción que ejecute un reductor (Reducer), el store se va a ver afectado. Cuando el Store se ve afectado por el subscribe hacia View/UI, va a enviar los cambios a View/UI, se va a ver el cambio reflejado.
Esa es la forma en que Redux funciona, donde se tienen esos 6 conceptos (View/UI -> Dispatch -> Action -> Reducers -> Store -> Subscribe (Alli el ciclo hacia View/UI)).