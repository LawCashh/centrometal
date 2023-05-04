const proizvodi = require('./proizvodi.json');
const footer = require('./footer.json');
const header = require('./header.json');
const mainlistleft = require('./mainlistleft.json');
const proizvod = require('./proizvod.json');
const reklamemain = require('./reklamemain.json');
const testere = require('./testere.json');
const videos = require('./videos.json');

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