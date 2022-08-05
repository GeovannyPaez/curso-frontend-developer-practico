    export class product {
        constructor({
            name,
            id,
            price,
            img,
            description,
        }){
            this.name = name,
            this.id= id,
            this.price= price,
            this.img= img,
            this.description= description
        }
        
        deploy(){
            let cardHtml=`
            <img src="${this.img}" alt="" class="imgProductCard">
                <div class="product-info">
                    <div>
                        <p>$${this.price}</p>
                        <p>${this.name}</p>
                    </div>
                    <figure>
                        <img src="./icons/bt_add_to_cart.svg"   alt="">
                    </figure>
                </div>
        `
            const parentChildsCards= document.querySelector('.cards-container');
            let cardInfoProduct= document.createElement('div');
            cardInfoProduct.classList.add('product-card');
            cardInfoProduct.setAttribute('id',`${this.id}`);
            cardInfoProduct.innerHTML= cardHtml;
            parentChildsCards.insertAdjacentElement('beforeend',cardInfoProduct);
        }
        get getMostrarInfoProduct(){
            return  `
            <aside class="product-detail inactive_listProductDetail">
                <div class="product-detail-close">
                    <img src="./icons/icon_close.png" alt="close">
                </div>
                <img src="${this.img}" alt="bike" >
                <div class="product-info">
                    <p>$${this.price}</p>
                    <p>${this.name}</p>
                    <p>${this.description}</p>
                    <button class="primary-button add-to-cart-button">
                    <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
                    Add to cart
                    </button>
                </div>
            </aside>
            `
            // const nodeBrotherProducDetail= document.querySelector('.list-product--detail');
            // const accionadorOfInfoProducDetail= document.querySelector('.product-card');
            // const viewInfoProduct=()=>{
            //     nodeBrotherProducDetail.insertAdjacentHTML('afterend',infoProducCardHtml);
            // }
            // accionadorOfInfoProducDetail.addEventListener('click',viewInfoProduct);
        }
        get cardHtmlForAddToCarShopping(){
            return `
            <div class="shopping-cart">
        <figure>
          <img src="${this.img}" alt="bike">
        </figure>
        <p>${this.name}</p>
        <p>$${this.price}</p>
        <img src="./icons/icon_close.png" alt="close">
      </div>
            `
        }
    }
    //creamos nuevos productos
    const comutador= new product({
        name:'Porttil Hp pavilion',
        id: 6841563,
        price: 1200,
        img: 'https://th.bing.com/th/id/R.64e3e17f84c592313289c38103125892?rik=F26je4v5XKOAPA&pid=ImgRaw&r=0',
        id:96161
    });

    const bici = new product({
        name: 'Bicicleta BMW',
        id: 87574,
        price: 1000,
        img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    })
    const bicicleHelmet= new product({
        name:'Bicycle helmet',
        price: 1200,
        id:961685,
        img: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto',
        description: 'El mejor casco para tu para ir sacar tu bicicleta a cualquier lugar e ir simpre protegido'
        });
    const seat= new product({
        name:'Seat',
        price: 300,
        id:961985,
        img: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
    });
    const tenisMontainBike= new product({
        name:'Tennis Montain Bike',
        price: 2200,
        id:98412,
        img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
    });
    const Sunglasses= new product({
            name:'Sunglasses',
            price: 800,
            id:8542,
            img: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
    });
        const BicycleSetBag= new product({
            name:'Bicycle seat bag',
            price: 876,
            id:8562,
            img: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
    });
    //añadimos los productos a un array y los exportamos para utilizarlos en nuestro archivo main.mjs
   export let listaProducts = [
        bicicleHelmet,bici,BicycleSetBag,
        Sunglasses,
        tenisMontainBike,
        seat,comutador
    ]
    
