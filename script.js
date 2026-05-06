// 1. Acción: Efecto de cascada al aparecer
function animarEntrada() {
    const items = document.querySelectorAll('.item-galeria');
    
    items.forEach((item, index) => {
        item.classList.remove('animacion-click');
        
        // Reinicio técnico para repetir animación
        void item.offsetWidth; 
        
        setTimeout(() => {
            item.classList.add('animacion-click');
        }, index * 100); 
    });
}

// 2. Acción: Alternar Filtro Blanco y Negro
function aplicarFiltroBN() {
    const galeria = document.getElementById('mi-galeria');
    galeria.classList.toggle('filtro-bn');
}

// 3. Acción: Reiniciar todo el proyecto
function reiniciarGaleria() {
    const titulo = document.getElementById('titulo-pagina');
    const galeria = document.getElementById('mi-galeria');
    
    titulo.innerHTML = "Mis Proyectos";
    titulo.style.color = "white";
    galeria.classList.remove('filtro-bn');
    document.body.style.background = "linear-gradient(135deg, #1a1c2a 0%, #3e0a5c 100%)";
    
    console.log("Galería reiniciada");
}