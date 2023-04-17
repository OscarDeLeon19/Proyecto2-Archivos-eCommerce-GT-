use Proyecto2_Archivos;

db.createCollection("usuarios");

db.usuarios.createIndex({ username: 1 }, { unique: true })

db.usuarios.insertMany([
	{
	    "nombre": "Marcial Gonzalo",
	    "telefono": "30552237",
	    "correo": "marcial@gmail.com",
	    "direccion" : "18 Av 10-97 Z-1, Quetzaltenango, Guatemala",
	    "fechaNacimiento": "1988-02-16",
	    "username": "user1",
	    "password":"123456",
	    "tipoUsuario":"Comun"
	},
	{
	    "nombre": "Ainara Rio",
	    "telefono": "79261218",
	    "correo": "ainara@gmail.com",
	    "direccion" : "Calz Virgilio Rodriguez Macal Santa Elena Peten",
	    "fechaNacimiento": "1996-03-03",
	    "username": "user2",
	    "password":"123456",
	    "tipoUsuario":"Comun"
	},
	{
	    "nombre": "Monserrat Valencia",
	    "telefono": "78593595",
	    "correo": "monserrat@gmail.com",
	    "direccion" : "5 Av Sur No.20 Antigua Guatemala",
	    "fechaNacimiento": "2000-06-09",
	    "username": "user3",
	    "password":"123456",
	    "tipoUsuario":"Comun"
	},
	{
	    "nombre": "Constantino Asensio",
	    "telefono": "78329566",
	    "correo": "constantino@gmail.com",
	    "direccion" : "C De Belén No 26 Antigua Guatemala",
	    "fechaNacimiento": "2003-03-25",
	    "username": "user4",
	    "password":"123456",
	    "tipoUsuario":"Comun"
	},
	{
	    "nombre": "Jose-Antonio Arroyo",
	    "telefono": "77650535",
	    "correo": "jose@gmail.com",
	    "direccion" : "3 C 15-41 Z-3, Quetzaltenango, Guatemala",
	    "fechaNacimiento": "2001-05-15",
	    "username": "user5",
	    "password":"123456",
	    "tipoUsuario":"Comun"
	},
	{
	    "nombre": "Teodora Novo",
	    "telefono": "78799426",
	    "correo": "teodora@gmail.com",
	    "direccion" : "Km. 59 Carret. A El Salvador, Cuilapa, Santa Rosa",
	    "fechaNacimiento": "2004-01-13",
	    "username": "user6",
	    "password":"123456",
	    "tipoUsuario":"Paqueteria"
	},
	{
	    "nombre": "Maialen Arevalo",
	    "telefono": "78320786",
	    "correo": "maialen@gmail.com",
	    "direccion" : "5 C Poniente No.12 Antigua Guatemala",
	    "fechaNacimiento": "1996-02-10",
	    "username": "user7",
	    "password":"123456",
	    "tipoUsuario":"Paqueteria"
	},
	{
	    "nombre": "Jose-Antonio Arroyo",
	    "telefono": "8799426",
	    "correo": "jose@gmail.com",
	    "direccion" : "3 C 15-41 Z-3, Quetzaltenango, Guatemala",
	    "fechaNacimiento": "2001-05-15",
	    "username": "user5",
	    "password":"123456",
	    "tipoUsuario":"Administrador"
	},
]);