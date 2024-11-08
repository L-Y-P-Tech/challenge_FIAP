function clickMenu(){
    if(itens.style.display == 'block'){
        itens.style.display = 'none';
    }else{
        itens.style.display = 'block';
    }
    
    const burguer = document.getElementById('burguer');
    const menu = document.getElementById('itens');

burguer.addEventListener('click', () => {
    menu.classList.toggle('active'); // Alterna a classe 'active'
});
    
}

function toggleDenuncias() {
    const content = document.getElementById("opcoes_denuncia");
    content.style.display = content.style.display === "none" ? "block" : "none";
}