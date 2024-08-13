function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100;
  const gender = document.querySelector('input[name="gender"]:checked').value;

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    document.getElementById('bmiMessage').innerText = "Masukkan nilai yang valid untuk berat dan tinggi.";
    return;
  }

  const bmi = weight / (height * height);
  let category = "";
  let message = "";

  if(bmi < 18.5) {
    category = "Kurus";
    message = "Anda memiliki berat badan kurang!";
  } else if(bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal";
    message = "Anda memiliki berat badan normal!";
  } else if(bmi >= 25 && bmi <= 29.9) {
    category = "Gemuk";
    message = "Anda memiliki berat badan berlebih!";
  } else {
    category = "Obesitas";
    message = "Anda mempunyai berat badan obesitas!";
  }
  document.getElementById('bmiValue').innerText = bmi.toFixed(1);
  document.getElementById('bmiCategory').innerText = category;
  document.getElementById('bmiMessage').innerText = message;
}
function downloadResult() {
  const bmiCategory = document.getElementById('bmiCategory').innerText;
  const bmiValue = document.getElementById('bmiValue').innerText;
  const bmiMessage = document.getElementById('bmiMessage').innerText;

  const text = `
Hasil Perhitungan BMI:

Kategori: ${bmiCategory}
BMI Anda: ${bmiValue}
Keterangan: ${bmiMessage}
  `;

  // Membuat file teks dan membuat link unduhan
  const blob = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Hasil_BMI.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
