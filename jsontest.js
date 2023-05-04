const axios = require('axios');

async function getAllProizvodi() {
    let res = await axios.get('http://localhost:3000/proizvodi');
    console.log(res.data);
}

/*axios.get('http://localhost:3000/proizvodi')
.then((res) => {
    console.log(res.data);
})
.catch((err) => {
    console.log("ima greska " + err);
});*/

async function postToJsonServer () {
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
}
//postToJsonServer();
//deleteFromJsonServer(2);
getAll();
postToJsonServer();
getAll();
//pozove json server i vrati podatke - controller