{ 
  "partículas" : { 
    "número" : { 
      "valor" : 80 , 
      "densidad" : { 
        "enable" : true , 
        "value_area" : 800 
      } 
    } , 
    "color" : { 
      "value" : "#ffffff" 
    } , 
    "forma" : { 
      "tipo" : "círculo" , 
      "trazo" : { 
        "ancho" : 0 , 
        "color " : " # 000000 " 
      } ,
      "polygon" : { 
        "nb_sides" : 5 
      } , 
      "image" : { 
        "src" : "img / github.svg" , 
        "width" : 100 , 
        "height" : 100 
      } 
    } , 
    "opacity" : { 
      "value " : 0.5 , 
      " random " : false , 
      " anim " : { 
        " enable " : false , 
        " speed " : 1 ,
        "opacity_min" : 0.1 ,
        "sync" : false 
      } 
    } , 
    "size" : { 
      "value" : 10 , 
      "random" : true , 
      "anim" : { 
        "enable" : false , 
        "speed" : 80 , 
        "size_min" : 0.1 , 
        "sync " : false 
      } 
    } , 
    " line_linked " : { 
      " enable " : true , 
      " distance " :300 , 
      "color" :"#ffffff" , 
      "opacidad" : 0.4 , 
      "ancho" : 2 
    } , 
    "move" : { 
      "enable" : true , 
      "speed" : 12 , 
      "direction" : "none" , 
      "random" : false , 
      " straight " : false , 
      " out_mode " : " out " , 
      " bounce " : false , 
      " atraer " : { 
        "habilitar " : falso , 
        " rotateX ": 600 , 
        "rotateY" : 1200 
      } 
    } 
  } , 
  "interactividad" : { 
    "detect_on" : "canvas" , 
    "events" : { 
      "onhover" : { 
        "enable" : false , 
        "mode" : "repulse" 
      } , 
      "onclick" : { 
        "enable" : true , 
        "mode" : "push" 
      } , 
      "resize" :verdadero 
    } , 
    "modos" :{ 
      "agarrar" : { 
        "distancia" : 800 , 
        "line_linked" : { 
          "opacidad" : 1 
        } 
      } , 
      "burbuja" : { 
        "distancia" : 800 , 
        "tamaño" : 80 , 
        "duración" : 2 , 
        "opacidad " : 0.8 , 
        " velocidad " : 3 
      } , 
      " repulsión " : { 
        " distancia " : 400 ,
        "duración" : 0.4 
      }, 
      "push" : { 
        "particle_nb" : 4 
      } , 
      "remove" : { 
        "particle_nb" : 2 
      } 
    } 
  } , 
  "retina_detect" : true 
}
