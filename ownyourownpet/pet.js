// continue removing falling objects

// don't show obstacles at end game screen
// chart for picking out dog
// coins go off screen:fix
// hearts fall that add life, they usually only fall if you have, and very rarely if you have 2
// draw red border around dogs when they get hit
// add more dogs
// bedroom / kitchen / bathroom

// gender symbols
// enter pet into competition
// cat 2; http://www.alsointocats.com/wp-content/uploads/2013/01/lordmeowington.png
// poop emoji; http://emojipedia-us.s3.amazonaws.com/cache/8c/65/8c65e5de808ec301754508366480250c.png
// park; http://science-all.com/images/park/park-08.jpg
// win first place medal; http://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Trophy-and-Medals-PNG/Transparent_Gold_Cup_Trophy_PNG_Picture.png?m=1432204038
// win second place medal; http://www.mirpurblogs.com/southasia/wp-content/uploads/2011/09/p81-04L.gif
// win third place ribbon; http://3.bp.blogspot.com/-h3iLFtdLjro/VYN5cMxeEnI/AAAAAAAABSA/dhPK5ABMImw/s1600/Blue-Ribbon-shorter-post.gif
// cat 2; http://www.vividpetpals.com/wp-content/uploads/2012/12/Kitten-Ginger-1.png
// cat 3; http://www.alsointocats.com/wp-content/uploads/2013/01/lordmeowington.png
// frisbee; http://cdn.fivebelow.com/media/catalog/product/cache/1/base_image/654x/9df78eab33525d08d6e5fb8d27136e95/f/r/frisbee-purple.png
// hamster 1; http://www.feathersnfurshoppe.com/images/smallanimaldocs/Hamster.gif
// food bags
// shampoo bottles (for baths)
// fashion-box 

// inventory

// dog walking game, you play the dog and collect coin

// red apple; http://www.clipartbest.com/cliparts/bcy/odK/bcyodK7Mi.png

// fire hydrant:
// http://worldartsme.com/images/fire-hydrant-free-clipart-1.jpg

// tuna fish; http://clipartfreefor.com/cliparts/files3/tuna-clipart-4TbL4y4Tg.gif

// cat bed; http://www.catsbestfriend.co.uk/ekmps/shops/d94fa4/images/dream-premium-snuggle-slumber-cat-bed-sandalwood-or-grey-stone-colour-grey-stone-size-66cm-26-1706-p.png

var leftPressed = false;
var rightPressed = false;

var currentScreen = 'petStore';
var playerMoney = 700;
var inventoryItems = [];

var playerMoneyCount = document.getElementById('playerMoneyCount');
var selectedPet = false;
selectedPet = 'cat';

var gameState = false;

var selectDogButton = document.getElementById('selectDog');
var selectableDogs = document.getElementById('selectableDogs');
var selectCatButton = document.getElementById('selectCat');
var selectableCats = document.getElementById('selectableCats');
var petStore = document.getElementById('petStore');
var house = document.getElementById('house');
var catA = document.getElementById('catA');
var livingRoom = document.getElementById('livingRoom');
var thinkBubble = document.getElementById('thinkBubble');
var petCarrier = document.getElementById('petCarrier');

var sidewalk = document.getElementById('sidewalk');
var walkMiniGameOverScreen = document.getElementById('walkMiniGameOverScreen');

var petName = false;

var isBowlFull = false;
var fullBowl = document.getElementById('fullBowl');
var emptyBowl = document.getElementById('emptyBowl');

var isWaterBowlFull = false;
var fullWaterBowl = document.getElementById('fullWaterBowl');
var emptyWaterBowl = document.getElementById('emptyWaterBowl');
var redScreen = document.getElementById('redScreen');
var petHealth = 3;
var petHunger = 4;
var petThirst = 4;
var petDirtLevel = 4;
var petBathroom = 4;

var animalSpeed = 3;
var xDirection = 0;
var yDirection = 0;
var animalX = 19;
var animalY = -379;
thinkBubble.style.left = '69px';
thinkBubble.style.top = '296px';

var myPet = false;
// var myPet.img = false;

window.addEventListener('keydown', keyDown);
window.addEventListener('keyup', keyUp);

var startButton = document.getElementById('startButton');
startButton.addEventListener('click', function() {
  playerInstructions.style.display = 'none';
  startButton.style.display = 'none';
  petStore.style.display = 'block';
  navigation.style.display = 'block';
});

