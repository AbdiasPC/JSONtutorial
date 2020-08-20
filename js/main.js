var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn =document.getElementById("btn");

btn.addEventListener("click", function() {
    var onRequest = new XMLHttpRequest();
    onRequest.open('GET','https://learnwebcode.github.io/json-example/animals-'+ pageCounter +'.json');
    onRequest.onload = function() {
        if(onRequest.status >= 200 && onRequest.status < 400){
            var ourData = JSON.parse(onRequest.responseText);
            renderHTML(ourData);
        }else{
            console.log("We connected to the server, but it returned an error.");
        }

    };
    onRequest.send();
    pageCounter++;
    if(pageCounter > 3){
        btn.classList.add("hide-me");
    }
});

//function to create html in our page
function renderHTML(data) {
    var htmlString = " ";

    for(i = 0; i < data.length; i++){
        htmlString += "<p>"+ data[i].name+" is a "+ data[i].species+" that likes to eat "
        for(ii = 0; ii < data[i].foods.likes.length; ii++){
            if(ii == 0){
                htmlString += data[i].foods.likes[ii];
            }
            else{
                htmlString += " and " + data[i].foods.likes[ii];
            }
        }

        htmlString += ' and dislikes ';
        for(ii = 0; ii < data[i].foods.dislikes.length; ii++){
            if(ii == 0){
                htmlString += data[i].foods.dislikes[ii];
            }
            else{
                htmlString += " and " + data[i].foods.dislikes[ii];
            }
        }

        htmlString += '.<\p>'
    }

    animalContainer.insertAdjacentHTML('beforeend',htmlString);
};


// var Request = new XMLHttpRequest();
// Request.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');
// Request.onload = function() {
//     var Data = JSON.parse(Request.responseText);
//     console.log(Data[1])
// }













































// var myCat = {
//     "name":"Meowsalot",
//     "species": "cat",
//     "favFood": "tuna"
// }

// //myCat.favFood

// var myFavColors = ["blue","green","purble"];

// //myFavColors[0]


// var thePets = [
//     {
//         "name":"Meowsalot",
//         "species": "cat",
//         "favFood": "tuna"
//     },
//     {
//         "name":"Aldo",
//         "species": "dog",
//         "favFood": "meat"
//     },
//     {
//         "name":"Kilis",
//         "species": "fish",
//         "favFood": "apple",
//         "greet": function greet(name,species,favFood){
//             return "Hello my is "+name+" I'am a "+species+" and I love to eat "+favFood
//         }
//     }
// ]

// function greet(){
//     return "Hello my is "+blank+" I'am a "+blank+" and I love to eat "+blank
// }

// thePets[0].species
