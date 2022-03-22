$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["","Diseño", "Realidad Aumentada", "Websites", "Fotografía", "Publicidad", "Luthería", ""],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Diseño Web", "Realidad Aumentada", "Publicidad", "Diseño", "Vjing/Video art", "Luthería", "Edición de Video", "Fotografía"],
        typeSpeed: 100,
        backSpeed: 40,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});


  let sketch = function(p) {
  // hydra canvas + init
  let hc = document.createElement("canvas"); // hydra canvas + custom size
  hc.width = 640;
  hc.height = 360;
  let hydra = new Hydra({ detectAudio: false, canvas: hc });
  let pg; // store hydra texture
  let _text;
  let img;

  // hydraSandbox- start
  var sc = 7;
  var col = 10;
  s0.initImage("https://i.ibb.co/M6yrqZH/Lindi4.jpg");

  osc(50, 0.1, () => mouse.x * 0.001)
    .diff(osc(10, 0.1, () => mouse.x * 0.001).rotate(0.5))
    .modulate(
      noise()
        .kaleid()
        .rotate(2, 3)
    )
    .out();

  src(o1)
    .modulate(voronoi(10), 0.001)
    .layer(
      src(s0)
        .luma()
        .modulate(osc(10))
        .colorama(3)
    )
    .diff(src(o2))
    .out(o1);

  solid()
    .add(o0, [0, 1, 0,1,3].smooth())
    .add(o1, [9, 3, 0,3,1].smooth())
    .diff(
      src(s1)
        .pixelate(() => col)
        .saturate(() => col)
    )
    .add(solid(1, 0, 1).mult(src(o1)), [3, 0, 1].smooth())
  .add(osc(10).color(0,1,0).pixelate(3).diff(src(o1).rotate(0.03,0.03)).mask(shape(9)).diff(src(o0).rotate(0.03,0.03).kaleid(4)).diff(src(o2).modulate(noise())))
    .mult(src(o0))
    .out(o2);

  osc(10).color(0,0.3,1).pixelate(3).diff(src(o0).rotate(0.03,0.03)).mask(shape(9)).diff(src(o0).rotate(0.03,0.03).kaleid(4)).diff(src(o0).modulate(noise()))

    .out(o0)
  render(o2);


  <!-- Import the webpage's javascript file
  function camera() {
    osc()
      .colorama()
      .blend(osc(() => sc, 0.1, () => col).scale(() => sc))
      .out();
  }

  function oscilador() {
    osc(10, 0.1, () => col)
      .pixelate()
      .colorama()
      .out();
  }

  function inicio() {
    noise()
      .blend(o0, 0.2)
      .layer(src(s1).hue(() => col))
      .out(o0);
  }

-->
  // hydraSandbox - stop

  p.preload = function() {
    img = p.loadImage("https://i.ibb.co/M6yrqZH/Lindi4.jpg");
  };

  p.setup = function() {
    p.createCanvas(p.windowWidth + 10, p.windowHeight, p.WEBGL);
    p.background(0);
    pg = p.createGraphics(hc.width, hc.height);
    p.noStroke();
    _text = p.createGraphics(window.innerWidth - 4, window.innerHeight - 4);
    _text.textFont("monospace");
    _text.textAlign(p.CENTER);
    _text.textSize(130);
    _text.fill(0,258,100);
    _text.text("Insomio", p.width * 0.5, p.height * 0.9);
  };

  p.draw = function() {
    // grab + apply hydra texture
    //background(0)
    p.orbitControl(5);
    p.angleMode(p.DEGREES);
    pg.clear();
    pg.drawingContext.drawImage(hc, 0, 0, pg.width, pg.height);
    p.push();
    p.noStroke(0);
    p.rotateY(p.frameCount * 1);
    if (p.mouseIsPressed) {
      p.texture(img);
      p.torus();
      p.noStroke(0);
      p.rotateZ(45)
      p.scale(2,1);

    } else {
      p.stroke(10);
      p.texture(pg);
      p.sphere(p.width);
      p.rotateX(10,3);

    }
    p.pop();
    p.push();
    p.rotateZ(p.frameCount * 9);
    p.rotateY(p.frameCount * 9);
    p.translate(p.mouseX - p.width / 1.5, p.mouseY - p.height / 2);
    p.stroke(5);
    p.fill(255,0,255);
    p.cylinder(10, 10);
    p.texture(pg);
    p.pop();
    p.texture(_text);
    p.rotateY(p.frameCount + 5 );
    p.cylinder(p.width / 8, p.height / 8);
    p.texture(_text);

  };

  p.windowResized = function() {
    p.resizeCanvas(window.innerWidth, window.innerHeight);
  };
};

new p5(sketch, window.document.getElementById("container"));
