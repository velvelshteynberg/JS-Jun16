var transactions = [
    {
      type: 'sale',
      paymentMethod: 'cash',
      customer: 'Isaac Asimov',
      items: [
        { name: 'Byte', price: 1.00 },
        { name: 'Bit', price: 0.125 }
      ]
    },
    {
      type: 'sale',
      paymentMethod: 'credit',
      customer: 'CJ Cherryh',
      items: [
        { name: 'Bit', price: 0.125 },
        { name: 'Bit', price: 0.125 },
        { name: 'Bit', price: 0.125 }
      ]
    },
    {
      type: 'purchase',
      paymentMethod: 'credit',
      vendor: 'Dick\'s Doodads',
      items: [
        { name: 'XL Doodad', price: -3.00 },
        { name: 'XS Doodad', price: -0.50 }
      ]
    },
    {
      type: 'purchase',
      paymentMethod: 'cash',
      vendor: 'Gibson Gadgets',
      items: [
        { name: 'Basic Gadget', price: -2.00 },
        { name: 'Advanced Gadget', price: -3.50  }
      ]
    },
    {
      type: 'sale',
      paymentMethod: 'credit',
      customer: 'Frederik Pohl',
      items: [
        { name: 'Byte', price: 1.00 },
        { name: 'Byte', price: 1.00 },
        { name: 'Bit', price: 0.125 },
        { name: 'Bit', price: 0.125 },
        { name: 'Bit', price: 0.125 }
      ]
    },
    {
      type: 'purchase',
      paymentMethod: 'cash',
      vendor: 'Clarke Computing',
      items: [
        { name: 'Floppy Disk', price: -0.10 },
        { name: 'Floppy Disk', price: -0.10 },
        { name: 'Floppy Disk', price: -0.10 },
        { name: 'Floppy Disk', price: -0.10 },
        { name: 'Floppy Disk', price: -0.10 },
        { name: 'Floppy Disk', price: -0.10 },
        { name: 'Floppy Disk', price: -0.10 }
      ]
    },
    {
      type: 'sale',
      paymentMethod: 'credit',
      customer: 'Neal Stephenson',
      items: [
        { name: 'kilobyte', price: 1024.00 }
      ]
    },
    {
      type: 'purchase',
      paymentMethod: 'credit',
      vendor: 'Gibson Gadgets',
      items: [
        { name: 'Advanced Gadget', price: -3.50  },
        { name: 'Advanced Gadget', price: -3.50  },
        { name: 'Advanced Gadget', price: -3.50  },
        { name: 'Advanced Gadget', price: -3.50  }
      ]
    },
    {
      type: 'purchase',
      paymentMethod: 'credit',
      vendor: 'Dick\'s Doodads',
      items: [
        { name: 'XL Doodad', price: -3.00 },
        { name: 'XL Doodad', price: -3.00 },
        { name: 'XL Doodad', price: -3.00 }
      ]
    },
    {
      type: 'sale',
      paymentMethod: 'cash',
      customer: 'Isaac Asimov',
      items: [
        { name: 'Bit', price: 0.125 },
        { name: 'Bit', price: 0.125 },
        { name: 'Bit', price: 0.125 },
        { name: 'Bit', price: 0.125 },
        { name: 'Bit', price: 0.125 },
        { name: 'Bit', price: 0.125 },
        { name: 'Bit', price: 0.125 },
        { name: 'Bit', price: 0.125 },
      ]
    }
  ];

   // QUESTION 09
  // --------------------------------------------------
  /*
    Calculate the sum of *all* 'purchase' transactions.
  
    HINT(S):
    - Your solution to 'QUESTION 08' is a good starting point!
    - Make sure to include 'price' information from *all* purchases.
  */
let objectList = transactions.filter(function(transaction){
  return transaction.type === 'purchase';
});

let itemsList = objectList.map(function(object){
  return object.items;
});
let newArray = []
let total = 0
itemsList.forEach(function(array){
  array.forEach(function(object){
    total = total + object.price;
  })
});
console.log(total)




