//Name change
let person1 = prompt("Please enter your name", "Jugador 1");
let text;
if (person1 == null || person1 == "") {
  text = "User cancelled the prompt.";
} else {
  x=document.getElementById("equipo1");  // Find the elements
  x.textContent = person1;
}

//Name change2
let person2 = prompt("Please enter your name", "Jugador 2");
let text2;
if (person1 == null || person2 == "") {
  text = "User cancelled the prompt.";
} else {
  y=document.getElementById("equipo2");  // Find the elements
  y.textContent = person2;
}


class Personaje {
    constructor(id, name, img, img2) {
      this.id = id;
      this.name = name;
      this.img = img;
      this.img2 = img2;
    }
  }

let Aether = new Personaje("1", "Aether", "/PickAndBans/static/media/Long/Aether_T1.png", "/PickAndBans/static/media/Long/Aether_T2.png");
let Albedo = new Personaje("2", "Albedo", "/PickAndBans/static/media/Long/Albedo_T1.png", "/PickAndBans/static/media/Long/Albedo_T2.png");
let Aloy = new Personaje("3", "Aloy", "/PickAndBans/static/media/Long/Aloy_T1.png", "/PickAndBans/static/media/Long/Aloy_T2.png");
let Amber = new Personaje("4", "Amber", "/PickAndBans/static/media/Long/Amber_T1.png", "/PickAndBans/static/media/Long/Amber_T2.png");
let Ayaka = new Personaje("5", "Ayaka", "/PickAndBans/static/media/Long/Ayaka_T1.png", "/PickAndBans/static/media/Long/Ayaka_T2.png");
let Ayato = new Personaje("6", "Ayato", "/PickAndBans/static/media/Long/Ayato_T1.png", "/PickAndBans/static/media/Long/Ayato_T2.png");
let Barbara = new Personaje("7", "Barbara", "/PickAndBans/static/media/Long/Barbara_T1.png", "/PickAndBans/static/media/Long/Barbara_T2.png");
let Beidou = new Personaje("8", "Beidou", "/PickAndBans/static/media/Long/Beidou_T1.png", "/PickAndBans/static/media/Long/Beidou_T2.png");
let Bennet = new Personaje("9", "Bennet", "/PickAndBans/static/media/Long/Bennet_T1.png", "/PickAndBans/static/media/Long/Bennet_T2.png");
let Chongyun = new Personaje("10", "Chongyun", "/PickAndBans/static/media/Long/Chongyun_T1.png", "/PickAndBans/static/media/Long/Chongyun_T2.png");
let Diluc = new Personaje("11", "Diluc", "/PickAndBans/static/media/Long/Diluc_T1.png", "/PickAndBans/static/media/Long/Diluc_T2.png");
let Diona = new Personaje("12", "Diona", "/PickAndBans/static/media/Long/Diona_T1.png", "/PickAndBans/static/media/Long/Diona_T2.png");
let Eula = new Personaje("13", "Eula", "/PickAndBans/static/media/Long/Eula_T1.png", "/PickAndBans/static/media/Long/Eula_T2.png");
let Fischl = new Personaje("14", "Fischl", "/PickAndBans/static/media/Long/Fischl_T1.png", "/PickAndBans/static/media/Long/Fischl_T2.png");
let Ganyu = new Personaje("15", "Ganyu", "/PickAndBans/static/media/Long/Ganyu_T1.png", "/PickAndBans/static/media/Long/Ganyu_T2.png");
let Gorou = new Personaje("16", "Gorou", "/PickAndBans/static/media/Long/Gorou_T1.png", "/PickAndBans/static/media/Long/Gorou_T2.png");
let Hu_Tao = new Personaje("17", "Hu Tao", "/PickAndBans/static/media/Long/Hu Tao_T1.png", "/PickAndBans/static/media/Long/Hu Tao_T2.png");
let Itto = new Personaje("18", "Itto", "/PickAndBans/static/media/Long/Itto_T1.png", "/PickAndBans/static/media/Long/Itto_T2.png");
let Jean = new Personaje("19", "Jean", "/PickAndBans/static/media/Long/Jean_T1.png", "/PickAndBans/static/media/Long/Jean_T2.png");
let Kaeya = new Personaje("20", "Kaeya", "/PickAndBans/static/media/Long/Kaeya_T1.png", "/PickAndBans/static/media/Long/Kaeya_T2.png");
let Kazuha = new Personaje("21", "Kazuha", "/PickAndBans/static/media/Long/Kazuha_T1.png", "/PickAndBans/static/media/Long/Kazuha_T2.png");
let Keqing = new Personaje("22", "Keqing", "/PickAndBans/static/media/Long/Keqing_T1.png", "/PickAndBans/static/media/Long/Keqing_T2.png");
let Klee = new Personaje("23", "Klee", "/PickAndBans/static/media/Long/Klee_T1.png", "/PickAndBans/static/media/Long/Klee_T2.png");
let Kokomi = new Personaje("24", "Kokomi", "/PickAndBans/static/media/Long/Kokomi_T1.png", "/PickAndBans/static/media/Long/Kokomi_T2.png");
let Kuki = new Personaje("25", "Kuki", "/PickAndBans/static/media/Long/Kuki_T1.png", "/PickAndBans/static/media/Long/Kuki_T2.png");
let Lisa = new Personaje("26", "Lisa", "/PickAndBans/static/media/Long/Lisa_T1.png", "/PickAndBans/static/media/Long/Lisa_T2.png");
let Lumine = new Personaje("27", "Lumine", "/PickAndBans/static/media/Long/Lumine_T1.png", "/PickAndBans/static/media/Long/Lumine_T2.png");
let Mona = new Personaje("28", "Mona", "/PickAndBans/static/media/Long/Mona_T1.png", "/PickAndBans/static/media/Long/Mona_T2.png");
let Ningguang = new Personaje("29", "Ningguang", "/PickAndBans/static/media/Long/Ningguang_T1.png", "/PickAndBans/static/media/Long/Ningguang_T2.png");
let Noelle = new Personaje("30", "Noelle", "/PickAndBans/static/media/Long/Noelle_T1.png", "/PickAndBans/static/media/Long/Noelle_T2.png");
let Qiqi = new Personaje("31", "Qiqi", "/PickAndBans/static/media/Long/Qiqi_T1.png", "/PickAndBans/static/media/Long/Qiqi_T2.png");
let Razor = new Personaje("32", "Razor", "/PickAndBans/static/media/Long/Razor_T1.png", "/PickAndBans/static/media/Long/Razor_T2.png");
let Rosaria = new Personaje("33", "Rosaria", "/PickAndBans/static/media/Long/Rosaria_T1.png", "/PickAndBans/static/media/Long/Rosaria_T2.png");
let Sacarosa = new Personaje("34", "Sacarosa", "/PickAndBans/static/media/Long/Sacarosa_T1.png", "/PickAndBans/static/media/Long/Sacarosa_T2.png");
let Sara = new Personaje("35", "Sara", "/PickAndBans/static/media/Long/Sara_T1.png", "/PickAndBans/static/media/Long/Sara_T2.png");
let Sayu = new Personaje("36", "Sayu", "/PickAndBans/static/media/Long/Sayu_T1.png", "/PickAndBans/static/media/Long/Sayu_T2.png");
let Shenhe = new Personaje("37", "Shenhe", "/PickAndBans/static/media/Long/Shenhe_T1.png", "/PickAndBans/static/media/Long/Shenhe_T2.png");
let Shogun = new Personaje("38", "Shogun", "/PickAndBans/static/media/Long/Shogun_T1.png", "/PickAndBans/static/media/Long/Shogun_T2.png");
let Tartaglia = new Personaje("39", "Tartaglia", "/PickAndBans/static/media/Long/Tartaglia_T1.png", "/PickAndBans/static/media/Long/Tartaglia_T2.png");
let Thoma = new Personaje("40", "Thoma", "/PickAndBans/static/media/Long/Thoma_T1.png", "/PickAndBans/static/media/Long/Thoma_T2.png");
let Venti = new Personaje("41", "Venti", "/PickAndBans/static/media/Long/Venti_T1.png", "/PickAndBans/static/media/Long/Venti_T2.png");
let Xiangling = new Personaje("42", "Xiangling", "/PickAndBans/static/media/Long/Xiangling_T1.png", "/PickAndBans/static/media/Long/Xiangling_T2.png");
let Xiao = new Personaje("43", "Xiao", "/PickAndBans/static/media/Long/Xiao_T1.png", "/PickAndBans/static/media/Long/Xiao_T2.png");
let Xinqiu = new Personaje("44", "Xinqiu", "/PickAndBans/static/media/Long/Xinqiu_T1.png", "/PickAndBans/static/media/Long/Xinqiu_T2.png");
let Xinyan = new Personaje("45", "Xinyan", "/PickAndBans/static/media/Long/Xinyan_T1.png", "/PickAndBans/static/media/Long/Xinyan_T2.png");
let Yae = new Personaje("46", "Yae", "/PickAndBans/static/media/Long/Yae_T1.png", "/PickAndBans/static/media/Long/Yae_T2.png");
let Yanfei = new Personaje("47", "Yanfei", "/PickAndBans/static/media/Long/Yanfei_T1.png", "/PickAndBans/static/media/Long/Yanfei_T2.png");
let Yelan = new Personaje("48", "Yelan", "/PickAndBans/static/media/Long/Yelan_T1.png", "/PickAndBans/static/media/Long/Yelan_T2.png");
let Yoimiya = new Personaje("49", "Yoimiya", "/PickAndBans/static/media/Long/Yoimiya_T1.png", "/PickAndBans/static/media/Long/Yoimiya_T2.png");
let Yunjin = new Personaje("50", "Yunjin", "/PickAndBans/static/media/Long/Yunjin_T1.png", "/PickAndBans/static/media/Long/Yunjin_T2.png");
let Zhongli = new Personaje("51", "Zhongli", "/PickAndBans/static/media/Long/Zhongli_T1.png", "/PickAndBans/static/media/Long/Zhongli_T2.png");
let Heizou = new Personaje("52", "Heizou", "/PickAndBans/static/media/Long/Heizou_T1.png", "/PickAndBans/static/media/Long/Heizou_T2.png");
let Placeholder = new Personaje(53, "", "", "");
//Sets de Bans, exclusivos y generales
// Create Sets
const bans = new Set();
const exclusive = new Set();
const general1 = new Set();
const general2 = new Set();
const personajes = [Aether,Albedo,Aloy,Amber, Ayaka,  Ayato, 
  Barbara, Beidou,
  Bennet,
  Chongyun,
  Diluc, 
  Diona, 
  Eula, 
  Fischl, 
  Ganyu, 
  Gorou, 
Hu_Tao, Itto, 
  Jean, 
  Kaeya, 
  Kazuha, 
  Keqing, 
  Klee, 
  Kokomi, 
  Kuki, 
  Lisa, 
  Lumine, 
  Mona, 
  Ningguang,
  Noelle,
  Qiqi,
  Razor,
  Rosaria,
  Sacarosa,
  Sara,
  Sayu,
  Shenhe,
  Shogun,
  Tartaglia,
  Thoma, 
  Venti, 
  Xiangling, 
  Xiao, 
  Xinqiu,
  Xinyan,
  Yae,
  Yanfei,
  Yelan,
  Yoimiya,
  Yunjin,
  Zhongli,
  Heizou]

