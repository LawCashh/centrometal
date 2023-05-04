let proizvodiTemplate = document.getElementById("proizvodi-template").innerHTML;
let compiledProizvodiTemplate = Handlebars.compile(proizvodiTemplate);
getAll().then(res=>{
    console.log(res);
    for (let i = 0; i < 24; i+=4){
        document.getElementsByClassName("proizvod")[i].innerHTML = compiledProizvodiTemplate({naziv: res.arrProizvodi[0].naziv, vrijeme: res.arrProizvodi[0].vrijeme, cijena1: res.arrProizvodi[0].cijena1, cijena2: res.arrProizvodi[0].cijena2,url: res.arrProizvodi[0].url});
        document.getElementsByClassName("proizvod")[i+1].innerHTML = compiledProizvodiTemplate({naziv: res.arrProizvodi[1].naziv, vrijeme: res.arrProizvodi[1].vrijeme, cijena1: res.arrProizvodi[1].cijena1, cijena2: res.arrProizvodi[1].cijena2,url: res.arrProizvodi[1].url});
        document.getElementsByClassName("proizvod")[i+2].innerHTML = compiledProizvodiTemplate({naziv: res.arrProizvodi[2].naziv, vrijeme: res.arrProizvodi[2].vrijeme, cijena1: res.arrProizvodi[2].cijena1, cijena2: res.arrProizvodi[2].cijena2,url: res.arrProizvodi[2].url});
        document.getElementsByClassName("proizvod")[i+3].innerHTML = compiledProizvodiTemplate({naziv: res.arrProizvodi[3].naziv, vrijeme: res.arrProizvodi[3].vrijeme, cijena1: res.arrProizvodi[3].cijena1, cijena2: res.arrProizvodi[3].cijena2,url: res.arrProizvodi[3].url});
    }
});