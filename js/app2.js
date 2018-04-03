//function for the SPA

// Varriebles que se cambiaran
const container = document.getElementById('spacetemplate');
let title = document.getElementById('title');
let description = document.getElementById('description');
let homePage = document.getElementById('homepage');
let productPage = document.getElementById('product')
//let firstCarrousel = document.getElementById('title');


function getHome(){
  homePage.classList.remove('d-none');
  container.classList.add('d-none');
  productPage.classList.add('d-none')
  checkout.classList.add('d-none');
}


function getData(eventTrigger) {
  event.preventDefault();
  homePage.classList.add('d-none');
  container.classList.remove('d-none');
  productPage.classList.add('d-none')
  checkout.classList.add('d-none');
 
  console.log(eventTrigger);
  let sectionSearch = eventTrigger.getAttribute("name");
  console.log(sectionSearch);
  let section = dataFourniture[sectionSearch];
  let sectionTitle = section.title;
  console.log(sectionTitle);
  title.textContent = sectionTitle;
  let sectionDescription = section.description;
  description.textContent = sectionDescription;
  let sectionCarrouselImg = section.firstCarrousel;
  let firstSectionCarrouselImg = sectionCarrouselImg[0];
  console.log(firstSectionCarrouselImg);
  $('#firstCarImg').attr('src', firstSectionCarrouselImg);
  let secondSectionCarrouselImg = sectionCarrouselImg[1]
  $('#secondCarImg').attr('src', secondSectionCarrouselImg);
  let thirdSectionCarrouselImg = sectionCarrouselImg[2]
  $('#thirdCarImg').attr('src', thirdSectionCarrouselImg);
  let sectionColorPallete = section.suggestedColorPalletes;
  let firstSectionColorPallete = sectionColorPallete[0];
  $('#firstPallete').attr('src', firstSectionColorPallete);
  let secondSectionColorPallete = sectionColorPallete[1];
  console.log()
  $('#secondPallete').attr('src', secondSectionColorPallete);
  let thirdSectionColorPallete = sectionColorPallete[2];
  $('#thirdPallete').attr('src', thirdSectionColorPallete);
  let firstTipTitle = section.tips.firstTip.title;
  document.getElementById('firstTipTitle').textContent = firstTipTitle;
  let firstTipContent = section.tips.firstTip.content;
  document.getElementById('firstTipDescription').textContent = firstTipContent;
  let firstTipImg = section.tips.firstTip.image;
  $('#firstTipImg').attr('src', firstTipImg);
  let secondTipTitle = section.tips.secondTip.title;
  document.getElementById('secondTipTitle').textContent = secondTipTitle;
  let secondTipContent = section.tips.secondTip.content;
  document.getElementById('secondDescription').textContent = secondTipContent;
  let secondTipImg = section.tips.secondTip.image;
  $('#secondTipImg').attr('src', secondTipImg);
  let thirdTipTitle = section.tips.thirdTip.title;
  document.getElementById('thirdTipTitle').textContent = thirdTipTitle;
  let thirdTipContent = section.tips.thirdTip.content;
  document.getElementById('thirdTipDescription').textContent = thirdTipContent;
  let thirdTipImg = section.tips.thirdTip.image;
  $('#thirdTipImg').attr('src', thirdTipImg);
  selectObject(sectionSearch);
}

