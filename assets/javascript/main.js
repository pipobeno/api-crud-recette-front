const recetteList = document.querySelector("#recetteContainer")


let submitButton = document.querySelector("#submitButton")


async function getRecipes() {
    try {
        const response = await fetch("http://localhost:8000/recipes", {
            headers: {
                "Content-type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("Erreur lors de la récupération des recettes");
        }

        const data = await response.json();
        return data
    } catch (error) {
        console.error("Erreur :", error.message);
    }
}


async function DISPLAYrecipe() {
    const recipes = await getRecipes()

    recipes.forEach((recipe) => {
        console.log(recipe);
        
        const recettes = document.createElement("article");
        recetteList.appendChild(recettes)
        const title = document.createElement('h3')
        title.textContent = recipe.title
        recettes.appendChild(title)
        const listIng = document.createElement('ul')
        recipe.ingredients.forEach(ing =>{
            const listItem = document.createElement('li')
            listItem.textContent = ing
            listIng.appendChild(listItem)
        }) 
        recettes.appendChild(listIng)
        const instructs = document.createElement('p')
        instructs.textContent = recipe.instructs
        recettes.appendChild(instructs)

        const timecook = document.createElement('p')
        timecook.textContent = recipe.timecook
        recettes.appendChild(timecook)

        const timefiring = document.createElement('p')
        timefiring.textContent = recipe.timefiring
        recettes.appendChild(timefiring)

        const difficulty = document.createElement('p')
        difficulty.textContent = recipe.difficulty
        recettes.appendChild(difficulty)

        const category = document.createElement('p')
        category.textContent = recipe.category
        recettes.appendChild(category)

        let resetButton = document.createElement("button");
        resetButton.textContent = "Supprimer";

        recettes.appendChild(resetButton)

        resetButton.addEventListener("click", () => {
            deleteRecipe()
            recettes.remove();
        }
        
        );

        // .innerHTML = `
        // <p>${recipe.title}</p>
        // <p>${recipe.ingredients}</p>
        // <p>${recipe.instructs}</p>
        // <p>${recipe.timecook}</p>
        // <p>${recipe.timefiring}</p>
        // <p>${recipe.difficulty}</p>
        // <p>${recipe.category}</p>`
        // console.log(recettes);
        
    });
}

function init() {
    DISPLAYrecipe()

}

init();

async function searchRecipes() {
    const dataSearch = {
        title: document.getElementById("titleContainer").value,
        ingredients: document.getElementById("ingredientsContainer").value,
        instructs: document.getElementById("instructsContainer").value,
        timecook: document.getElementById("timecookContainer").value,
        timefiring: document.getElementById("timefiringContainer").value,
        difficulty: document.getElementById("difficultyContainer").value,
        category: document.getElementById("categoryContainer").value,

    }
    const response = await fetch("http://localhost:8000/recipes", {
        method: "POST",
        headers: {
            authorization: "Bearer ",
            "Content-type": "Application/json"
        },
        body: JSON.stringify(dataSearch)
    })
    const data = await response.json()
   
}


recipeContainer.addEventListener("submit", (e) => {
    e.preventDefault()
    searchRecipes()
}
)




async function deleteRecipe() {
    const response = await fetch("http://localhost:8000/recipes", {
        method: "DELETE",
        headers: {
            authorization: "Bearer ",
            "Content-type": "Application/json"
        },
    });

    const data = await response.json();
}
