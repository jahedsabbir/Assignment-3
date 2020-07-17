//feetToMile. work-1

function feetToMile(feet){
    var mile = feet * 0.00018939;
    return mile;
}
//woodCalculator. work-2

function woodCalculator(chair, table, bed){
    var ChairWoodCount = chair * 1728;
    var tableWoodCount = table * 5184;
    var bedWoodCount = bed * 8640;
    var totalWood = ChairWoodCount + tableWoodCount + bedWoodCount;
    return totalWood;
}


// brickCalculator. work-3

  function brickCalculator(floor){
    if(floor <= 10){
      var brick = floor * 15000;
    
    }
    else if(floor <= 20){
      var brick = floor * 12000;
    }
    else{
      var brick = floor * 10000;
    }
      

     return brick;
  }
  

  //tinyFriend. work-4

function tinyFriend(smallName){
  var shortest = smallName[0];
  
  
  for(var i = 0; i < smallName.length; i++){
    if(shortest.length > smallName[i].length){
      shortest = smallName[i];
    }
  }
  return shortest
}
