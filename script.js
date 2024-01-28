function activeHeader() {
  const header = document.querySelectorAll('.tab.selectable');

  if (header.length) {
    header[0].classList.add('selected');
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

const tabSection = [
  {
    tab: 'tab1',
    id: 'hello',
    isActive: true,
  },
  {
    tab: 'tab2',
    id: 'about-me',
    isActive: false,
  },
  {
    tab: 'tab3',
    id: 'projects',
    isActive: false,
  },
  {
    tab: 'tab4',
    id: 'contact',
    isActive: false,
  },
];

const activateTab = (elemento) => {
  if (!elemento.classList.contains('selected')) {
    elemento.classList.add('selected');
  }
};

window.addEventListener('scroll', function () {
  tabSection.map((section) => {
    const elemento = document.getElementById(section.id);
    const elementoRect = elemento.getBoundingClientRect();
    const tab = document.getElementById(section.tab);

    if (elementoRect.top <= 50 && elementoRect.bottom > 50) {
      console.log(section.tab);
      console.log(tab);
      activateTab(tab);
    } else {
      tab.classList.remove('selected');
    }
  });
});
