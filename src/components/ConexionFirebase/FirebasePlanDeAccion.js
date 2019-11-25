import db from '../ConexionFirebase/Firebase'

export function agregarIdPA(idPA, informeId, encargadoId, formularioId, noConformidad) 
{
 var dateOBJ = new Date(); 
 var codigoPA = idPA
    const planPA = {
        idPA: codigoPA,
        fecha: dateOBJ,
        informeId: informeId,
        encargadoId: encargadoId,
        formularioId: formularioId,
        noConformidad: noConformidad
    }
    db.collection('planesDeAccion').doc(codigoPA.toString()).set(planPA).then(() => {
    })
}
export function agregarPA(informeId, encargadoId, formularioId, noConformidad){

  db.collection('planesDeAccion')
  .doc('contadorPlanDeAccion')
  .get()
  .then(doc => {
      agregarIdPA(doc.data().contador, informeId, encargadoId, formularioId, noConformidad);
      autoincrementoIdPA(doc.data().contador + 1);
  });

}
export function listaPA() {
    const paLista = [];
    let usuarios = db.collection("planesDeAccion")
    .get()
    .then(snap => {
        snap.forEach(doc => {
        paLista.push(doc.data());
        console.log(doc.id, '=>', doc.data());
        });
    });
    return paLista;
  }
 function autoincrementoIdPA(valorId)
 {
    db.collection("planesDeAccion")
    .doc("contadorPlanDeAccion")
    .update({
        contador: valorId
    })
 } 