import db from '../ConexionFirebase/Firebase'

export function agregarUsuario(nombre, apellido, mail, cargo, contraseña) 
{
  const usuario = {
    nombre: nombre,
    apellido: apellido,
    mail: mail,
    cargo: cargo,
    credenciales: [],
    contraseña: contraseña 
  }

db.collection('usuarios').doc(mail).set(usuario).then(() => {
    console.log("User is added to db.")
})
}
export function listaUsuarios() {
  const usuariosLista = [];
  let usuarios = db.collection("usuarios")
  .orderBy("mail", "asc")
  .get()
  .then(snap => {
      snap.forEach(doc => {
        usuariosLista.push(doc.data());
        // console.log(doc.id, '=>', doc.data());
      });
  });
  return usuariosLista;
}

export function getUsuarioById(mail) {
  let usuariosRef = db.collection('usuarios').where("mail", "==", mail)
  let usuario = usuariosRef.get().then(function (doc){
     return doc.data()
    })
    return usuario
} 

export function getUserCredentials(uid) {
  let usuariosRef = db.collection('usuarios').doc(uid)
   let usuario = usuariosRef.get().then(function (doc){
     return doc.data().credenciales
    })
    return usuario
}

export function listaUsuarios3() {
  const usersList = [];
  db.collection('usuarios').onSnapshot(res => {
    const changes = res.docChanges();

    changes.forEach(change => {
      
      if (change.type === 'added') {
        usersList.push({
          ...change.doc.data(),
          id: change.doc.id
        })
        
      }
    })
  })
  return usersList;
}
export function listaUsuarios2() {
  const usersList = [];
  let users = db.collection("usuarios")
  .onSnapshot(querySnapshot => {
    querySnapshot.docChanges().forEach(change => {
    
      if (change.type === 'added') {
        usersList.push(change.doc.data());
        //console.log('New city: ', change.doc.data());
      }
      if (change.type === 'modified') {
        
       // console.log('Modified city: ', change.doc.data());
       
      }
      if (change.type === 'removed') {
        
       // console.log('Removed city: ', change.doc.data());
      }
    });
  });

  return usersList;
}
export function actualizarUsuario1(id, usuario){
  
  db.collection("usuarios")
  .doc(id)
  .update(usuario)
}
export function eliminarUsuario(id){
  
  db.collection("usuarios")
  .doc(id)
  .delete()
}
export function buscarUsuario(mail){
  const usuariosLista = [];
  let usuarios = db.collection("usuarios")
  .where("mail", "==", mail)
  .get()
  .then(snap => {
      snap.forEach(doc => {
        usuariosLista.push(doc.data());
        console.log(doc.id, '=>', doc.data());
      });
  });
  return usuariosLista;
}


