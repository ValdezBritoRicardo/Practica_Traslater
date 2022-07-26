const URL = 'https://google-translate1.p.rapidapi.com/language/translate/v2'
const encodedParams = new URLSearchParams();
const formulario = document.querySelector('#formulario');
const results = document.querySelector('#results')

formulario.addEventListener('submit', e => {
    // evita el comportamiento por defecto del formulario
    e.preventDefault()
    console.log("Envio el formulario");
    const data = new URLSearchParams(new FormData(formulario));
    console.log(data.get('source'));
    console.log(data.get('target'));
    console.log(data.get('q'));



    const options = {

        method: 'POST',
        headers: {
           'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': '6a06afaae8msh2d73cfaa3646ec0p1c7585jsn7d048ff5332d',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        body: data
    };

    
    fetch(URL, options)
	.then(response => response.json())
	.then(response => {
        console.log(response);
        const { translations } = response.data
        const { translatedText } = translations[0];
        console.log(translatedText);
        results.innerText = translatedText
    })
	.catch(err => console.error(err));
});