var inventoryScreen = document.getElementById('inventory');
var inventoryButton = document.getElementById('inventoryButton');
inventoryButton.addEventListener('click', function() {
    if(currentScreen != 'inventory') {
      inventoryScreen.style.display = 'block';
      currentScreen = 'inventory';
    } else {
      inventoryScreen.style.display = 'none';
      currentScreen = false; 
    }
});

var shopButton = document.getElementById('shopButton');
var supplyShop = document.getElementById('supplyShop');
shopButton.addEventListener('click', function() {
	supplyShop.style.display = 'block';
  if(currentScreen != 'shop') {
      supplyShop.style.display = 'block';
      currentScreen = 'shop';
    } else {
      supplyShop.style.display = 'none';
      currentScreen = false; 
    }
});

var walkButton = document.getElementById('walkButton');
walkButton.addEventListener('click', function() {
  if(inventoryItems["Leash"] > 0) {
    var playerYes = confirm("Are you sure that you want to go on a walk?");

    if(playerYes) {
      initializeWalking();
    }
  } else {
    alert('To go for a walk, you must have at least one leash.');
  }
});

var petStatusScreen = document.getElementById('petStatus');
var petStatusButton = document.getElementById('petStatusButton');
petStatusButton.addEventListener('click', function() {
 
    if(currentScreen != 'petstatus') {
      petStatusScreen.style.display = 'block';
      currentScreen = 'petstatus';
    } else {
      petStatusScreen.style.display = 'none';
      currentScreen = false; 
    }
});

selectDogButton.addEventListener('click', function(){
  selectedPet = 'dog';
  selectableDogs.style.display = 'block';
  selectDogButton.style.display = 'none';
  selectCatButton.style.display = 'none';
});

selectCatButton.addEventListener('click', function() {
  selectableCats.style.display = 'block';
  selectDogButton.style.display = 'none';
  selectCatButton.style.display = 'none';
});

petStore.addEventListener('click', function(){
  selectDogButton.style.display = 'block';
  selectCatButton.style.display = 'block';
  petStore.style.display = 'none';
});

catA.addEventListener('click', function(){
  catA.style.display = 'none';
  house.style.display = 'block';
  
  myPet.img = catA;
});
                      
house.addEventListener('click', function(){
  house.style.display = 'none';
  livingRoom.style.display = 'block';
});                    

petCarrier.addEventListener('click', function() {
  if(selectedPet == 'cat') {
    catA.style.display = 'block';
    // move him to the carrier!
    catA.style.left = '19px';
    catA.style.top = '399px';
    petCarrier.style.display = 'none';
  } else if(selectedPet == 'dog') {
    myPet.img.style.display = 'block';
    // move him to the carrier!
    myPet.img.style.left = '19px';
    myPet.img.style.top = '399px';
    petCarrier.style.display = 'none';
  }

  petThink();
});


function changePetHealth(amount) {
  petHealth += amount;
  if(petHealth <= 0) {
    walkMiniGameOverScreen.style.display = "block";
    gameState = false;
    for(var fallingObjectIndex = 0, fallingObjectCount = fallingObjects.length; fallingObjectIndex < fallingObjectCount; fallingObjectIndex++) {
      // var currentObject = fallingObjects[fallingObjectIndex];
      var removedObjects = fallingObjects.splice(0, 1);
      var object = removedObjects[0];
      console.log(object);
      object.image.parentNode.removeChild(object.image);
    }
  }

  var lifeHearts = document.getElementById('lifeHearts');
  var walkHearts = lifeHearts.getElementsByTagName('img');
  // var walkHearts = document.getElementsByClassName('walkHeart');
  for(var i=1; i<=3; i++) {
    if(petHealth < i) {
      walkHearts[i - 1].src = 'images/greyheart.png';
    } else {
      walkHearts[i - 1].src = 'images/heart.png';
    }
  }
}

function changePlayerMoney(amount) {
  playerMoney += amount;
  playerMoneyCount.innerHTML = playerMoney;
  // change the number that the player sees
}

