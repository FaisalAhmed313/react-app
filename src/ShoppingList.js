const products=[
    {title:"Cabbage",id:1},
    {title:"Garlic",id:1},
    {title:"Apple",id:1},
];

export const ShoppingList=()=>{
    const listItems=products.map((product)=>{
     return <li>{product.title}</li>;
    });
    return <ul>{listItems}</ul>;
};
  

