
 const Products = [
    {
        id:1,
        image:"products/product-1.jpg",
        name: 'Pique Biker shoe',
        price:75,

    },

    {
        id:2,
        image:"products/product-2.jpg",
        name: 'Pique Biker Jacket',
        price:55,
        
    },

    {
        id:3,
        image:"products/product-3.jpg",
        name: 'Ankle Boots',
        price:60,
        
    },

    {
        id:4,
        image:"products/product-4.jpg",
        name: 'Classic Hoodies',
        price:70,
        
    },

    {
        id:5,
        image:"products/product-5.jpg",
        name: 'Cool T-shirt',
        price:40,
        
    },

    {
        id:6,
        image:"products/product-6.jpg",
        name: 'Blowing Scarf',
        price:80,
        
    },

    {
        id:7,
        image:'products/product-7.jpg',
        name: 'Leather Backpack',
        price:100,
        
    },

    {
        id:8,
        image:"products/product-8.jpg",
        name: 'T-shirt Contrast Pocket',
        price:150,
        
        
    },
]

const ProReducer = ( state=Products, action) =>{
    switch(action.type){
        case "PRODUCT_LIST":
            return state;
        default: 
        return state;    

    }

}

export default ProReducer;