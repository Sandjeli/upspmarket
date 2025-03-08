
//img food
let lienfood=["img1","img2","img3","img4"];
let sizefood=lienfood.length
let indexfood=Math.floor(Math.random()*sizefood)
let imgfood=lienfood[indexfood]
document.getElementById('tab1').innerHTML='<a href="food.html"><img class="clic" alt="image de nouritures" title="Cliquez ici" src="upspmarket/img/foods/'+imgfood+'.jpg"><figcaption><strong>FOODS UPSP</strong></figcaption></a>';
//end img food

//img cloths
let liencloths=["img2","img6","img9","img13"];
let sizecloths=liencloths.length
let indexcloths=Math.floor(Math.random()*sizecloths)
let imgcloths=liencloths[indexcloths]
document.getElementById('tab2').innerHTML='<a href="cloth.html"><img class="clic" alt="image de vêtements" title="Cliquez ici" src="upspmarket/img/cloths/'+imgcloths+'.jpg"><figcaption><strong>CLOTHES & SHOES</strong></figcaption></a>';
//end img cloths

//img cosmetique
let liencosmetique=["img0","img1","img2","img3","img8"];
let sizecosmetique=liencosmetique.length
let indexcosmetique=Math.floor(Math.random()*sizecosmetique)
let imgcosmetique=liencosmetique[indexcosmetique]
document.getElementById('tab3').innerHTML='<a href="cos.html"><img class="clic" alt="image de produits cosmetiques" title="Cliquez ici" src="upspmarket/img/cosmétique/'+imgcosmetique+'.jpg"><figcaption><strong>COSMETIQUES</strong></figcaption></a>';
//end img cosmetique

//img Tech
let lienTech=["img0","img1","img3","img8"];
let sizeTech=lienTech.length
let indexTech=Math.floor(Math.random()*sizeTech)
let imgTech=lienTech[indexTech]
document.getElementById('tab4').innerHTML='<a href="tech.html"><img class="clic" alt="image de produits de technologies" title="Cliquez ici" src="upspmarket/img/Tech/'+imgTech+'.jpg"><figcaption><strong>UPSP TECH</strong></figcaption></a>';
//end img tech

//img services
let lienService=["img0","img1","img2","img4"];
let sizeService=lienService.length
let indexService=Math.floor(Math.random()*sizeService)
let imgService=lienService[indexService]
document.getElementById('tab5').innerHTML='<a href="serv.html"><img class="clic" alt="image exemple de service" title="Cliquez ici" src="upspmarket/img/service/'+imgService+'.jpg"><figcaption><strong>UPSP SERVICES</strong></figcaption></a>';
//end img services
