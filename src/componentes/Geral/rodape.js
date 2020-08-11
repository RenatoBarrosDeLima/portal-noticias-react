import React from "react";

export default function rodape() {

    return (
        <footer>
            <div class="bg2 p-t-40 p-b-25">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 p-b-20">
                            <div class="size-h-3 flex-s-c">
                                <a href="index.html">
                                    <img class="max-s-full" src={require("../../assets/images/icons/logo-02.png")} alt="LOGO"/>
                                </a>
                            </div>

                            <div>
                                <p class="f1-s-1 cl11 p-b-16">
                                    Site em desenvolvimento da empresa também em desenvolvimento
                                </p>

                                <p class="f1-s-1 cl11 p-b-16">
                                    Dúvidas? Ligar para (+55) 086 98178-7105
                                </p>

                                <div class="p-t-15">
                                    <a href="#" class="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                                        <span class="fab fa-facebook-f"></span>
                                    </a>

                                    <a href="#" class="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                                        <span class="fab fa-twitter"></span>
                                    </a>

                                    <a href="#" class="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                                        <span class="fab fa-pinterest-p"></span>
                                    </a>

                                    <a href="#" class="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                                        <span class="fab fa-vimeo-v"></span>
                                    </a>

                                    <a href="#" class="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                                        <span class="fab fa-youtube"></span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-lg-4 p-b-20">
                            <div class="size-h-3 flex-s-c">
                                <h5 class="f1-m-7 cl0">
                                    Notícias mas vistas
                                </h5>
                            </div>

                            <ul>
                                <li class="flex-wr-sb-s p-b-20">
                                    <a href="#" class="size-w-4 wrap-pic-w hov1 trans-03">
                                        <img src={require("../../assets/images/popular-post-01.jpg")} alt="IMG"/>
                                    </a>

                                    <div class="size-w-5">
                                        <h6 class="p-b-5">
                                            <a href="#" class="f1-s-5 cl11 hov-cl10 trans-03">
                                                Noticias 1
                                            </a>
                                        </h6>

                                        <span class="f1-s-3 cl6">
                                            Feb 17
                                        </span>
                                    </div>
                                </li>

                                <li class="flex-wr-sb-s p-b-20">
                                    <a href="#" class="size-w-4 wrap-pic-w hov1 trans-03">
                                        <img src={require("../../assets/images/popular-post-02.jpg")} alt="IMG"/>
                                    </a>

                                    <div class="size-w-5">
                                        <h6 class="p-b-5">
                                            <a href="#" class="f1-s-5 cl11 hov-cl10 trans-03">
                                                Notícias 2
                                            </a>
                                        </h6>

                                        <span class="f1-s-3 cl6">
                                            Feb 16
                                        </span>
                                    </div>
                                </li>

                                <li class="flex-wr-sb-s p-b-20">
                                    <a href="#" class="size-w-4 wrap-pic-w hov1 trans-03">
                                        <img src={require("../../assets/images/popular-post-03.jpg")} alt="IMG"/>
                                    </a>

                                    <div class="size-w-5">
                                        <h6 class="p-b-5">
                                            <a href="#" class="f1-s-5 cl11 hov-cl10 trans-03">
                                                Notícias 3
                                            </a>
                                        </h6>

                                        <span class="f1-s-3 cl6">
                                            Feb 15
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="col-sm-6 col-lg-4 p-b-20">
                            <div class="size-h-3 flex-s-c">
                                <h5 class="f1-m-7 cl0">
                                    Categorias
                                </h5>
                            </div>

                            <ul class="m-t--12">
                                <li class="how-bor1 p-rl-5 p-tb-10">
                                    <a href="#" class="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                                        Fashion (22)
                                    </a>
                                </li>

                                <li class="how-bor1 p-rl-5 p-tb-10">
                                    <a href="#" class="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                                        Technology (29)
                                    </a>
                                </li>

                                <li class="how-bor1 p-rl-5 p-tb-10">
                                    <a href="#" class="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                                        Street Style (15)
                                    </a>
                                </li>

                                <li class="how-bor1 p-rl-5 p-tb-10">
                                    <a href="#" class="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                                        Life Style (28)
                                    </a>
                                </li>

                                <li class="how-bor1 p-rl-5 p-tb-10">
                                    <a href="#" class="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                                        DIY & Crafts (16)
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg11">
                <div class="container size-h-4 flex-c-c p-tb-15">
                    <span class="f1-s-1 cl0 txt-center">
                        Copyright © 2020 

                        <a href="#" class="f1-s-1 cl10 hov-link1"/>
                            Copyright &copy; All rights reserved | This template is made with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                    </span>
                </div>
            </div>
        </footer>

    )
}
