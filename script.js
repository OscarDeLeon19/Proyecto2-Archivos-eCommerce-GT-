//use Proyecto2_Archivos;

db.createCollection("usuarios");

db.createCollection("productos");

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
	    "nombre": "Alejo Morilla",
	    "telefono": "77769938",
	    "correo": "jose@gmail.com",
	    "direccion" : "4A. Ave. 4-52, Zona 1, Malacatan, San Marcos",
	    "fechaNacimiento": "1999-05-10",
	    "username": "user8",
	    "password":"123456",
	    "tipoUsuario":"Administrador"
	},
]);

db.productos.insertMany([
  {
    "nombre": "Smartphone Samsung Galaxy S21",
    "descripcion": "El último smartphone de Samsung con pantalla de 6,2 pulgadas y cámara de 64 megapíxeles.",
    "precio": 899.99,
	"imagen": "",
	"categoria": ['Tecnologia'],
	"usuario": "user1",
	"estado": "aprodabo"
  },
  {
    "nombre": "Smartwatch Apple Watch Series 7",
    "descripcion": "El nuevo smartwatch de Apple con pantalla más grande y bordes redondeados.",
    "precio": 399.99,
	"imagen": "",
	"categoria": ['Tecnologia'],
	"usuario": "user2",
	"estado": "aprodabo"
  },
  {
    "nombre": "Tablet Amazon Fire HD 10",
    "descripcion": "Una tablet de Amazon con pantalla Full HD de 10,1 pulgadas y batería de larga duración.",
    "precio": 149.99,
	"imagen": "",
	"categoria": ['Tecnologia'],
	"usuario": "user3",
	"estado": "aprodabo"
  },
  {
    "nombre": "Laptop Dell XPS 13",
    "descripcion": "Una laptop ultradelgada con pantalla de 13,4 pulgadas y procesador Intel Core i7.",
    "precio": 1199.99,
	"imagen": "",
	"categoria": ['Tecnologia'],
	"usuario": "user4",
	"estado": "aprodabo"
  },
  {
    "nombre": "Altavoz inteligente Amazon Echo Dot",
    "descripcion": "Un altavoz inteligente de Amazon con asistente virtual Alexa integrado.",
    "precio": 59.99,
	"imagen": "",
	"categoria": ['Tecnologia'],
	"usuario": "user5",
	"estado": "aprodabo"
  },
  {
    "nombre": "Cámara de acción GoPro Hero9 Black",
    "descripcion": "Una cámara de acción con pantalla táctil y resolución 5K para capturar tus aventuras.",
    "precio": 449.99,
	"imagen": "",
	"categoria": ['Tecnologia'],
	"usuario": "user1",
	"estado": "aprodabo"
  },
  {
    "nombre": "Consola de videojuegos Xbox Series X",
    "descripcion": "La última consola de Microsoft con procesador AMD y capacidad de hasta 8K de resolución.",
    "precio": 499.99,
	"imagen": "",
	"categoria": ['Tecnologia'],
	"usuario": "user2",
	"estado": "aprodabo"
  },
  {
    "nombre": "Impresora 3D Creality Ender 3 V2",
    "descripcion": "Una impresora 3D económica y fácil de usar para tus proyectos de prototipado y creación de objetos.",
    "precio": 229.99,
	"imagen": "",
	"categoria": ['Tecnologia'],
	"usuario": "user3",
	"estado": "aprodabo"
  },
  {
    "nombre": "Router Wi-Fi ASUS RT-AC86U",
    "descripcion": "Un router Wi-Fi de alta velocidad con tecnología MU-MIMO y seguridad AiProtection de Trend Micro.",
    "precio": 179.99,
	"imagen": "",
	"categoria": ['Tecnologia'],
	"usuario": "user4",
	"estado": "aprodabo"
  },
  {
    "nombre": "Audífonos inalámbricos Bose QuietComfort 35 II",
    "descripcion": "Audífonos inalámbricos con cancelación de ruido y asistente virtual integrado para una experiencia de audio premium.",
    "precio": 299.99,
	"imagen": "",
	"categoria": ['Tecnologia'],
	"usuario": "user5",
	"estado": "aprodabo"
  },
  {
    "nombre": "Robot aspirador iRobot Roomba 980",
    "descripcion": "Un robot aspirador inteligente con tecnología de mapeo y navegación visual para una limpieza eficiente.",
    "precio": 699.99,
	"imagen": "",
	"categoria": ['Hogar'],
	"usuario": "user1",
	"estado": "aprodabo"
  },
  {
    "nombre": "Aire acondicionado portátil LG LP0817WSR",
    "descripcion": "Un aire acondicionado portátil de 8000 BTU con control remoto y función de deshumidificación.",
    "precio": 299.99,
	"imagen": "",
	"categoria": ['Hogar'],
	"usuario": "user2",
	"estado": "aprodabo"
  },
  {
    "nombre": "Cafetera de cápsulas Nespresso Vertuo",
    "descripcion": "Una cafetera de cápsulas con tecnología de centrifugado para un café con crema y sabor excepcionales.",
    "precio": 179.99,
	"imagen": "",
	"categoria": ['Hogar'],
	"usuario": "user3",
	"estado": "aprodabo"
  },
  {
    "nombre": "Colchón de espuma viscoelástica Zinus Green Tea",
    "descripcion": "Un colchón de espuma viscoelástica de alta calidad con extracto de té verde y tecnología de alivio de presión.",
    "precio": 349.99,
	"imagen": "",
	"categoria": ['Hogar'],
	"usuario": "user4",
	"estado": "aprodabo"
  },
  {
    "nombre": "Sistema de seguridad Ring Alarm",
    "descripcion": "Un sistema de seguridad para el hogar con sensores de movimiento, contactos de puertas y ventanas, y alarma integrada.",
    "precio": 199.99,
	"imagen": "",
	"categoria": ['Hogar'],
	"usuario": "user5",
	"estado": "aprodabo"
  },
  {
    "nombre": "Humidificador ultrasónico Levoit LV600HH",
    "descripcion": "Un humidificador ultrasónico de 6 litros con control remoto y pantalla LED para una humedad perfecta en tu hogar.",
    "precio": 89.99,
	"imagen": "",
	"categoria": ['Hogar'],
	"usuario": "user1",
	"estado": "aprodabo"
  },
  {
    "nombre": "Smart TV LG OLED CX Series",
    "descripcion": "Un televisor OLED de 55 pulgadas con tecnología de imagen y sonido avanzada para una experiencia de cine en casa.",
    "precio": 1699.99,
	"imagen": "",
	"categoria": ['Hogar'],
	"usuario": "user2",
	"estado": "aprodabo"
  },
  {
    "nombre": "Aspiradora sin bolsa Dyson Cyclone V10",
    "descripcion": "Una aspiradora inalámbrica sin bolsa con tecnología de ciclones y batería de larga duración para una limpieza profunda.",
    "precio": 499.99,
	"imagen": "",
	"categoria": ['Hogar'],
	"usuario": "user3",
	"estado": "aprodabo"
  },
  {
    "nombre": "Batidora de pie KitchenAid Artisan",
    "descripcion": "Una batidora de pie con motor de alto rendimiento y diseño icónico para preparar todo tipo de recetas en tu cocina.",
    "precio": 399.99,
	"imagen": "",
	"categoria": ['Hogar'],
	"usuario": "user4",
	"estado": "aprodabo"
  },
  {
    "nombre": "Plancha de vapor Rowenta DW5080",
    "descripcion": "Una plancha de vapor de alta calidad con suela de acero inoxidable y función anti-goteo para un planchado perfecto.",
    "precio": 69.99,
	"imagen": "",
	"categoria": ['Hogar'],
	"usuario": "user5",
	"estado": "aprodabo"
  }, 
  {
    "nombre": "Cien años de soledad",
    "descripcion": "Novela del escritor colombiano Gabriel García Márquez, considerada una obra maestra de la literatura latinoamericana.",
    "precio": 129.99,
	"imagen": "",
	"categoria": ['Literatura'],
	"usuario": "user1",
	"estado": "aprodabo"
  },
  {
    "nombre": "El Quijote",
    "descripcion": "Obra cumbre de la literatura española escrita por Miguel de Cervantes, publicada en dos partes en 1605 y 1615.",
    "precio": 109.99,
	"imagen": "",
	"categoria": ['Literatura'],
	"usuario": "user2",
	"estado": "aprodabo"
  },
  {
    "nombre": "Matar a un ruiseñor",
    "descripcion": "Novela de la escritora estadounidense Harper Lee, publicada en 1960 y ganadora del Premio Pulitzer en 1961.",
    "precio": 149.99,
	"imagen": "",
	"categoria": ['Literatura'],
	"usuario": "user3",
	"estado": "aprodabo"
  },
  {
    "nombre": "La sombra del viento",
    "descripcion": "Novela del escritor español Carlos Ruiz Zafón, publicada en 2001 y considerada un clásico contemporáneo de la literatura.",
    "precio": 105.99,
	"imagen": "",
	"categoria": ['Literatura'],
	"usuario": "user4",
	"estado": "aprodabo"
  },
  {
    "nombre": "1984",
    "descripcion": "Novela distópica del escritor británico George Orwell, publicada en 1949 y considerada una obra clave en la crítica del totalitarismo.",
    "precio": 89.99,
	"imagen": "",
	"categoria": ['Literatura'],
	"usuario": "user5",
	"estado": "aprodabo"
  },
  {
    "nombre": "Crónica de una muerte anunciada",
    "descripcion": "Novela del escritor colombiano Gabriel García Márquez, publicada en 1981 y basada en un hecho real ocurrido en su pueblo natal.",
    "precio": 119.99,
	"imagen": "",
	"categoria": ['Literatura'],
	"usuario": "user1",
	"estado": "aprodabo"
  },
  {
    "nombre": "El retrato de Dorian Gray",
    "descripcion": "Novela del escritor irlandés Oscar Wilde, publicada en 1890 y considerada una obra maestra del decadentismo.",
    "precio": 79.99,
	"imagen": "",
	"categoria": ['Literatura'],
	"usuario": "user2",
	"estado": "aprodabo"
  },
  {
    "nombre": "El nombre de la rosa",
    "descripcion": "Novela histórica del escritor italiano Umberto Eco, publicada en 1980 y ambientada en una abadía medieval.",
    "precio": 139.99,
	"imagen": "",
	"categoria": ['Literatura'],
	"usuario": "user3",
	"estado": "aprodabo"
  },
  {
    "nombre": "Rayuela",
    "descripcion": "Novela experimental del escritor argentino Julio Cortázar, publicada en 1963 y considerada una obra clave del boom latinoamericano.",
    "precio": 169.99,
	"imagen": "",
	"categoria": ['Literatura'],
	"usuario": "user4",
	"estado": "aprodabo"
  },
  {
    "nombre": "Cumbres borrascosas",
    "descripcion": "Novela del escritor inglés Emily Brontë, publicada en 1847 y considerada una de las obras más importantes de la literatura romántica.",
    "precio": 109.99,
	"imagen": "",
	"categoria": ['Literatura'],
	"usuario": "user5",
	"estado": "aprodabo"
  },
  {
    "nombre": "Espejo de pared",
    "descripcion": "Espejo de pared decorativo con marco de madera tallado a mano.",
    "precio": 599.99,
	"imagen": "",
	"categoria": ['Decoracion'],
	"usuario": "user1",
	"estado": "aprodabo"
  },
  {
    "nombre": "Lámpara de mesa",
    "descripcion": "Lámpara de mesa con base de cerámica esmaltada y pantalla de lino.",
    "precio": 299.99,
	"imagen": "",
	"categoria": ['Decoracion'],
	"usuario": "user2",
	"estado": "aprodabo"
  },
  {
    "nombre": "Cojín decorativo",
    "descripcion": "Cojín decorativo con estampado geométrico y relleno de plumas sintéticas.",
    "precio": 129.99,
	"imagen": "",
	"categoria": ['Decoracion'],
	"usuario": "user3",
	"estado": "aprodabo"
  },
  {
    "nombre": "Jarrón de cerámica",
    "descripcion": "Jarrón de cerámica artesanal con acabado esmaltado en tonos pastel.",
    "precio": 399.99,
	"imagen": "",
	"categoria": ['Decoracion'],
	"usuario": "user4",
	"estado": "aprodabo"
  },
  {
    "nombre": "Cuadro decorativo",
    "descripcion": "Cuadro decorativo de estilo abstracto con marco de madera negro.",
    "precio": 499.99,
	"imagen": "",
	"categoria": ['Decoracion'],
	"usuario": "user5",
	"estado": "aprodabo"
  },
  {
    "nombre": "Alfombra de lana",
    "descripcion": "Alfombra de lana tejida a mano con patrón geométrico en tonos neutros.",
    "precio": 899.99,
	"imagen": "",
	"categoria": ['Decoracion'],
	"usuario": "user1",
	"estado": "aprodabo"
  },
  {
    "nombre": "Candelabro de metal",
    "descripcion": "Candelabro de metal con acabado dorado y capacidad para tres velas.",
    "precio": 199.99,
	"imagen": "",
	"categoria": ['Decoracion'],
	"usuario": "user2",
	"estado": "aprodabo"
  },
  {
    "nombre": "Mesa auxiliar",
    "descripcion": "Mesa auxiliar de madera maciza con acabado rústico y patas de hierro forjado.",
    "precio": 749.99,
	"imagen": "",
	"categoria": ['Decoracion'],
	"usuario": "user3",
	"estado": "aprodabo"
  },
  {
    "nombre": "Coat rack de pared",
    "descripcion": "Coat rack de pared con ganchos de latón y acabado en madera natural.",
    "precio": 299.99,
	"imagen": "",
	"categoria": ['Decoracion'],
	"usuario": "user4",
	"estado": "aprodabo"
  },
  {
    "nombre": "Tapiz decorativo",
    "descripcion": "Tapiz decorativo tejido a mano con patrón bohemio en tonos cálidos.",
    "precio": 599.99,
	"imagen": "",
	"categoria": ['Decoracion'],
	"usuario": "user5",
	"estado": "aprodabo"
  }, 
  {
    "nombre": "Libro de matemáticas",
    "descripcion": "Libro de texto para el nivel secundario con ejercicios y problemas resueltos.",
    "precio": 129.99,
	"imagen": "",
	"categoria": ['Academico'],
	"usuario": "user1",
	"estado": "aprodabo"
  },
  {
    "nombre": "Calculadora científica",
    "descripcion": "Calculadora científica de alta precisión con pantalla LCD y funciones avanzadas.",
    "precio": 349.99,
	"imagen": "",
	"categoria": ['Academico'],
	"usuario": "user2",
	"estado": "aprodabo"
  },
  {
    "nombre": "Mochila escolar",
    "descripcion": "Mochila escolar con múltiples compartimentos y diseño ergonómico.",
    "precio": 199.99,
	"imagen": "",
	"categoria": ['Academico'],
	"usuario": "user3",
	"estado": "aprodabo"
  },
  {
    "nombre": "Juego de geometría",
    "descripcion": "Juego de geometría completo con regla, escuadra y transportador.",
    "precio": 59.99,
	"imagen": "",
	"categoria": ['Academico'],
	"usuario": "user4",
	"estado": "aprodabo"
  },
  {
    "nombre": "Enciclopedia temática",
    "descripcion": "Enciclopedia temática de 5 volúmenes con información actualizada y detallada.",
    "precio": 899.99,
	"imagen": "",
	"categoria": ['Academico'],
	"usuario": "user5",
	"estado": "aprodabo"
  },
  {
    "nombre": "Cuaderno de notas",
    "descripcion": "Cuaderno de notas con tapa dura y hojas de alta calidad para escritura y dibujo.",
    "precio": 39.99,
	"imagen": "",
	"categoria": ['Academico'],
	"usuario": "user1",
	"estado": "aprodabo"
  },
  {
    "nombre": "Bata de laboratorio",
    "descripcion": "Bata de laboratorio de alta calidad con cierre frontal y múltiples bolsillos.",
    "precio": 349.99,
	"imagen": "",
	"categoria": ['Academico'],
	"usuario": "user2",
	"estado": "aprodabo"
  },
  {
    "nombre": "Set de lápices de colores",
    "descripcion": "Set de lápices de colores de alta calidad con 36 unidades y estuche de almacenamiento.",
    "precio": 89.99,
	"imagen": "",
	"categoria": ['Academico'],
	"usuario": "user3",
	"estado": "aprodabo"
  },
  {
    "nombre": "Calculadora gráfica",
    "descripcion": "Calculadora gráfica de alta gama con pantalla a color y capacidad de programación.",
    "precio": 1399.99,
	"imagen": "",
	"categoria": ['Academico'],
	"usuario": "user4",
	"estado": "aprodabo"
  },
  {
    "nombre": "Kit de experimentos",
    "descripcion": "Kit de experimentos científicos para niños y jóvenes con manual de instrucciones.",
    "precio": 249.99,
	"imagen": "",
	"categoria": ['Academico'],
	"usuario": "user5",
	"estado": "aprodabo"
  }
]);