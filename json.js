const user={id:1,Name:'Abdul Motin',age:35};

const jsonStringfied=JSON.stringify(user);

// console.log(jsonStringfied);

const shop={
    owner:'Alia',
    Address:{
        Street:'KocuKatar mor',
        City:'Robinogor',
        Country:'Bd'
    },
    Product:['Lapto','Mobile','Ipad','Riskawa'],
    Revenue: 55000,
    isOpen:true,
    isNew:false
};

const shopJson=JSON.stringify(shop);
// console.log(shopJson);
const shopObj=JSON.parse(shopJson);

console.log(shopObj)
