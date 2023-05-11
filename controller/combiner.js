const vruciproizvodi = require('../data/vruciproizvodi.json');
const akcijaproizvodi = require('../data/akcijaproizvodi.json');
const novoproizvodi = require('../data/novoproizvodi.json');
const preporucujemoproizvodi = require('../data/preporucujemoproizvodi.json');
const rasprodajaproizvodi = require('../data/rasprodajaproizvodi.json');
const footer = require('../data/footer.json');
const header = require('../data/header.json');
const mainlistleft = require('../data/mainlistleft.json');
const proizvod = require('../data/proizvod.json');
const reklamemain = require('../data/reklamemain.json');
const testere = require('../data/testere.json');
const videos = require('../data/videos.json');

module.exports = () => ({
  vruciproizvodi: vruciproizvodi,
  akcijaproizvodi:akcijaproizvodi,
  novoproizvodi:novoproizvodi,
  preporucujemoproizvodi:preporucujemoproizvodi,
  rasprodajaproizvodi:rasprodajaproizvodi,
  footer: footer,
  header: header,
  mainlistleft: mainlistleft,
  proizvod: proizvod,
  reklamemain: reklamemain,
  testere: testere,
  videos: videos
});