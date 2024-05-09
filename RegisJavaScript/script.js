document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Mengambil nilai dari setiap input
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var dob = document.getElementById("dob").value;
    var gender = document.getElementById("gender").value;
    var program = document.getElementById("program").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
    var mother = document.getElementById("mother").value;
    var father = document.getElementById("father").value;
    var photo = document.getElementById("photo").value; // Pada kenyataannya, tidak mungkin mengambil nilai file input seperti ini
    
    // Menampilkan nilai yang diambil di bawah form
    var formData = document.getElementById("formData");
    formData.innerHTML = `
        <h2>Informasi yang diisi:</h2>
        <p>Nama: ${name}</p>
        <p>Email: ${email}</p>
        <p>Tanggal Lahir: ${dob}</p>
        <p>Jenis Kelamin: ${gender}</p>
        <p>Program yang Diinginkan: ${program}</p>
        <p>Alamat: ${address}</p>
        <p>Nomor Telepon: ${phone}</p>
        <p>Nama Ibu: ${mother}</p>
        <p>Nama Ayah: ${father}</p>
        <p>Foto: ${photo}</p>
    `;
});