// BRAIN!
function petThink() {
  var foodBowlX = 200;
  var waterBowlX = 220;
  petHunger += Math.random();
  petThirst += Math.random();

  var hungerBar = document.getElementById('hungerBar');
  var decimal = petHunger / 1500;
  var percentage = 100 - (decimal * 100);
  hungerBar.style.width = percentage + "%";

  var thirstBar = document.getElementById('thirstBar');
  var decimal = petThirst / 1500;
  var percentage = 100 - (decimal * 100);
  thirstBar.style.width = percentage + "%";

  var dirtBar = document.getElementById('dirtBar');
  var decimal = petDirtLevel / 1500;
  var percentage = 100 - (decimal * 100);
  dirtBar.style.width = percentage + "%";

  var bathroomBar = document.getElementById('bathroomBar');
  var decimal = petBathroom / 1500;
  var percentage = 100 - (decimal * 100);
  bathroomBar.style.width = percentage + "%";

  if(petHunger > 1000) {
    if(animalX > foodBowlX) {
      moveAnimal(-1, 0);
    } else if(animalX < foodBowlX) {
      moveAnimal(1, 0);
    } else {
      // EAT THE FOOD
      
      if(isBowlFull) {
        petHunger = 4;
        fullBowl.style.display = 'none';
        emptyBowl.style.display = 'block';
        isBowlFull = false;
      }
    }

    petThinkBubble('apple');
  } else if(petThirst > 400) {
    if(gameState == 'walkingGame') {
      return;
    }

    if(animalX > waterBowlX) {
      moveAnimal(-1, 0);
    } else if(animalX < waterBowlX) {
      moveAnimal(1, 0);
    } else {
      // DRINK THE WATER!
      
      if(isWaterBowlFull) {
        petThirst = 4;
        fullWaterBowl.style.display = 'none';
        emptyWaterBowl.style.display = 'block';
        isWaterBowlFull = false;
      }
    }

    petThinkBubble('waterdrop');
  } else {
    thinkBubble.style.display = 'none';
  }
  
  setTimeout(petThink, 30);
}

function petThinkBubble(thought) {
  // show the think bubble
  // change the text in the think bubble
  var hungerThought = document.getElementById('hunger');

  var thirstThought = document.getElementById('thirst');
  thinkBubble.style.display = 'block';

  switch(thought) {
  

    case 'apple': {
      thirstThought.style.display = 'none';
      hungerThought.style.display = 'block';
    } break;
      
    case 'waterdrop': {
      hungerThought.style.display = 'none';
      thirstThought.style.display = 'block';
    } break;
  }
}

var fallingObjects = [];
function FallingObject(type) {
  var me = this;

  fallingObjects.push(me);

  me.x = 0;
  me.y = 0;
  me.image = document.createElement('img');
  me.speed = 1;
  me.active = true;
  me.type = type;

  document.body.appendChild(me.image);
  me.image.style.width = '100px';
  me.image.style.height = '100px';
  me.image.style.position = 'absolute';
  me.image.style.zIndex = 100;

  switch(type) {
    case 'rock': {
      me.image.src = "images/rock-003.jpg";
      me.speed = 5;
    } break;

    case 'tennisBall': {
      me.image.src = "images/tennisBall.png";
      me.speed = 2;
    } break;

    case 'coin': {
      me.image.src = "images/coin-1-hi.png";
      me.speed = 3;
    } break;

    case 'squirrel': {
      me.image.src = 'images/squirrel.png';
      me.speed = 6;
    } break;
  }
}

function getSum(arrayOfNumbers) {
  var sum = 0;

  for(var index = 0; index < arrayOfNumbers.length; index += 1) {
    var value = arrayOfNumbers[index];
    sum += value;
  }

  return sum;  
}

function getAverage(arrayOfNumbers) {
  var sum = getSum(arrayOfNumbers);

  return sum / arrayOfNumbers.length;
}

function generateObject() {
    var randomNumber = Math.random();

    var tennisBallChance = 1;
    var rockChance = 0.9;
    var coinChance = 0.7;
    var squirrelChance = 0.5;

    getAverage([tennisBallChance, rockChance, coinChance, squirrelChance]);

    var type = false;
    if(randomNumber > 0.7) {
      type = 'tennisBall';
    } else if(randomNumber > 0.4) {
      type = 'rock';
    } else if(randomNumber > 0.2) {
      type = 'coin';
    } else {
      type = 'squirrel';
    }

    var myNewObject = new FallingObject(type);
    var randomX = Math.floor(Math.random() * 1045);
    myNewObject.x = randomX;
}

function initializeWalking() {
  gameState = 'walkingGame';

  sidewalk.style.display = 'block';

  animalY = -475;
  // myPet.img.style.top = 475 + 'px';
  // myPet.img.style.zIndex = 4;

  for(var objectIndex = 0; objectIndex < 5; objectIndex++) {
    generateObject();
  }
}

