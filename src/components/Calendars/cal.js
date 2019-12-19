export function sendM(dir)//idCampo,idPA, idElemento, campoA) 
{
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ignacioballonq@gmail.com",
        Password : "295546BC024CF7DB6B2FA3139B754BD79139",
        To : dir,
        From : "ignacioballonq@gmail.com",
        Subject : "Recordatorio",
        Body : "<html><h2>Header</h2><strong>Bold text</strong><br>euuuy</br><em>Italic</em></html>"
    }).then(
      message => alert(message)
    );
 
    /*const campo = {
        idPA: idPA,
        idElemento: idElemento,
        campo: campoA
    }*/
    
}