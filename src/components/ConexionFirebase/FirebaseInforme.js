import db from '../ConexionFirebase/Firebase'

export function agregarInformeID(idInforme, nombre, planesDeAccion, origen) 
{
  var dateOBJ = new Date(); 
  var codigoInforme = idInforme
  const informe = {
    idInforme: idInforme,
    nombre: nombre,
    fechaAtribuible: dateOBJ,
    planesDeAccion: planesDeAccion,
    origen: origen
  }
  db.collection('informes').doc(codigoInforme.toString()).set(informe).then(() => {
  })
}

export function agregarInforme(nombre, planesDeAccion, origen){

  db.collection('informes')
  .doc('contadorInforme')
  .get()
  .then(doc => {
    agregarInformeID(doc.data().contador, nombre, planesDeAccion, origen);
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

  export function listaInformes2() {
    const informesList = [];
    let users = db.collection("informes")
    .onSnapshot(querySnapshot => {
      querySnapshot.docChanges().forEach(change => {
      
        if (change.type === 'added') {
          informesList.push(change.doc.data());
          console.log('Nuevo informe: ', change.doc.data());
        }
        if (change.type === 'modified') {
          
          console.log('Informe modificado: ', change.doc.data());
         
        }
        if (change.type === 'removed') {
          
          console.log('Informe eliminado: ', change.doc.data());
        }
      });
    });
  
    return informesList;
  }

 function autoincrementoIdInforme(valorId)
 {
  console.log("Este es el valor del contador: "+valorId)
    db.collection("informes")
    .doc("contadorInforme")
    .update({
        contador: valorId
    })
 } 
 export function autoincrementoAutomaticoInforme(){

  db.collection('informes')
  .doc('contadorInforme')
  .get()
  .then(doc => {
    console.log("Este es el contador actual: "+doc.data().contador)
      autoincrementoIdInforme(doc.data().contador + 1);
    console.log("Este es el contador ya actualizado: "+doc.data().contador)
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

 export function getContadorInforme () {
   let contadorRef = db.collection('informes').doc('contadorInforme')
   let contador = contadorRef.get().then(function (doc){
     return doc.data().contador
    })
    return contador
}

export function getInformeID (id) {
  let informeRef = db.collection('informes').doc(id)
  let informe = informeRef.get().then(function (doc) {
    return doc.data()
  })
  return informe
}
