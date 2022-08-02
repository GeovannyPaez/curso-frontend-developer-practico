  export class product {
    constructor({
        name,
        id,
        price,
        img
    }){
        this.name = name,
        this.id= id,
        this.price= price,
        this.img= img
    }
    deploy(){
        let cardHtml=`
        <img src="${this.img}" alt="">
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
        cardInfoProduct.innerHTML= cardHtml;
        parentChildsCards.insertAdjacentElement('beforeend',cardInfoProduct);
    }
}
 const comutador= new product({
        name:'Porttil Hp pavilion',
        id: 6841563,
        price: 1200,
        img: 'https://th.bing.com/th/id/R.64e3e17f84c592313289c38103125892?rik=F26je4v5XKOAPA&pid=ImgRaw&r=0'
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
        img: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
        });
    const seat= new product({
        name:'Seat',
        price: 300,
        img: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
    });
    const tenisMontainBike= new product({
        name:'Tennis Montain Bike',
        price: 2200,
        img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
    const Sunglasses= new product({
            name:'Sunglasses',
            price: 800,
            img: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
    });
        const BicycleSetBag= new product({
            name:'Bicycle seat bag',
            price: 876,
            img: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
    });

   export let listaProducts = [
        bicicleHelmet,bici,BicycleSetBag,
        Sunglasses,
        tenisMontainBike,
        seat,comutador
    ]
    
   