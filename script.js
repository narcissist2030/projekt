const recipes = [
    {
        title: 'Zupa pomidorowa',
        image: 'zupka.jpg',
        description: 'Tradycyjna polska zupa pomidorowa z makaronem.',
    },
    {
        title: 'Pierogi ruskie',
        image: 'pierug.jpg',
        description: 'Pyszne pierogi z twarogiem, ziemniakami i cebulką.',
    },
    {
        title: 'Schabowy z ziemniakami',
        image: 'shab.jpg',
        description: 'Klasyczny kotlet schabowy z dodatkiem ziemniaków i surówki.',
    },
    {
        title: 'Sałatka grecka',
        image: 'sałat.jpg',
        description: 'Świeża sałatka z fetą, oliwkami i pomidorami.',
    },
    {
        title: 'Bigos',
        image: 'bigos.jpg',
        description: 'Bigos z kapusty kiszonej, świeżej i mięsa.',
    },
    {
        title: 'Placki ziemniaczane',
        image: 'ziemn.jpg',
        description: 'Placki ziemniaczane podawane z kwaśną śmietaną.',
    },
    {
        title: 'Kotlety mielone',
        image: 'kotl.jpg',
        description: 'Kotlety mielone z mięsa wieprzowego i wołowego.',
    },
    {
        title: 'Pstrąg w ziołach',
        image: 'strong.jpg',
        description: 'Pstrąg pieczony w ziołach z cytryną.',
    },
    {
        title: 'Tarta z owocami',
        image: 'tart.jpg',
        description: 'Pyszna tarta z sezonowymi owocami.',
    },
    {
        title: 'Gulasz węgierski',
        image: 'gul.jpg',
        description: 'Gulasz z wołowiny z papryką i przyprawami.',
    },
    {
        title: 'Krem z brokułów',
        image: 'krym.jpg',
        description: 'Aksamitny krem z brokułów.',
    },
    {
        title: 'Ratatouille',
        image: 'ratato.jpg',
        description: 'Francuska sałatka warzywna z bakłażanem i cukinią.',
    },
    {
        title: 'Curry z kurczakiem',
        image: 'cury.jpg',
        description: 'Pikantne curry z kurczakiem, mlekiem kokosowym i przyprawami.',
    },
    {
        title: 'Lasagna',
        image: 'lasagn.jpg',
        description: 'Włoska lasagna z mięsem mielonym, serem i sosem pomidorowym.',
    },
    {
        title: 'Ciasto czekoladowe',
        image: 'ciaho.jpg',
        description: 'Pyszne, wilgotne ciasto czekoladowe.',
    }
];

function displayRecipes(recipesToShow) {
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = '';  // Czyścimy istniejącą listę przepisów

    recipesToShow.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');

        // Tworzymy link wokół obrazka
        recipeElement.innerHTML = `
            <a href="${recipe.title.toLowerCase().replace(/\s+/g, '-')}.html">
                <img src="${recipe.image}" alt="${recipe.title}">
            </a>
            <h2>${recipe.title}</h2>
            <p>${recipe.description}</p>
        `;

        recipeList.appendChild(recipeElement);
    });
}

function searchRecipes() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchTerm) || recipe.description.toLowerCase().includes(searchTerm)
    );
    displayRecipes(filteredRecipes);
}

// Wyświetlamy wszystkie przepisy na początku
displayRecipes(recipes);
