function cambio() {
    var texto = document.querySelector("#texto").value;
    var textoSeparado = texto.split(" ");
    console.log(textoSeparado);
    var fraseFinal = "";
    for (var i = 0; i < textoSeparado.length; i++) {
        if (textoSeparado[i] == "adios") {
            textoSeparado[i] = "Hasta pronto";
        }
        var fraseFinal = fraseFinal + " " + textoSeparado[i];
    }
    document.querySelector("#resultado").innerHTML = fraseFinal;
}

//------------------------ codigo2--------------------------------------

function cambio2() {
    var texto = document.querySelector("#texto2").value;
    var textoSeparado = texto.split(" ");
    if (textoSeparado.length > 2 || textoSeparado.length == 1) {
        document.querySelector("#frase").innerHTML = " POR FAVOR, LEA BIEN!! Ingrese una frase de dos palabras";
        texto = " ";
    } else {
        document.querySelector("#frase").innerHTML = "Ingrese una frase de dos palabras";
        var palabra1 = textoSeparado[0].toLowerCase();
        var palabra2 = textoSeparado[1].toUpperCase();
        document.querySelector("#resultado2").innerHTML = palabra1 + " " + palabra2;
    }
}

//------------------------ codigo3--------------------------------------

function cambio3() {
    var texto = document.querySelector("#texto3").value;
    frase = texto.split(" ");
    if (frase[1] == undefined) {
        var textoSeparado = texto.split("");
        var numero = textoSeparado.length;
        console.log(texto);
        var textoA = ""
        for (var i = numero - 1; i > -1; i = i - 1) {
            var textoA = textoA + textoSeparado[i];
        }
        console.log(textoA);
        if (textoA === texto) {
            document.querySelector("#resultado3").innerHTML = "Esta frase o palabra SI es un palíndromo";
        } else {
            document.querySelector("#resultado3").innerHTML = "Esta NO es una frase o palabra es un palíndromo";
        }
    } else {
        var textoA = "";
        var fraseA = "";
        for (var i = frase.length - 1; i > -1; i = i - 1) {
            var palabra = frase[i].split("");
            for (var x = palabra.length - 1; x > -1; x = x - 1) {
                var textoA = textoA + palabra[x];
                console.log(textoA)
            }
            var fraseA = fraseA + textoA;
            var textoA = "";
        }
        var textoPegado = texto.split(" ");
        var textoFinal = "";
        for (var i = 0; i < textoPegado.length; i++) {
            textoFinal = textoFinal + textoPegado[i];
        }

        if (fraseA === textoFinal) {
            document.querySelector("#resultado3").innerHTML = "Esta frase o palabra SI es un palíndromo";
        } else {
            document.querySelector("#resultado3").innerHTML = "Esta NO es una frase o palabra es un palíndromo";
        }
    }

}

//------------------------ codigo4--------------------------------------
var frutas = ["manzana", "naranja", "limón", "uva", "piña", "fresa"];
document.querySelector("#array").innerHTML = frutas;

function cambio4() {
    var lista = "";
    var numero = 0;
    for (var x = frutas.length - 1; x > -1; x = x - 1) {
        var numero = numero + 1
        var lista = lista + "<li>" + numero + "- " + frutas[x] + "</li>"
        document.querySelector("#resultado4").innerHTML = lista;
    }
}

//--------------------  codigo 5 y 6--------------------------------------

var nombres = ["Paola", "Samy", "Tomy", "Andrea", "Carlos", "Miguel", "Jorge"];
document.querySelector("#array1").innerHTML = nombres;
function cambio5() {
    nombres.sort();
    document.getElementById("resultado5").innerHTML = nombres;
    var NuevosNombres = []
    for (var i = 0; i < nombres.length; i++) {
        if (nombres[i] == "Paola" || nombres[i] == "Andrea") {
            console.log(nombres[i])
        } else {
            NuevosNombres.push(nombres[i]);
        }
    }
    document.querySelector("#array2").innerHTML = NuevosNombres;
}

