import db from '../ConexionFirebase/Firebase'

export function agregarCampoID(idCampo,idPA, idElemento, campoA) 
{
 var dateOBJ = new Date(); 
 var codigoCampo = idCampo
    const campo = {
        idPA: idPA,
        idElemento: idElemento,
        campo: campoA
    }
    db.collection('campos').doc(codigoCampo.toString()).set(campo).then(() => {
    //console.log(adjunto + " is added to db.")
    })
}
export function agregarCampo(idPA, idElemento, campo){

  db.collection('campos')
  .doc('contadorCampo')
  .get()
  .then(doc => {
      agregarCampoID(doc.data().contador, idPA, idElemento, campo);
      autoincrementoIdCampo(doc.data().contador + 1);
  });

}


export function listaCampos() {
  const camposLista = [];
  let campos = db.collection("campos")
  .onSnapshot(querySnapshot => {
    querySnapshot.docChanges().forEach(change => {
    
      if (change.type === 'added') {
        camposLista.push(change.doc.data());
        console.log('Nuevo Campo: ', change.doc.data());
        console.log(change.doc.id, '=>', change.doc.data());
      }
      if (change.type === 'modified') {
        
       // console.log('Modified city: ', change.doc.data());
       
      }
      if (change.type === 'removed') {
        
       // console.log('Removed city: ', change.doc.data());
      }
    });
  });

  return camposLista;
}
function autoincrementoIdCampo(valorId)
{
   db.collection("campos")
   .doc("contadorCampo")
   .update({
       contador: valorId
   })
} 
