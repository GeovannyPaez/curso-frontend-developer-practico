
    import { listaProducts } from "./classProducts.mjs";
    import { product } from "./classProducts.mjs";
//selecion de elementos
    const menuEmail= document.querySelector('.navbar-email');
    const desktopMenu= document.querySelector('.desktop-menu');
    const menuCarIcon= document.querySelector('.navbar-shopping-cart');
    const listaProductsDetail = document.querySelector('.list-product--detail');
    // const trasition = document.querySelector('.inactive');

    const iconMobileMenu = document.querySelector('.icon_mobile-menu');
    const menuMobile= document.querySelector('.mobile-menu');
    
  

  //funcion de menu informacion personal
    const toggleDesktopMenu =()=>{
        desktopMenu.classList.toggle('inactive')
    }  
    //funcion para menu desplegable version mobile
    const toggleMenuMobile =()=>{
        menuMobile.classList.toggle('inactive_mobile-menu');
        
        let isOpenListProducDetails= !listaProductsDetail.classList.contains('inactive_listProductDetail');

        if(isOpenListProducDetails){
           listaProductsDetail.classList.add('inactive_listProductDetail');
        } 
    }
    
    // funcion para mostrar list de productos del carrito
    const toggleCarAside=()=>{
       listaProductsDetail.classList.toggle('inactive_listProductDetail');
       let isOpenMenuMobile = !menuMobile.classList.contains('inactive_mobile-menu');
    //    console.log(isOpenMenuMobile);
       if(isOpenMenuMobile){
            menuMobile.classList.add('inactive_mobile-menu');
       }
       
    }
    // añadiendo eventos a nuestros a los elementos
    menuEmail.addEventListener('click',toggleDesktopMenu );
    iconMobileMenu.addEventListener('click',toggleMenuMobile);
    menuCarIcon.addEventListener('click',toggleCarAside);

    /// recorremos el array de productos importados del archivo classProducts, y aplicamos el metodo deploy de  la instancia de (product);
    const runArrayPruduct =arrPruduct=>{
        for (const product of arrPruduct) {
            product.deploy();
        }
    }
    runArrayPruduct(listaProducts);
    





   