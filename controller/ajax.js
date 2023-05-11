let arrVruciProizvodi, arrAkcijaProizvodi, arrPreporucujemoProizvodi, arrRasprodajaProizvodi, arrNovoProizvodi, arrProizvod, arrFoot1, arrFoot2, arrFoot3, arrNav1, arrNav2, arrNav3;
let arrMainListLeft, arrReklameMain, arrTestere, arrVideos;

async function getAllVruciProizvodi() {
    let res = await axios.get('http://localhost:3000/vruciproizvodi');
    arrVruciProizvodi = res.data;
}
async function getAllAkcijaProizvodi() {
    let res = await axios.get('http://localhost:3000/akcijaproizvodi');
    arrAkcijaProizvodi = res.data;
}
async function getAllPreporucujemoProizvodi() {
    let res = await axios.get('http://localhost:3000/preporucujemoproizvodi');
    arrPreporucujemoProizvodi = res.data;
}
async function getAllRasprodajaProizvodi() {
    let res = await axios.get('http://localhost:3000/rasprodajaproizvodi');
    arrRasprodajaProizvodi = res.data;
}
async function getAllNovoProizvodi() {
    let res = await axios.get('http://localhost:3000/novoproizvodi');
    arrNovoProizvodi = res.data;
}
async function getAllProizvod() {
    let res = await axios.get('http://localhost:3000/proizvod');
    arrProizvod = res.data[0];
}
async function getAllFooter() {
    let res = await axios.get('http://localhost:3000/footer');
    arrFoot1 = res.data.foot1;
    arrFoot2 = res.data.foot2;
    arrFoot3 = res.data.foot3;
}
async function getAllHeader() {
    let res = await axios.get('http://localhost:3000/header');
    arrNav1 = res.data.nav1;
    arrNav2 = res.data.nav2;
    arrNav3 = res.data.nav3;
}
async function getAllMainListLeft() {
    let res = await axios.get('http://localhost:3000/mainlistleft');
    arrMainListLeft = res.data;
}
async function getAllReklameMain() {
    let res = await axios.get('http://localhost:3000/reklamemain');
    arrReklameMain = res.data;
}
async function getAllTestere() {
    let res = await axios.get('http://localhost:3000/testere');
    arrTestere = res.data;
}
async function getAllVideos() {
    let res = await axios.get('http://localhost:3000/videos');
    arrVideos = res.data;
}
async function getAll() {
    await getAllVruciProizvodi();
    await getAllAkcijaProizvodi();
    await getAllPreporucujemoProizvodi();
    await getAllRasprodajaProizvodi();
    await getAllNovoProizvodi();
    await getAllProizvod();
    await getAllFooter();
    await getAllHeader();
    await getAllMainListLeft();
    await getAllReklameMain();
    await getAllTestere();
    await getAllVideos();
    let sve = {arrVruciProizvodi: arrVruciProizvodi,
        arrAkcijaProizvodi:arrAkcijaProizvodi,
        arrPreporucujemoProizvodi:arrPreporucujemoProizvodi,
        arrRasprodajaProizvodi:arrRasprodajaProizvodi,
        arrNovoProizvodi:arrNovoProizvodi,
        arrProizvod: arrProizvod,
        arrFoot1: arrFoot1,
        arrFoot2: arrFoot2,
        arrFoot3: arrFoot3,
        arrNav1: arrNav1,
        arrNav2: arrNav2,
        arrNav3: arrNav3,
        arrMainListLeft: arrMainListLeft,
        arrReklameMain: arrReklameMain,
        arrTestere: arrTestere,
        arrVideos: arrVideos};
    return sve;
}
async function getIndex() {
    await getAllProizvod();
    await getAllVruciProizvodi();
    await getAllAkcijaProizvodi();
    await getAllPreporucujemoProizvodi();
    await getAllRasprodajaProizvodi();
    await getAllNovoProizvodi();
    await getAllFooter();
    await getAllHeader();
    await getAllMainListLeft();
    await getAllReklameMain();
    await getAllTestere();
    let sve = {arrProizvod: arrProizvod,
        arrVruciProizvodi: arrVruciProizvodi,
        arrAkcijaProizvodi:arrAkcijaProizvodi,
        arrPreporucujemoProizvodi:arrPreporucujemoProizvodi,
        arrRasprodajaProizvodi:arrRasprodajaProizvodi,
        arrNovoProizvodi:arrNovoProizvodi,
        arrFoot1: arrFoot1,
        arrFoot2: arrFoot2,
        arrFoot3: arrFoot3,
        arrNav1: arrNav1,
        arrNav2: arrNav2,
        arrNav3: arrNav3,
        arrMainListLeft: arrMainListLeft,
        arrReklameMain: arrReklameMain,
        arrTestere: arrTestere};
    return sve;
}
async function getOpenProduct() {
    await getAllVruciProizvodi();
    await getAllProizvod();
    await getAllFooter();
    await getAllHeader();
    await getAllVideos();
    let sve = {
        arrVruciProizvodi:arrVruciProizvodi,
        arrProizvod: arrProizvod,
        arrFoot1: arrFoot1,
        arrFoot2: arrFoot2,
        arrFoot3: arrFoot3,
        arrNav1: arrNav1,
        arrNav2: arrNav2,
        arrNav3: arrNav3,
        arrVideos: arrVideos};
    return sve;
}

/*axios.get('http://localhost:3000/proizvodi')
.then((res) => {
    console.log(res.data);
})
.catch((err) => {
    console.log("ima greska " + err);
});*/

/*async function postToJsonServer () {
    params = {
        id: 5,
        naziv: "Ugradn set frižider gorenje",
        vrijeme: "10 dan 6 sat 15 min 10 sek",
        cijena: "€135.00 €90.00",
        url: "https://lh3.googleusercontent.com/u/0/drive-viewer/AAOQEORQDT1DvlRvCVh0Kbo-9-MncVYa7u9cWcFnxkbCg9NETu1iciuNPMJDO30Pgl_Kkeeldkfqk0EMG8sp5nDbpk7WMPnAIQ=w3584-h1904" 
    }
    let res = await axios.post('http://localhost:3000/proizvodi/', params);
    console.log(res.data);
}

async function deleteFromJsonServer (id) { 
    try{
        let res = await axios.delete('http://localhost:3000/proizvodi/' + id);
        console.log(res.data);
    }
    catch (err){
        console.log("greska..");
        console.log(err);
    }
}*/
//postToJsonServer();
//deleteFromJsonServer(2);
//pozove json server i vrati podatke - controller