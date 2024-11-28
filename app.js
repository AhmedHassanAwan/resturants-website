console.log("ahmed hassan awan");


const menue = [
    { "item": "Cheeseburger", "price": 5.99, "rating": 4.5, "image":"https://recipeland.com/images/r/20871/a0e464de9297edf35c97_1024.jpg" },
    { "item": " Pizza Slice", "price": 3.49, "rating": 4.7 , "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZGijp47oVRMOyT2EjgiCXg0MQqjnRUOpfWQ&s" },
    { "item": "Chicken Nuggets ", "price": 4.29, "rating": 4.3 , "image": "https://images.getrecipekit.com/20240130210635-frozen-chicken-nuggets.jpg?width=650&quality=90&"},
    { "item": "Fries", "price": 2.99, "rating": 4.6 , "image":  "https://thissillygirlskitchen.com/wp-content/uploads/2020/02/homemade-french-fries-8-1.jpg"},
    { "item": "Hot Dog", "price": 3.79, "rating": 4.2 , "image": "https://www.thecountrycook.net/wp-content/uploads/2022/08/thumbnail-Hot-Dog-Chili-scaled.jpg"},
    { "item": "Taco", "price": 2.49, "rating": 4.8 , "image": "https://www.thecookierookie.com/wp-content/uploads/2024/05/street-tacos-recipe-2.jpg" },
    { "item": " Sandwich", "price": 6.49, "rating": 4.5 , "image": "https://www.chefkunalkapur.com/wp-content/uploads/2021/10/Grilled-Chicken-Sandwich-1300x867.jpg?v=1635000535" },
    { "item": "Fish Sandwich", "price": 5.99, "rating": 4.1 , "image":  "https://thecozyapron.com/wp-content/uploads/2021/03/fish-sandwich_thecozyapron_1.jpg"},
    { "item": "Veggie Wrap", "price": 5.29, "rating": 4.4 , "image":  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFJcpnVd3vNj-_oSo_ydj3xIwtdNEruL8kKA&s"},
    { "item": "Mozzarella Sticks", "price": 4.99, "rating": 4.3  , "image": "https://sugarspunrun.com/wp-content/uploads/2021/07/Homemade-Mozzarella-Sticks-Recipe-1-of-1.jpg"},
    { "item": "Milkshake", "price": 3.99, "rating": 4.7 , "image": "https://www.skymsen.com/ckfinder/userfiles/images/milkshake%20profissional%20(1).jpeg" },
    { "item": "Onion Rings", "price": 3.49, "rating": 4.2 , "image": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/7f539fc41a5543aebfe03afed73a0b48/BFV9112_MozzarellaStickOnionRings.jpg?resize=1200:*" },
    { "item": "Quesadilla", "price": 4.59, "rating": 4.5 , "image": "https://www.mommafitlyndsey.com/wp-content/uploads/2021/07/quesadilla-featured-image.jpg"},
    { "item": "Chicken Tenders ", "price": 5.49, "rating": 4.6  , "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ00Gtw4On8kXVxslzHHbZosKtiFUBG3bLFOHFZVdB1dYy9Rs-6A0T3_ZyzD6QPGEhCGs&usqp=CAU"},
    { "item": "Beef Burrito", "price": 6.79, "rating": 4.8 , "image": "https://s.wendyweekendgourmet.com/media/20240914085818/Simple-Beef-Burritos_done.png" },
    { "item": "Breakfast Sandwich", "price": 4.89, "rating": 4.4 , "image": "https://grilledcheesesocial.com/wp-content/uploads/2024/04/bagel-breakfast-sandwich-recipe-9.jpg" },
    { "item": "Egg & Cheese Bagel", "price": 3.99, "rating": 4.3  , "image": "https://breadboozebacon.com/wp-content/uploads/2022/09/Bacon-Egg-Cheese-Bagel-Breakfast-Sandwich-SQUARE.jpg"},
    { "item": "Pancakes (3 stack)", "price": 5.99, "rating": 4.6  , "image": "https://brokenovenbaking.com/wp-content/uploads/2023/01/cinnamon-honey-pancakes-8-1.jpg"},
    { "item": "Crispy Hash Browns", "price": 1.99, "rating": 4.5 , "image": "https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2020/01/baked-vegan-hash-browns-plate-800x1200.jpg" },
    { "item": "Falafel Pita Sandwich", "price": 5.29, "rating": 4.4  , "image": "https://tastythriftytimely.com/wp-content/uploads/2023/06/Falafel-Pita-FEATURED.jpg"},
    { "item": "Shawarma Wrap", "price": 6.99, "rating": 4.7  , "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjIAfLqeImOPh_UFUGIZhcptAlYetBx9_djw&s" },
    { "item": "Doner Kebab", "price": 7.49, "rating": 4.8  , "image": "https://www.jocooks.com/wp-content/uploads/2023/04/chicken-doner-kebab-1.jpg"},
    { "item": "Spring Rolls", "price": 3.99, "rating": 4.3  , "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyf1r8IJxXXuhrdSBlUuwcPnQK1YwzdDNvzA&s"},
    { "item": "Popcorn Chicken", "price": 4.79, "rating": 4.5 , "image": "https://thecozycook.com/wp-content/uploads/2023/02/Popcorn-Chicken-f.jpg" },
    { "item": "Ice Cream Cone", "price": 2.49, "rating": 4.6  , "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8b7KyTFcg0VnwEH0z9X7bMhUq6MOQlBHZFA&s" },
    { "item": "Slushie", "price": 2.99, "rating": 4.2 , "image": "https://thatgirlcookshealthy.com/wp-content/uploads/2014/05/frozen-strawberry-slushie.jpg"  },
    { "item": " Caesar Salad", "price": 7.29, "rating": 4.4 , "image":  "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-327831_11-3524329.jpg"},
    { "item": "Cheesecake Slice", "price": 4.49, "rating": 4.7  , "image": "https://www.jocooks.com/wp-content/uploads/2018/11/cheesecake-1-22-500x500.jpg"},
    { "item": "Brownie", "price": 3.49, "rating": 4.5 , "image":  "https://www.tasteofhome.com/wp-content/uploads/2018/01/EXPS_TOHD24_30279_JuliaHartbeck_9.jpg"},
    { "item": "Banoffee", "price": 3.49, "rating": 4.5 , "image": "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/best-ever_banoffee_pie_75984_16x9.jpg"}
  ];



const div = document.querySelector("#container1");



  menue.map((item)=>{
    div.innerHTML += `
     <div class="animate__animated  animate__rubberBand" class="card" style="width: 15rem;" >
  <img class="img" src= ${item.image} class="card-img-top" alt="..."><br><br>
  <div class="card-body" id="card-text">
    <h5 class="card-title">Name:${item.item}</h5>
    <h5 class="card-title"> Price:$${item.price}</h5>
     <p>Rating: ${item.rating} ⭐⭐⭐⭐⭐</p>
     <div class="animate__animated animate__rubberBand" >
     <button  class="ordernow" onclick="ordernow()">Order Now</button>
     </div>
    

    
  
  </div>
</div>` 
  });

      
    console.log(item.item);
    
 
  