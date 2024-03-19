function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("dark")
  
    // pegar a tag img
    const img = document.querySelector("#profile img")
  
    // substituir a imagem
    if (html.classList.contains("dark")) {
      // se tiver dark mode, adicionar a imagem dark
      img.setAttribute("src", "./assets/logo-branca.png")
    } else {
      // set tiver sem dark mode, manter a imagem normal
      img.setAttribute("src", "./assets/logo-preta.png")
    }
  }