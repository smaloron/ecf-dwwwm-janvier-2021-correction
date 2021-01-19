const Mongoose = require('mongoose');

const ConcertSchema = new Mongoose.Schema({
  performanceDate: { type: Date, required: true },
  bandName: { type: String, required: true },
  location: { type: String, required: true },
  rating: { type: Number, required: true },
});

const Concert = Mongoose.model('concerts', ConcertSchema);

module.exports = Concert;
