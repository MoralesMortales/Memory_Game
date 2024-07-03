document.querySelectorAll('.caja').forEach(element => {
    element.addEventListener('click', function() {
        console.log(this);
        this.classList.add('no_see');
    });
});