# Bienvenido a mi primera API en TypesScript!😅

### El repositorio sigue la siguiente estructura:
- /build: que es la carpeta en que se compila js
- /src: codigo fuente de la aplicación de typeScript. Que a su vez esta ordenado en
  
        - /database: Contiene todo lo relacionado a la base de datos, se puede ver como una primera capa
        - /models: Contiene los modelos de las entidades, por ejemplo para la entiedad cliente se tiene los modelos ClientIn y ClientOut
        - /routes: Se definen las rutas de la aplicación
        - /services: Contiene funciones auxiliares que se conectan con la base de datos y entregan los modelos correspondientes, se puede ver como una capa intermedia


### ¿Cómo correr la aplicación localmente? 
Para esto debes abrir una terminal en ./ del repositorio y correr `npm run dev` 🏃‍♀️ Luego de esto la API esta lista para ser usada atraves de POSTMAN

### Endpoints disponibles 👀
- GET /harvest: Podrás obtener toda la información de las cosechas
- POST /harvest: Puedes guardar la información de una cosecha, si es que no existe el agricultor, cliente, campo y fruta, la aplicación lo creará por ti para que no debas preocuparte! Solo debes mandar el siguiente formato JSON:
  
         {
            "farmerEmail": "",
            "farmerName": "",
            "farmerLastName": "",
            "clientEmail": "",
            "clientName": "",
           "clientLastName": "",
           "fieldName": "",
           "fieldLocation": "",
           "fruit": "",
           "harvestVariety": ""
         }
- POST /harvest/csv: Puedes cargar un archivo .csv con la información de las cosechas. Para este caso se asume que siempre los campos tendran el mismo orden es decir que el orden de las columnas es el siguiente:
    Mail Agricultor	Nombre Agricultor	Apellido Agricultor	Mail Cliente	Nombre Cliente	Apellido Cliente	Nombre Campo	Ubicaci√≥n de Campo	Fruta Cosechada	Variedad Cosechada![image](https://github.com/josefaespnza/backend-task/assets/42595117/61ea4549-9fb0-4488-9314-36807de9ea9a)
    Para usar este endpoint debes cargar el archivo .csv desde postman con key igual a 'file'. En el caso de que alguna de las entidades (agricultor, cliente, fruta, campo) no este en la base de datos no debes preocuparte porque se agregará automaticamente👏🏻

### Siguientes pasos (TODO)🔜
Lo siguiente no se alcanzó a revisar por temas de tiempo, pero se espera ser agregado en un futuro (o no🤫):
- agregar ENDPOINTS para eliminar y editar cosechas
- agregar ENDPOINTS tipo CRUD para las entidades farmer, client, fruit y field
- mejorar la limpieza del codigo (piedad la API fue creada en un día🥺)


