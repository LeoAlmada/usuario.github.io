function validacion() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "20200099" && password === "1234") {
        alert("Inicio de sesión exitoso");
    } else {
        if (username !== "20200099" && password !== "1234") {
            alert("Usuario y/o contraseña incorrecta");
        } else {
            if (username !== "20200099") {
                alert("ESTE USUARIO NO EXISTE");
            } else {
                alert("CONTRASEÑA INCORRECTA");
            }
        }
    }

    limpiar();
}

function limpiar() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}