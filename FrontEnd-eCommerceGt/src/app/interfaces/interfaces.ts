
export interface Usuario{
    _id: any;
    nombre: string,
    telefono: string,
    correo: string,
    direccion: string,
    fechaNacimiento: Date,
    username:string,
    password: string,
    tipoUsuario: string,
    tarjetas: Tarjeta[]
}

export interface Producto{
    _id: any;
    nombre: string,
    descripcion: string,
    precio: number,
    imagen: string,
    categoria: [],
    usuario:string,
    estado: string
}

export interface Tarjeta{
    numero: string;
    nombre: string;
    fechaExpiracion: Date;
    cvv: number;
}