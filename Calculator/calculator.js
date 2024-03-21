
// 1. Selector objek-objek html

let currentInput = document.querySelector(".currentInput");
let answerScreen = document.querySelector(".answerScreen");
let buttons = document.querySelectorAll("button");
let erasebtn = document.querySelector("#erase");
let clearbtn = document.querySelector("#clear");
let evaluate = document.querySelector("#evaluate");
let realTimeScreenValue = [];

// 2. addEventListener pada clearBtn untuk reset input/operasi/hasil 

clearbtn.addEventListener("click", () => {

    realTimeScreenValue = [''];
    answerScreen.innerHTML = 0;
    currentInput.className = "currentInput";
    answerScreen.className = "answerScreen";
    answerScreen.style.color = "rgba(150, 150, 150, 0.87"
})

// 4. Preventing setiap button agar mampu mengoperasikan perhitungan, loop pada setiap button dan mencocokkan id-nya

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {

// 5. Jika yang di-klik bukan erase button, maka masukkan value button ke dalam array
        
        if (!btn.id.match("erase")) {
        
            realTimeScreenValue.push(btn.value)

// 6. objek currentInput pada innerHTML menjadi joining dari setiap value button yang diinput
            
            currentInput.innerHTML = realTimeScreenValue.join("")
    
// 7. Eksekusi penghitungan menggunakan eval() method jika input mengandung angka/num-btn 
            
        if (btn.classList.contains("num-btn")) {
                answerScreen.innerHTML = eval(realTimeScreenValue.join(""))
            }
        }

// 8. Jika input dari btn = erase, maka buang array index terakhir menggunakan method pop()
        if (btn.id.match("erase")) {
            
            realTimeScreenValue.pop();
            currentInput.innerHTML = realTimeScreenValue.join("");
            answerScreen.innerHTML = eval(realTimeScreenValue.join(""));
        }

// 9. Jika input dari btn = evaluate, maka tukar answerScreen dengan currentInput 

        if (btn.id.match("evaluate")) {
    
            currentInput.className = "answerScreen";
            answerScreen.className = "currentInput";
            answerScreen.style.color = "white";
        }
    
// 10. Jika type dari operasi penghitungan == undefined, maka ubah answerScreen pada innerHTML menjadi 0

        if (typeof eval(realTimeScreenValue.join("")) == "undefined") {
    
            answerScreen.innerHTML = 0
        }
    })
})