
export interface Usuario{
    _id: any;
    nombre: string,
    telefono: string,
    correo: string,
    direccion: string,
    fechaNacimiento:string,
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

export interface Venta{
    _id?: string,
    comprador: string,
    tarjetaCredito: string,
    fecha: Date | string, 
    producto: string,
    precio: number,
    vendedor: string,
    idProducto: string
}

export interface Pedido{
    _id?: string,
    comprador: string,
    fechaRealizacion: Date | string,
    fechaEntrega: Date | string,
    total: number,
    direccion: string,
    productos: any[],
    estado: string
}