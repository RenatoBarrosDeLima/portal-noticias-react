import React from "react";

export default function cabecalho() {

    setInterval(function(){
        let novaHora = new Date();
        let hora = novaHora.getHours();
        let minuto = novaHora.getMinutes();
        let segundo = novaHora.getSeconds();
        minuto = zero(minuto);
        segundo = zero(segundo);
        document.getElementById('hora').textContent = hora+':'+minuto+':'+segundo;
    },1000)

    function zero(x) {
        if (x < 10) {
            x = '0' + x;
        } return x;
    }

    return (
      <header>
          <div class="container-menu-desktop">

              <div class="topbar">
                  <div class="content-topbar container h-100">
                      <div class="left-topbar">
                          <span class="left-topbar-item flex-wr-s-c">
                              <span>
                                  Piauí, BR
                              </span>

                              <span class="m-b-1 m-rl-8" id="hora"> </span>
                          </span>

                          <a href="#" class="left-topbar-item">
                              Sobre
                          </a>

                          <a href="#" class="left-topbar-item">
                              Contato
                          </a>

                          {/* <a href="#" class="left-topbar-item">
                              Sing up
                          </a> */}

                          {/* <a href="#" class="left-topbar-item">
                              Log in
                          </a> */}
                      </div>

                      <div class="right-topbar">
                          <a href="#">
                              <span class="fab fa-facebook-f"></span>
                          </a>

                          <a href="#">
                              <span class="fab fa-twitter"></span>
                          </a>

                          <a href="#">
                              <span class="fab fa-pinterest-p"></span>
                          </a>

                          <a href="#">
                              <span class="fab fa-vimeo-v"></span>
                          </a>

                          <a href="#">
                              <span class="fab fa-youtube"></span>
                          </a>
                      </div>
                  </div>
              </div>

              <div class="wrap-header-mobile">
                  <div class="logo-mobile">
                      <a href="index.html"><img src={require("../../assets/images/icons/logo-01.png")} alt="IMG-LOGO"/></a>
                  </div>

                  <div class="btn-show-menu-mobile hamburger hamburger--squeeze m-r--8">
                      <span class="hamburger-box">
                          <span class="hamburger-inner"></span>
                      </span>
                  </div>
              </div>

              <div class="menu-mobile">
                  <ul class="topbar-mobile">
                      <li class="left-topbar">
                          <span class="left-topbar-item flex-wr-s-c">
                              <span>
                                  New York, NY
                              </span>

                              <img class="m-b-1 m-rl-8" src={require("../../assets/images/icons/icon-night.png")} alt="IMG"/>

                              <span>
                                  HI 58° LO 56°
                              </span>
                          </span>
                      </li>

                      <li class="left-topbar">
                          <a href="#" class="left-topbar-item">
                              About
                          </a>

                          <a href="#" class="left-topbar-item">
                              Contact
                          </a>

                          <a href="#" class="left-topbar-item">
                              Sing up
                          </a>

                          <a href="#" class="left-topbar-item">
                              Log in
                          </a>
                      </li>

                      <li class="right-topbar">
                          <a href="#">
                              <span class="fab fa-facebook-f"></span>
                          </a>

                          <a href="#">
                              <span class="fab fa-twitter"></span>
                          </a>

                          <a href="#">
                              <span class="fab fa-pinterest-p"></span>
                          </a>

                          <a href="#">
                              <span class="fab fa-vimeo-v"></span>
                          </a>

                          <a href="#">
                              <span class="fab fa-youtube"></span>
                          </a>
                      </li>
                  </ul>

                  <ul class="main-menu-m">
                      <li>
                          <a href="index.html">Home</a>
                          <ul class="sub-menu-m">
                              <li><a href="index.html">Homepage v1</a></li>
                              <li><a href="home-02.html">Homepage v2</a></li>
                              <li><a href="home-03.html">Homepage v3</a></li>
                          </ul>

                          <span class="arrow-main-menu-m">
                              <i class="fa fa-angle-right" aria-hidden="true"></i>
                          </span>
                      </li>

                      <li>
                          <a href="category-01.html">News</a>
                      </li>

                      <li>
                          <a href="category-02.html">Entertainment </a>
                      </li>

                      <li>
                          <a href="category-01.html">Business</a>
                      </li>

                      <li>
                          <a href="category-02.html">Travel</a>
                      </li>

                      <li>
                          <a href="category-01.html">Life Style</a>
                      </li>

                      <li>
                          <a href="category-02.html">Video</a>
                      </li>

                      <li>
                          <a href="#">Features</a>
                          <ul class="sub-menu-m">
                              <li><a href="category-01.html">Category Page v1</a></li>
                              <li><a href="category-02.html">Category Page v2</a></li>
                              <li><a href="blog-grid.html">Blog Grid Sidebar</a></li>
                              <li><a href="blog-list-01.html">Blog List Sidebar v1</a></li>
                              <li><a href="blog-list-02.html">Blog List Sidebar v2</a></li>
                              <li><a href="blog-detail-01.html">Blog Detail Sidebar</a></li>
                              <li><a href="blog-detail-02.html">Blog Detail No Sidebar</a></li>
                              <li><a href="about.html">About Us</a></li>
                              <li><a href="contact.html">Contact Us</a></li>
                          </ul>

                          <span class="arrow-main-menu-m">
                              <i class="fa fa-angle-right" aria-hidden="true"></i>
                          </span>
                      </li>
                  </ul>
              </div>

              <div class="wrap-logo container">
                  <div class="logo">
                      <a href="index.html"><img src={require("../../assets/images/icons/logo-01.png")} alt="LOGO"/></a>
                  </div>	

                  <div class="banner-header">
                      <a href="https://themewagon.com/themes/free-bootstrap-4-html5-news-website-template-magnews2/"><img src={require("../../assets/images/banner-01.jpg")}  alt="IMG"/></a>
                  </div>
              </div>

              <div class="wrap-main-nav">
                  <div class="main-nav">
                      <nav class="menu-desktop">
                          <a class="logo-stick" href="index.html">
                              <img src={require("../../assets/images/icons/logo-01.png")} alt="LOGO"/>
                          </a>

                          <ul class="main-menu">
                              <li class="main-menu-active">
                                  <a href="index.html">Inicio</a>
                                  <ul class="sub-menu">
                                      <li><a href="index.html">Homepage v1</a></li>
                                      <li><a href="home-02.html">Homepage v2</a></li>
                                      <li><a href="home-03.html">Homepage v3</a></li>
                                  </ul>
                              </li>

                              <li class="mega-menu-item">
                                  <a href="category-01.html">Últimas</a>

                                  <div class="sub-mega-menu">
                                      
                                      <div class="tab-content">
                                          <div class="tab-pane show active" id="news-0" role="tabpanel">
                                              <div class="row">
                                                  <div class="col-3">
                                                      <div>
                                                          <a href="blog-detail-01.html" class="wrap-pic-w hov1 trans-03">
                                                              <img src={require("../../assets/images/post-05.jpg")} alt="IMG"/>
                                                          </a>

                                                          <div class="p-t-10">
                                                              <h5 class="p-b-5">
                                                                  <a href="blog-detail-01.html" class="f1-s-5 cl3 hov-cl10 trans-03">
                                                                      Donec metus orci, malesuada et lectus vitae
                                                                  </a>
                                                              </h5>

                                                              <span class="cl8">
                                                                  <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                                                                      Music
                                                                  </a>

                                                                  <span class="f1-s-3 m-rl-3">
                                                                      -
                                                                  </span>

                                                                  <span class="f1-s-3">
                                                                      Feb 18
                                                                  </span>
                                                              </span>
                                                          </div>
                                                      </div>
                                                  </div>

                                                  <div class="col-3">
                                                      <div>
                                                          <a href="blog-detail-01.html" class="wrap-pic-w hov1 trans-03">
                                                              <img src={require("../../assets/images/post-10.jpg")} alt="IMG"/>
                                                          </a>

                                                          <div class="p-t-10">
                                                              <h5 class="p-b-5">
                                                                  <a href="blog-detail-01.html" class="f1-s-5 cl3 hov-cl10 trans-03">
                                                                      Donec metus orci, malesuada et lectus vitae
                                                                  </a>
                                                              </h5>

                                                              <span class="cl8">
                                                                  <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                                                                      Finance
                                                                  </a>

                                                                  <span class="f1-s-3 m-rl-3">
                                                                      -
                                                                  </span>

                                                                  <span class="f1-s-3">
                                                                      Jan 15
                                                                  </span>
                                                              </span>
                                                          </div>
                                                      </div>
                                                  </div>

                                                  <div class="col-3">
                                                      <div>
                                                          <a href="blog-detail-01.html" class="wrap-pic-w hov1 trans-03">
                                                              <img src={require("../../assets/images/post-14.jpg")} alt="IMG"/>
                                                          </a>

                                                          <div class="p-t-10">
                                                              <h5 class="p-b-5">
                                                                  <a href="blog-detail-01.html" class="f1-s-5 cl3 hov-cl10 trans-03">
                                                                      Donec metus orci, malesuada et lectus vitae
                                                                  </a>
                                                              </h5>

                                                              <span class="cl8">
                                                                  <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                                                                      Beach
                                                                  </a>

                                                                  <span class="f1-s-3 m-rl-3">
                                                                      -
                                                                  </span>

                                                                  <span class="f1-s-3">
                                                                      Feb 12
                                                                  </span>
                                                              </span>
                                                          </div>
                                                      </div>
                                                  </div>

                                                  <div class="col-3">
                                                      <div>
                                                          <a href="blog-detail-01.html" class="wrap-pic-w hov1 trans-03">
                                                              <img src={require("../../assets/images/post-36.jpg")} alt="IMG"/>
                                                          </a>

                                                          <div class="p-t-10">
                                                              <h5 class="p-b-5">
                                                                  <a href="blog-detail-01.html" class="f1-s-5 cl3 hov-cl10 trans-03">
                                                                      Donec metus orci, malesuada et lectus vitae
                                                                  </a>
                                                              </h5>

                                                              <span class="cl8">
                                                                  <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                                                                      Technology
                                                                  </a>

                                                                  <span class="f1-s-3 m-rl-3">
                                                                      -
                                                                  </span>

                                                                  <span class="f1-s-3">
                                                                      Jan 20
                                                                  </span>
                                                              </span>
                                                          </div>
                                                      </div>
                                                  </div>
                                                </div>
                                          </div>
                                      </div>
                                  </div>
                              </li>

                              <li class="mega-menu-item">
                                  <a href="category-02.html">Entretenimento </a>

                                  <div class="sub-mega-menu">

                                            <div class="tab-content">
                                          <div class="tab-pane show active" id="enter-1" role="tabpanel">
                                              <div class="row">
                                                  <div class="col-3">
                                                      <div>
                                                          <a href="blog-detail-01.html" class="wrap-pic-w hov1 trans-03">
                                                              <img src={require("../../assets/images/post-25.jpg")} alt="IMG"/>
                                                          </a>

                                                          <div class="p-t-10">
                                                              <h5 class="p-b-5">
                                                                  <a href="blog-detail-01.html" class="f1-s-5 cl3 hov-cl10 trans-03">
                                                                      Donec metus orci, malesuada et lectus vitae
                                                                  </a>
                                                              </h5>

                                                              <span class="cl8">
                                                                  <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                                                                      Music
                                                                  </a>

                                                                  <span class="f1-s-3 m-rl-3">
                                                                      -
                                                                  </span>

                                                                  <span class="f1-s-3">
                                                                      Feb 18
                                                                  </span>
                                                              </span>
                                                          </div>
                                                      </div>
                                                  </div>

                                                  <div class="col-3">
                                                      <div>
                                                          <a href="blog-detail-01.html" class="wrap-pic-w hov1 trans-03">
                                                              <img src={require("../../assets/images/post-27.jpg")} alt="IMG"/>
                                                          </a>

                                                          <div class="p-t-10">
                                                              <h5 class="p-b-5">
                                                                  <a href="blog-detail-01.html" class="f1-s-5 cl3 hov-cl10 trans-03">
                                                                      Donec metus orci, malesuada et lectus vitae
                                                                  </a>
                                                              </h5>

                                                              <span class="cl8">
                                                                  <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                                                                      Music
                                                                  </a>

                                                                  <span class="f1-s-3 m-rl-3">
                                                                      -
                                                                  </span>

                                                                  <span class="f1-s-3">
                                                                      Jan 20
                                                                  </span>
                                                              </span>
                                                          </div>
                                                      </div>
                                                  </div>

                                                  <div class="col-3">
                                                      <div>
                                                          <a href="blog-detail-01.html" class="wrap-pic-w hov1 trans-03">
                                                              <img src={require("../../assets/images/post-26.jpg")} alt="IMG"/>
                                                          </a>

                                                          <div class="p-t-10">
                                                              <h5 class="p-b-5">
                                                                  <a href="blog-detail-01.html" class="f1-s-5 cl3 hov-cl10 trans-03">
                                                                      Donec metus orci, malesuada et lectus vitae
                                                                  </a>
                                                              </h5>

                                                              <span class="cl8">
                                                                  <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                                                                      Music
                                                                  </a>

                                                                  <span class="f1-s-3 m-rl-3">
                                                                      -
                                                                  </span>

                                                                  <span class="f1-s-3">
                                                                      Feb 12
                                                                  </span>
                                                              </span>
                                                          </div>
                                                      </div>
                                                  </div>

                                                  <div class="col-3">
                                                      <div>
                                                          <a href="blog-detail-01.html" class="wrap-pic-w hov1 trans-03">
                                                              <img src={require("../../assets/images/post-34.jpg")} alt="IMG"/>
                                                          </a>

                                                          <div class="p-t-10">
                                                              <h5 class="p-b-5">
                                                                  <a href="blog-detail-01.html" class="f1-s-5 cl3 hov-cl10 trans-03">
                                                                      Donec metus orci, malesuada et lectus vitae
                                                                  </a>
                                                              </h5>

                                                              <span class="cl8">
                                                                  <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                                                                      Music
                                                                  </a>

                                                                  <span class="f1-s-3 m-rl-3">
                                                                      -
                                                                  </span>

                                                                  <span class="f1-s-3">
                                                                      Jan 15
                                                                  </span>
                                                              </span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </li>

                              <li class="mega-menu-item">
                                  <a href="category-01.html">Negócios</a>

                                  <div class="sub-mega-menu">

                                      <div class="tab-content">
                                          <div class="tab-pane show active" id="business-1" role="tabpanel">
                                              <div class="row">
                                                  <div class="col-3">
                                                      <div>
                                                          <a href="blog-detail-01.html" class="wrap-pic-w hov1 trans-03">
                                                              <img src={require("../../assets/images/post-10.jpg")} alt="IMG"/>
                                                          </a>

                                                          <div class="p-t-10">
                                                              <h5 class="p-b-5">
                                                                  <a href="blog-detail-01.html" class="f1-s-5 cl3 hov-cl10 trans-03">
                                                                      Donec metus orci, malesuada et lectus vitae
                                                                  </a>
                                                              </h5>

                                                              <span class="cl8">
                                                                  <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                                                                      Music
                                                                  </a>

                                                                  <span class="f1-s-3 m-rl-3">
                                                                      -
                                                                  </span>

                                                                  <span class="f1-s-3">
                                                                      Feb 18
                                                                  </span>
                                                              </span>
                                                          </div>
                                                      </div>
                                                  </div>

                                                  <div class="col-3">
                                                      <div>
                                                          <a href="blog-detail-01.html" class="wrap-pic-w hov1 trans-03">
                                                              <img src={require("../../assets/images/post-11.jpg")} alt="IMG"/>
                                                          </a>

                                                          <div class="p-t-10">
                                                              <h5 class="p-b-5">
                                                                  <a href="blog-detail-01.html" class="f1-s-5 cl3 hov-cl10 trans-03">
                                                                      Donec metus orci, malesuada et lectus vitae
                                                                  </a>
                                                              </h5>

                                                              <span class="cl8">
                                                                  <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                                                                      Music
                                                                  </a>

                                                                  <span class="f1-s-3 m-rl-3">
                                                                      -
                                                                  </span>

                                                                  <span class="f1-s-3">
                                                                      Jan 20
                                                                  </span>
                                                              </span>
                                                          </div>
                                                      </div>
                                                  </div>

                                                  <div class="col-3">
                                                      <div>
                                                          <a href="blog-detail-01.html" class="wrap-pic-w hov1 trans-03">
                                                              <img src={require("../../assets/images/post-26.jpg")} alt="IMG"/>
                                                          </a>

                                                          <div class="p-t-10">
                                                              <h5 class="p-b-5">
                                                                  <a href="blog-detail-01.html" class="f1-s-5 cl3 hov-cl10 trans-03">
                                                                      Donec metus orci, malesuada et lectus vitae
                                                                  </a>
                                                              </h5>

                                                              <span class="cl8">
                                                                  <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                                                                      Music
                                                                  </a>

                                                                  <span class="f1-s-3 m-rl-3">
                                                                      -
                                                                  </span>

                                                                  <span class="f1-s-3">
                                                                      Feb 12
                                                                  </span>
                                                              </span>
                                                          </div>
                                                      </div>
                                                  </div>

                                                  <div class="col-3">
                                                      <div>
                                                          <a href="blog-detail-01.html" class="wrap-pic-w hov1 trans-03">
                                                              <img src={require("../../assets/images/post-34.jpg")} alt="IMG"/>
                                                          </a>

                                                          <div class="p-t-10">
                                                              <h5 class="p-b-5">
                                                                  <a href="blog-detail-01.html" class="f1-s-5 cl3 hov-cl10 trans-03">
                                                                      Donec metus orci, malesuada et lectus vitae
                                                                  </a>
                                                              </h5>

                                                              <span class="cl8">
                                                                  <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                                                                      Music
                                                                  </a>

                                                                  <span class="f1-s-3 m-rl-3">
                                                                      -
                                                                  </span>

                                                                  <span class="f1-s-3">
                                                                      Jan 15
                                                                  </span>
                                                              </span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </li>

                              <li class="mega-menu-item">
                                  <a href="category-02.html">Viagem</a>

                                  <div class="sub-mega-menu">

                                        <div class="tab-content">
                                          <div class="tab-pane show active" id="travel-1" role="tabpanel">
                                              <div class="row">
                                                  <div class="col-3">
                                                      <div>
                                                          <a href="blog-detail-01.html" class="wrap-pic-w hov1 trans-03">
                                                              <img src={require("../../assets/images/post-39.jpg")} alt="IMG"/>
                                                          </a>

                                                          <div class="p-t-10">
                                                              <h5 class="p-b-5">
                                                                  <a href="blog-detail-01.html" class="f1-s-5 cl3 hov-cl10 trans-03">
                                                                      Donec metus orci, malesuada et lectus vitae
                                                                  </a>
                                                              </h5>

                                                              <span class="cl8">
                                                                  <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                                                                      Music
                                                                  </a>

                                                                  <span class="f1-s-3 m-rl-3">
                                                                      -
                                                                  </span>

                                                                  <span class="f1-s-3">
                                                                      Feb 18
                                                                  </span>
                                                              </span>
                                                          </div>
                                                      </div>
                                                  </div>

                                                  <div class="col-3">
                                                      <div>
                                                          <a href="blog-detail-01.html" class="wrap-pic-w hov1 trans-03">
                                                              <img src={require("../../assets/images/post-41.jpg")} alt="IMG"/>
                                                          </a>

                                                          <div class="p-t-10">
                                                              <h5 class="p-b-5">
                                                                  <a href="blog-detail-01.html" class="f1-s-5 cl3 hov-cl10 trans-03">
                                                                      Donec metus orci, malesuada et lectus vitae
                                                                  </a>
                                                              </h5>

                                                              <span class="cl8">
                                                                  <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                                                                      Music
                                                                  </a>

                                                                  <span class="f1-s-3 m-rl-3">
                                                                      -
                                                                  </span>

                                                                  <span class="f1-s-3">
                                                                      Jan 20
                                                                  </span>
                                                              </span>
                                                          </div>
                                                      </div>
                                                  </div>

                                                  <div class="col-3">
                                                      <div>
                                                          <a href="blog-detail-01.html" class="wrap-pic-w hov1 trans-03">
                                                              <img src={require("../../assets/images/post-42.jpg")} alt="IMG"/>
                                                          </a>

                                                          <div class="p-t-10">
                                                              <h5 class="p-b-5">
                                                                  <a href="blog-detail-01.html" class="f1-s-5 cl3 hov-cl10 trans-03">
                                                                      Donec metus orci, malesuada et lectus vitae
                                                                  </a>
                                                              </h5>

                                                              <span class="cl8">
                                                                  <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                                                                      Music
                                                                  </a>

                                                                  <span class="f1-s-3 m-rl-3">
                                                                      -
                                                                  </span>

                                                                  <span class="f1-s-3">
                                                                      Jan 15
                                                                  </span>
                                                              </span>
                                                          </div>
                                                      </div>
                                                  </div>

                                                  <div class="col-3">
                                                      <div>
                                                          <a href="blog-detail-01.html" class="wrap-pic-w hov1 trans-03">
                                                              <img src={require("../../assets/images/post-40.jpg")} alt="IMG"/>
                                                          </a>

                                                          <div class="p-t-10">
                                                              <h5 class="p-b-5">
                                                                  <a href="blog-detail-01.html" class="f1-s-5 cl3 hov-cl10 trans-03">
                                                                      Donec metus orci, malesuada et lectus vitae
                                                                  </a>
                                                              </h5>

                                                              <span class="cl8">
                                                                  <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                                                                      Music
                                                                  </a>

                                                                  <span class="f1-s-3 m-rl-3">
                                                                      -
                                                                  </span>

                                                                  <span class="f1-s-3">
                                                                      Feb 12
                                                                  </span>
                                                              </span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </li>

                              <li class="mega-menu-item">
                                  <a href="category-01.html">Estilo de Vida</a>

                                  <div class="sub-mega-menu">

                                      <div class="tab-content">
                                          <div class="tab-pane show active" id="life-1" role="tabpanel">
                                              <div class="row">
                                                  <div class="col-3">
                                                      <div>
                                                          <a href="blog-detail-01.html" class="wrap-pic-w hov1 trans-03">
                                                              <img src={require("../../assets/images/post-25.jpg")} alt="IMG"/>
                                                          </a>

                                                          <div class="p-t-10">
                                                              <h5 class="p-b-5">
                                                                  <a href="blog-detail-01.html" class="f1-s-5 cl3 hov-cl10 trans-03">
                                                                      Donec metus orci, malesuada et lectus vitae
                                                                  </a>
                                                              </h5>

                                                              <span class="cl8">
                                                                  <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                                                                      Music
                                                                  </a>

                                                                  <span class="f1-s-3 m-rl-3">
                                                                      -
                                                                  </span>

                                                                  <span class="f1-s-3">
                                                                      Feb 18
                                                                  </span>
                                                              </span>
                                                          </div>
                                                      </div>
                                                  </div>

                                                  <div class="col-3">
                                                      <div>
                                                          <a href="blog-detail-01.html" class="wrap-pic-w hov1 trans-03">
                                                              <img src={require("../../assets/images/post-27.jpg")} alt="IMG"/>
                                                          </a>

                                                          <div class="p-t-10">
                                                              <h5 class="p-b-5">
                                                                  <a href="blog-detail-01.html" class="f1-s-5 cl3 hov-cl10 trans-03">
                                                                      Donec metus orci, malesuada et lectus vitae
                                                                  </a>
                                                              </h5>

                                                              <span class="cl8">
                                                                  <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                                                                      Music
                                                                  </a>

                                                                  <span class="f1-s-3 m-rl-3">
                                                                      -
                                                                  </span>

                                                                  <span class="f1-s-3">
                                                                      Jan 20
                                                                  </span>
                                                              </span>
                                                          </div>
                                                      </div>
                                                  </div>

                                                  <div class="col-3">
                                                      <div>
                                                          <a href="blog-detail-01.html" class="wrap-pic-w hov1 trans-03">
                                                              <img src={require("../../assets/images/post-26.jpg")} alt="IMG"/>
                                                          </a>

                                                          <div class="p-t-10">
                                                              <h5 class="p-b-5">
                                                                  <a href="blog-detail-01.html" class="f1-s-5 cl3 hov-cl10 trans-03">
                                                                      Donec metus orci, malesuada et lectus vitae
                                                                  </a>
                                                              </h5>

                                                              <span class="cl8">
                                                                  <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                                                                      Music
                                                                  </a>

                                                                  <span class="f1-s-3 m-rl-3">
                                                                      -
                                                                  </span>

                                                                  <span class="f1-s-3">
                                                                      Feb 12
                                                                  </span>
                                                              </span>
                                                          </div>
                                                      </div>
                                                  </div>

                                                  <div class="col-3">
                                                      <div>
                                                          <a href="blog-detail-01.html" class="wrap-pic-w hov1 trans-03">
                                                              <img src={require("../../assets/images/post-34.jpg")} alt="IMG"/>
                                                          </a>

                                                          <div class="p-t-10">
                                                              <h5 class="p-b-5">
                                                                  <a href="blog-detail-01.html" class="f1-s-5 cl3 hov-cl10 trans-03">
                                                                      Donec metus orci, malesuada et lectus vitae
                                                                  </a>
                                                              </h5>

                                                              <span class="cl8">
                                                                  <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                                                                      Music
                                                                  </a>

                                                                  <span class="f1-s-3 m-rl-3">
                                                                      -
                                                                  </span>

                                                                  <span class="f1-s-3">
                                                                      Jan 15
                                                                  </span>
                                                              </span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </li>

                              <li class="mega-menu-item">
                                  <a href="category-02.html">Vídeos</a>

                                  <div class="sub-mega-menu">

                                      <div class="tab-content">
                                          <div class="tab-pane show active" id="video-1" role="tabpanel">
                                              <div class="row">
                                                  <div class="col-3">
                                                      <div>
                                                          <a href="blog-detail-01.html" class="wrap-pic-w hov1 trans-03">
                                                              <img src={require("../../assets/images/post-50.jpg")} alt="IMG"/>
                                                          </a>

                                                          <div class="p-t-10">
                                                              <h5 class="p-b-5">
                                                                  <a href="blog-detail-01.html" class="f1-s-5 cl3 hov-cl10 trans-03">
                                                                      Donec metus orci, malesuada et lectus vitae
                                                                  </a>
                                                              </h5>

                                                              <span class="cl8">
                                                                  <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                                                                      Music
                                                                  </a>

                                                                  <span class="f1-s-3 m-rl-3">
                                                                      -
                                                                  </span>

                                                                  <span class="f1-s-3">
                                                                      Feb 18
                                                                  </span>
                                                              </span>
                                                          </div>
                                                      </div>
                                                  </div>

                                                  <div class="col-3">
                                                      <div>
                                                          <a href="blog-detail-01.html" class="wrap-pic-w hov1 trans-03">
                                                              <img src={require("../../assets/images/post-08.jpg")} alt="IMG"/>
                                                          </a>

                                                          <div class="p-t-10">
                                                              <h5 class="p-b-5">
                                                                  <a href="blog-detail-01.html" class="f1-s-5 cl3 hov-cl10 trans-03">
                                                                      Donec metus orci, malesuada et lectus vitae
                                                                  </a>
                                                              </h5>

                                                              <span class="cl8">
                                                                  <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                                                                      Music
                                                                  </a>

                                                                  <span class="f1-s-3 m-rl-3">
                                                                      -
                                                                  </span>

                                                                  <span class="f1-s-3">
                                                                      Feb 12
                                                                  </span>
                                                              </span>
                                                          </div>
                                                      </div>
                                                  </div>

                                                  <div class="col-3">
                                                      <div>
                                                          <a href="blog-detail-01.html" class="wrap-pic-w hov1 trans-03">
                                                              <img src={require("../../assets/images/post-07.jpg")} alt="IMG"/>
                                                          </a>

                                                          <div class="p-t-10">
                                                              <h5 class="p-b-5">
                                                                  <a href="blog-detail-01.html" class="f1-s-5 cl3 hov-cl10 trans-03">
                                                                      Donec metus orci, malesuada et lectus vitae
                                                                  </a>
                                                              </h5>

                                                              <span class="cl8">
                                                                  <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                                                                      Music
                                                                  </a>

                                                                  <span class="f1-s-3 m-rl-3">
                                                                      -
                                                                  </span>

                                                                  <span class="f1-s-3">
                                                                      Jan 20
                                                                  </span>
                                                              </span>
                                                          </div>
                                                      </div>
                                                  </div>

                                                  <div class="col-3">
                                                      <div>
                                                          <a href="blog-detail-01.html" class="wrap-pic-w hov1 trans-03">
                                                              <img src={require("../../assets/images/post-06.jpg")} alt="IMG"/>
                                                          </a>

                                                          <div class="p-t-10">
                                                              <h5 class="p-b-5">
                                                                  <a href="blog-detail-01.html" class="f1-s-5 cl3 hov-cl10 trans-03">
                                                                      Donec metus orci, malesuada et lectus vitae
                                                                  </a>
                                                              </h5>

                                                              <span class="cl8">
                                                                  <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                                                                      Music
                                                                  </a>

                                                                  <span class="f1-s-3 m-rl-3">
                                                                      -
                                                                  </span>

                                                                  <span class="f1-s-3">
                                                                      Jan 15
                                                                  </span>
                                                              </span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </li>

                              <li>
                                  <a href="#">Recursos</a>
                                  <ul class="sub-menu">
                                      <li><a href="category-01.html">Category Page v1</a></li>
                                      <li><a href="category-02.html">Category Page v2</a></li>
                                      <li><a href="blog-grid.html">Blog Grid Sidebar</a></li>
                                      <li><a href="blog-list-01.html">Blog List Sidebar v1</a></li>
                                      <li><a href="blog-list-02.html">Blog List Sidebar v2</a></li>
                                      <li><a href="blog-detail-01.html">Blog Detail Sidebar</a></li>
                                      <li><a href="blog-detail-02.html">Blog Detail No Sidebar</a></li>
                                      <li><a href="about.html">About Us</a></li>
                                      <li><a href="contact.html">Contact Us</a></li>
                                  </ul>
                              </li>
                          </ul>
                      </nav>
                  </div>
              </div>	

          </div>
      </header>

    )
}