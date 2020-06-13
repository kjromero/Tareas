
var  pJS  =  función ( tag_id ,  params ) {

  var  canvas_el  =  documento . querySelector ( '#' + tag_id + '> .particles-js-canvas-el' ) ;

  / * partículas.js variables con valores predeterminados * /
  esta . pJS  =  {
    lienzo : {
      el : canvas_el ,
      w : lienzo_el . offsetWidth ,
      h : lienzo_el . offsetHeight
    } ,
    partículas : {
      número : {
        valor : 400 ,
        densidad : {
          habilitar : verdadero ,
          área_valor : 800
        }
      } ,
      color : {
        valor : '#fff'
      } ,
      forma : {
        tipo : 'círculo' ,
        accidente cerebrovascular : {
          ancho : 0 ,
          color : '# ff0000'
        } ,
        polígono : {
          nb_sides : 5
        } ,
        imagen : {
          src : '' ,
          ancho : 100 ,
          altura : 100
        }
      } ,
      opacidad : {
        valor : 1 ,
        al azar : falso ,
        anim : {
          habilitar : falso ,
          velocidad : 2 ,
          opacity_min : 0 ,
          sincronización : falso
        }
      } ,
      tamaño : {
        valor : 20 ,
        al azar : falso ,
        anim : {
          habilitar : falso ,
          velocidad : 20 ,
          size_min : 0 ,
          sincronización : falso
        }
      } ,
      line_linked : {
        habilitar : verdadero ,
        distancia : 100 ,
        color : '#fff' ,
        opacidad : 1 ,
        ancho : 1
      } ,
      mover : {
        habilitar : verdadero ,
        velocidad : 2 ,
        dirección : 'ninguno' ,
        al azar : falso ,
        recta : falso ,
        out_mode : 'out' ,
        de rebote : falso ,
        atraer : {
          habilitar : falso ,
          rotateX : 3000 ,
          rotarY : 3000
        }
      } ,
      matriz : [ ]
    } ,
    interactividad : {
      detect_on : 'lienzo' ,
      eventos : {
        por encima : {
          habilitar : verdadero ,
          modo : 'agarrar'
        } ,
        onclick : {
          habilitar : verdadero ,
          modo : 'empujar'
        } ,
        cambiar el tamaño : verdadero
      } ,
      modos : {
        agarrar : {
          distancia : 100 ,
          line_linked : {
            opacidad : 1
          }
        } ,
        burbuja : {
          distancia : 200 ,
          tamaño : 80 ,
          duración : 0.4
        } ,
        rechazo : {
          distancia : 200 ,
          duración : 0.4
        } ,
        push : {
          partículas_nb : 4
        } ,
        eliminar : {
          partículas_nb : 2
        }
      } ,
      ratón : { }
    } ,
    retina_detect : falso ,
    fn : {
      interactuar : { } ,
      modos : { } ,
      vendedores : { }
    } ,
    tmp : { }
  } ;

  var  pJS  =  esto . pJS ;

  / * configuración de parámetros * /
  if ( params ) {
    Objeto . deepExtend ( pJS ,  params ) ;
  }

  pJS . tmp . obj  =  {
    size_value : pJS . partículas . tamaño . valor ,
    size_anim_speed : pJS . partículas . tamaño . anim . velocidad ,
    move_speed : pJS . partículas . mover . velocidad ,
    line_linked_distance : pJS . partículas . line_linked . distancia ,
    line_linked_width : pJS . partículas . line_linked . ancho ,
    mode_grab_distance : pJS . interactividad . modos . grab . distancia ,
    mode_bubble_distance : pJS . interactividad . modos . burbuja . distancia ,
    mode_bubble_size : pJS . interactividad . modos . burbuja . tamaño ,
    mode_repulse_distance : pJS . interactividad . modos . rechazar . distancia
  } ;


  pJS . fn . retinaInit  =  function ( ) {

    if ( pJS . retina_detect  &&  window . devicePixelRatio  >  1 ) {
      pJS . lienzo . pxratio  =  ventana . devicePixelRatio ; 
      pJS . tmp . retina  =  verdadero ;
    } 
    más {
      pJS . lienzo . pxratio  =  1 ;
      pJS . tmp . retina  =  falso ;
    }

    pJS . lienzo . w  =  pJS . lienzo . el . offsetWidth * pJS . lienzo . pxratio ;
    pJS . lienzo . h  =  pJS . lienzo . el . offsetHeight * pJS . lienzo . pxratio ;

    pJS . partículas . tamaño . valor  =  pJS . tmp . obj . size_value * pJS . lienzo . pxratio ;
    pJS . partículas . tamaño . anim . velocidad  =  pJS . tmp . obj . size_anim_speed * pJS . lienzo . pxratio ;
    pJS . partículas . mover . velocidad  =  pJS . tmp . obj . move_speed * pJS . lienzo . pxratio ;
    pJS . partículas . line_linked . distancia  =  pJS . tmp . obj . line_linked_distance * pJS . lienzo . pxratio ;
    pJS . interactividad . modos . grab . distancia  =  pJS . tmp . obj . mode_grab_distance * pJS . lienzo . pxratio ;
    pJS . interactividad . modos . burbuja . distancia  =  pJS . tmp . obj . mode_bubble_distance * pJS . lienzo . pxratio ;
    pJS . partículas . line_linked . ancho  =  pJS . tmp . obj . line_linked_width * pJS . lienzo . pxratio ;
    pJS . interactividad . modos . burbuja . tamaño  =  pJS . tmp . obj . mode_bubble_size * pJS . lienzo . pxratio ;
    pJS . interactividad . modos . rechazar . distancia  =  pJS . tmp . obj . mode_repulse_distance * pJS . lienzo . pxratio ;

  } ;



  / * ---------- Funciones pJS - lienzo ------------ * /

  pJS . fn . canvasInit  =  function ( ) {
    pJS . lienzo . ctx  =  pJS . lienzo . el . getContext ( '2d' ) ;
  } ;

  pJS . fn . canvasSize  =  function ( ) {

    pJS . lienzo . el . ancho  =  pJS . lienzo . w ;
    pJS . lienzo . el . altura  =  pJS . lienzo . h ;

    if ( pJS  &&  pJS . interactivity . events . resize ) {

      ventana . addEventListener ( 'resize' ,  function ( ) {

          pJS . lienzo . w  =  pJS . lienzo . el . offsetWidth ;
          pJS . lienzo . h  =  pJS . lienzo . el . offsetHeight ;

          / * cambiar el tamaño del lienzo * /
          if ( pJS . tmp . retina ) {
            pJS . lienzo . w * = pJS . lienzo . pxratio ;
            pJS . lienzo . h * = pJS . lienzo . pxratio ;
          }

          pJS . lienzo . el . ancho  =  pJS . lienzo . w ;
          pJS . lienzo . el . altura  =  pJS . lienzo . h ;

          / * repintar lienzo en anim deshabilitado * /
          if ( ! pJS . partículas . mover . activar ) {
            pJS . fn . partículas vacías ( ) ;
            pJS . fn . partículasCrear ( ) ;
            pJS . fn . partículasDibujar ( ) ;
            pJS . fn . vendedores . densidadAutoPartículas ( ) ;
          }

        / * partículas de densidad habilitadas * /
        pJS . fn . vendedores . densidadAutoPartículas ( ) ;

      } ) ;

    }

  } ;


  pJS . fn . canvasPaint  =  function ( ) {
    pJS . lienzo . ctx . fillRect ( 0 ,  0 ,  pJS . lienzo . w ,  pJS . lienzo . h ) ;
  } ;

  pJS . fn . canvasClear  =  function ( ) {
    pJS . lienzo . ctx . clearRect ( 0 ,  0 ,  pJS . lienzo . w ,  pJS . lienzo . h ) ;
  } ;


  / * --------- funciones pJS - partículas ----------- * /

  pJS . fn . partícula  =  función ( color ,  opacidad ,  posición ) {

    /* Talla */
    esta . radio  =  ( pJS . partículas . tamaño . aleatorio ? Matemáticas . aleatorio ( ) : 1 ) * pJS . partículas . tamaño . valor ;
    if ( pJS . partículas . tamaño . anim . habilitar ) {
      esta . size_status  =  false ;
      esta . vs  =  pJS . partículas . tamaño . anim . velocidad / 100 ;
      if ( ! pJS . partículas . tamaño . anim . sincronización ) {
        esta . vs  =  esto . vs * Matemáticas . aleatorio ( ) ;
      }
    }

    /* posición */
    esta . x  =  posición ? posición . x : Matemáticas . aleatorio ( ) * pJS . lienzo . w ;
    esta . y  =  posición ? posición . y : matemáticas . aleatorio ( ) * pJS . lienzo . h ;

    / * comprobar posición - en el lienzo * /
    if ( this . x  >  pJS . canvas . w  -  this . radius * 2 )  this . x  =  esto . x  -  esto . radio ;
    más  si ( este . x  <  este . radio * 2 )  este . x  =  esto . x  +  esto . radio ;
    if ( this . y  >  pJS . canvas . h  -  this . radius * 2 )  this . y  =  esto . y  -  esto . radio ;
    más  si ( este . y  <  este . radio * 2 )  este . y  =  esto . y  +  esto . radio ;

    / * verificar posición - evitar solapamiento * /
    if ( pJS . partículas . mover . rebotar ) {
      pJS . fn . vendedores . checkOverlap ( este ,  posición ) ;
    }

    /* color */
    esta . color  =  { } ;
    if ( typeof ( color . value )  ==  'objeto' ) {

      if ( color . valor  instanceof  Array ) {
        var  color_selected  =  color . valor [ Matemáticas . floor ( Math . random ( ) * pJS . partículas . color . valor . longitud ) ] ;
        esta . el color . rgb  =  hexToRgb ( color_seleccionado ) ;
      } más {
        if ( color . value . r ! = undefined &&  color . value . g ! = undefined &&  color . value . b ! = undefined ) {
          esta . el color . rgb  =  {
            r : color . valor . r ,
            g : color . valor . g ,
            b : color . valor . si
          }
        }
        if ( color . value . h ! = undefined &&  color . value . s ! = undefined &&  color . value . l ! = undefined ) {
          esta . el color . hsl  =  {
            h : color . valor . h ,
            s : color . valor . s ,
            l : color . valor . l
          }
        }
      }

    }
    sino  if ( color . value  ==  'random' ) {
      esta . el color . rgb  =  {
        r : ( Math . floor ( Math . random ( ) * ( 255  -  0  +  1 ) )  +  0 ) ,
        g : ( Math . floor ( Math . random ( ) * ( 255  -  0  +  1 ) )  +  0 ) ,
        b : ( Math . floor ( Math . random ( ) * ( 255  -  0  +  1 ) )  +  0 )
      }
    }
    sino  if ( typeof ( color . value )  ==  'string' ) {
      esta . color  =  color ;
      esta . el color . rgb  =  hexToRgb ( este . color . valor ) ;
    }

    / * opacidad * /
    esta . opacidad  =  ( pJS . partículas . opacidad . aleatorio ? Matemáticas . aleatorio ( ) : 1 ) * pJS . partículas . opacidad . valor ;
    if ( pJS . partículas . opacidad . anim . enable ) {
      esta . opacity_status  =  false ;
      esta . vo  =  pJS . partículas . opacidad . anim . velocidad / 100 ;
      if ( ! pJS . partículas . opacidad . anim . sync ) {
        esta . vo  =  esto . vo * Matemáticas . aleatorio ( ) ;
      }
    }

    / * animación - velocidad para la velocidad * /
    var  velbase  =  { }
    interruptor ( pJS . partículas . movimiento . dirección ) {
      caso  'superior' :
        velbase  =  {  x : 0 ,  y : - 1  } ;
      romper ;
      caso  'arriba a la derecha' :
        velbase  =  {  x : 0.5 ,  y : - 0.5  } ;
      romper ;
      caso  'correcto' :
        velbase  =  {  x : 1 ,  y : - 0  } ;
      romper ;
      caso  'abajo a la derecha' :
        velbase  =  {  x : 0.5 ,  y : 0.5  } ;
      romper ;
      caso  'inferior' :
        velbase  =  {  x : 0 ,  y : 1  } ;
      romper ;
      caso  'abajo a la izquierda' :
        velbase  =  {  x : - 0.5 ,  y : 1  } ;
      romper ;
      caso  'izquierda' :
        velbase  =  {  x : - 1 ,  y : 0  } ;
      romper ;
      caso  'arriba a la izquierda' :
        velbase  =  {  x : - 0.5 ,  y : - 0.5  } ;
      romper ;
      por defecto :
        velbase  =  {  x : 0 ,  y : 0  } ;
      romper ;
    }

    if ( pJS . partículas . mover . recto ) {
      esta . vx  =  velbase . x ;
      esta . vy  =  velbase . y ;
      if ( pJS . partículas . mover . aleatorio ) {
        esta . vx  =  esto . vx * ( Math . random ( ) ) ;
        esta . vy  =  esto . vy * ( Math . random ( ) ) ;
      }
    } más {
      esta . vx  =  velbase . x  +  Matemáticas . aleatorio ( ) - 0.5 ;
      esta . vy  =  velbase . y  +  Matemáticas . aleatorio ( ) - 0.5 ;
    }

    // var theta = 2.0 * Math.PI * Math.random ();
    // this.vx = Math.cos (theta);
    // this.vy = Math.sin (theta);

    esta . vx_i  =  esto . vx ;
    esta . vy_i  =  esto . vy ;

    

    / * si la forma es imagen * /

    var  shape_type  =  pJS . partículas . dar forma . tipo ;
    if ( typeof ( shape_type )  ==  'objeto' ) {
      if ( shape_type  instanceof  Array ) {
        var  shape_selected  =  shape_type [ Math . floor ( Math . random ( ) * shape_type . length ) ] ;
        esta . forma  =  forma_seleccionada ;
      }
    } más {
      esta . shape  =  shape_type ;
    }

    if ( this . shape  ==  'image' ) {
      var  sh  =  pJS . partículas . moldear ;
      esta . img  =  {
        src : sh . imagen . src ,
        proporción : sh . imagen . ancho / sh . imagen . altura
      }
      if ( ! this . img . ratio )  this . img . relación  =  1 ;
      if ( pJS . tmp . img_type  ==  'svg'  &&  pJS . tmp . source_svg ! = undefined ) {
        pJS . fn . vendedores . createSvgImg ( esto ) ;
        if ( pJS . tmp . empujando ) {
          esta . img . cargado  =  falso ;
        }
      }
    }

    

  } ;


  pJS . fn . partícula . prototipo . dibujar  =  función ( )  {

    var  p  =  esto ;

    if ( p . radius_bubble ! = undefined ) {
       radio  var =  p . radius_bubble ; 
    } más {
       radio  var =  p . radio ;
    }

    if ( p . opacity_bubble ! = undefined ) {
       opacidad  var =  p . opacity_bubble ;
    } más {
       opacidad  var =  p . opacidad ;
    }

    if ( p . color . rgb ) {
      var  color_value  =  'rgba (' + p . color . rgb . r + ',' + p . color . rgb . g + ',' + p . color . rgb . b + ',' + opacidad + ')' ;
    } más {
      var  color_value  =  'hsla (' + p . color . hsl . h + ',' + p . color . hsl . s + '%,' + p . color . hsl . l + '%,' + opacidad + ') ' ;
    }

    pJS . lienzo . ctx . fillStyle  =  color_value ;
    pJS . lienzo . ctx . beginPath ( ) ;

    interruptor ( p . forma ) {

      caso  'círculo' :
        pJS . lienzo . ctx . arco ( p . x ,  p . y ,  radio ,  0 ,  Math . PI * 2 ,  falso ) ;
      romper ;

      caso  'borde' :
        pJS . lienzo . ctx . rect ( p . x - radio ,  p . y - radio ,  radio * 2 ,  radio * 2 ) ;
      romper ;

      caso  'triángulo' :
        pJS . fn . vendedores . drawShape ( pJS . canvas . ctx ,  p . x - radio ,  p . y + radio / 1.66 ,  radio * 2 ,  3 ,  2 ) ;
      romper ;

      caso  'polígono' :
        pJS . fn . vendedores . drawShape (
          pJS . lienzo . ctx ,
          p . x  -  radio / ( pJS . partículas . forma . polígono . nb_sides / 3.5 ) ,  // startX
          p . y  -  radio / ( 2.66 / 3.5 ) ,  // inicioY
          radio * 2.66 / ( pJS . partículas . forma . polígono . nb_sides / 3 ) ,  // sideLength
          pJS . partículas . dar forma . polígono . nb_sides ,  // sideCountNumerator
          1  // sideCountDenominator
        ) ;
      romper ;

      caso  'estrella' :
        pJS . fn . vendedores . drawShape (
          pJS . lienzo . ctx ,
          p . x  -  radio * 2 / ( pJS . partículas . forma . polígono . nb_sides / 4 ) ,  // startX
          p . y  -  radio / ( 2 * 2.66 / 3.5 ) ,  // inicioY
          radio * 2 * 2.66 / ( pJS . partículas . forma . polígono . nb_sides / 3 ) ,  // sideLength
          pJS . partículas . dar forma . polígono . nb_sides ,  // sideCountNumerator
          2  // sideCountDenominator
        ) ;
      romper ;

      caso  'imagen' :

        función  draw ( ) {
          pJS . lienzo . ctx . drawImage (
            img_obj ,
            p . x - radio ,
            p . y - radio ,
            radio * 2 ,
            radio * 2 / p . img . proporción
          ) ;
        }

        if ( pJS . tmp . img_type  ==  'svg' ) {
          var  img_obj  =  p . img . obj ;
        } más {
          var  img_obj  =  pJS . tmp . img_obj ;
        }

        if ( img_obj ) {
          dibujar ( ) ;
        }

      romper ;

    }

    pJS . lienzo . ctx . closePath ( ) ;

    if ( pJS . partículas . forma . trazo . ancho  >  0 ) {
      pJS . lienzo . ctx . strokeStyle  =  pJS . partículas . dar forma . accidente cerebrovascular . el color ;
      pJS . lienzo . ctx . ancho de línea  =  pJS . partículas . dar forma . accidente cerebrovascular . ancho ;
      pJS . lienzo . ctx . accidente cerebrovascular ( ) ;
    }
    
    pJS . lienzo . ctx . relleno ( ) ;
    
  } ;


  pJS . fn . partículasCreate  =  función ( ) {
    para ( var  i  =  0 ;  i  <  pJS . partículas . número . valor ;  i ++ )  {
      pJS . partículas . matriz . push ( nueva  pJS . fn . partícula ( pJS . partículas . color ,  pJS . partículas . opacidad . valor ) ) ;
    }
  } ;

  pJS . fn . partículasActualización  =  función ( ) {

    para ( var  i  =  0 ;  i  <  pJS . partículas . matriz . longitud ;  i ++ ) {

      / * la partícula * /
      var  p  =  pJS . partículas . matriz [ i ] ;

      // var d = (dx = pJS.interactivity.mouse.click_pos_x - px) * dx + (dy = pJS.interactivity.mouse.click_pos_y - py) * dy;
      // var f = -BANG_SIZE / d;
      // if (d <BANG_SIZE) {
      // var t = Math.atan2 (dy, dx);
      // p.vx = f * Math.cos (t);
      // p.vy = f * Math.sin (t);
      //}

      / * mover la partícula * /
      if ( pJS . partículas . mover . habilitar ) {
        var  ms  =  pJS . partículas . mover . velocidad / 2 ;
        p . x  + =  p . vx * ms ;
        p . y  + =  p . vy * ms ;
      }

      / * cambiar el estado de opacidad * /
      if ( pJS . partículas . opacidad . anim . enable )  {
        if ( p . opacity_status  ==  verdadero )  {
          if ( p . opacidad > = pJS . partículas . opacidad . valor )  p . opacity_status  =  false ;
          p . opacidad  + =  p . vo ;
        } más  {
          if ( p . opacidad <= pJS . partículas . opacidad . anim . opacity_min )  p . opacity_status  =  true ;
          p . opacidad  - =  p . vo ;
        }
        if ( p . opacidad  <  0 )  p . opacidad  =  0 ;
      }

      /* cambiar tamaño */
      if ( pJS . partículas . tamaño . anim . habilitar ) {
        if ( p . size_status  ==  verdadero ) {
          if ( p . radio > = pJS . partículas . tamaño . valor )  p . size_status  =  false ;
          p . radio  + =  p . vs ;
        } más {
          if ( p . radio <= pJS . partículas . tamaño . anim . tamaño_min )  p . size_status  =  verdadero ;
          p . radio  - =  p . vs ;
        }
        if ( p . radio  <  0 )  p . radio  =  0 ;
      }

      / * cambiar la posición de las partículas si está fuera del lienzo * /
      if ( pJS . partículas . move . out_mode  ==  'rebote' ) {
        var  new_pos  =  {
          x_izquierda : p . radio ,
          x_right :   pJS . lienzo . w ,
          y_top : p . radio ,
          y_bottom : pJS . lienzo . h
        }
      } más {
        var  new_pos  =  {
          x_izquierda : - p . radio ,
          x_right : pJS . lienzo . w  +  p . radio ,
          y_top : - p . radio ,
          y_bottom : pJS . lienzo . h  +  p . radio
        }
      }

      if ( p . x  -  p . radio  >  pJS . lienzo . w ) {
        p . x  =  nuevos_pos . x_left ;
        p . y  =  Matemáticas . aleatorio ( ) * pJS . lienzo . h ;
      }
      más  si ( p . x  +  p . radio  <  0 ) {
        p . x  =  nuevos_pos . x_right ;
        p . y  =  Matemáticas . aleatorio ( ) * pJS . lienzo . h ;
      }
      if ( p . y  -  p . radio  >  pJS . lienzo . h ) {
        p . y  =  new_pos . y_top ;
        p . x  =  Matemáticas . aleatorio ( ) * pJS . lienzo . w ;
      }
      más  si ( p . y  +  p . radio  <  0 ) {
        p . y  =  new_pos . y_bottom ;
        p . x  =  Matemáticas . aleatorio ( ) * pJS . lienzo . w ;
      }

      / * modos fuera del lienzo * /
      switch ( pJS . partículas . move . out_mode ) {
        caso  'rebote' :
          if  ( p . x  +  p . radio  >  pJS . lienzo . w )  p . vx  =  - p . vx ;
          más  si  ( p . x  -  p . radio  <  0 )  p . vx  =  - p . vx ;
          if  ( p . y  +  p . radio  >  pJS . lienzo . h )  p . vy  =  - p . vy ;
          más  si  ( p . y  -  p . radio  <  0 )  p . vy  =  - p . vy ;
        romper ;
      }

      /* eventos */
      if ( isInArray ( 'grab' ,  pJS . interactivity . events . onhover . mode ) ) {
        pJS . fn . modos . grabParticle ( p ) ;
      }

      if ( isInArray ( 'burbuja' ,  pJS . interactividad . eventos . onhover . modo )  ||  isInArray ( 'burbuja' ,  pJS . interactividad . eventos . onclick . modo ) ) {
        pJS . fn . modos . bubbleParticle ( p ) ;
      }

      if ( isInArray ( ' repulse ' ,  pJS . interactivity . events . onhover . mode )  ||  isInArray ( ' repulse ' ,  pJS . interactivity . events . onclick . mode ) ) {
        pJS . fn . modos . repulsePartícula ( p ) ;
      }

      / * interacción automática entre partículas * /
      if ( pJS . partículas . línea_enlazada . habilitar  ||  pJS . partículas . mover . atraer . habilitar ) {
        para ( var  j  =  i  +  1 ;  j  <  pJS . partículas . matriz . longitud ;  j ++ ) {
          var  p2  =  pJS . partículas . matriz [ j ] ;

          / * partículas de enlace * /
          if ( pJS . partículas . line_linked . enable ) {
            pJS . fn . Interact . linkParticles ( p , p2 ) ;
          }

          / * atraer partículas * /
          if ( pJS . partículas . mover . atraer . habilitar ) {
            pJS . fn . Interact . atraerPartículas ( p , p2 ) ;
          }

          / * rebotar partículas * /
          if ( pJS . partículas . mover . rebotar ) {
            pJS . fn . Interact . BounceParticles ( p , p2 ) ;
          }

        }
      }


    }

  } ;

  pJS . fn . partículasDibujo  =  función ( ) {

    / * lienzo claro * /
    pJS . lienzo . ctx . clearRect ( 0 ,  0 ,  pJS . lienzo . w ,  pJS . lienzo . h ) ;

    / * actualizar cada parámetro de partículas * /
    pJS . fn . partículasActualización ( ) ;

    / * dibuja cada partícula * /
    para ( var  i  =  0 ;  i  <  pJS . partículas . matriz . longitud ;  i ++ ) {
      var  p  =  pJS . partículas . matriz [ i ] ;
      p . dibujar ( ) ;
    }

  } ;

  pJS . fn . partículasEmpty  =  function ( ) {
    pJS . partículas . matriz  =  [ ] ;
  } ;

  pJS . fn . partículasRefresh  =  función ( ) {

    / * init all * /
    cancelRequestAnimFrame ( pJS . fn . checkAnimFrame ) ;
    cancelRequestAnimFrame ( pJS . fn . drawAnimFrame ) ;
    pJS . tmp . source_svg  = indefinido ;
    pJS . tmp . img_obj  = indefinido ;
    pJS . tmp . count_svg  =  0 ;
    pJS . fn . partículas vacías ( ) ;
    pJS . fn . canvasClear ( ) ;
    
    /* reiniciar */
    pJS . fn . vendedores . inicio ( ) ;

  } ;


  / * ---------- Funciones pJS - interacción de partículas ------------ * /

  pJS . fn . Interact . linkParticles  =  function ( p1 ,  p2 ) {

    var  dx  =  p1 . x  -  p2 . x ,
        dy  =  p1 . y  -  p2 . Y ,
        dist  =  Matemáticas . sqrt ( dx * dx  +  dy * dy ) ;

    / * dibuja una línea entre p1 y p2 si la distancia entre ellos está por debajo de la distancia de configuración * /
    if ( dist <= pJS . partículas . línea_enlace . distancia ) {

      var  opacity_line  =  pJS . partículas . line_linked . opacidad  -  ( dist / ( 1 / pJS . partículas . line_linked . opacity ) ) / pJS . partículas . line_linked . distancia ;

      if ( opacity_line  >  0 ) {        
        
        / * estilo * /
        var  color_line  =  pJS . partículas . line_linked . color_rgb_line ;
        pJS . lienzo . ctx . strokeStyle  =  'rgba (' + color_line . r + ',' + color_line . g + ',' + color_line . b + ',' + opacity_line + ')' ;
        pJS . lienzo . ctx . ancho de línea  =  pJS . partículas . line_linked . ancho ;
        //pJS.canvas.ctx.lineCap = 'round'; /* problema de rendimiento */
        
        /* camino */
        pJS . lienzo . ctx . beginPath ( ) ;
        pJS . lienzo . ctx . moveTo ( p1 . x ,  p1 . y ) ;
        pJS . lienzo . ctx . lineTo ( p2 . x ,  p2 . y ) ;
        pJS . lienzo . ctx . accidente cerebrovascular ( ) ;
        pJS . lienzo . ctx . closePath ( ) ;

      }

    }

  } ;


  pJS . fn . Interact . attractParticles   =  function ( p1 ,  p2 ) {

    / * partículas condensadas * /
    var  dx  =  p1 . x  -  p2 . x ,
        dy  =  p1 . y  -  p2 . Y ,
        dist  =  Matemáticas . sqrt ( dx * dx  +  dy * dy ) ;

    if ( dist <= pJS . partículas . línea_enlace . distancia ) {

      var  ax  =  dx / ( pJS . partículas . mover . atraer . rotarX * 1000 ) ,
          ay  =  dy / ( pJS . partículas . mover . atraer . rotarY * 1000 ) ;

      p1 . vx  - =  hacha ;
      p1 . vy  - =  ay ;

      p2 . vx  + =  hacha ;
      p2 . vy  + =  ay ;

    }
    

  }


  pJS . fn . Interact . bounceParticles  =  function ( p1 ,  p2 ) {

    var  dx  =  p1 . x  -  p2 . x ,
        dy  =  p1 . y  -  p2 . Y ,
        dist  =  Matemáticas . sqrt ( dx * dx  +  dy * dy ) ,
        dist_p  =  p1 . radio + p2 . radio ;

    if ( dist <= dist_p ) {
      p1 . vx  =  - p1 . vx ;
      p1 . vy  =  - p1 . vy ;

      p2 . vx  =  - p2 . vx ;
      p2 . vy  =  - p2 . vy ;
    }

  }


  / * ---------- Funciones pJS - eventos de modos ------------ * /

  pJS . fn . modos . pushParticles  =  function ( nb ,  pos ) {

    pJS . tmp . empujar  =  verdadero ;

    para ( var  i  =  0 ;  i  <  nb ;  i ++ ) {
      pJS . partículas . matriz . empujar (
        nuevo  pJS . fn . partícula (
          pJS . partículas . color ,
          pJS . partículas . opacidad . valor ,
          {
            'x' : pos ? pos . pos_x : Matemáticas . aleatorio ( ) * pJS . lienzo . w ,
            'y' : pos ? pos . pos_y : Matemáticas . aleatorio ( ) * pJS . lienzo . h
          }
        )
      )
      if ( i  ==  nb - 1 ) {
        if ( ! pJS . partículas . mover . activar ) {
          pJS . fn . partículasDibujar ( ) ;
        }
        pJS . tmp . empujar  =  falso ;
      }
    }

  } ;


  pJS . fn . modos . removeParticles  =  function ( nb ) {

    pJS . partículas . matriz . empalme ( 0 ,  nb ) ;
    if ( ! pJS . partículas . mover . activar ) {
      pJS . fn . partículasDibujar ( ) ;
    }

  } ;


  pJS . fn . modos . bubbleParticle  =  function ( p ) {

    / * en evento de desplazamiento * /
    if ( pJS . interactivity . events . onhover . enable  &&  isInArray ( 'bubble' ,  pJS . interactivity . events . onhover . mode ) ) {

      var  dx_mouse  =  p . x  -  pJS . interactividad . ratón . pos_x ,
          dy_mouse  =  p . y  -  pJS . interactividad . ratón . pos_y ,
          dist_mouse  =  Matemáticas . sqrt ( dx_mouse * dx_mouse  +  dy_mouse * dy_mouse ) ,
          ratio  =  1  -  dist_mouse / pJS . interactividad . modos . burbuja . distancia ;

      función  init ( ) {
        p . opacity_bubble  =  p . opacidad ;
        p . radius_bubble  =  p . radio ;
      }

      / * mousemove - comprobar relación * /
      if ( dist_mouse <= pJS . interactividad . modos . burbuja . distancia ) {

        if ( ratio > = 0  &&  pJS . interactivity . status  ==  'mousemove' ) {
          
          /* Talla */
          if ( pJS . interactividad . modos . burbuja . tamaño ! = pJS . partículas . tamaño . valor ) {

            if ( pJS . interactividad . modos . burbuja . tamaño  >  pJS . partículas . tamaño . valor ) {
               tamaño  var =  p . radio  +  ( pJS . interactividad . modos . burbuja . tamaño * relación ) ;
              if ( tamaño > = 0 ) {
                p . radius_bubble  =  tamaño ;
              }
            } más {
              var  dif  =  p . radio  -  pJS . interactividad . modos . burbuja . tamaño ,
                  tamaño  =  p . radio  -  ( relación dif * ) ;
              if ( tamaño  >  0 ) {
                p . radius_bubble  =  tamaño ;
              } más {
                p . radius_bubble  =  0 ;
              }
            }

          }

          / * opacidad * /
          if ( pJS . interactividad . modos . burbuja . opacidad ! = pJS . partículas . opacidad . valor ) {

            if ( pJS . interactividad . modos . burbuja . opacidad  >  pJS . partículas . opacidad . valor ) {
               opacidad  var =  pJS . interactividad . modos . burbuja . opacidad * relación ;
              if ( opacidad  >  p . opacidad  &&  opacidad <= pJS . interactividad . modos . burbuja . opacidad ) {
                p . opacity_bubble  =  opacity ;
              }
            } más {
               opacidad  var =  p . opacidad  -  ( pJS . partículas . opacidad . valor - pJS . interactividad . modos . burbuja . opacidad ) * relación ;
              if ( opacidad  <  p . opacidad  &&  opacidad > = pJS . interactividad . modos . burbuja . opacidad ) {
                p . opacity_bubble  =  opacity ;
              }
            }

          }

        }

      } más {
        init ( ) ;
      }


      / * mouseleave * /
      if ( pJS . interactivity . status  ==  'mouseleave' ) {
        init ( ) ;
      }
    
    }

    / * evento de clic * /
    sino  if ( pJS . interactivity . events . onclick . enable  &&  isInArray ( 'bubble' ,  pJS . interactivity . events . onclick . mode ) ) {


      if ( pJS . tmp . bubble_clicking ) {
        var  dx_mouse  =  p . x  -  pJS . interactividad . ratón . click_pos_x ,
            dy_mouse  =  p . y  -  pJS . interactividad . ratón . click_pos_y ,
            dist_mouse  =  Matemáticas . sqrt ( dx_mouse * dx_mouse  +  dy_mouse * dy_mouse ) ,
            time_spent  =  ( new  Date ( ) . getTime ( )  -  pJS . interactivity . mouse . click_time ) / 1000 ;

        if ( time_spent  >  pJS . interactividad . modos . burbuja . duración ) {
          pJS . tmp . bubble_duration_end  =  true ;
        }

        if ( time_spent  >  pJS . interactividad . modos . burbuja . duración * 2 ) {
          pJS . tmp . bubble_clicking  =  false ;
          pJS . tmp . bubble_duration_end  =  false ;
        }
      }


       proceso de función ( bubble_param ,  partículas_param ,  p_obj_bubble ,  p_obj ,  id ) {

        si ( bubble_param ! = particles_param ) {

          if ( ! pJS . tmp . bubble_duration_end ) {
            if ( dist_mouse <= pJS . interactividad . modos . burbuja . distancia ) {
              if ( p_obj_bubble ! = undefined )  var  obj  =  p_obj_bubble ;
              sino  var var  obj  =  p_obj ;
              if ( obj ! = bubble_param ) {
                 valor  var =  p_obj  -  ( time_spent * ( p_obj  -  bubble_param ) / pJS . interactividad . modos . burbuja . duración ) ;
                if ( id  ==  'tamaño' )  p . radius_bubble  =  valor ;
                if ( id  ==  'opacidad' )  p . opacity_bubble  =  value ;
              }
            } más {
              if ( id  ==  'tamaño' )  p . radius_bubble  = undefined ;
              if ( id  ==  'opacidad' )  p . opacity_bubble  = undefined ;
            }
          } más {
            if ( p_obj_bubble ! = undefined ) {
              var  value_tmp  =  p_obj  -  ( time_spent * ( p_obj  -  bubble_param ) / pJS . interactividad . modos . burbuja . duración ) ,
                  dif  =  bubble_param  -  value_tmp ;
                  valor  =  bubble_param  +  dif ;
              if ( id  ==  'tamaño' )  p . radius_bubble  =  valor ;
              if ( id  ==  'opacidad' )  p . opacity_bubble  =  value ;
            }
          }

        }

      }

      if ( pJS . tmp . bubble_clicking ) {
        /* Talla */
        proceso ( pJS . interactividad . modos . burbuja . tamaño ,  pJS . partículas . tamaño . valor ,  p . radio_bubble ,  p . radio ,  'tamaño' ) ;
        / * opacidad * /
        proceso ( pJS . interactividad . modos . burbuja . opacidad ,  pJS . partículas . opacidad . valor ,  p . opacity_bubble ,  p . opacity ,  'opacity' ) ;
      }

    }

  } ;


  pJS . fn . modos . repulseParticle  =  function ( p ) {

    if ( pJS . interactivity . events . onhover . enable  &&  isInArray ( ' repulse ' ,  pJS . interactivity . events . onhover . mode )  &&  pJS . interactivity . status  ==  'mousemove' )  {

      var  dx_mouse  =  p . x  -  pJS . interactividad . ratón . pos_x ,
          dy_mouse  =  p . y  -  pJS . interactividad . ratón . pos_y ,
          dist_mouse  =  Matemáticas . sqrt ( dx_mouse * dx_mouse  +  dy_mouse * dy_mouse ) ;

      var  normVec  =  { x : dx_mouse / dist_mouse ,  y : dy_mouse / dist_mouse } ,
          repulseRadius  =  pJS . interactividad . modos . rechazar . distancia ,
          velocidad  =  100 ,
          repulseFactor  =  clamp ( ( 1 / repulseRadius ) * ( - 1 * Math . pow ( dist_mouse / repulseRadius , 2 ) + 1 ) * repulseRadius * velocidad ,  0 ,  50 ) ;
      
      var  pos  =  {
        x : p . x  +  normaVec . x * repulseFactor ,
        y : p . y  +  normaVec . y * repulseFactor
      }

      if ( pJS . partículas . move . out_mode  ==  'rebote' ) {
        if ( pos . x  -  p . radio  >  0  &&  pos . x  +  p . radio  <  pJS . lienzo . w )  p . x  =  pos . x ;
        if ( pos . y  -  p . radio  >  0  &&  pos . y  +  p . radio  <  pJS . lienzo . h )  p . y  =  pos . y ;
      } más {
        p . x  =  pos . x ;
        p . y  =  pos . y ;
      }
    
    }


    sino  if ( pJS . interactivity . events . onclick . enable  &&  isInArray ( ' repulse ' ,  pJS . interactivity . events . onclick . mode ) )  {

      if ( ! pJS . tmp . repulse_finish ) {
        pJS . tmp . repulse_count ++ ;
        if ( pJS . tmp . repulse_count  ==  pJS . partículas . matriz . longitud ) {
          pJS . tmp . repulse_finish  =  true ;
        }
      }

      if ( pJS . tmp . repulse_clicking ) {

        var  repulseRadius  =  Matemáticas . pow ( pJS . interactividad . modos . rechazo . distancia / 6 ,  3 ) ;

        var  dx  =  pJS . interactividad . ratón . click_pos_x  -  p . x ,
            dy  =  pJS . interactividad . ratón . click_pos_y  -  p . Y ,
            d  =  dx * dx  +  dy * dy ;

        var  force  =  - repulseRadius / d * 1 ;

         proceso de función ( ) {

          var  f  =  Matemáticas . atan2 ( dy , dx ) ;
          p . vx  =  fuerza * Matemáticas . cos ( f ) ;
          p . vy  =  fuerza * Matemáticas . pecado ( f ) ;

          if ( pJS . partículas . move . out_mode  ==  'rebote' ) {
            var  pos  =  {
              x : p . x  +  p . vx ,
              y : p . y  +  p . vy
            }
            if  ( pos . x  +  p . radio  >  pJS . lienzo . w )  p . vx  =  - p . vx ;
            más  si  ( pos . x  -  p . radio  <  0 )  p . vx  =  - p . vx ;
            if  ( pos . y  +  p . radio  >  pJS . lienzo . h )  p . vy  =  - p . vy ;
            más  si  ( pos . y  -  p . radio  <  0 )  p . vy  =  - p . vy ;
          }

        }

        // defecto
        if ( d <= repulseRadius ) {
          proceso ( ) ;
        }

        // explosión - modo de cámara lenta
        // if (! pJS.tmp.repulse_finish) {
        // if (d <= repulseRadius) {
        // proceso ();
        //}
        //} más {
        // proceso ();
        //}
        

      } más {

        if ( pJS . tmp . repulse_clicking  ==  false ) {

          p . vx  =  p . vx_i ;
          p . vy  =  p . vy_i ;
        
        }

      }

    }

  }


  pJS . fn . modos . grabParticle  =  function ( p ) {

    if ( pJS . interactivity . events . onhover . enable  &&  pJS . interactivity . status  ==  'mousemove' ) {

      var  dx_mouse  =  p . x  -  pJS . interactividad . ratón . pos_x ,
          dy_mouse  =  p . y  -  pJS . interactividad . ratón . pos_y ,
          dist_mouse  =  Matemáticas . sqrt ( dx_mouse * dx_mouse  +  dy_mouse * dy_mouse ) ;

      / * dibuja una línea entre el cursor y la partícula si la distancia entre ellos está por debajo de la distancia de configuración * /
      if ( dist_mouse <= pJS . interactividad . modos . grab . distancia ) {

        var  opacity_line  =  pJS . interactividad . modos . grab . line_linked . opacidad  -  ( dist_mouse / ( 1 / pJS . interactividad . modos . grab . line_linked . opacity ) ) / pJS . interactividad . modos . grab . distancia ;

        if ( opacity_line  >  0 ) {

          / * estilo * /
          var  color_line  =  pJS . partículas . line_linked . color_rgb_line ;
          pJS . lienzo . ctx . strokeStyle  =  'rgba (' + color_line . r + ',' + color_line . g + ',' + color_line . b + ',' + opacity_line + ')' ;
          pJS . lienzo . ctx . ancho de línea  =  pJS . partículas . line_linked . ancho ;
          //pJS.canvas.ctx.lineCap = 'round'; /* problema de rendimiento */
          
          /* camino */
          pJS . lienzo . ctx . beginPath ( ) ;
          pJS . lienzo . ctx . moveTo ( p . x ,  p . y ) ;
          pJS . lienzo . ctx . lineTo ( pJS . interactividad . mouse . pos_x ,  pJS . interactividad . mouse . pos_y ) ;
          pJS . lienzo . ctx . accidente cerebrovascular ( ) ;
          pJS . lienzo . ctx . closePath ( ) ;

        }

      }

    }

  } ;



  / * ---------- Funciones pJS - proveedores ------------ * /

  pJS . fn . vendedores . eventsListeners  =  function ( ) {

    / * elemento de destino de eventos * /
    if ( pJS . interactivity . detect_on  ==  'window' ) {
      pJS . interactividad . el  =  ventana ;
    } más {
      pJS . interactividad . el  =  pJS . lienzo . el ;
    }


    / * detectar la posición del mouse - al pasar el mouse / hacer clic en evento * /
    if ( pJS . interactivity . events . onhover . enable  ||  pJS . interactivity . events . onclick . enable ) {

      / * el en mousemove * /
      pJS . interactividad . el . addEventListener ( 'mousemove' ,  función ( e ) {

        if ( pJS . interactivity . el  ==  window ) {
          var  pos_x  =  e . clientX ,
              pos_y  =  e . clientela ;
        }
        más {
          var  pos_x  =  e . offsetX  ||  e . clientX ,
              pos_y  =  e . offsetY  ||  e . clientela ;
        }

        pJS . interactividad . ratón . pos_x  =  pos_x ;
        pJS . interactividad . ratón . pos_y  =  pos_y ;

        if ( pJS . tmp . retina ) {
          pJS . interactividad . ratón . pos_x * = pJS . lienzo . pxratio ;
          pJS . interactividad . ratón . pos_y * = pJS . lienzo . pxratio ;
        }

        pJS . interactividad . estado  =  'mousemove' ;

      } ) ;

      / * el en onmouseleave * /
      pJS . interactividad . el . addEventListener ( 'mouseleave' ,  function ( e ) {

        pJS . interactividad . ratón . pos_x  = nulo ;
        pJS . interactividad . ratón . pos_y  = nulo ;
        pJS . interactividad . estado  =  'mouseleave' ;

      } ) ;

    }

    / * evento de clic * /
    if ( pJS . interactivity . events . onclick . enable ) {

      pJS . interactividad . el . addEventListener ( 'click' ,  function ( ) {

        pJS . interactividad . ratón . click_pos_x  =  pJS . interactividad . ratón . pos_x ;
        pJS . interactividad . ratón . click_pos_y  =  pJS . interactividad . ratón . pos_y ;
        pJS . interactividad . ratón . click_time  =  new  Date ( ) . getTime ( ) ;

        if ( pJS . interactivity . events . onclick . enable ) {

          interruptor ( pJS . interactividad . eventos . onclick . modo ) {

            caso  'push' :
              if ( pJS . partículas . mover . habilitar ) {
                pJS . fn . modos . pushParticles ( pJS . interactividad . modos . push . partículas_nb ,  pJS . interactividad . mouse ) ;
              } más {
                if ( pJS . interactividad . modos . push . partículas_nb  ==  1 ) {
                  pJS . fn . modos . pushParticles ( pJS . interactividad . modos . push . partículas_nb ,  pJS . interactividad . mouse ) ;
                }
                otra cosa  si ( pJS . interactividad . modos . empuje . particles_nb  >  1 ) {
                  pJS . fn . modos . pushParticles ( pJS . interactividad . modos . push . partículas_nb ) ;
                }
              }
            romper ;

            caso  'eliminar' :
              pJS . fn . modos . removeParticles ( pJS . interactividad . modos . remove . partículas_nb ) ;
            romper ;

            caso  'burbuja' :
              pJS . tmp . bubble_clicking  =  true ;
            romper ;

            caso  'repulse' :
              pJS . tmp . repulse_clicking  =  true ;
              pJS . tmp . repulse_count  =  0 ;
              pJS . tmp . repulse_finish  =  false ;
              setTimeout ( function ( ) {
                pJS . tmp . repulse_clicking  =  false ;
              } ,  pJS . interactividad . modos . rechazar . duración * 1000 )
            romper ;

          }

        }

      } ) ;
        
    }


  } ;

  pJS . fn . vendedores . densidadAutoPartículas  =  función ( ) {

    if ( pJS . partículas . número . densidad . habilitar ) {

      / * área de cálculo * /
       área  var =  pJS . lienzo . el . ancho * pJS . lienzo . el . altura / 1000 ;
      if ( pJS . tmp . retina ) {
        area  =  area / ( pJS . lienzo . pxratio * 2 ) ;
      }

      / * calc número de partículas en función del área de densidad * /
      var  nb_particles  =  area * pJS . partículas . número . valor / pJS . partículas . número . densidad . área_valor ;

      / * agregar o eliminar partículas X * /
      var  missing_particles  =  pJS . partículas . matriz . longitud  -  nb_partículas ;
      if ( missing_particles  <  0 )  pJS . fn . modos . pushParticles ( Math . abs ( missing_particles ) ) ;
      de lo contrario  pJS . fn . modos . removeParticles ( missing_particles ) ;

    }

  } ;


  pJS . fn . vendedores . checkOverlap  =  función ( p1 ,  posición ) {
    para ( var  i  =  0 ;  i  <  pJS . partículas . matriz . longitud ;  i ++ ) {
      var  p2  =  pJS . partículas . matriz [ i ] ;

      var  dx  =  p1 . x  -  p2 . x ,
          dy  =  p1 . y  -  p2 . Y ,
          dist  =  Matemáticas . sqrt ( dx * dx  +  dy * dy ) ;

      if ( dist <= p1 . radio  +  p2 . radio ) {
        p1 . x  =  posición ? posición . x : Matemáticas . aleatorio ( ) * pJS . lienzo . w ;
        p1 . y  =  posición ? posición . y : matemáticas . aleatorio ( ) * pJS . lienzo . h ;
        pJS . fn . vendedores . checkOverlap ( p1 ) ;
      }
    }
  } ;


  pJS . fn . vendedores . createSvgImg  =  function ( p ) {

    / * establece el color en el elemento svg * /
    var  svgXml  =  pJS . tmp . source_svg ,
        rgbHex  =  / # ( [ 0-9A-F ] { 3,6 } ) / gi ,
        coloredSvgXml  =  svgXml . replace ( rgbHex ,  function  ( m ,  r ,  g ,  b )  {
          if ( p . color . rgb ) {
            var  color_value  =  'rgba (' + p . color . rgb . r + ',' + p . color . rgb . g + ',' + p . color . rgb . b + ',' + p . opacidad + ') ' ;
          } más {
            var  color_value  =  'hsla (' + p . color . hsl . h + ',' + p . color . hsl . s + '%,' + p . color . hsl . l + '%,' + p . opacidad + ')' ;
          }
          return  color_value ;
        } ) ;

    / * prepararse para crear img con svg de color * /
    var  svg  =  blob nuevo  ( [ coloredSvgXml ] , { type : 'image / svg + xml; charset = utf-8' } ) , 
        DOMURL  =  ventana . URL  ||  ventana . webkitURL  ||  ventana ,
        url  =  DOMURL . createObjectURL ( svg ) ;

    / * crear partícula img obj * /
    var  img  =  nueva  imagen ( ) ;
    img . addEventListener ( 'load' ,  function ( ) {
      p . img . obj  =  img ;
      p . img . cargado  =  verdadero ;
      DOMURL . revokeObjectURL ( url ) ;
      pJS . tmp . count_svg ++ ;
    } ) ;
    img . src  =  url ;

  } ;


  pJS . fn . vendedores . destroypJS  =  function ( ) {
    cancelAnimationFrame ( pJS . fn . drawAnimFrame ) ;
    lienzo_el . eliminar ( ) ;
    pJSDom  = nulo ;
  } ;


  pJS . fn . vendedores . drawShape  =  function ( c ,  startX ,  startY ,  sideLength ,  sideCountNumerator ,  sideCountDenominator ) {

    // Mediante la programación de Thomas - https://programmingthomas.wordpress.com/2013/04/03/n-sided-shapes/
    var  sideCount  =  sideCountNumerator * sideCountDenominator ;
    var  decimalSides  =  sideCountNumerator / sideCountDenominator ;
    var  interiorAngleDegrees  =  ( 180 * ( decimalSides  -  2 ) ) / decimalSides ;
    var  interiorAngle  =  Math . PI  -  Matemáticas . PI * interiorAngleDegrees / 180 ;  // convertir a radianes
    c . guardar ( ) ;
    c . beginPath ( ) ;
    c . traducir ( startX ,  startY ) ;
    c . moveTo ( 0 , 0 ) ;
    para  ( var  i  =  0 ;  i  <  sideCount ;  i ++ )  {
      c . lineTo ( sideLength , 0 ) ;
      c . traducir ( longitud lateral , 0 ) ;
      c . rotar ( ángulo interior ) ;
    }
    //c.stroke ();
    c . relleno ( ) ;
    c . restaurar ( ) ;

  } ;

  pJS . fn . vendedores . exportImg  =  function ( ) {
    ventana . abierto ( pJS . canvas . el . toDataURL ( 'image / png' ) ,  '_blank' ) ;
  } ;


  pJS . fn . vendedores . loadImg  =  función ( tipo ) {

    pJS . tmp . img_error  = undefined ;

    if ( pJS . partículas . forma . imagen . src ! = '' ) {

      if ( type  ==  'svg' ) {

        var  xhr  =  new  XMLHttpRequest ( ) ;
        xhr . abierto ( 'GET' ,  pJS . partículas . forma . imagen . src ) ;
        xhr . onreadystatechange  =  function  ( datos )  {
          if ( xhr . readyState  ==  4 ) {
            if ( xhr . status  ==  200 ) {
              pJS . tmp . source_svg  =  datos . currentTarget . la respuesta ;
              pJS . fn . vendedores . checkBeforeDraw ( ) ;
            } más {
              consola . log ( 'Error pJS - Imagen no encontrada' ) ;
              pJS . tmp . img_error  =  true ;
            }
          }
        }
        xhr . enviar ( ) ;

      } más {

        var  img  =  nueva  imagen ( ) ;
        img . addEventListener ( 'load' ,  function ( ) {
          pJS . tmp . img_obj  =  img ;
          pJS . fn . vendedores . checkBeforeDraw ( ) ;
        } ) ;
        img . src  =  pJS . partículas . dar forma . imagen . src ;

      }

    } más {
      consola . log ( 'Error pJS - No image.src' ) ;
      pJS . tmp . img_error  =  true ;
    }

  } ;


  pJS . fn . vendedores . dibujar  =  función ( ) {

    if ( pJS . partículas . forma . tipo  ==  'imagen' ) {

      if ( pJS . tmp . img_type  ==  'svg' ) {

        if ( pJS . tmp . count_svg > = pJS . partículas . número . valor ) {
          pJS . fn . partículasDibujar ( ) ;
          if ( ! pJS . partículas . mover . habilitar )  cancelRequestAnimFrame ( pJS . fn . drawAnimFrame ) ;
          de lo contrario  pJS . fn . drawAnimFrame  =  requestAnimFrame ( pJS . fn . vendors . draw ) ;
        } más {
          //console.log('todavía cargando ... ');
          if ( ! pJS . tmp . img_error )  pJS . fn . drawAnimFrame  =  requestAnimFrame ( pJS . fn . vendors . draw ) ;
        }

      } más {

        if ( pJS . tmp . img_obj ! = undefined ) {
          pJS . fn . partículasDibujar ( ) ;
          if ( ! pJS . partículas . mover . habilitar )  cancelRequestAnimFrame ( pJS . fn . drawAnimFrame ) ;
          de lo contrario  pJS . fn . drawAnimFrame  =  requestAnimFrame ( pJS . fn . vendors . draw ) ;
        } más {
          if ( ! pJS . tmp . img_error )  pJS . fn . drawAnimFrame  =  requestAnimFrame ( pJS . fn . vendors . draw ) ;
        }

      }

    } más {
      pJS . fn . partículasDibujar ( ) ;
      if ( ! pJS . partículas . mover . habilitar )  cancelRequestAnimFrame ( pJS . fn . drawAnimFrame ) ;
      de lo contrario  pJS . fn . drawAnimFrame  =  requestAnimFrame ( pJS . fn . vendors . draw ) ;
    }

  } ;


  pJS . fn . vendedores . checkBeforeDraw  =  function ( ) {

    // si la forma es imagen
    if ( pJS . partículas . forma . tipo  ==  'imagen' ) {

      if ( pJS . tmp . img_type  ==  'svg'  &&  pJS . tmp . source_svg  == undefined ) {
        pJS . tmp . checkAnimFrame  =  requestAnimFrame ( verificar ) ;
      } más {
        //console.log('imágenes cargadas! cancelar cheque ');
        cancelRequestAnimFrame ( pJS . tmp . checkAnimFrame ) ;
        if ( ! pJS . tmp . img_error ) {
          pJS . fn . vendedores . init ( ) ;
          pJS . fn . vendedores . dibujar ( ) ;
        }
        
      }

    } más {
      pJS . fn . vendedores . init ( ) ;
      pJS . fn . vendedores . dibujar ( ) ;
    }

  } ;


  pJS . fn . vendedores . init  =  function ( ) {

    / * init lienzo + partículas * /
    pJS . fn . retinaInit ( ) ;
    pJS . fn . canvasInit ( ) ;
    pJS . fn . canvasSize ( ) ;
    pJS . fn . lienzoPaint ( ) ;
    pJS . fn . partículasCrear ( ) ;
    pJS . fn . vendedores . densidadAutoPartículas ( ) ;

    / *icles.line_linked - convierte colores hexadecimales a rgb * /
    pJS . partículas . line_linked . color_rgb_line  =  hexToRgb ( pJS . partículas . line_linked . color ) ;

  } ;


  pJS . fn . vendedores . inicio  =  función ( ) {

    if ( isInArray ( 'imagen' ,  pJS . partículas . forma . tipo ) ) {
      pJS . tmp . img_type  =  pJS . partículas . dar forma . imagen . src . substr ( pJS . partículas . forma . imagen . src . longitud  -  3 ) ;
      pJS . fn . vendedores . loadImg ( pJS . tmp . img_type ) ;
    } más {
      pJS . fn . vendedores . checkBeforeDraw ( ) ;
    }

  } ;




  / * ---------- pJS - inicio ------------ * /


  pJS . fn . vendedores . eventsListeners ( ) ;

  pJS . fn . vendedores . inicio ( ) ;
  


} ;

