//Make an object array to be show on the page.
//Use object literals

var restaurants = [
  {
    id: 1, name: 'Sushi Murasaki', price: '$$$', rating: 5,
    address: '2901 W MacArthur Blvd Ste 108 Santa Ana, CA 92704',
    review: 'One of the best sushi restaurants',
    type: 'Japanese, food, sushi, omakase, bento, rice, soup, oysters, fish',
  },
  {
    id: 2, name: 'Bosscat', price: '$$', rating: 4,
    address: '4647 MacArthur Blvd Newport Beach, CA 92660',
    review: 'A great brunch spot',
    type: 'American, burger, modern, expensive, bar food',
  },
  {
    id: 3, name: 'McDonalds', price: '$', rating: 2,
    address: '3099 Bristol St Costa Mesa, CA 92626',
    review: 'Stay away from the big Macs',
    type: 'American, burgers, fries, soft drink, fast food',
  },
  {
    id: 4, name: 'Brazil Texas BBQ', price: '$$$', rating: 5,
    address: '13772 Jamboree Rd Irvine, CA 92602',
    review: 'Come for the best Brazilian bbq',
    type: 'Brazilian, latin, south american, bbq, barbeque, skewers, lomo, reservation, food, grill',
  },
  {
    id: 5, name: 'Honda-Ya Tustin', price: '$$', rating: 4,
    address: '556 El Camino Real Tustin, CA 92780',
    review: 'Best place for all around Japanese food',
    type: 'Japanese, food, sushi, asian, local, snack, tapas, soups, cheap, no reservation, fish, grill/',
  }
];

/*
Create a function to be used to render the items on the page.
<div class="restaurant">
  <div class img></div>
  <span class="name"> </span>
  <span class="price"> </span>
  <span class="rating"> </span>
  <div class="address"> </div>
  <div class="review"> </div>
</div>
*/
function renderRestaurant(item) {
  var $restaurant = document.createElement('div');
  $restaurant.setAttribute('class', 'restaurant');
  $restaurant.dataset.id = item.id;

  var name = document.createElement('span');
  name.setAttribute('class', 'name');
  name.textContent = (item.name);

  var img = document.createElement('div');
  img.setAttribute('class', 'img-default-' + (item.id));

  var rating = document.createElement('span');
  rating.setAttribute('class', 'rating');
  rating.textContent = (item.rating);

  var price = document.createElement('span');
  price.setAttribute('class', 'price');
  price.textContent = (item.price);

  var address = document.createElement('div');
  address.setAttribute('class', 'address');
  address.textContent = (item.address);

  var review = document.createElement('div');
  review.setAttribute ('class', 'review');
  review.textContent = ('"' + item.review + '"');

  $restaurant.appendChild(name);
  $restaurant.appendChild(rating);
  $restaurant.appendChild(price);
  $restaurant.appendChild(img);
  $restaurant.appendChild(address);
  $restaurant.appendChild(review);

  return $restaurant;
}
//Make a for loop that iterates through each item in the array and uses
//the render function to print the attributes on the page.
for (var i = 0; i < restaurants.length; i++) {
  var showRestaurant = renderRestaurant(restaurants[i]);
  var list = document.getElementById('results');
  list.appendChild(showRestaurant);
}


//Now create a way to pull up a specific restaurant.
//Added id for each restaurant for data-set to pull one specifically from the array.
//Declare a function to search for text.

//1. START OFF BY FINDING THE LOCATION WHERE YOU WILL BE STORING THE RENDERED ITEMS
//2. FIND WHERE THE SEARCH TEXT WILL BE INSERTED TO MATCH TEXT IN SEARCH ITEMS
var $results = document.getElementById('results');
var $term = document.getElementById('searching');
var $details = document.getElementById('restaurant-details')
//DEFINE THE FUNCTION TO LOOP THROUGH ALL ITEMS AND STORE THE ITEMS INTO MATCHING ITEMS

function searchItems (allItems, searchVal){
  var matchingItems = [];
  for (var i = 0; i < allItems.length; i++) {
    var item = allItems[i];
    var itemText = item.name + item.price + item.rating + item.address + item.type + item.review;
    var isMatch = itemText.toLowerCase().indexOf(searchVal.toLowerCase()) > -1;
    if (isMatch)
      matchingItems.push(item);
  }
  return matchingItems;
}

