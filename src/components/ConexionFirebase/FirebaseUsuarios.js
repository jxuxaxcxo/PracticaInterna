import db from '../ConexionFirebase/Firebase'


export function agregarUsuario(mail, tipo, password, cargo) 
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
export function listaUsuarios(){

let citiesRef = db.collection('usuarios');
let allCities = citiesRef.get()
  .then(snapshot => {
    snapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
    });
  })
  .catch(err => {
    console.log('Error getting documents', err);
  });

   let usuarios = db.collection('usuarios').get();
   for(usuario in usuarios){
       console.log(usuario.mail);
   }
}
export function listaUsuarios2()
{
  

}