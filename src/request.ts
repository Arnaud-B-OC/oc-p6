const API_URL = window.location.origin

export function request(endpoint : string) : Promise<any | undefined> {
    return new Promise((resolve) => {
        fetch(API_URL + endpoint).then((data) => data.json()).then((json) => resolve(json)).catch((err) => console.error(err));
    });
}