//Saca el objeto que manda a la función de createFurnitureSection
function selectObject(sectionSearch) {
  if (sectionSearch === 'living') {
    const living = {
      'sofa': "https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query=sofa&format=json&apiKey=xtqvmkkcabv8w66e7rnwtt8x",
      'lamp': "https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query=lamp&format=json&apiKey=xtqvmkkcabv8w66e7rnwtt8x",
      'coffetable': "https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query=coffe%20table&format=json&apiKey=xtqvmkkcabv8w66e7rnwtt8x",
      'rugs': "https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query=rugs&format=json&apiKey=xtqvmkkcabv8w66e7rnwtt8x",
      'ottoman': "https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query=ottoman&format=json&apiKey=xtqvmkkcabv8w66e7rnwtt8x"
      //    'consoletable':  "https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query=console+table&format=json&apiKey=xtqvmkkcabv8w66e7rnwtt8x"
    }
    createFurnitureSection(living, sectionSearch)
  } else if (sectionSearch === 'bedroom') {
    const bedroom = {
      'bed': "https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query=bed&format=json&apiKey=xtqvmkkcabv8w66e7rnwtt8x",
      'nightstand': "https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query=night%20stand&format=json&apiKey=xtqvmkkcabv8w66e7rnwtt8x",
      'dresser': "https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query=dresser&format=json&apiKey=xtqvmkkcabv8w66e7rnwtt8x",
      'nightlamp': "https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query=night%20lamp&format=json&apiKey=xtqvmkkcabv8w66e7rnwtt8x",
      'storage': "https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query=storage&format=json&apiKey=xtqvmkkcabv8w66e7rnwtt8x"
      //    'consoletable':  "https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query=console+table&format=json&apiKey=xtqvmkkcabv8w66e7rnwtt8x"
    }
    createFurnitureSection(bedroom, sectionSearch)
  }else if (sectionSearch === 'studio') {
    const studio = {
      'desk': "https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query=desk&format=json&apiKey=xtqvmkkcabv8w66e7rnwtt8x",
      'deskchair': "https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query=desk%20chair&format=json&apiKey=xtqvmkkcabv8w66e7rnwtt8x",
      'bookcase': "https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query=bookcase&format=json&apiKey=xtqvmkkcabv8w66e7rnwtt8x"
      //    'consoletable':  "https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query=console+table&format=json&apiKey=xtqvmkkcabv8w66e7rnwtt8x"
    }
    createFurnitureSection(studio, sectionSearch)
  }else if (sectionSearch === 'outdoor') {
    const outdoor = {
      'sofa': "https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query=outdoor%20sofa&format=json&apiKey=xtqvmkkcabv8w66e7rnwtt8x",
      'chair': "https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query=outdoor%20chair&format=json&apiKey=xtqvmkkcabv8w66e7rnwtt8x",
      'table': "https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query=outdoor%20table&format=json&apiKey=xtqvmkkcabv8w66e7rnwtt8x",
      'bench': "https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query=bench&format=json&apiKey=xtqvmkkcabv8w66e7rnwtt8x"
      //    'consoletable':  "https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query=console+table&format=json&apiKey=xtqvmkkcabv8w66e7rnwtt8x"
    }
    createFurnitureSection(outdoor, sectionSearch)
  }else if (sectionSearch === 'dinning') {
    const dinning = {
      'dinnertable': "https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query=dinner%20table&format=json&apiKey=xtqvmkkcabv8w66e7rnwtt8x",
      'dinnerchair': "https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query=dinner%20chair&format=json&apiKey=xtqvmkkcabv8w66e7rnwtt8x",
      'dinningbuffet': "https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query=buffet%20dinning&format=json&apiKey=xtqvmkkcabv8w66e7rnwtt8x",
      'barcart': "https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query=bar%20cart&format=json&apiKey=xtqvmkkcabv8w66e7rnwtt8x",
      'barstools': "https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query=bar%20stools&format=json&apiKey=xtqvmkkcabv8w66e7rnwtt8x"
      //    'consoletable':  "https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query=console+table&format=json&apiKey=xtqvmkkcabv8w66e7rnwtt8x"
    }
    createFurnitureSection(dinning, sectionSearch)
  }
}

//Función que itera en muebles para hacer fetch por cada endpoint
function createFurnitureSection(spaceObject, sectionSearch) {
  document.getElementById('furniturecontainer').innerHTML=' ';

//  $('#furniturecontainer').Text('');
  // console.log(spaceObject);

  $.each(spaceObject, function (objectKey) {
    let url = spaceObject[objectKey];
    let spaceName = objectKey;
    console.log(url);
    console.log(spaceName);
    let furnitureTitle = $("<h3></h3>").text(spaceName.toUpperCase());
    furnitureTitle.attr({
      class: 'text-capitalize font-weight-bold',
  });
    let furniturecontainer = $("<div></div>");
    furniturecontainer.attr({
      id: spaceName,
      class : "row nopadding d-inline-block text-center"
    });
    $('#furniturecontainer').append(furnitureTitle);
    $('#furniturecontainer').append(furniturecontainer);
    getDataFetch(url, spaceName, sectionSearch);

  })

  function getDataFetch(url, spaceName, sectionSearch) {
    fetch(url)
      .then(function (response) {
        response.json().then(function (data) {
          console.log(data);
          let newObject = {};
          data.items.forEach(function (value, i) {
            console.log(sectionSearch);
            console.log(spaceName);
            const route = dataPictures[sectionSearch][spaceName];
            console.log(route);
            // console.log(value, i)
            let productName = value.name;
            let productPrice = Math.round(value.salePrice);
            let productDescription = value.shortDescription;
            let finalIndex = [i + 1]
            let setImages = (route[finalIndex]);
            let setImages2 = setImages[0];
            let setImages3 = setImages[1];
            let setImages4 = setImages[2];
            console.log(productName, productPrice, productDescription, setImages2)
            printProduct(productName, productPrice, productDescription, setImages2, setImages3, setImages4, spaceName)
          });
        })
      })
  }

  function printProduct(productName, productPrice, productDescription, setImages2, setImages3, setImages4, spaceName) {
//console.log($('#furniturecontainer'));
    console.log("secorrióunavez")
    let template = `
  <div class=" col furniturecontainer d-inline-block">

      <img src=${setImages2} data-img2=${setImages3} data-img3=${setImages4} data-name="${productName.substr(0, 30)}"  data-price=${productPrice} data-description="${productDescription}" class="furniture" alt="" onclick="getProduct(this)">
      <h6 class="text-uppercase font-weight-bold">${productName.substr(0, 30)}</h6>
      <span>$ ${productPrice}</span>
      <button class="btn button d-block mx-auto m-2" type="button" id="addCart " data-img=${setImages2} data-name= "${productName.substr(0, 30)}"  data-price=${productPrice} onclick="getCart(this)"> Add to cart</button>

  </div>`;
    const spaceContainer = document.getElementById(spaceName)
    spaceContainer.insertAdjacentHTML('beforeend', template);
  }
}
