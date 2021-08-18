var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products =[
    {
      name:"Iphone 12 Pro",
      category:"Mobiles",
      description:"Made by apple",
      image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone-12-pro-202108?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1628098907000"

    },{
      name:"Iphone 11",
      category:"Mobiles",
      description:"Made by apple",
      image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone-11-202108?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1628098906000"


    },{
      name:"Iphone XR",
      category:"Mobiles",
      description:"Made by apple",
      image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone-XR-202108?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1628098907000"

    },{
      name:"Iphone SE",
      category:"Mobiles",
      description:"Made by apple",
      image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone-SE-202108?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1628098903000"

    }
  ]
  res.render('index', { products,admin: true });
});

module.exports = router;