let actual = null;
let previus = null;
let contador = 0;
$(document).ready(function() {
  $('.champion').click(function() {
    namae = this.textContent;

    //bans
    switch(bans.size){
      case 0:
        for (let i = 0; i < personajes.length; i++) {
          pj = personajes[i];
          if (pj.name === namae){            
            id = $(pj).attr("id")
            var element = document.getElementById(id);
            var imagen = element.getAttribute('style');
            $("#101").attr("style",imagen); //cambiar imagen
            actual = pj;
          }
        }
        break;
      case 1:
        for (let i = 0; i < personajes.length; i++) {
          pj = personajes[i];
          if (pj.name === namae){
            id = $(pj).attr("id")
            var element = document.getElementById(id);
            var imagen = element.getAttribute('style');
            $("#102").attr("style",imagen); //cambiar imagen
            actual = pj;
          }
        }
        break;
    }
    //verificación
    if(bans.size == 2){
      switch(exclusive.size){
        case 0:
          document.querySelectorAll('div.pick').forEach(function(item) {
            if(item.contains(document.getElementById("c1"))){
              item.className = "pick eleccion";
            }
          })
          for (let i = 0; i < personajes.length; i++) {
            pj = personajes[i];
            if (pj.name === namae){
              $("#img1").attr("src",pj.img,"alt",pj.name); //cambiar imagen
              $("#c1").text(pj.name);
              actual = pj;
            }
          }
          break;   
        case 1:
          document.querySelectorAll('div.pick').forEach(function(item) {
            if(item.contains(document.getElementById("c1"))){
              item.className = "pick";
            }
          })
          document.querySelectorAll('div.pick2').forEach(function(item) {
            if(item.contains(document.getElementById("c9"))){
              item.className = "pick2 eleccion";
            }
          })
          for (let i = 0; i < personajes.length; i++) {
            pj = personajes[i];
            if (pj.name === namae){
              $("#img9").attr("src",pj.img2,"alt",pj.name); //cambiar imagen
              $("#c9").text(pj.name);
              actual = pj;
            }
          }
          break;
        case 2:
          document.querySelectorAll('div.pick2').forEach(function(item) {
            if(item.contains(document.getElementById("c9"))){
              item.className = "pick2";
            }
          })
          document.querySelectorAll('div.pick').forEach(function(item) {
            if(item.contains(document.getElementById("c5"))){
              item.className = "pick eleccion";
            }
          })
          for (let i = 0; i < personajes.length; i++) {
            pj = personajes[i];
            if (pj.name === namae){
              $("#img5").attr("src",pj.img,"alt",pj.name); //cambiar imagen
              $("#c5").text(pj.name);
              actual = pj;
            }
          }
          break;
        case 3:
          document.querySelectorAll('div.pick').forEach(function(item) {
            if(item.contains(document.getElementById("c5"))){
              item.className = "pick";
            }
          })
          document.querySelectorAll('div.pick2').forEach(function(item) {
            if(item.contains(document.getElementById("c13"))){
              item.className = "pick2 eleccion";
            }
          })
          for (let i = 0; i < personajes.length; i++) {
            pj = personajes[i];
            if (pj.name === namae){
              $("#img13").attr("src",pj.img2,"alt",pj.name); //cambiar imagen
              $("#c13").text(pj.name);
              actual = pj;
            }
          }
          break;
        default:
          break;
      }
      if(exclusive.size == 4){
        switch(general1.size){
          case 0:
            document.querySelectorAll('div.pick2').forEach(function(item) {
              if(item.contains(document.getElementById("c13"))){
                item.className = "pick2";
              }
            })
            document.querySelectorAll('div.pick').forEach(function(item) {
              if(item.contains(document.getElementById("c2")) || item.contains(document.getElementById("c3")) || item.contains(document.getElementById("c4"))){
                item.className = "pick eleccion";
              }
            })
            for (let i = 0; i < personajes.length; i++) {
              pj = personajes[i];
              if (pj.name === namae && general1.has(pj) == false){
                $("#img2").attr("src",pj.img,"alt",pj.name); //cambiar imagen
                $("#c2").text(pj.name);
                actual = pj;
                general1.add(actual);
              }
            }
          break;
          case 1:
            for (let i = 0; i < personajes.length; i++) {
                pj = personajes[i];
                if (pj.name === namae && general1.has(pj) == false){
                  $("#img3").attr("src",pj.img,"alt",pj.name); //cambiar imagen
                  $("#c3").text(pj.name);
                  actual = pj;
                  general1.add(actual);
                }
              }
          break;
          case 2:
          for (let i = 0; i < personajes.length; i++) {
              pj = personajes[i];
              if (pj.name === namae && general1.has(pj) == false){
                $("#img4").attr("src",pj.img,"alt",pj.name); //cambiar imagen
                $("#c4").text(pj.name);
                actual = pj;
              }
            }
          break;
          default:
            break;
        }}
    }
      } 
      );
    });


