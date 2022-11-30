// declaring functions
//function to calculate students marks
function studentGrade(marks){
    if(marks<40){
        return  'E'
    }else if(marks<50){
        return 'D'
    }else if(marks<60){
        return 'C'
    }else if(marks<80){
        return 'B'
    }else{
        return 'A'
    }
}
//declaring functions
//onclick function for the button
function handleClick(event){
    let marks = parseInt(document.getElementById('marks').value)
    let realMarks = Boolean(marks) ? marks : 0
    document.getElementById('result').textContent=(studentGrade(realMarks))
}
