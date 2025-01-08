async function getRecipes() {
    const response = await fetch("http://http://localhost:8000/recipes/", {
        headers: {
            "Content-type": "Application/json"
        }
    })
    const data = await response.json()
    return data
}

function searchRecipes() {
    const dataSearch = {
        title: document.getElementById("titleContainer").value,
        ingredients: document.getElementById("ingredientsContainer").value,
        instructs: document.getElementById("instructsContainer").value,
        timecook: document.getElementById("timecookContainer").value,
        timefiring: document.getElementById("timefiringContainer").value,
        difficulty: document.getElementById("difficultyContainer").value,
        category: document.getElementById("categoryContainer").value,

    }
    const uriSearch = '?title=${dataSearch.title}'
    fetch('http://http://localhost:8000/recipes${uriSearch}',{
        headers: {
            "Content-type": "Application/json"
        }
    })
}

getRecipes()