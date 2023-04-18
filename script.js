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
	"imagen": "data:image/jpeg;base64,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",
	"categoria": ['Tecnologia'],
	"usuario": "user1",
	"estado": "aprodabo"
  },
  {
    "nombre": "Smartwatch Apple Watch Series 7",
    "descripcion": "El nuevo smartwatch de Apple con pantalla más grande y bordes redondeados.",
    "precio": 399.99,
	"imagen": "data:image/jpeg;base64,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",
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