function checkCollisionWithPlayer(object) {
  var playerLeftX = animalX;
  var playerRightX = playerLeftX + 120;
  var playerTopY = animalY + 50;
  var playerBottomY = playerTopY - 120;

  var playerPoints = [playerLeftX, playerRightX, playerTopY, playerBottomY];


  var objectLeftX = object.x;
  var objectRightX = objectLeftX + 100;
  var objectTopY = object.y;
  var objectBottomY = objectTopY - 100;

  // compare points and see if they hit
  if(playerLeftX < objectRightX &&
   playerRightX > objectLeftX &&
   playerBottomY < objectBottomY &&
   playerTopY > objectTopY) {
    return true;
  } else {
    return false
  }
}

function update() {
  if(gameState == 'walkingGame') {
    for(var fallingObjectIndex = 0; fallingObjectIndex < fallingObjects.length; fallingObjectIndex++) {
      var currentObject = fallingObjects[fallingObjectIndex];

      if(currentObject.active) {
        currentObject.y -= currentObject.speed;
        currentObject.image.style.left = currentObject.x + 'px';
        currentObject.image.style.top = -currentObject.y + 'px';

        if(currentObject.y < -550) {
          currentObject.active = false;
          generateObject();
          currentObject.image.style.display = 'none';
        }
      }

      // check if we're hitting the player
      if(currentObject.active) {
        var collidingWithPlayer = checkCollisionWithPlayer(currentObject);
        if(collidingWithPlayer) {
          if(currentObject.type == 'coin') {
            changePlayerMoney(5);
          }

          if(currentObject.type == 'tennisBall') {
            changePlayerMoney(1);
          }

          if(currentObject.type == 'squirrel') {
            changePlayerMoney(10);
          }

          if(currentObject.type == 'rock') {
            changePetHealth(-1);
            redScreen.style.display = 'block';
            setTimeout(function() {
              redScreen.style.display = 'none';
            }, 330);

            if(petHealth <= 0) {
              walkMiniGameOverScreen.style.display = 'block';
            }
          }

          currentObject.active = false;
          generateObject();
          currentObject.image.style.display = 'none';
        }
      }
    }

    var xDirection = 0;
    if(leftPressed) {
      xDirection -= 1;
    }

    if(rightPressed) {
      xDirection += 1;
    }

    // moveAnimal(xDirection * animalSpeed, yDirection);
  }

  setTimeout(update, 10);
}

update();

function moveAnimal(x, y) {
  animalX += x;
  animalY += y;

  if(animalX < 0) {
    animalX = 0;
  } else if(animalX > 1045 - 120) {
    animalX = 1045 - 120;
  }

  myPet.img.style.left = animalX + 'px';
  myPet.img.style.top = -animalY + 'px';
  thinkBubble.style.left = animalX + 50 + 'px';
  thinkBubble.style.top = -animalY - 83 + 'px';
}

var dogImages = ['bowdog.png', 'dog.gif', 'beagledog_2.png'];
for(var dogIndex = 0; dogIndex < dogImages.length; dogIndex++) {
  new SelectableDog(dogImages[dogIndex]);
}

var imageIndex = Math.floor(Math.random() * 3);
if(imageIndex == 3) {
  imageIndex = 2;
}

// for(var dogIndex = 0; dogIndex < 5; dogIndex++) {
//   dogImages[imageIndex]
//   new SelectableDog();
// }

function SelectableDog(image) {
  var me = this;

  me.image = image;

  me.name = false;
  me.age = Math.floor(2 + (Math.random() * 7));
  me.price = Math.floor(400 + (Math.random() * 280));
  me.gender = Math.random() > 0.5 ? 'male' : 'female';

  me.img = document.createElement('img');
  me.img.src = 'images/dogs/' + me.image;

  var dogSelection = document.getElementById('selectableDogs');
  dogSelection.appendChild(me.img);

  me.img.addEventListener('click', function() {
    if(petName == false) {
      var temporaryName = prompt("Name your dog.");

      if(!temporaryName) {
        return false;
      }

      petName = temporaryName;

      changePlayerMoney(-me.price);

      var petAgeElement = document.getElementById('petAge');
      petAgeElement.innerHTML = "Age: " + me.age + " months";

      me.name = petName;
      var petNameElement = document.getElementById('petName');
      petNameElement.innerHTML = petName;

      dogSelection.style.display = 'none';
      house.style.display = 'block';
    
      myPet = me;
      me.img.className = 'petImage';
      me.img.style.display = 'none';
      document.body.appendChild(me.img);
      // myPet.img = img;
    }
  });
}

