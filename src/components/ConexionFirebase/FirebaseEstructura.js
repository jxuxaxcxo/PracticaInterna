import db from '../ConexionFirebase/Firebase'

export function agregarEstructuraID(idEstructura,idFormulario, idElemento) 
{
 var dateOBJ = new Date(); 
 var codigoEstructura = idEstructura
    const estructura = {
        idFormulario: idFormulario,
        idElemento: idElemento
    }
    db.collection('estructuras').doc(codigoEstructura.toString()).set(estructura).then(() => {
    //console.log(adjunto + " is added to db.")
    })
}
export function agregarEstructura(idFormulario, idElemento){

  db.collection('estructuras')
  .doc('contadorEstructura')
  .get()
  .then(doc => {
      agregarEstructuraID(doc.data().contador, idFormulario, idElemento);
      autoincrementoIdEstructura(doc.data().contador + 1);
  });

}


export function listaEstructuras() {
  const estructurasLista = [];
  let estructuras = db.collection("estructuras")
  .onSnapshot(querySnapshot => {
    querySnapshot.docChanges().forEach(change => {
    
      if (change.type === 'added') {
        estructurasLista.push(change.doc.data());
        console.log('Nueva Estructura: ', change.doc.data());
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

  return estructurasLista;
}
function autoincrementoIdEstructura(valorId)
{
   db.collection("estructuras")
   .doc("contadorEstructura")
   .update({
       contador: valorId
   })
} 
