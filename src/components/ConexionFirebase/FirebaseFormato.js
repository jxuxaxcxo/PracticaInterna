import db from './Firebase'

export function agregarFormatoID(idFormato, nombre, atributos, campos) 
{
 var codigoFormato = idFormato
    const formato = {
        idFormato: codigoFormato,
        nombre: nombre,
        atributos: atributos,
        campos: campos
    }
    db.collection('formatos').doc(codigoElemento.toString()).set(elemento).then(() => {
    //console.log(adjunto + " is added to db.")
    })
}
export function agregarFormato(nombre, atributos, campos){

  db.collection('formatos')
  .doc('contadorFormato')
  .get()
  .then(doc => {
      agregarFormatoID(doc.data().contador, nombre, atributos, campos);
      //autoincrementoIdFormato(doc.data().contador + 1);
  });

}


export function listaFormatos() {
  const formatosLista = [];
  let formatos = db.collection("formatos").orderBy("idFormato", "asc")
  .onSnapshot(querySnapshot => {
    querySnapshot.docChanges().forEach(change => {
    
      if (change.type === 'added') {
        formatosLista.push(change.doc.data());
        //console.log('Nuevo Elemento: ', change.doc.data());
        console.log(change.doc.id, '=>', change.doc.data());
      }
    });
  });

  return formatosLista;
}
function autoincrementoIdFormato(valorId)
{
   db.collection("formatos")
   .doc("contadorFormato")
   .update({
       contador: valorId
   })
} 
export function autoincrementoAutomaticoFormato(){

  db.collection('formatos')
  .doc('contadorFormato')
  .get()
  .then(doc => {
      autoincrementoIdFormato(doc.data().contador + 1);
  });
}

export function actualizarFormato(id, formato){
  db.collection("formatos")
  .doc(id.toString())
  .update(formato)
}

export function eliminarFormato(id){
  db.collection("formatos")
  .doc(id.toString())
  .delete()
}