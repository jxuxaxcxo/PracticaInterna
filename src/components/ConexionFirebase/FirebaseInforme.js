import db from '../ConexionFirebase/Firebase'


export function agregarInformeID(idInforme,adjunto, tipo) 
{
 var dateOBJ = new Date(); 
 var codigoInforme = idInforme
    const informe = {
        idInforme: idInforme,
        adjunto: adjunto,
        fecha: dateOBJ,
        tipo: tipo
    }
    db.collection('informes').doc(codigoInforme.toString()).set(informe).then(() => {
    //console.log(adjunto + " is added to db.")
    })
}
export function agregarInforme(adjunto, tipo){

  db.collection('informes')
  .doc('contadorInforme')
  .get()
  .then(doc => {
      agregarInformeID(doc.data().contador, adjunto, tipo);
      console.log("aqui el contador -> " + doc.data().contador);
      autoincrementoIdInforme(doc.data().contador + 1);
  });

}


  export function listaInformes() {
    const informesLista = [];
    let usuarios = db.collection("informes")
    .get()
    .then(snap => {
        snap.forEach(doc => {
        informesLista.push(doc.data());
        console.log(doc.id, '=>', doc.data());
        });
    });
    return informesLista;
  }
 function autoincrementoIdInforme(valorId)
 {
    db.collection("informes")
    .doc("contadorInforme")
    .update({
        contador: valorId
    })
 } 