$(document).ready(function() {
  $('.champion').click(function() {
    namae = this.textContent
    //verificación

    if(general1.size == 3){         
      switch(general2.size){
        case 0:
          document.querySelectorAll('div.pick').forEach(function(item) {
            if(item.contains(document.getElementById("c2")) || item.contains(document.getElementById("c3")) || item.contains(document.getElementById("c4"))){
              item.className = "pick";
            }
          })
          document.querySelectorAll('div.pick2').forEach(function(item) {
            if(item.contains(document.getElementById("c10")) || item.contains(document.getElementById("c11")) || item.contains(document.getElementById("c12"))){
              item.className = "pick2 eleccion";
            }
          })
          if(actual == null){
          for (let i = 0; i < personajes.length; i++) {
            pj = personajes[i];
            if (pj.name === namae && general2.has(pj) == false){
              $("#img10").attr("src",pj.img2,"alt",pj.name); //cambiar imagen
              $("#c10").text(pj.name);
              actual = pj;
              general2.add(actual);
            }
          }
        }
        break;
        case 1:
          for (let i = 0; i < personajes.length; i++) {
            pj = personajes[i];
            if (pj.name === namae && general2.has(pj) == false){
              $("#img11").attr("src",pj.img2,"alt",pj.name); //cambiar imagen
              $("#c11").text(pj.name);
              actual = pj;
              general2.add(actual);
            }
          }
        break;
        case 2:
          for (let i = 0; i < personajes.length; i++) {
            pj = personajes[i];
            if (pj.name === namae && general2.has(pj) == false){
              $("#img12").attr("src",pj.img2,"alt",pj.name); //cambiar imagen
              $("#c12").text(pj.name);
              actual = pj;
            }
          }
        break;
        default:
          break;
      }
    }
    if(general2.size == 3){
      switch(general1.size){    
        case 3:
          document.querySelectorAll('div.pick2').forEach(function(item) {
            if(item.contains(document.getElementById("c10")) || item.contains(document.getElementById("c11")) || item.contains(document.getElementById("c12"))){
              item.className = "pick2";
            }
          })
          document.querySelectorAll('div.pick').forEach(function(item) {
            if(item.contains(document.getElementById("c6")) || item.contains(document.getElementById("c7")) || item.contains(document.getElementById("c8"))){
              item.className = "pick eleccion";
            }
          })
          if(actual == null){
        for (let i = 0; i < personajes.length; i++) {
          pj = personajes[i];
          if (pj.name === namae && general1.has(pj) == false){
            $("#img6").attr("src",pj.img,"alt",pj.name); //cambiar imagen
            $("#c6").text(pj.name);
            actual = pj;
            general1.add(actual);
          }
        }
      }
        break;
        case 4:
            for (let i = 0; i < personajes.length; i++) {
              pj = personajes[i];
              if (pj.name === namae && general1.has(pj) == false){
                $("#img7").attr("src",pj.img,"alt",pj.name); //cambiar imagen
                $("#c7").text(pj.name);
                actual = pj;
                general1.add(actual);
              }
            }
        break;
        case 5:
          for (let i = 0; i < personajes.length; i++) {
            pj = personajes[i];
            if (pj.name === namae && general1.has(pj) == false){
              $("#img8").attr("src",pj.img,"alt",pj.name); //cambiar imagen
              $("#c8").text(pj.name);
              actual = pj;
              
            }
          }
          break;
        default:
          break;
    }}
    
})});

