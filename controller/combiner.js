const vruciproizvodi = require('../data/vruciproizvodi.json');
const akcijaproizvodi = require('../data/akcijaproizvodi.json');
const novoproizvodi = require('../data/novoproizvodi.json');
const preporucujemoproizvodi = require('../data/preporucujemoproizvodi.json');
const rasprodajaproizvodi = require('../data/rasprodajaproizvodi.json');
const footer = require('../data/footer.json');
const header = require('../data/header.json');
const mainlistleft = require('../data/mainlistleft.json');
const proizvod1 = require('../data/1.json');
const proizvod2 = require('../data/2.json');
const proizvod3 = require('../data/3.json');
const proizvod4 = require('../data/4.json');
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
  proizvod1: proizvod1,
  proizvod2: proizvod2,
  proizvod3: proizvod3,
  proizvod4: proizvod4,
  reklamemain: reklamemain,
  testere: testere,
  videos: videos
});