//------------------------ codigo7--------------------------------------
var VarDiferente = [3, "Hola", 2, 1, "Mundo", 1.5, 4 + 5];
document.querySelector("#array3").innerHTML = VarDiferente;
function cambio6() {
    var NuevosNombres = []
    var NuevosNumeros = []
    for (var i = 0; i < VarDiferente.length; i++) {
        if (isNaN(VarDiferente[i]) === false) {
            NuevosNumeros.push(VarDiferente[i]);
        } else {
            NuevosNombres.push(VarDiferente[i]);
        }
    }
    document.querySelector("#resultado6").innerHTML = NuevosNombres.sort() + "," + NuevosNumeros.sort();
}
//------------------------ codigo8--------------------------------------
function Gatos() {
    var nombresGatos = ["aloe", "ale", "amo", "amor", "alud", "algodon", "ahmed", "atila", "albus", "aslan", "ares", "adriano", "anubis", "asteroide", "adan", "aaron", "apolo", "akira", "baby", "bruma", "baboo", "bobo", "buba", "bowie", "bola", "bicho", "bonnie", "bigotes", "burns", "brujo", "botón", "brisa", "bogart", "bob", "barrancas", "bony", "bucky", "banes", "buffon", "bass", "baloo", "bran", "betameche", "baldomero", "batman", "bender", "bills", "bello", "blancky", "bambu", "boris", "bender", "bugati", "byakko", "boby", "bloom", "cat", "corcho", "cuqui", "congo", "canelo", "chico", "cooper", "cronos", "curtis", "camilo", "conguito", "chip", "colibri", "caleb", "chinorris", "coco", "conan", "chester", "chopi", "colito", "charly", "dino", "dado", "duque", "daiki", "dylan", "dodo", "dimitri", "doroteo", "elio", "edo", "edi", "elvis", "eros", "frontón", "fufy", "fufu", "fred", "frijolito", "flojo", "fuchu", "flan", "fausto", "fanito", "fauno", "figaro", "fox", "frodo", "falcon", "fuyu", "flipy", "fisgon", "findus", "floky", "felix", "gordo", "goliath", "gotten", "gordi", "gogo", "gafe", "gary", "gizmo", "gris", "garabata", "gyn", "garfield", "galleta", "grey", "gobolino", "harry", "henry", "hueso", "hades", "hachi", "halloween", "hiss", "haru", "igor", "itachi", "iskander", "indio", "jack", "jocker", "jacko", "jerjes", "jarvis", "justin", "jager", "kareb", "kaleb", "keops", "kefren", "kenzo", "kelipe", "kem", "kiba", "kafka", "kurt", "korben", "kero", "kai", "kima", "lindo", "lennon", "leno", "lenin", "lyno", "limon", "laud", "lelo", "lolo", "leonidas", "lancelot", "lebron", "lalo", "li", "lu", "luca", "lince", "lucky", "loki", "linus", "morris", "miel", "milo", "micky", "manchitas", "mel", "muchy", "mu-kimisino", "momo", "merlin", "mango", "mini", "mushu", "maverick", "marty", "murci", "max", "moka", "miu", "nino", "nilo", "neko", "nano", "nebel", "nit", "nico", "nur", "neron", "nori", "noel", "nemo", "neo", "nacho", "nermal", "nu", "name", "nono", "oso", "olaf", "odin", "orco", "oro", "orion", "otto", "oreo", "onix", "osiris", "oliver", "pillo", "pluf", "puf", "pipo", "panther", "platon", "pandita", "pumuki", "piolin", "paco", "peluche", "pasha", "pincho", "piwi", "piano", "pepper", "potts", "pinki", "panchito", "porpelos", "popy", "pau", "pope", "pucho", "quino", "quillo", "ramses", "rorro", "rico", "rey", "rim", "raider", "robin", "roman", "romeo", "ras", "rufi", "rubio", "ricky", "rody", "ritchie", "rex", "ron", "snow", "sedal", "shiro", "skadi", "sugus", "schrodinger", "shion", "shadow", "silvestre", "segismundo", "sid", "spartan", "sol", "sirius", "shishimaru", "samy", "sam", "sky", "sanson", "simba", "simon", "salima", "tom", "timmy", "tito", "tennessee", "tontin", "turco", "teseo", "tango", "taco", "tinto", "thor", "tauro", "teo", "tomas", "trancas", "trasto", "torpin", "tyrion", "tigreton", "trunks", "toulouse", "titan", "tito", "tigrito", "timon", "ufi", "vino", "vito", "vader", "valentín", "wander", "wisky", "winie", "winy", "yago", "yosie", "yuri", "yin", "yang", "zulu", "ziza", "zeus", "zarpitas", "alba", "alubia", "aruba", "arena", "alma", "ami", "aretha", "ada", "ash", "amida", "arya", "artemisa", "ariel", "arwen", "aurora", "anri", "atenea", "alma", "blanca", "bimba", "balúa", "baia", "blanquita", "baby", "bonita", "bagheera", "balusa", "brenda", "babi", "bolita", "boira", "bastet", "benita", "branwen", "clyde", "cara", "coco", "cleo", "churrusca", "chiquita", "camila", "canela", "chicky", "canela", "chanel", "cabe", "cortana", "cali", "cori", "cata", "chulet", "coqueta", "dora", "didi", "dona", "daia", "dana", "dama", "dakota", "dory", "dalia", "dulce", "emilie", "eleven", "estrella", "eleya", "espidy", "emma", "estrellita", "eris", "emilia", "frida", "fiona", "flipa", "fusa", "fanita", "farruca", "freya", "fanta", "greta", "goldie", "gula", "grissi", "griset", "gordi", "grete", "hermi", "hannah", "hana", "habana", "isis", "iris", "itxi", "ilse", "jade", "japan", "jessie", "jota", "jetta", "jang", "jing", "janis", "jackie", "kira", "keka", "kika", "kitty", "katu", "kala", "kenza", "kiri", "kim", "kendra", "kirara", "kinder", "kiara", "kima", "lía", "lúa", "luna", "lulú", "lili", "leia", "lara", "lluvia", "lila", "lumia", "lola", "lusy", "luli", "lizuca", "lisa", "mina", "marilyn", "mancha", "muñeca", "mimi", "misha", "magia", "misi", "maikymisina", "maya", "miumium", "milka", "mishetaminerva", "margarita", "miu", "missi", "manchitas", "maru", "mia", "milou", "mia", "mirai", "menuda", "mey", "minina", "morgana", "minnie", "micaela", "maile", "moli", "mona", "mafalda", "nayala", "nala", "nela", "naia", "nora", "nela", "noa", "narnia", "Ñau", "negri", "nube", "nata", "nina", "nacar", "nathasha", "ona", "oda", "olivia", "osita", "osha", "oli", "pinta", "perla", "pura", "pretty", "paca", "pera", "pelusa", "pelos", "pele", "piu", "penny", "panky", "persie", "panda", "pampa", "princesa", "petita", "peluda", "patty", "picolina", "panta", "pipa", "pitu", "pitinga", "patita", "piña", "quina", "quinto", "rusa", "rosa", "raspa", "rubia", "roma", "rosi", "rosita", "rasca", "roma", "rufa", "rufina", "rita", "sandie", "sandia", "sabrina", "sugar", "selena", "siena", "soso", "shiva", "sisi", "shi-shi", "shasa", "sira", "sindy", "sira", "stormy", "sher", "shybila", "shuri", "skype", "seiko", "summer", "sun", "sirina", "tea", "teja", "tata", "tina", "tita", "tuna", "tamal", "tula", "triana", "tati", "trufa", "tomasa", "tussy", "tara", "uva", "una", "ula", "vela", "valentina", "vals", "viena", "venus", "verona", "violeta", "wendy", "wanda", "wendolin", "xena", "xana", "yaiza", "yaya", "yoya", "zinna", "zen", "zelda", "zara", "zira", "zoe", "zizu"];
    var x = -1;
    var numero = -1;
    do {
        var x = Math.random();
        var numero = parseInt(x * 950 - (x * 10));
        console.log(numero)
        console.log(nombresGatos.length)
    } while (numero == 0 || numero > 622);
    document.querySelector("#frase2").innerHTML = "El nombre de tu proximo gato será:"
    document.querySelector("#resultado8").innerHTML = nombresGatos[numero - 1];
    document.querySelector("#boton-gatos").value = "Quiero volver a intentarlo";
    document.querySelector(".imagen-gato").src = "https://media.giphy.com/media/PibhPmQYXZ7HO/giphy.gif";
}

