//Make an object array to be show on the page.
//Use object literals

var restaurants = [
  {
    id: 1, name: 'Sushi Murasaki', price: '$$$', rating: 5,
    address: '2901 W MacArthur Blvd Ste 108 Santa Ana, CA 92704',
    review: 'One of the best sushi restaurants',
    type: 'Japanese',
  },
  {
    id: 2, name: 'Bosscat', price: '$$', rating: 4,
    address: '4647 MacArthur Blvd Newport Beach, CA 92660',
    review: 'A great brunch spot',
    type: 'American',
  },
  {
    id: 3, name: 'McDonalds', price: '$', rating: 2,
    address: '3099 Bristol St Costa Mesa, CA 92626',
    review: 'Stay away from the big Macs',
    type: 'American',
  },
  {
    id: 4, name: 'Brazil Texas BBQ', price: '$$$', rating: 5,
    address: '13772 Jamboree Rd Irvine, CA 92602',
    review: 'Come for the best Brazilian bbq',
    type: 'Brazilian',
  },
  {
    id: 5, name: 'Honda-Ya Tustin', price: '$$', rating: 4,
    address: '556 El Camino Real Tustin, CA 92780',
    review: 'Best place for all around Japanese food',
    type: 'Japanese',
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
function renderRestaurant() {
  var $restaurant = document.createElement('div');
  $restaurant.setAttribute('class', 'restaurant');
  $restaurant.textContent = (restaurants[i].id);

  var img = document.createElement('div');
  img.setAttribute('class', 'img-default');

  var name = document.createElement('span');
  name.setAttribute('class', 'name');
  name.textContent = (restaurants[i].name);

  var rating = document.createElement('span');
  rating.setAttribute('class', 'rating');
  rating.textContent = (restaurants[i].rating);

  var price = document.createElement('span');
  price.setAttribute('class', 'price');
  price.textContent = (restaurants[i].price);

  var address = document.createElement('div');
  address.setAttribute('class', 'address');
  address.textContent = (restaurants[i].address);

  var review = document.createElement('div');
  review.setAttribute ('class', 'review');
  review.textContent = ('"' + restaurants[i].review + '"');

  $restaurant.appendChild(name);
  $restaurant.appendChild(rating);
  $restaurant.appendChild(price);
  $restaurant.appendChild(address);
  $restaurant.appendChild(review);
  $restaurant.appendChild(img);

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

var search = document.getElementById('srch-btn').addEventListener('click', function(event) {
  console.log('you are clicking');
  event.target.innerHTML = 'click count: ' + event.detail;
},
false);
