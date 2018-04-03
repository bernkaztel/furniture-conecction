function getProduct(eventTrigger) {
    console.log(eventTrigger);
    let img1 = eventTrigger.src
    let img2 = eventTrigger.dataset.img2;
    let img3 = eventTrigger.dataset.img3;
    let name = eventTrigger.dataset.name;
    let description = eventTrigger.dataset.description;
    let price = eventTrigger.dataset.price;
    container.classList.add('d-none');
    homePage.classList.add('d-none');
    productPage.classList.remove('d-none');
    checkout.classList.add('d-none');
  
    let template = `
    <br>
    <br>
    <br>
    <br>
    <br>
    <button class="btn button d-block" type="button" onclick="getData()">Go Back</button>
    <h2 class="d-block mx-auto text-uppercase font-weight-bold">${name}</h2>
    <br>
    <br>
    <div class="row">
        <div class="col-8">
            <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel" style=" width:700px !important;">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-40 imcar" src=${img1} alt="First slide">
                    </div>
                    <div class="carousel-item">
                        let img2 = eventTrigger.dataset.img2;
                        <img class="d-block w-40 imcar" src=${img2} alt="Second slide">
                    </div>
                    <div class="carousel-item">
                        let img3 = eventTrigger.dataset.img3;
                        <img class="d-block w-40 imcar" src=${img3} alt="Third slide">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
            <div class="col-4">
                <h5> Description </h5>
                <p> ${description} </p>
                <span>
                    <h5 class="font-weight-bold"> Price: $</strong> ${price}</h5>
                <p>
                <br>
                <br>
                    <button class="btn button d-block d-block mx-auto" type="button" id="addCart " data-img=${img1} data-name=$ {name} data-price=$
                        {price} onclick="getCart(this)"> Add to the cart</button>
                </p>
            </div>
        </div>
  <!-- Termina producto de interés -->>`;
    productPage.innerHTML = template;


}