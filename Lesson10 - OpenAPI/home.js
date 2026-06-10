function loadCats(breedId) {
    const url = `https://api.thecatapi.com/v1/images/search?limit=9&breed_ids=${breedId}`;

    fetch(url, {
        headers: { 'x-api-key': 'live_38PzTfgfHymntk1oiEVl6I7ixqYEnR9Ben2wSRDdbcAgpSnghC9t4WzMGiAH0tCc' }
    })
        .then((response) => response.json())
        .then((data) => {
            if (!data.length || !data[0].breeds?.length){
                grid.textContent = "No images found for this breed.";
                return;
            }

            const grid = document.getElementById('grid');
            grid.innerHTML = '';

            const caption = document.createElement('div');
            caption.classList.add('caption');
            caption.textContent = data[0].breeds[0].description
            grid.appendChild(caption);

            data.forEach((imageData) => {
                const image = document.createElement('img');
                image.src = imageData.url;

                const gridCell = document.createElement('div');
                gridCell.classList.add('col', 'col-lg');
                gridCell.appendChild(image);
                

                grid.appendChild(gridCell);
            });
        })
        .catch((error) => {
            console.log(error)
            grid.innerHTML = `<p>Sorry, couldn't load cat photos. Please try again.</p>`
        });
}

function LoadBreedInfo(breedId){
    const grid = document.getElementById('grid');
    if(!grid) return;

    const url = `https://api.thecatapi.com/v1/breeds/${breedId}`;

    fetch(url, {
        headers: { 'x-api-key': 'live_38PzTfgfHymntk1oiEVl6I7ixqYEnR9Ben2wSRDdbcAgpSnghC9t4WzMGiAH0tCc' }
    })
        .then((response) => {
            if (!response.ok) throw new Error(`Request failed: ${response.status}`);
            return response.json();
        })
        .then((breed) => {
            grid.innerHTML = `
            <div class= "info">
                <h2>${breed.name}</h2>
                <p>Origin: ${breed.origin}</p>
                <p>Temperament: ${breed.temperament}</p>
                <p>Life Span: ${breed.life_span}</p>
            </div>
                `
        })
        .catch((error) => {
            console.log(error)
            grid.innerHTML = `<p>Sorry, couldn't load cat breed info. Please try again.</p>`
        });
}

let currentBreed = 'sphy';
let currentView = 'photos';

const heading = document.querySelector('.Cats');

function render(){
    if (currentView === 'photos'){
        heading.textContent = 'Grid of Cats';
        loadCats(currentBreed);
    }
    else{
        heading.textContent = 'Breed Facts';
        LoadBreedInfo(currentBreed);
    }
}

//So something shows on launch of the website
render();

document.querySelectorAll('.breed-link').forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        currentBreed = link.dataset.breed;
        render();
    });
});


document.querySelectorAll('.view-link').forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        currentView = link.dataset.view;
        render();
    })
})