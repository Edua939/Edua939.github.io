const URLc = 'https://unefa6tosistemas2025api.onrender.com/api/articulos';

async function consultarAlumno(inputId) {
    const inputData = document.getElementById(inputId);
    try {
        const respuestaAlumno = await fetch(URLc + '/30874505');
        const resultadoAlumno = await respuestaAlumno.json();
        if (resultadoAlumno.Resul) {
            inputData.value = resultadoAlumno.data[0].ALUNOMBRE + ', ' + resultadoAlumno.data[0].ALUNAPELL;
        } else {
            inputData.value = resultadoAlumno.error;
        }
    } catch (error) {
        inputData.value = 'Error al consultar el alumno';
    }
}