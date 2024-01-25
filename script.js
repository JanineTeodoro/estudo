function activeHeader() {
  const header = document.querySelectorAll('.tab');

  if (header.length) {
    header[1].classList.add('selected');

    function activeTab(index) {
      header.forEach((section) => {
        section.classList.remove('selected');
      });
      header[index].classList.add('selected');
    }

    header.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}

activeHeader();

// const tabSection = [
//   {
//     tab: 'tab1',
//     section: 'hello',
//     isActive: true,
//   },
//   {
//     tab: 'tab2',
//     section: 'about-me',
//     isActive: false,
//   },
// ];

// window.addEventListener('scroll', function () {
//   const aboutMeTop = document
//     .querySelector('#about-me')
//     .getBoundingClientRect();
//   console.log('top:', aboutMeTop.top);
//   console.log('bottom:', aboutMeTop.bottom);
//   if(aboutMeTop.top <= 0 && aboutMeTop.bottom > 0)
//   tabSection.map
//   // Obtém a posição vertical da sessão em relação ao topo da janela visível
//   const posicaoSessao = section.getBoundingClientRect().top;
//   console.log(posicaoSessao);

//   // Verifica se a sessão está visível na janela
//   if (posicaoSessao < window.innerHeight && posicaoSessao > 0) {
//     // Se estiver visível, adiciona a classe 'ativada'
//     header.classList.add('selected');
//   } else {
//     // Se não estiver visível, remove a classe 'ativada'
//     header.classList.remove('selected');
//   }
// });