//DEFINE A FUNCTION TO BE STARTED WHEN THE EVENT LISTENER IS ACTIVATED.
//NAME THE FUNCTION AND ADD CODE BLOCK
function searcher() {
//CLEAR THE RESULTS SO OLD STUFF DOES NOT STAY ON THE PAGE
  clear($results);
//STORE THE TEXT INPUT VALUE THAT YOU WILL BE TYPING INTO AN OBJECT
  var searchVal = $term.value;
//CREATE AND IF CONDITIONAL FOR THE TEXT TO BE RETURNED OR NOT
  if (!searchVal.trim()) return;
//CREATE AN NEW VARIABLE AND STORE THE FUNCTION searchItem
//FUNCTION WILL HAVE ARGUMENTS FOR restaurants AND SEARCH TEXT VALUE
  var matchingItems = searchItems (restaurants, searchVal);
//CREATE A LOOP TO ITERATE THROUGH THE MATCHED ITEMS 1 BY 1
  for (var i = 0; i < matchingItems.length; i++) {
//STORE THE FUNCTION BEING CALLED TO RENDER THE MATCHED ITEMS
    var item = renderRestaurant (matchingItems[i]);
//HAVE IT SHOW UP ON THE RESULTS PAGE BY APPENDING IT TO THE PAGE IN RESULTS
    $results.appendChild(item);
  }
}

//GIVE THE EVENT LISTENER A TARGET
var search = document.getElementById('srch-btn');
//HAVE THE EVENT ACTIVATE WHEN THE TARGET IS CLICKED
//HAVE IT RUN THE FUNCTION IN ITS PARAMETERS TO SEE IF THE TEXT MATCHED
//AND RENDER MATCHES ONTO THE RESULTS PAGE
search.addEventListener('click', searcher);


//MAKE A FUNCTION TO CLEAR INPUT AREA
function clear(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

$results.addEventListener('click', function(event){
  event.preventDefault();
  //( USE CONSOLE LOG TO CHECK RESULTS)
  if(event.target.className === 'restaurant'){
    for (var i = 0; i < restaurants.length; i++){
      var $item = restaurants[i];
      if(event.target.dataset.id == $item.id) {
        var $renderItem = renderDetails($item);
        var $showItem = showBusiness($renderItem);
        $details.appendChild($showItem);
      }
    }
    console.log(event.target);
  }
});

function showBusiness (restaurant) {
var $active = document.getElementsByClassName('active')[0];
 $active.classList.remove('active');
 $active.classList.add('hidden');
 var $hidden = document.getElementsByClassName('hidden')[1];
 $hidden.classList.remove('hidden');
 $hidden.classList.add('active');
 var $details = document.createElement('div');
 $details.appendChild(restaurant);
 return $details;
}

function renderDetails(item) {
  var content = document.createElement("div");
  content.setAttribute("class", "profile-detail");
  content.setAttribute("id", "rest-" + item.id);

  var businessName = document.createElement("div");
  businessName.setAttribute("class", "title");
  businessName.textContent = item.name;
  content.appendChild(businessName);

  var address = document.createElement("div");
  address.setAttribute("class", "location");
  address.textContent = item.address;
  content.appendChild(address);

  var rating = document.createElement("span");
  rating.setAttribute("class", "rate");
  rating.textContent = item.rating;
  businessName.appendChild(rating);

  var price = document.createElement("span");
  price.setAttribute("class", "cost");
  price.textContent = item.price;
  rating.appendChild(price);

  var image = document.createElement("div");
  image.setAttribute("class", "biz-image");
  image.setAttribute("id", "image-" + item.id);
  content.appendChild(image);

  return content;
}


//THIS IS A TESTER TO CHECK FOR BUTTONS
//LEAVE HERE TO USE ON OTHER ITEMS
/*var $search = document.getElementById('srch-btn').addEventListener('click', function(event) {
  console.log('you are clicking');
  event.target.innerHTML = 'click count: ' + event.detail;
},
false);
*/
