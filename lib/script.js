const months = [
    "All",
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const getData = () => {    
    let request = sendRequest('https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2020/master/events.json');
   
    let cities = ["All"];

    JSON.parse(request.responseText).forEach(element => {
        if (!cities.includes(element.city)){
            cities.push(element.city);
        }
        addImage(element);
    }); 

    fillSelect(cities, "cities");
    fillSelect(months, "months");
};

const getFilteredImages = (month, city) => {
    removeImages('images');
    let request = sendRequest('https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2020/master/events.json');
    JSON.parse(request.responseText).forEach(element => {
        let elementMonth = Number(element.date.substring(3,5));

        if ((month === "All" && city === "All") || 
            (element.city === city && month === months[elementMonth]) ||
            (month === "All" && element.city === city ) || 
            (month === months[elementMonth] && city === "All")) {

                addImage(element);
            }
    }); 
}

const removeImages = (id) => {
    var element = document.getElementById(id);
    element.innerHTML = '';
 }

const sendRequest = (query) => {
    let request = new XMLHttpRequest();
    request.open('GET', query, false);
    request.send();
    return request
};

const fillSelect = (list,elementId) => {
    let select = document.getElementById(elementId);
    list.forEach(element => {
        let option = document.createElement('option');
        option.text = element;
        select.add(option);
    });
}
// const addMonth = (list) => {
//     let select = document.getElementById('months');
//     list.forEach(element => {
//         let option = document.createElement('option');
//         option.text = element;
//         select.add(option);
//     });
// };

// const addCity = (element) => {
//     let select = document.getElementById('cities');
//     let option = document.createElement('option');
//     option.text = element;
//     select.add(option);
// };

const addImage = (element) => {
    let image = document.createElement('img');
    image.src = element.image;
    image.className  = 'item';
    let src = document.getElementById('images');
    src.appendChild(image);
};

const changeOptions = () => {
    city = document.getElementById("cities").value;
    month = document.getElementById("months").value;
    getFilteredImages(month, city);
};

window.onload = () => {
    getData();
};