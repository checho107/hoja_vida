
function toggleAllVisibility() {
    var txts = document.querySelectorAll('.txt_1');
    var buttonLabel = document.getElementById('toggleButtonLabel');
    
    txts.forEach(function(txt) {
        if (txt.style.display === 'none') {
            txt.style.display = 'block';
            buttonLabel.innerText = 'Ver menos';
        } else {
            txt.style.display = 'none';
            buttonLabel.innerText = 'Ver más';
        }
    });
}

   document.addEventListener('DOMContentLoaded', function () {
                        // Función para descargar la hoja de vida
                        function downloadCV() {
                            var element = document.createElement('a');
                            var file = new Blob([document.documentElement.outerHTML], { type: 'text/html' });
                            element.href = URL.createObjectURL(file);
                            element.download = 'hoja_de_vida.html';
                            document.body.appendChild(element);
                            element.click();
                            document.body.removeChild(element);
                        }
            
                        // Agregar el evento click al botón de descarga
                        document.getElementById('downloadButton').addEventListener('click', downloadCV);
                    });