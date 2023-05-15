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

let id = window.location.href.slice(-1);
console.log(id);

getOpenProduct1().then(res=>{
    console.log(res);
    setTimeout(() => {
    document.getElementsByClassName("proizvod")[0].innerHTML = compiledProizvodiTemplate({naziv: res.arrVruciProizvodi[0].naziv, vrijeme: res.arrVruciProizvodi[0].vrijeme, cijena1: res.arrVruciProizvodi[0].cijena1, cijena2: res.arrVruciProizvodi[0].cijena2,url: res.arrVruciProizvodi[0].url});
    document.getElementsByClassName("proizvod")[0].classList.remove("skeleton");
    document.getElementsByClassName("proizvod")[1].innerHTML = compiledProizvodiTemplate({naziv: res.arrVruciProizvodi[1].naziv, vrijeme: res.arrVruciProizvodi[1].vrijeme, cijena1: res.arrVruciProizvodi[1].cijena1, cijena2: res.arrVruciProizvodi[1].cijena2,url: res.arrVruciProizvodi[1].url});
    document.getElementsByClassName("proizvod")[1].classList.remove("skeleton");
    document.getElementsByClassName("proizvod")[2].innerHTML = compiledProizvodiTemplate({naziv: res.arrVruciProizvodi[2].naziv, vrijeme: res.arrVruciProizvodi[2].vrijeme, cijena1: res.arrVruciProizvodi[2].cijena1, cijena2: res.arrVruciProizvodi[2].cijena2,url: res.arrVruciProizvodi[2].url});
    document.getElementsByClassName("proizvod")[2].classList.remove("skeleton");
    document.getElementsByClassName("proizvod")[3].innerHTML = compiledProizvodiTemplate({naziv: res.arrVruciProizvodi[3].naziv, vrijeme: res.arrVruciProizvodi[3].vrijeme, cijena1: res.arrVruciProizvodi[3].cijena1, cijena2: res.arrVruciProizvodi[3].cijena2,url: res.arrVruciProizvodi[3].url});
    document.getElementsByClassName("proizvod")[3].classList.remove("skeleton");
    document.getElementsByClassName("nav1_itemi")[0].innerHTML = compiledHead1Template({arrNav1:res.arrNav1});
    document.getElementsByClassName("nav1_itemi")[0].classList.remove("skeleton");
    document.getElementsByClassName("nav2")[0].innerHTML = compiledHead2Template({naziv1: res.arrNav2[0].naziv, naziv2: res.arrNav2[1].naziv, fbicon_url: res.arrNav2[2].url, mojakorpa_naziv: res.arrNav2[3].naziv, vrijednostkorpe: res.arrNav2[4].naziv, korpaicon_url: res.arrNav2[5].url});
    document.getElementsByClassName("nav2")[0].classList.remove("skeleton");
    document.getElementsByClassName("nav3_itemi")[0].innerHTML = compiledHead3Template({homeicon_url: res.arrNav3[0].url, arrNav3: res.arrNav3.splice(1,res.arrNav3.length-3), informacije: res.arrNav3[res.arrNav3.length-2].naziv, brtel: res.arrNav3[res.arrNav3.length-1].naziv});
    document.getElementsByClassName("nav3_itemi")[0].classList.remove("skeleton");
    //document.getElementsByClassName("topfooter")[0].innerHTML = compiledFoot1Template({arrFoot1: res.arrFoot1});
    for (let i = 0; i < res.arrFoot2.length;i++){
        document.getElementsByClassName("midfooter_item")[i].innerHTML = compiledFoot2Template({naziv: res.arrFoot2[i].naziv, elementi: res.arrFoot2[i].elementi});
        document.getElementsByClassName("midfooter_item")[i].classList.remove("skeleton");
    }
    document.getElementsByClassName("botfooter")[0].innerHTML = compiledFoot3Template({naziv1: res.arrFoot3[0].naziv, naziv2: res.arrFoot3[1].naziv,naziv3: res.arrFoot3[2].naziv});
    document.getElementsByClassName("botfooter")[0].classList.remove("skeleton");
    document.getElementsByClassName("leftside_mainflex_part1")[0].innerHTML = compiledProizvodTemplate({main_img_url: res.arrProizvod1.url, slideArr: res.arrProizvod1.slideurls, naziv: res.arrProizvod1.naziv, cijena: res.arrProizvod1.cijena, sifra1: res.arrProizvod1.sifra1, sifra2: res.arrProizvod1.sifra2, opisArr: res.arrProizvod1.opis});
    document.getElementsByClassName("leftside_mainflex_part1")[0].classList.remove("skeleton_mainflex_part1");
    }, 2000);
});