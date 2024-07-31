let searchInputE1 = document.getElementById("searchInput");
let searchResultsE1 = document.getElementById("searchResults");
let spinnerE1 = document.getElementById("spinner");

function createAppendSearchResult(result){
let {link,title,description} = result;
let resultItem = document.createElement("div");
searchResultsE1.appendChild(resultItem);

// <a href="">title</a>
let titleE1 = document.createElement("a");
titleE1.href = link;
titleE1.target = "_blank"
titleE1.textContent = title;
resultItem.appendChild(titleE1)

// <br>
 let titelbreak = document.createElement("br")
 resultItem.appendChild(titelbreak);

// <a href="">link</a>
let linkE1 = document.createElement("a");
linkE1.href = link;
linkE1.target = "_blank"
linkE1.textContent = link;
resultItem.appendChild(linkE1)

// <br>
let linkbreak = document.createElement("br")
resultItem.appendChild(linkbreak);

let descriptionE1 = document.createElement("p");
descriptionE1.textContent = description;
resultItem.appendChild(descriptionE1)

}

function displayingResult(searchResult){
    spinnerE1.classList.toggle("d-none")
for(let result of searchResult){
    createAppendSearchResult(result)
}
}
function searchwikipedia(event){
 if(event.key === 'Enter'){
    spinnerE1.classList.toggle("d-none")
    searchResultsE1.textContent="";
    let searchInput = searchInputE1.value;
    let options ={
        method : "GET",
    };
    let url= "https://apis.ccbp.in/wiki-search?search="+searchInput;
    fetch(url,options)
    .then(function(response){
        return response.json()
    })
    .then(function(Data){
         let {search_results} = Data
         displayingResult(search_results)
    })
 }
}
searchInputE1.addEventListener("keydown",searchwikipedia);
