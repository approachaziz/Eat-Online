var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// Create Schema
var orderSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  include: {
    type: String,
    required: true
  },
  CustomerName:{
      type:String,
      required:true
  },
  CustomerPhone:{
    type:String,
    required:true
},
CustomerAddress:{
    type:String,
    required:true
}

});

var orderRestaurant=mongoose.model('Order',orderSchema);
module.exports=orderRestaurant; 