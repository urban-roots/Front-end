const tema = localStorage.getItem('tema');

if (tema) {
    document.body.setAttribute('data-theme', tema);
} else {
    document.body.setAttribute('data-theme', 'mural-dark');
    localStorage.setItem('tema', 'mural-dark');
}