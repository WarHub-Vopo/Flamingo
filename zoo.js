// Dátabanka pre zvieratá v Zoo
const zooAnimals = [
    {
        id: 'tiger',
        name: 'Sumatran Tiger',
        image: 'images/tiger.jpg',
        description: 'The Sumatran tiger is the smallest of the tigers, compared to the Siberian tiger which is the largest. The stripes of the Sumatran tiger are narrower than other tigers and they have larger manes. The males are bigger than the females but they still only reach 2.5m in length. Their small size allows them to travel through the dense Sumatran rainforest with ease.',
        photos: ['images/tiger-1.jpg', 'images/tiger-2.jpg'],
        mapImage: 'images/map-tiger.jpg'
    },
    {
        id: 'lion',
        name: 'African Lion',
        image: 'images/lion.png',
        description: 'The African lion is a very large cat. Lions once roamed throughout southern Europe, Africa and southwest Asia. Today the African lion can only be found in sub-Saharan Africa and a small pocket of Asiatic lions are found in the Gir Forest, India.',
        photos: ['images/lion-1.png', 'images/lion-2.jpg'],
        mapImage: 'images/map-lion.jpg'
    },
    {
        id: 'hippopotamus',
        name: 'Hippopotamus',
        image: 'images/hippopotamus.jpg',
        description: 'The hippopotamus, literally translated, means river horse. They spend their days in water as their skin is very susceptible to sun-burning. They are herbivores consuming between 1 and 1.5% of their body weight in vegetation every day!',
        photos: ['images/hippopotamus-1.jpg', 'images/hippopotamus-2.jpg'],
        mapImage: 'images/map-elephant.jpg'
    },
    {
        id: 'giraffe',
        name: 'Rothschild’s Giraffe',
        image: 'images/giraffe.jpg',
        description: 'There are currently 9 different sub-species of giraffes roaming the plains of Africa. One of the most endangered are the Rothschild’s with only a few hundred remaining in the wild.',
        photos: ['images/giraffe-1.jpg', 'images/giraffe-2.jpg'],
        mapImage: 'images/map-giraffe.jpg'
    },
    {
        id: 'hamadryas baboon',
        name: 'Hamadryas Baboon',
        image: 'images/monkey.jpg',
        description: 'The baboon is the largest type of monkey. Hamadryas baboons originate from Ethiopia, Saudi Arabia, Somalia and Yemen. They prefer rocky desert and sub-desert regions. These very intelligent primates are endangered in the wild due to loss of habitat.',
        photos: ['images/hamadryas baboon-1.jpg', 'images/hamadryas baboon-2.jpg'],
        mapImage: 'images/map-monkey.jpg'
    },
    {
        id: 'penguin',
        name: 'Penguin',
        image: 'images/penguin.jpg',
        description: 'Nelietavé morské vtáky, ktoré excelujú v plávaní v ľadových vodách južnej pologule.',
        photos: ['images/penguin-1.jpg'],
        mapImage: 'images/map-penguin.jpg'
    },
    {
        id: 'zebra',
        name: 'Zebra',
        image: 'images/zebra.jpg',
        description: 'Africký nepárnokopytník preslávený svojím čiernobielym pruhovaným vzorom.',
        photos: ['images/zebra-1.jpg'],
        mapImage: 'images/map-zebra.jpg'
    },
    {
        id: 'kangaroo',
        name: 'Kangaroo',
        image: 'images/kangaroo.jpg',
        description: 'Austrálsky vačkovec známy svojím skákavým pohybom a vreckom na mláďatá.',
        photos: ['images/kangaroo-1.jpg'],
        mapImage: 'images/map-kangaroo.jpg'
    },
    {
        id: 'flamingo',
        name: 'Flamingo',
        image: 'images/flamingo.jpg',
        description: 'Elegantný ružový vták, ktorý obľubuje plytké slané jazerá a lagúny.',
        photos: ['images/flamingo-1.jpg'],
        mapImage: 'images/map-flamingo.jpg'
    },
    {
        id: 'crocodile',
        name: 'Crocodile',
        image: 'images/crocodile.jpg',
        description: 'Veľký vodný plaz a obávaný dravec tropických oblastí.',
        photos: ['images/crocodile-1.jpg'],
        mapImage: 'images/map-crocodile.jpg'
    }
];

// Funkcia na vykreslenie hlavnej stránky Zoo
function renderZooPage(containerElement) {
    containerElement.innerHTML = `
        <div class="zoo-container">
            <div class="zoo-header-image" style="background-image: url('images/zoo-main-banner.jpg');"></div>
            <h2 class="zoo-title">Animals in our Zoo</h2>
            <div class="animal-list">
                ${zooAnimals.map(animal => `
                    <div class="animal-card" onclick="openAnimalDetail('${animal.id}')">
                        <div class="animal-thumb" style="background-image: url('${animal.image}');"></div>
                        <div class="animal-name">${animal.name}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Funkcia na zobrazenie detailu konkrétneho zvieraťa
function openAnimalDetail(animalId) {
    const animal = zooAnimals.find(a => a.id === animalId);
    if (!animal) return;

    const containerElement = document.querySelector('.content');
    containerElement.innerHTML = `
        <div class="animal-detail-container">
            <button class="back-btn" onclick="renderZooPage(document.querySelector('.content'))">← Back to Zoo</button>
            <h2>${animal.name}</h2>
            <p class="animal-desc">${animal.description}</p>
            
            <div class="animal-photos">
                ${animal.photos.map(photo => `<img src="${photo}" alt="${animal.name}" class="detail-img">`).join('')}
            </div>

            <h3>Location in Zoo</h3>
            <div class="animal-map">
                <img src="${animal.mapImage}" alt="Map location for ${animal.name}" class="detail-map-img">
            </div>
        </div>
    `;
}