$('.champion').click(function() {
  $('.champion').click(function() {
    namae = this.textContent
    if(general1.size == 6){
      switch(general2.size){
        case 3:
          document.querySelectorAll('div.pick').forEach(function(item) {
            if(item.contains(document.getElementById("c6")) || item.contains(document.getElementById("c7")) || item.contains(document.getElementById("c8"))){
              item.className = "pick";
            }
          })
          document.querySelectorAll('div.pick2').forEach(function(item) {
            if(item.contains(document.getElementById("c14")) || item.contains(document.getElementById("c15")) || item.contains(document.getElementById("c16"))){
              item.className = "pick2 eleccion";
            }
          })
          if(actual == null){
          for (let i = 0; i < personajes.length; i++) {
            pj = personajes[i];
            if (pj.name === namae && general2.has(pj) == false){
              $("#img14").attr("src",pj.img2,"alt",pj.name); //cambiar imagen
              $("#c14").text(pj.name);
              actual = pj;
              general2.add(actual);
            }
          }
        }
        break;
        case 4:
          for (let i = 0; i < personajes.length; i++) {
            pj = personajes[i];
            if (pj.name === namae && general2.has(pj) == false){
              $("#img15").attr("src",pj.img2,"alt",pj.name); //cambiar imagen
              $("#c15").text(pj.name);
              actual = pj;
              general2.add(actual);
            }
          }
        break;
        case 5:
          for (let i = 0; i < personajes.length; i++) {
            pj = personajes[i];
            if (pj.name === namae && general2.has(pj) == false){
              $("#img16").attr("src",pj.img2,"alt",pj.name); //cambiar imagen
              $("#c16").text(pj.name);
              actual = pj;
            }
          }
        break;
        default:
          break;
      }
}})
});

