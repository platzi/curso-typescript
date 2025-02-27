const fetchData = async () => {
    const API_URL = 'https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json';
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
}

let button : HTMLButtonElement = document.querySelector('.btnInfo') as HTMLButtonElement;
let paragraph : HTMLParagraphElement = document.querySelector('.info') as HTMLParagraphElement;

button.addEventListener('click', async () => {
    const data = await fetchData();
    paragraph.innerHTML = JSON.stringify(data);
});