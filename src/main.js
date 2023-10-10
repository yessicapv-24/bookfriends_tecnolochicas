import data from "./routes/books.js";


document.addEventListener('DOMContentLoaded', function () {
    // Obtén referencias a todas las secciones
    const homeContent = document.getElementById('homeContent');
    const terrorContent = document.getElementById('terrorContent');
    const bestSellersContent = document.getElementById('bestSellersContent');
    const fantasiaContent = document.getElementById('fantasiaContent');
    const novelasContent = document.getElementById('novelasContent');
    const btnTerror = document.getElementById("btn01");
    const btnBestSellers = document.getElementById("btn02");
    const btnFantasia = document.getElementById("btn03");
    const btnNovelas = document.getElementById("btn04");
    const home = document.getElementById("home");
    const homeBS = document.getElementById("homeBS");
    const homeF = document.getElementById("homeF");
    const homeN = document.getElementById("homeN");
    const formulario = document.getElementById("formulario");
    const formContent = document.getElementById("formContent");
    const homeForm = document.getElementById("homeForm");
    
    

  

     btnTerror.addEventListener("click", function() {
     homeContent.style.display = "none";
     terrorContent.style.display = "block";
     bestSellersContent.style.display = "none";  
     fantasiaContent.style.display="none";
     novelasContent.style.display= "none";
     formContent.style.display= "none";
    

     let filteredTerrorBooks= data.libros.filter((libro) =>{
     return libro.genero === "terror";
     });
     
        const terrorBooksContainer = document.getElementById('terrorBooksContainer');
        let terrorBooksContent = '';
        
        for (let j = 0; j < filteredTerrorBooks.length; j++) {
            if(j % 3 == 0){
                terrorBooksContent += '<div class="row">';
            }
          const libro = filteredTerrorBooks[j];

          terrorBooksContent += `
            <div class='card'>
                <img class="portada" src='${libro.imageLink}' alt='${libro.título}'>
                <h3>${libro.título}</h3>
                <p>Autor: ${libro.autor}</p>
                <p>Año: ${libro.año}</p>
                <p class="description">${libro.resumen}</p>
            </div>
        `;

        if(j % 3 == 2){
            terrorBooksContent += "</div>";
        }
    }
    terrorBooksContainer.innerHTML = terrorBooksContent;
      
});
    home.addEventListener("click", function() {
    homeContent.style.display = "block";
    terrorContent.style.display = "none";
    bestSellersContent.style.display = "none";  
    fantasiaContent.style.display="none";
    novelasContent.style.display= "none";
    formContent.style.display= "none";
});
    
    btnBestSellers.addEventListener("click", function() {
    homeContent.style.display = "none";
    terrorContent.style.display = "none";
    bestSellersContent.style.display = "block";
    fantasiaContent.style.display="none";
    novelasContent.style.display= "none";
    formContent.style.display= "none";
    
    
    let filteredbestSellersBooks= data.libros.filter((libro) =>{
        return libro.genero === "best sellers";
        });
        
           const bestSellersBooksContainer = document.getElementById('bestSellersBooksContainer');
           let bestSellersBooksContent = '';
           
           for (let j = 0; j < filteredbestSellersBooks.length; j++) {
               if(j % 3 == 0){
                bestSellersBooksContent += '<div class="row">';
               }
             const libro = filteredbestSellersBooks[j];
   
             bestSellersBooksContent += `
               <div class='card'>
                   <img class="portada" src='${libro.imageLink}' alt='${libro.título}'>
                   <h3>${libro.título}</h3>
                   <p>Autor: ${libro.autor}</p>
                   <p>Año: ${libro.año}</p>
                   <p class="description">${libro.resumen}</p>
               </div>
           `;
   
           if(j % 3 == 2){
            bestSellersBooksContent += "</div>";
           }
       }
       bestSellersBooksContainer.innerHTML = bestSellersBooksContent;


});
    homeBS.addEventListener("click", function() {
    homeContent.style.display = "block";
    terrorContent.style.display = "none";
    bestSellersContent.style.display = "none";  
    fantasiaContent.style.display="none";
    novelasContent.style.display= "none";
    formContent.style.display= "none";
});

    btnFantasia.addEventListener("click", function() {
    homeContent.style.display = "none";
    terrorContent.style.display = "none";
    bestSellersContent.style.display = "none";
    fantasiaContent.style.display="block";
    novelasContent.style.display= "none";
    formContent.style.display= "none";

    let filteredFantasiaBooks= data.libros.filter((libro) =>{
        return libro.genero === "Fantasía";
        });
        
           const fantasiaBooksContainer = document.getElementById('fantasiaBooksContainer');
           let fantasiaBooksContent = '';
           
           for (let j = 0; j < filteredFantasiaBooks.length; j++) {
               if(j % 3 == 0){
                   fantasiaBooksContent += '<div class="row">';
               }
             const libro = filteredFantasiaBooks[j];
   
             fantasiaBooksContent += `
               <div class='card'>
                   <img class="portada" src='${libro.imageLink}' alt='${libro.título}'>
                   <h3>${libro.título}</h3>
                   <p>Autor: ${libro.autor}</p>
                   <p>Año: ${libro.año}</p>
                   <p class="description">${libro.resumen}</p>
               </div>
           `;
   
           if(j % 3 == 2){
               fantasiaBooksContent += "</div>";
           }
       }
       fantasiaBooksContainer.innerHTML = fantasiaBooksContent;

});
    homeF.addEventListener("click", function() {
    homeContent.style.display = "block";
    terrorContent.style.display = "none";
    bestSellersContent.style.display = "none";  
    fantasiaContent.style.display="none";
    novelasContent.style.display= "none";
    formContent.style.display= "none";
});

    btnNovelas.addEventListener("click", function() {
    homeContent.style.display = "none";
    terrorContent.style.display = "none";
    bestSellersContent.style.display = "none";
    fantasiaContent.style.display="none";
    novelasContent.style.display= "block";
    formContent.style.display= "none";
   

    let filteredNovelasBooks= data.libros.filter((libro) =>{
        return libro.genero === "Novela";
        });
        
           const novelasBooksContainer = document.getElementById('novelasBooksContainer');
           let novelasBooksContent = '';
           
           for (let j = 0; j < filteredNovelasBooks.length; j++) {
               if(j % 3 == 0){
                   novelasBooksContent += '<div class="row">';
               }
             const libro = filteredNovelasBooks[j];
   
             novelasBooksContent += `
               <div class='card'>
                   <img class="portada" src='${libro.imageLink}' alt='${libro.título}'>
                   <h3>${libro.título}</h3>
                   <p>Autor: ${libro.autor}</p>
                   <p>Año: ${libro.año}</p>
                   <p class="description">${libro.resumen}</p>
               </div>
           `;
   
           if(j % 3 == 2){
               novelasBooksContent += "</div>";
           }
       }
       novelasBooksContainer.innerHTML = novelasBooksContent;
});
    homeN.addEventListener("click", function() {
    homeContent.style.display = "block";
    terrorContent.style.display = "none";
    bestSellersContent.style.display = "none";  
    fantasiaContent.style.display="none";
    novelasContent.style.display= "none";
    formContent.style.display= "none";
   
});
    formulario.addEventListener("click", function() {
    homeContent.style.display = "none";
    terrorContent.style.display = "none";
    bestSellersContent.style.display = "none";  
    fantasiaContent.style.display="none";
    novelasContent.style.display= "none";
    formContent.style.display= "block";

});
    homeForm.addEventListener("click", function() {
    homeContent.style.display = "block";
    terrorContent.style.display = "none";
    bestSellersContent.style.display = "none";  
    fantasiaContent.style.display="none";
    novelasContent.style.display= "none";
    formContent.style.display= "none";
   
});
});


