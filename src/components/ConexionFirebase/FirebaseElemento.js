import db from '../ConexionFirebase/Firebase'

export function agregarElementoID(idElemento, nombre) 
{
 var dateOBJ = new Date(); 
 var codigoElemento = idElemento
    const elemento = {
        idElemento: idElemento,
        nombre: nombre
    }
    db.collection('elementos').doc(codigoElemento.toString()).set(elemento).then(() => {
    //console.log(adjunto + " is added to db.")
    })
}
export function agregarElemento(nombre){

  db.collection('elementos')
  .doc('contadorElemento')
  .get()
  .then(doc => {
      agregarElementoID(doc.data().contador, nombre);
      autoincrementoIdElemento(doc.data().contador + 1);
  });

}


export function listaElementos() {
  const elementosLista = [];
  let elementos = db.collection("elementos")
  .onSnapshot(querySnapshot => {
    querySnapshot.docChanges().forEach(change => {
    
      if (change.type === 'added') {
        elementosLista.push(change.doc.data());
        console.log('Nuevo Elemento: ', change.doc.data());
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

  return elementosLista;
}
function autoincrementoIdElemento(valorId)
{
   db.collection("elementos")
   .doc("contadorElemento")
   .update({
       contador: valorId
   })
} 