$(document).ready(function() {
  $('.button').click(function() {
    if(bans.size < 2 && actual != null){
      bans.add(actual);
      document.querySelectorAll('div.champion').forEach(function(item) {
        if(item.textContent == actual.name){
          item.className = "champion unavailable";
        }
      })
      actual = null;
      doSomething();
    }
    if(exclusive.size < 4 && actual != null ){
      exclusive.add(actual);
      document.querySelectorAll('div.champion').forEach(function(item) {
        if(item.textContent == actual.name){
          item.className = "champion unavailable";
        }
      })
      actual = null;
      doSomething();
    }
    if(general1.size == 2 || general1.size == 5){
      general1.add(actual);
      actual = null;
      doSomething();
    }
    
    if(general2.size == 2 || general2.size == 5){
      general2.add(actual);
      actual = null;
      doSomething();
      if(general2.size >= 5){
        document.querySelectorAll('div.pick2').forEach(function(item) {
          if(item.contains(document.getElementById("c14")) || item.contains(document.getElementById("c15")) || item.contains(document.getElementById("c16"))){
            item.className = "pick2";
          }
        })
        stopCD();
      }
    }
  });
});




//Selección de personaje con click
/*var charIcons = document.getElementById("1");
var charIcons = document.getElementById("2");
var charIcons = document.getElementById("3");
var charIcons = document.getElementById("4");
var charIcons = document.getElementById("5");
var charIcons = document.getElementById("6");
var charIcons = document.getElementById("7");
var charIcons = document.getElementById("8");
var charIcons = document.getElementById("9");
var charIcons = document.getElementById("10");
var charIcons = document.getElementById("11");
var charIcons = document.getElementById("12");
var charIcons = document.getElementById("13");
var charIcons = document.getElementById("14");
var charIcons = document.getElementById("15");
var charIcons = document.getElementById("16");
var charIcons = document.getElementById("17");
var charIcons = document.getElementById("18");
var charIcons = document.getElementById("19");
var charIcons = document.getElementById("20");
*/

