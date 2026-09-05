// Dátabanka pre zvieratá v Zoo
const zooAnimals = [
    {
        id: 'tiger',
        name: 'Tiger',
        image: 'images/tiger.jpg',
        description: 'Majestátna mačkovitá šelma, ktorá pochádza z Ázie. Je známa svojou charakteristickou pruhovanou srsťou a výborným nočným videním.',
        photos: ['images/tiger-1.jpg', 'images/tiger-2.jpg'],
        mapImage: 'images/map-tiger.jpg'
    },
    {
        id: 'lion',
        name: 'African Lion',
        image: 'images/lion.png',
        description: 'The African lion is a very large cat. Lions once roamed throughout southern Europe, Africa and southwest Asia. Today the African lion can only be found in sub-Saharan Africa and a small pocket of Asiatic lions are found in the Gir Forest, India. African lions live in the grassy plains and savannah of Southern Africa. The most recognisable feature of the lion is the large mane which only male lions grow. Muscular legs and strong jaws coupled with good eyesight, hearing and sense of smell make lions excellent hunters. Lions are carnivores (meat eaters) hunting for wildebeest, buffalo, giraffe, zebra and antelope. It is the females who do most of the hunting. Males can reach over 8 feet (2.5 metres) long, and a large male may weigh up to 550 pounds (200 kilos). Lions live in groups of up to 30 individuals which consist of 2 or 3 males, up to 10 related females (sisters and cousins) and their young. This group is called a pride. Lots of females enable the pride to operate a crèche system, freeing up some females to hunt whilst others tend the young. With a short gestation period of up to 120 days and up to 6 to a litter, the cubs are very vulnerable for the first few years of life. Once fully grown, however, the lion has virtually no predators. Cubs are born with spots on their fur, which gradually fade as they mature. At 3 years of age the young males are driven from the pride and form single sex groups which roam around trying to take over established prides.',
        photos: ['images/lion-1.jpg', 'images/lion-2.jpg'],
        mapImage: 'images/map-lion.jpg'
    },
    {
        id: 'elephant',
        name: 'Elephant',
        image: 'images/elephant.jpg',
        description: 'Najväčší žijúci suchozemský cicavec. Vyznačuje sa dlhým chobotom a kly.',
        photos: ['images/elephant-1.jpg'],
        mapImage: 'images/map-elephant.jpg'
    },
    {
        id: 'giraffe',
        name: 'Giraffe',
        image: 'images/giraffe.jpg',
        description: 'Najvyšší suchozemský živočích na svete, pochádzajúci z afrických saván.',
        photos: ['images/giraffe-1.jpg'],
        mapImage: 'images/map-giraffe.jpg'
    },
    {
        id: 'monkey',
        name: 'Monkey',
        image: 'images/monkey.jpg',
        description: 'Hravé a inteligentné primáty obývajúce tropické pralesy.',
        photos: ['images/monkey-1.jpg'],
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