/ * ---------- funciones globales - proveedores ------------ * /

Objeto . deepExtend  =  function ( destino ,  fuente )  {
  para  ( propiedad var  en la fuente ) {   
    if  ( fuente [ propiedad ]  &&  fuente [ propiedad ] . constructor  &&
     fuente [ propiedad ] . constructor  ===  objeto )  {
      destino [ propiedad ]  =  destino [ propiedad ]  ||  { } ;
      argumentos . callee ( destino [ propiedad ] ,  fuente [ propiedad ] ) ;
    }  más  {
      destino [ propiedad ]  =  fuente [ propiedad ] ;
    }
  }
   destino de regreso ;
} ;

ventana . requestAnimFrame  =  ( function ( ) {
    ventana de retorno . requestAnimationFrame  ||
    ventana . webkitRequestAnimationFrame  ||
    ventana . mozRequestAnimationFrame     ||
    ventana . oRequestAnimationFrame       ||
    ventana . msRequestAnimationFrame      ||
    función ( devolución de llamada ) {
      ventana . setTimeout ( devolución de llamada ,  1,000 / 60 ) ;
    } ;
} ) ( ) ;

ventana . cancelRequestAnimFrame  =  (  function ( )  {
   ventana de retorno . cancelAnimationFrame          ||
    ventana . webkitCancelRequestAnimationFrame  ||
    ventana . mozCancelRequestAnimationFrame     ||
    ventana . oCancelRequestAnimationFrame       ||
    ventana . msCancelRequestAnimationFrame      ||
    clearTimeout
}  ) ( ) ;

