let guessCount = 0;
let randomNumber = Math.floor(Math.random() * 101);
guessCount++;

function GN() {
    // รับค่า
    let input = document.getElementById('G_N').value;
    // เช็ค
    if (input < 0 || input > 100) {
      alert('0-100ดิเห้ย!!!');
      return;
    }
    var no = "แอะๆยังน้อยไป"
    var noo = "แอะๆเยอะไป"
    var ya = "ทะเทพมาก!!!   "+ "ใช่แล้วมันคือ" + randomNumber + "ทายไปทั้งหมด   "+guessCount+"  รอบ"
    if (input == randomNumber) {
      alert(ya);
    } else  {
        if (input < randomNumber) {
            alert(no)
        }
        else {
            alert(noo)
            
        }
    }  
}

console.log(randomNumber)



    








  
  