const router = require('express').Router();

const model = require('./model');

router.get('/', async (req, res) => {
  const concertList = await model.find();
  res.render('home', { concertList });
});

router.get('/form', async (req, res) => {
  const bandList = await model.find().distinct('bandName');
  const locationList = await model.find().distinct('location');

  res.render('form', { bandList, locationList });
});

router.get('/delete/:id', async (req, res) => {
  await model.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

router.post('/form', async (req, res) => {
  try {
    const newConcert = new model(req.body);
    console.log(newConcert);
    const result = await newConcert.save();
    console.log(result);
    res.redirect('/');
  } catch (err) {
    res.json(err);
  }
});

router.get('/stats', async (req, res) => {
  const bandStats = await model.aggregate([
    { $group: { _id: '$bandName', averageRating: { $avg: '$rating' } } },
  ]);

  const locationStats = await model.aggregate([
    { $group: { _id: '$location', averageRating: { $avg: '$rating' } } },
  ]);

  res.render('stats', { bandStats, locationStats });
});

module.exports = router;