función  hexToRgb ( hex ) {
  // Por Tim Down - http://stackoverflow.com/a/5624139/3493650
  // Expande el formulario abreviado (por ejemplo, "03F") al formulario completo (por ejemplo, "0033FF")
  var  shorthandRegex  =  / ^ #? ( [ af \ d ] ) ( [ af \ d ] ) ( [ af \ d ] ) $ / i ;
  hex  =  hex . replace ( shorthandRegex ,  function ( m ,  r ,  g ,  b )  {
     devuelve  r  +  r  +  g  +  g  +  b  +  b ;
  } ) ;
   resultado  var =  / ^ #? ( [ af \ d ] { 2 } ) ( [ af \ d ] { 2 } ) ( [ af \ d ] { 2 } ) $ / i . exec ( hex ) ;
  devolver  resultado ? {
      r : parseInt ( resultado [ 1 ] ,  16 ) ,
      g : parseInt ( resultado [ 2 ] ,  16 ) ,
      b : parseInt ( resultado [ 3 ] ,  16 )
  } : nulo ;
} ;

 pinza de función ( número ,  min ,  max )  {
  volver  matemáticas . min ( Math . max ( número ,  min ) ,  max ) ;
} ;

función  isInArray ( valor ,  matriz )  {
   matriz de retorno . indexOf ( valor )  >  - 1 ;
}


