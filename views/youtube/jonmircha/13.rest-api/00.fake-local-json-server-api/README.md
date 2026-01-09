## Selección de idioma / Language Selection

- [Español](#json-server---api-rest-falsa-local)
- [English](#json-server---fake-local-rest-api)

# JSON Server - API REST Falsa Local

## ¿Qué es JSON Server?

JSON Server es una herramienta que permite crear una API REST falsa de manera rápida y sencilla utilizando un archivo JSON como base de datos. Es ideal para prototipado, desarrollo frontend, pruebas y aprendizaje de conceptos de APIs REST sin necesidad de un backend real.

Con JSON Server, puedes simular operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre tus datos, proporcionando endpoints RESTful automáticamente.

## Instalación

### Requisitos previos
- Node.js instalado (se recomienda la versión 12.16.1 o superior).

### Instalación global
Para instalar JSON Server globalmente en tu sistema, ejecuta el siguiente comando en la terminal:

```bash
npm install -g json-server
```

Esto instalará la versión más reciente. Si necesitas una versión específica (como 0.16.1), puedes especificarla:

```bash
npm install -g json-server@0.16.1
```

### Verificación de instalación
Para verificar que JSON Server se instaló correctamente, ejecuta:

```bash
json-server --version
```

Deberías ver la versión instalada.

## Creando el archivo de datos (db.json)

JSON Server utiliza un archivo JSON para almacenar los datos. Este archivo actúa como una base de datos simple.

### Estructura básica
Crea un archivo llamado `db.json` en el directorio de tu proyecto. La estructura debe ser un objeto JSON donde cada propiedad representa una "colección" o "recurso".

Ejemplo de `db.json`:

```json
{
  "usuarios": [
    {
      "id": 1,
      "nombre": "Juan",
      "email": "juan@example.com"
    },
    {
      "id": 2,
      "nombre": "María",
      "email": "maria@example.com"
    }
  ],
  "productos": [
    {
      "id": 1,
      "nombre": "Producto A",
      "precio": 10.99
    }
  ]
}
```

- Cada colección es un array de objetos.
- Cada objeto debe tener un `id` único (puede ser numérico o string).
- JSON Server genera automáticamente IDs si no los proporcionas al crear nuevos registros.

## Ejecutando el servidor

Una vez que tienes tu `db.json`, ejecuta JSON Server desde la terminal en el directorio donde se encuentra el archivo:

```bash
json-server --port 3000 assets/documents/json/db.json
```

Por defecto, el servidor se ejecutará en `http://localhost:3000`.

### Opciones de línea de comandos
JSON Server ofrece varias opciones de línea de comandos para personalizar su comportamiento:

- `--port <n>`: Especifica el puerto del servidor (por defecto 3000). Ejemplo: `json-server --port 4000 assets/documents/json/db.json`
- `--host <address>`: Especifica la dirección del host (por defecto localhost). Ejemplo: `json-server --host 0.0.0.0 assets/documents/json/db.json`
- `--watch`: Activa el modo watch, recargando automáticamente el servidor cuando cambias el archivo `db.json`. Ejemplo: `json-server --watch assets/documents/json/db.json`
- `--delay <ms>`: Agrega un delay simulado en milisegundos a las respuestas. Ejemplo: `json-server --delay 1000 assets/documents/json/db.json`
- `--help`: Muestra la ayuda con todas las opciones disponibles.
- `--version`: Muestra la versión instalada.

Para ver todas las opciones disponibles, ejecuta `json-server --help`.

## Endpoints disponibles

JSON Server crea automáticamente los siguientes endpoints REST para cada colección en tu `db.json`:

### GET (Leer)
- `GET /santos` - Obtiene todos los santos.
- `GET /santos/1` - Obtiene un santo específico por ID.
- `GET /santos?_page=1&_limit=10` - Paginación.
- `GET /santos?q=busqueda` - Búsqueda por texto.
- `GET /santos?_sort=nombre&_order=asc` - Ordenamiento.

### POST (Crear)
- `POST /santos` - Crea un nuevo santo. Envía el objeto JSON en el body.

### PUT/PATCH (Actualizar)
- `PUT /santos/1` - Actualiza completamente un santo por ID.
- `PATCH /santos/1` - Actualiza parcialmente un santo por ID.

### DELETE (Eliminar)
- `DELETE /santos/1` - Elimina un santo por ID.

## Ejemplos de uso

### Usando curl
```bash
# Obtener todos los santos
curl http://localhost:3000/santos

# Crear un nuevo santo
curl -X POST http://localhost:3000/santos -H "Content-Type: application/json" -d '{"nombre": "Pedro", "constelacion": "Centauro"}'

# Actualizar un santo
curl -X PUT http://localhost:3000/santos/1 -H "Content-Type: application/json" -d '{"nombre": "Seiya Actualizado"}'

# Eliminar un santo
curl -X DELETE http://localhost:3000/santos/1
```

### Usando JavaScript (fetch)
```javascript
// Obtener datos
fetch('http://localhost:3000/santos')
  .then(response => response.json())
  .then(data => console.log(data));

// Crear nuevo elemento
fetch('http://localhost:3000/santos', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ nombre: 'Ana', constelacion: 'Lira' }),
})
  .then(response => response.json())
  .then(data => console.log(data));
```

## Consejos adicionales

- **Persistencia**: Los cambios se guardan automáticamente en el archivo `db.json`.
- **Relaciones**: Puedes simular relaciones anidadas en tu JSON.
- **Middlewares**: JSON Server soporta middlewares personalizados para extender funcionalidad.
- **Documentación oficial**: Consulta la documentación completa en [https://github.com/typicode/json-server](https://github.com/typicode/json-server).

Este tutorial te proporciona los fundamentos para comenzar a usar JSON Server en tus proyectos de desarrollo.

---

# JSON Server - Fake Local REST API

## What is JSON Server?

JSON Server is a tool that allows you to create a fake REST API quickly and easily using a JSON file as a database. It is ideal for prototyping, frontend development, testing, and learning REST API concepts without needing a real backend.

With JSON Server, you can simulate CRUD operations (Create, Read, Update, Delete) on your data, automatically providing RESTful endpoints.

## Installation

### Prerequisites
- Node.js installed (version 12.16.1 or higher is recommended).

### Global Installation
To install JSON Server globally on your system, run the following command in the terminal:

```bash
npm install -g json-server
```

This will install the latest version. If you need a specific version (like 0.16.1), you can specify it:

```bash
npm install -g json-server@0.16.1
```

### Installation Verification
To verify that JSON Server was installed correctly, run:

```bash
json-server --version
```

You should see the installed version.

## Creating the Data File (db.json)

JSON Server uses a JSON file to store data. This file acts as a simple database.

### Basic Structure
Create a file called `db.json` in your project directory. The structure should be a JSON object where each property represents a "collection" or "resource".

Example of `db.json`:

```json
{
  "users": [
    {
      "id": 1,
      "name": "John",
      "email": "john@example.com"
    },
    {
      "id": 2,
      "name": "Mary",
      "email": "mary@example.com"
    }
  ],
  "products": [
    {
      "id": 1,
      "name": "Product A",
      "price": 10.99
    }
  ]
}
```

- Each collection is an array of objects.
- Each object must have a unique `id` (can be numeric or string).
- JSON Server automatically generates IDs if you don't provide them when creating new records.

## Running the Server

Once you have your `db.json`, run JSON Server from the terminal in the directory where the file is located:

```bash
json-server --port 3000 assets/documents/json/db.json
```

By default, the server will run on `http://localhost:3000`.

### Command Line Options
JSON Server offers several command line options to customize its behavior:

- `--port <n>`: Specifies the server port (default 3000). Example: `json-server --port 4000 assets/documents/json/db.json`
- `--host <address>`: Specifies the host address (default localhost). Example: `json-server --host 0.0.0.0 assets/documents/json/db.json`
- `--watch`: Enables watch mode, automatically reloading the server when you change the `db.json` file. Example: `json-server --watch assets/documents/json/db.json`
- `--delay <ms>`: Adds a simulated delay in milliseconds to responses. Example: `json-server --delay 1000 assets/documents/json/db.json`
- `--help`: Shows help with all available options.
- `--version`: Shows the installed version.

To see all available options, run `json-server --help`.

## Available Endpoints

JSON Server automatically creates the following REST endpoints for each collection in your `db.json`:

### GET (Read)
- `GET /saints` - Gets all saints.
- `GET /saints/1` - Gets a specific saint by ID.
- `GET /saints?_page=1&_limit=10` - Pagination.
- `GET /saints?q=search` - Text search.
- `GET /saints?_sort=name&_order=asc` - Sorting.

### POST (Create)
- `POST /saints` - Creates a new saint. Send the JSON object in the body.

### PUT/PATCH (Update)
- `PUT /saints/1` - Fully updates a saint by ID.
- `PATCH /saints/1` - Partially updates a saint by ID.

### DELETE (Delete)
- `DELETE /saints/1` - Deletes a saint by ID.

## Usage Examples

### Using curl
```bash
# Get all saints
curl http://localhost:3000/saints

# Create a new saint
curl -X POST http://localhost:3000/saints -H "Content-Type: application/json" -d '{"name": "Peter", "constellation": "Centaurus"}'

# Update a saint
curl -X PUT http://localhost:3000/saints/1 -H "Content-Type: application/json" -d '{"name": "Updated Seiya"}'

# Delete a saint
curl -X DELETE http://localhost:3000/saints/1
```

### Using JavaScript (fetch)
```javascript
// Get data
fetch('http://localhost:3000/saints')
  .then(response => response.json())
  .then(data => console.log(data));

// Create new item
fetch('http://localhost:3000/saints', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name: 'Anna', constellation: 'Lyra' }),
})
  .then(response => response.json())
  .then(data => console.log(data));
```

## Additional Tips

- **Persistence**: Changes are automatically saved to the `db.json` file.
- **Relationships**: You can simulate nested relationships in your JSON.
- **Middlewares**: JSON Server supports custom middlewares to extend functionality.
- **Official Documentation**: Check the complete documentation at [https://github.com/typicode/json-server](https://github.com/typicode/json-server).

This tutorial provides the fundamentals to start using JSON Server in your development projects.