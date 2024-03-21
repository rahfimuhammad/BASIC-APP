const age = () => {
    let d1 = document.getElementById("date").value;
    let m1 = document.getElementById("month").value;
    let y1 = document.getElementById("year").value;
    let age = document.getElementById("age")

    let date = new Date()

    age.innerHTML = 0
    let d2 = date.getDate()
    let m2 = 1 + date.getMonth()
    let y2 = date.getFullYear()
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]


    if (d1 > 31 || m1 > 12 || y1 > y2) {
        age.innerHTML = "Invalid input"
    }
    else if(d1 < 1 || m1 < 1 || y1 < 1) {
        age.innerHTML = "Invalid input"
    }
    else {
        if(d1 > d2) {
            d2 = d2 + month[m2-1];
            m2 = m2-1
        }
        if (m1 > m2) {
            m2 = m2 + 12;
            y2 = y2 -1}
    
        let d = d2 - d1;
        let m = m2 - m1
        let y = y2 - y1
        age.innerHTML = 
                "Your Age is " + y + " Years " + m + " Months " + d + " Days "    
    }

    
}