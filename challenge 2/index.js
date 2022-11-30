//declaringfunctions
//function to check speed
function checkSpeed(speed){
    if(speed<=70){
        return 'OK'
    }else{
        let demeritPoints = Math.floor((speed - 70)/5)
        if(demeritPoints > 12){
            return 'Licence Revoked'
        }else{
            return demeritPoints + ' Demerit points'
        }
    }
}
//function for handling onclick button
//function to handle oninput event
function handleClick(event){
    let speedy = parseInt(document.getElementById('speed').value)
    let realSpeed = Boolean(speedy) ? speedy : 0
    document.getElementById('result').textContent = checkSpeed(realSpeed)
}