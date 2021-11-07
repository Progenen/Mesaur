
export default function mobMenu(maxWidth) {
    if (window.innerWidth < maxWidth) {
        const menu = document.querySelector('.burger-menu');
        const menuBody = document.querySelector('.menu__body');

        if (menu != null) {
            console.log('ok');
            document.querySelector('.wrapper').append(menuBody);

            menu.addEventListener('click', function () {
                const group = [menu, menuBody];
                group.forEach(element => {
                    element.classList.toggle('active')
                });
                document.body.classList.toggle('lock');
            });
        }
    }
}