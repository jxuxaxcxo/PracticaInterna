import db from '../ConexionFirebase/Firebase'


export function agregarInformeID(idInforme, nombre, planesDeAccion, campos) 
{
 var dateOBJ = new Date(); 
 var codigoInforme = idInforme
    const informe = {
        idInforme: idInforme,
        nombre: nombre,
        fechaAtribuible: dateOBJ,
        planesDeAccion: planesDeAccion,
        campos: campos
        
      
    }
    db.collection('informes').doc(codigoInforme.toString()).set(informe).then(() => {
    console.log(idInforme + " is added to db.")
    })
}
export function agregarInforme(nombre, planesDeAccion, campos){

  db.collection('informes')
  .doc('contadorInforme')
  .get()
  .then(doc => {
      agregarInformeID(doc.data().contador, nombre, planesDeAccion, campos);
      console.log("aqui el contador -> " + doc.data().contador);
  });

}


  export function listaInformes() {
    const informesLista = [];
    let usuarios = db.collection("informes")
    .orderBy("idInforme", "asc")
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
 export function autoincrementoAutomaticoInforme(){

  db.collection('formatos')
  .doc('contadorFormato')
  .get()
  .then(doc => {
      autoincrementoIdInforme(doc.data().contador + 1);
  });
}
 export function actualizarInforme(id, informe)
 {
    db.collection("informes")
    .doc(id.toString())
    .update(informe)
 }

 export function eliminarInforme(id)
 {
    db.collection("informes")
    .doc(id.toString())
    .delete()
 }