if (person1 == null || person1 == "") {
  text = "User cancelled the prompt.";
} else {
  x=document.getElementById("equipo1");  // Find the elements
  x.textContent = person1;
}

//timer
var timeLeft = 60;
var elem = document.getElementById('timer');
var running = true;
var timerId = setInterval(countdown, 1000);



function countdown() {
  if (timeLeft == 0) {
    doSomething();
  } else if(running == false){
    elem.innerHTML = "Ready";
  } else {
    elem.innerHTML = timeLeft;
    timeLeft--;
  }
}
function doSomething() {
  timeLeft = 60;
}
function stopCD(){
  running = false;
}
//Añadir a bans



/*
// Create Variables
const a = "a";
const b = "b";
const c = "c";

// Add Variables to the Set
letters.add(a);
letters.add(b);
letters.add(c);
*/

//Create Pick and bans work procedure










/*const Personaje = {
    id: 1,
    name: "Ayaka",
    image1: "/PickAndBans/static/media/Long/AyakaT1.png",
    image2: "/PickAndBans/static/media/Long/AyakaT2",
  };

const Personaje = {
    id: 1,
    name: "Ayaka",
    image1: "/PickAndBans/static/media/Long/AyakaT1.png",
    image2: "/PickAndBans/static/media/Long/AyakaT2",
  };*/