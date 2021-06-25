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
    // --------------------------------------------------
  // QUESTION 10
  // --------------------------------------------------
  /*
    Calculate the company's net profit.
  
    This number will be positive if the sum of the sales is greater than the amount spent on purchases.
  
    Otherwise, this number will be negative.
  
    HINT(S):
    - Unlike 'QUESTION 08' and 'QUESTION 09', here we're interested in both 'sale' and 'purchase' transactions.
  */
    

let transaction = transactions.map(function(transaction){
    return transaction.items;
});
let totalObjects = transaction.flat();
let prices = totalObjects.map(function(element){
    return element.price;
});
let netProfit = 0
prices.forEach(function(price){
    netProfit = netProfit + price;
});
console.log(netProfit)