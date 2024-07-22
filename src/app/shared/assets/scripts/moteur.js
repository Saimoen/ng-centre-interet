window.onload = function () {
    // Récupération de l'url de la page et du paramètre "page"
    // (1 page par centre d'intérêt)
    //console.log("->"+ window.location.href);
    var url = new URL(window.location.href);
    var page = url.searchParams.get("page");

    var template;
    var data;

    switch (page) {
        case "mangas":
            template = "mangas_template";
            data = mangas;
            break;

        case "photographie":
            template = "photo_template";
            data = photo;
            break;

        default:
            // Si le paramètre page n'est pas fourni ou d'une valeur inconnue, alors nous sommes sur la page d'accueil
            template = "interets_template";
            data = home;
    }
    //console.log(data);
 
    //Template rendering
    var src = document.getElementById(template).innerHTML;
    var tpl = Handlebars.compile(src);
    var html = tpl({ donnees: data });
    
    //HTML appending
    //console.log("->"+ html);
    document.getElementById("contenu").innerHTML = html;
}