//------------------------ codigo8--------------------------------------

var productos = [
    {
        imagen: '1x/xiaomi.jpg',
        titulo: 'Xiaomi Mi',
        clase: 'mobiles',
        precio: 1200
    },
    {
        imagen: '1x/iphone.jpg',
        titulo: 'Iphone',
        clase: 'mobiles',
        precio: 1300
    },
    {
        imagen: '1x/honor.jpg',
        titulo: 'Honor',
        clase: 'mobiles',
        precio: 1500
    },
    {
        imagen: '1x/pc.jpg',
        titulo: 'Regular PC',
        clase: 'computers',
        precio: 1600
    },
    {
        imagen: '1x/pc2.jpg',
        titulo: 'Super PC',
        clase: 'computers',
        precio: 1800
    },
    {
        imagen: '1x/portatil.jpg',
        titulo: 'Portatil',
        clase: 'computers',
        precio: 1800
    },
    {
        imagen: '1x/jeans.jpg',
        titulo: 'Blue Jeans',
        clase: 'clothes',
        precio: 1600
    },
    {
        imagen: '1x/camisa.jpg',
        titulo: 'Camisa',
        clase: 'clothes',
        precio: 1380
    },
    {
        imagen: '1x/chaqueta.jpg',
        titulo: 'Chaqueta',
        clase: 'clothes',
        precio: 1380
    }
]
var crearProductos = ""
for (var i = 0 ; i < productos.length; i++){

    var crearProductos = crearProductos + "<li><div class='hover'><h4>" + productos[i].precio + "</h4></div><img src='" + productos[i].imagen + "'>" +
    "<h4>" + productos[i].titulo + "</h4></li>";

    document.querySelector(".productos").innerHTML = crearProductos;
}
function filtrar(){
    var crearProductos = ""
    var categoria = document.querySelector("#productos").value;
    for (var i = 0 ; i < productos.length; i++){
        if (categoria ===  productos[i].clase){
            var crearProductos = crearProductos + "<li><div class='hover'><h4>" + productos[i].precio + "</h4></div><img src='" + productos[i].imagen + "'>" +
        "<h4>" + productos[i].titulo + "</h4></li>";
    
        document.querySelector(".productos").innerHTML = crearProductos;
        }else if (categoria ===  "todos"){
            for (var i = 0 ; i < productos.length; i++){

                var crearProductos = crearProductos + "<li><div class='hover'><h4>" + productos[i].precio + "</h4></div><img src='" + productos[i].imagen + "'>" +
                "<h4>" + productos[i].titulo + "</h4></li>";
            
                document.querySelector(".productos").innerHTML = crearProductos;
            }
        }
        
    }
}
