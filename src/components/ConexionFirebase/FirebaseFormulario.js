import db from '../ConexionFirebase/Firebase'

export function agregarFormularioID(idFormulario, nombre) 
{
 var dateOBJ = new Date(); 
 var codigoFormulario = idFormulario
    const formulario = {
        idFormulario: idFormulario,
        nombre: nombre
    }
    db.collection('formularios').doc(codigoFormulario.toString()).set(formulario).then(() => {
    //console.log(adjunto + " is added to db.")
    })
}
export function agregarFormulario(nombre){

  db.collection('formularios')
  .doc('contadorFormulario')
  .get()
  .then(doc => {
      agregarFormularioID(doc.data().contador, nombre);
      autoincrementoIdFormulario(doc.data().contador + 1);
  });

}


export function listaFormularios() {
  const formulariosLista = [];
  let formularios = db.collection("formularios")
  .onSnapshot(querySnapshot => {
    querySnapshot.docChanges().forEach(change => {
    
      if (change.type === 'added') {
        formulariosLista.push(change.doc.data());
        console.log('Nuevo Formulario: ', change.doc.data());
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

  return formulariosLista;
}
function autoincrementoIdFormulario(valorId)
{
   db.collection("formularios")
   .doc("contadorFormulario")
   .update({
       contador: valorId
   })
} 
