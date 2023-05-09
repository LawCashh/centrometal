const proizvodi = require('../data/proizvodi.json');
const footer = require('../data/footer.json');
const header = require('../data/header.json');
const mainlistleft = require('../data/mainlistleft.json');
const proizvod = require('../data/proizvod.json');
const reklamemain = require('../data/reklamemain.json');
const testere = require('../data/testere.json');
const videos = require('../data/videos.json');

module.exports = () => ({
  proizvodi: proizvodi,
  footer: footer,
  header: header,
  mainlistleft: mainlistleft,
  proizvod: proizvod,
  reklamemain: reklamemain,
  testere: testere,
  videos: videos
});