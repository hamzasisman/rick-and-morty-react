export const fetchHeader = payload => {

    const language = JSON.parse(localStorage.getItem('language')) || 'tr';

    return {
        method: "GET",
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Accept-Language': language === 'tr' ? 'tr-TR' : 'en-US'
        }
    }
};