var shampoo = new ShopItem('Shampoo', 6, 'shampoo 1.png');
var leash = new ShopItem('Leash', 8, 'BasicDogLeash.png');
var dogFood = new ShopItem('Dog Food', 5, 'bag-original.png');
var water = new ShopItem('Water', 2, 'Plastic-water-bottle.png');

function ShopItem(title, price, imageURL) {
  this.title = title;
  this.price = price;

  inventoryItems[title] = 0;

  var div = document.createElement('div');
  div.className = 'shopItem';

  var inventoryDiv = document.createElement('div');
  inventoryDiv.className = 'item';

  var imgTag = document.createElement('img');
  imgTag.src = 'images/' + imageURL;
  inventoryDiv.appendChild(imgTag);

  var nameDiv = document.createElement('div');
  nameDiv.innerHTML = title;
  nameDiv.className = 'title';
  inventoryDiv.appendChild(nameDiv);

  var amountOfItem = document.createElement('div');
  amountOfItem.innerHTML = "1";
  inventoryDiv.appendChild(amountOfItem);
  inventoryDiv.style.display = 'none';

  inventoryScreen.appendChild(inventoryDiv);

  inventoryDiv.addEventListener('click', function(event) {
      amountOfItem.innerHTML = inventoryItems[title];
      
      if(inventoryItems[title] == 0) {
        // remove from my inventory
        inventoryDiv.style.display = 'none';
      }

      switch(title) {
        case 'Dog Food': {
          inventoryItems[title] -= 1;
          fullBowl.style.display = 'block';
          emptyBowl.style.display = 'none';
          isBowlFull = true;
        } break;

        case 'Water' : {
          inventoryItems[title] -= 1;
          fullWaterBowl.style.display = 'block';
          emptyWaterBowl.style.display = 'none';
          isWaterBowlFull = true;
        } break;

        case 'Leash' : {
          // inventoryItems[title] -= 1;
          alert('To go for a walk, click on the door.');
        } break;

        case 'Shampoo': {
          // inventoryItems[title] -= 1;
          alert('warning not done yet');
        } break;
      }

      inventoryScreen.style.display = 'none';
  });

  div.addEventListener('click', function() {
    var playerAnswer = confirm('Are you sure that you would like to buy this item?');

    if(playerAnswer) {
      if(price > playerMoney) {
        alert("Sorry, you don't have enough coins to buy this item. You will need to get more coins if you would like to buy this item.");
      } else {
        // give the player one of those items and take money from them

        changePlayerMoney(-price);
        alert("You can now find this item in your inventory");

        var noItemDiv = document.getElementById('noItems');
        noItemDiv.style.display = 'none';

        inventoryItems[title] += 1;
        inventoryDiv.style.display = 'inline-block';
        // console.log(inventoryItems[title]);
        amountOfItem.innerHTML = inventoryItems[title];
      }
    }
  });

  this.image = document.createElement('img');
  this.image.src = 'images/' + imageURL;

  var nameDiv = document.createElement('div');
  nameDiv.innerHTML = '<b>' + title + '</b>';
  var priceDiv = document.createElement('div');
  priceDiv.innerHTML = '<b>' + price + '</b>';

  div.appendChild(this.image);
  div.appendChild(nameDiv);
  div.appendChild(priceDiv);

  supplyShop.appendChild(div);
}

function keyDown(eventData) {
  if(eventData.keyCode == 37) {
    // left arrow

    if(gameState == 'walkingGame') {
      // moveAnimal(-5, 0);
      leftPressed = true;
    }
  } else if(eventData.keyCode == 39) {
    // right arrow
    if(gameState == 'walkingGame') {
      // moveAnimal(5, 0);
      rightPressed = true;
    }
  } else if(eventData.keyCode == 38) {
    // up arrow
  } else if(eventData.keyCode == 40) {
    // down arrow
  }
}

function keyUp(eventData) {
  if(eventData.keyCode == 37) {
    // left arrow
    if(gameState == 'walkingGame') {
      // moveAnimal(-5, 0);
      leftPressed = false;
    }
  } else if(eventData.keyCode == 39) {
    // right arrow
    if(gameState == 'walkingGame') {
      // moveAnimal(5, 0);
      rightPressed = false;
    }
  } else if(eventData.keyCode == 38) {
    // up arrow
  } else if(eventData.keyCode == 40) {
    // down arrow
  }
}