/ * ---------- Funciones partículas.js - inicio ------------ * /

ventana . pJSDom  =  [ ] ;

ventana . partículasJS  =  función ( tag_id ,  params ) {

  //console.log(params);

  / * sin ID de cadena? así que son parámetros de objeto y configuran la identificación con la identificación predeterminada * /
  if ( typeof ( tag_id ) ! = 'string' ) {
    params  =  tag_id ;
    tag_id  =  'partículas-js' ;
  }

  / * sin identificación? establece la identificación a la identificación predeterminada * /
  if ( ! tag_id ) {
    tag_id  =  'partículas-js' ;
  }

  / * elementos pJS * /
  var  pJS_tag  =  documento . getElementById ( tag_id ) ,
      pJS_canvas_class  =  'partículas-js-canvas-el' ,
      exist_canvas  =  pJS_tag . getElementsByClassName ( pJS_canvas_class ) ;

  / * eliminar el lienzo si existe en la etiqueta de destino pJS * /
  if ( exist_canvas . length ) {
    while ( exist_canvas . length  >  0 ) {
      pJS_tag . removeChild ( exist_canvas [ 0 ] ) ;
    }
  }

  / * crear elemento de lienzo * /
  var  canvas_el  =  documento . createElement ( 'lienzo' ) ;
  lienzo_el . className  =  pJS_canvas_class ;

  / * establecer lienzo de tamaño * /
  lienzo_el . estilo . ancho  =  "100%" ;
  lienzo_el . estilo . altura  =  "100%" ;

  / * agregar lienzo * /
  var  lienzo  =  documento . getElementById ( tag_id ) . appendChild ( canvas_el ) ;

  / * lanzar partícula.js * /
  if ( lienzo ! = nulo ) {
    pJSDom . push ( nuevo  pJS ( tag_id ,  params ) ) ;
  }

} ;

ventana . partículasJS . load  =  function ( tag_id ,  path_config_json ,  callback ) {

  / * cargar configuración json * /
  var  xhr  =  new  XMLHttpRequest ( ) ;
  xhr . abierto ( 'GET' ,  path_config_json ) ;
  xhr . onreadystatechange  =  function  ( datos )  {
    if ( xhr . readyState  ==  4 ) {
      if ( xhr . status  ==  200 ) {
        var  params  =  JSON . parse ( data . currentTarget . response ) ;
        ventana . partículasJS ( tag_id ,  params ) ;
        if ( devolución de llamada )  devolución de llamada ( ) ;
      } más {
        consola . log ( 'Error pJS - Estado de XMLHttpRequest:' + xhr . status ) ;
        consola . log ( 'Error pJS - Configuración de archivo no encontrada' ) ;
      }
    }
  } ;
  xhr . enviar ( ) ;

} ;