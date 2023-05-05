let proizvodiTemplate = document.getElementById("proizvodi-template").innerHTML;
let compiledProizvodiTemplate = Handlebars.compile(proizvodiTemplate);
let head1Template = document.getElementById("head1-template").innerHTML;
let compiledHead1Template = Handlebars.compile(head1Template);
let head2Template = document.getElementById("head2-template").innerHTML;
let compiledHead2Template = Handlebars.compile(head2Template);
let head3Template = document.getElementById("head3-template").innerHTML;
let compiledHead3Template = Handlebars.compile(head3Template);
// let foot1Template = document.getElementById("foot1-template").innerHTML;
// let compiledFoot1Template = Handlebars.compile(foot1Template);
let proizvodTemplate = document.getElementById("proizvodTemplate").innerHTML;
let compiledProizvodTemplate = Handlebars.compile(proizvodTemplate);
let foot2Template = document.getElementById("foot2-template").innerHTML;
let compiledFoot2Template = Handlebars.compile(foot2Template);
let foot3Template = document.getElementById("foot3-template").innerHTML;
let compiledFoot3Template = Handlebars.compile(foot3Template);
getAll().then(res=>{
    console.log(res);
    document.getElementsByClassName("proizvod")[0].innerHTML = compiledProizvodiTemplate({naziv: res.arrProizvodi[0].naziv, vrijeme: res.arrProizvodi[0].vrijeme, cijena1: res.arrProizvodi[0].cijena1, cijena2: res.arrProizvodi[0].cijena2,url: res.arrProizvodi[0].url});
    document.getElementsByClassName("proizvod")[1].innerHTML = compiledProizvodiTemplate({naziv: res.arrProizvodi[1].naziv, vrijeme: res.arrProizvodi[1].vrijeme, cijena1: res.arrProizvodi[1].cijena1, cijena2: res.arrProizvodi[1].cijena2,url: res.arrProizvodi[1].url});
    document.getElementsByClassName("proizvod")[2].innerHTML = compiledProizvodiTemplate({naziv: res.arrProizvodi[2].naziv, vrijeme: res.arrProizvodi[2].vrijeme, cijena1: res.arrProizvodi[2].cijena1, cijena2: res.arrProizvodi[2].cijena2,url: res.arrProizvodi[2].url});
    document.getElementsByClassName("proizvod")[3].innerHTML = compiledProizvodiTemplate({naziv: res.arrProizvodi[3].naziv, vrijeme: res.arrProizvodi[3].vrijeme, cijena1: res.arrProizvodi[3].cijena1, cijena2: res.arrProizvodi[3].cijena2,url: res.arrProizvodi[3].url});
    document.getElementsByClassName("nav1_itemi")[0].innerHTML = compiledHead1Template({arrNav1:res.arrNav1});
    document.getElementsByClassName("nav2")[0].innerHTML = compiledHead2Template({naziv1: res.arrNav2[0].naziv, naziv2: res.arrNav2[1].naziv, fbicon_url: res.arrNav2[2].url, mojakorpa_naziv: res.arrNav2[3].naziv, vrijednostkorpe: res.arrNav2[4].naziv, korpaicon_url: res.arrNav2[5].url});
    document.getElementsByClassName("nav3_itemi")[0].innerHTML = compiledHead3Template({homeicon_url: res.arrNav3[0].url, arrNav3: res.arrNav3.splice(1,res.arrNav3.length-3), informacije: res.arrNav3[res.arrNav3.length-2].naziv, brtel: res.arrNav3[res.arrNav3.length-1].naziv});
    //document.getElementsByClassName("topfooter")[0].innerHTML = compiledFoot1Template({arrFoot1: res.arrFoot1});
    for (let i = 0; i < res.arrFoot2.length;i++){
        document.getElementsByClassName("midfooter_item")[i].innerHTML = compiledFoot2Template({naziv: res.arrFoot2[i].naziv, elementi: res.arrFoot2[i].elementi});
    }
    document.getElementsByClassName("botfooter")[0].innerHTML = compiledFoot3Template({naziv1: res.arrFoot3[0].naziv, naziv2: res.arrFoot3[1].naziv,naziv3: res.arrFoot3[2].naziv});
    document.getElementsByClassName("leftside_mainflex_part1")[0].innerHTML = compiledProizvodTemplate({main_img_url: res.arrProizvod.url, slideArr: res.arrProizvod.slideurls, naziv: res.arrProizvod.naziv, cijena: res.arrProizvod.cijena, sifra1: res.arrProizvod.sifra1, sifra2: res.arrProizvod.sifra2, opisArr: res.arrProizvod.opis})
});