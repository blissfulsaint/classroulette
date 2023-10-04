// this will take the partial and render it in html using the parent element
export function renderWithTemplate(template, parentElement, data, callback) {
    parentElement.insertAdjacentHTML('afterbegin', template);
    if (callback) {
        callback(data);
    }
}

// this will load the partial using the file path
async function loadTemplate(path) {
    const res = await fetch(path);
    const template = await res.text();
    return template;
}

export async function loadHeaderNavFooter() {
    const headerTemplate = await loadTemplate('../partials/header.html');
    const headerElement = document.querySelector('header');

    renderWithTemplate(headerTemplate, headerElement);

    const navTemplate = await loadTemplate('../partials/nav.html');
    const navElement = document.querySelector('nav');

    renderWithTemplate(navTemplate, navElement);

    const footerTemplate = await loadTemplate('../partials/footer.html');
    const footerElement = document.querySelector('footer');

    renderWithTemplate(footerTemplate, footerElement);
}