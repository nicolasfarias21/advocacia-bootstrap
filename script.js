const inputCheck = document.querySelector('#modo-noturno');
    const elemento = document.querySelector('body');

    function toggleModoNoturno() {
        const modo = inputCheck.checked ? 'dark' : 'light';
        elemento.setAttribute("data-bs-theme", modo);
    }

    toggleModoNoturno();

    inputCheck.addEventListener('click', toggleModoNoturno);