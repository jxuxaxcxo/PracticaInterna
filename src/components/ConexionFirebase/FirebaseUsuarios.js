import db from '../ConexionFirebase/Firebase'

export default function agregarUsuario(mail, tipo, password, cargo) 
{
const usuario = {
    mail: mail,
    tipo: tipo,
    password: password,
    cargo: cargo
}

db.collection('usuarios').add(usuario).then(() => {
    console.log(mail + " is added to db.")
}

)
}