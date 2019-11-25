import db from '../ConexionFirebase/Firebase'

export function agregarIdTarea(idTarea, encargadoId, planId, estado, fechaLimite, adjunto) 
{
 var codigoTarea = idTarea
    const planTarea = {
        idTarea: codigoTarea,
        encargadoId: encargadoId,
        planId: planId,
        estado: estado,
        fechaLimite: fechaLimite,
        adjunto: adjunto
    }
    db.collection('tareas').doc(codigoTarea.toString()).set(planTarea).then(() => {
    })
}
export function agregarTarea(encargadoId, planId, estado, fechaLimite, adjunto){

  db.collection('tareas')
  .doc('contadorTarea')
  .get()
  .then(doc => {
      agregarIdTarea(doc.data().contador, encargadoId, planId, estado, fechaLimite, adjunto);
      autoincrementoIdTarea(doc.data().contador + 1);
  });

}

export function listaTareas() {
    const tareasLista = [];
    let tareas = db.collection("tareas")
    .onSnapshot(querySnapshot => {
      querySnapshot.docChanges().forEach(change => {
      
        if (change.type === 'added') {
          tareasLista.push(change.doc.data());
          console.log('Nueva Tarea: ', change.doc.data());
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
  
    return tareasLista;
  }
  function autoincrementoIdTarea(valorId)
  {
     db.collection("tareas")
     .doc("contadorTarea")
     .update({
         contador: valorId
     })
  } 