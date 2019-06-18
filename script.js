const searchForm = document.querySelector('#search-from');
const movie = document.querySelector('#movies');
function apiSearch(e) {
    e.preventDefault();
    const searchText = document.querySelector('.form-control').value;
    const server = 'https://api.themoviedb.org/3/search/multi?api_key=c9dcab4ae73293c483630ee3d3283fd0&language=ru&query='
        + searchText;
    requestApi('GET', server);
}

searchForm.addEventListener('submit', apiSearch);

function requestApi(method, url) {

    const request = new XMLHttpRequest();
    request.open(method, url);
    request.send();

    request.addEventListener('readystatechange', () => {
        if (request.readyState !== 4) {
            return;
        }
        if (request.status !== 200) {
            console.log('error: ' + request.status);
            return;
        }

        const output = JSON.parse(request.responseText);
        console.log(request.responseText);
        let inner = '';
        output.results.forEach(function (item) {
            let nameItem = item.name || item.title;
            let date = item.first_air_date || item.release_date;
            inner += '<div class="row"><div class="col-6">'+ nameItem +'</div><div class="col-6git remote add origin git@github.com:Denislavrov/workShop19_06.git">'+ date +'</div></div>'
        });

        movie.innerHTML = inner;
    });
}
