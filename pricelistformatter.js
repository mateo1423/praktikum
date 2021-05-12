function priceListFormatter(pricelist) {
    // transformacija modela
    grouped = pricelist.reduce(function (acc, val) {
        acc[val.price] = acc[val.price] || [];
        acc[val.price].push(val);
        return acc;
    }, {});

    // output
    return printOutput(grouped);
}
function printOutput(format) {
    res = ""; 
  
    for (let price of Object.keys(format).sort()){
      res += `${parseFloat(price).toFixed(1)} : ${format[price].map(x => x.from + ' do ' + x.to).join(' , ')} \n`;
    }
  
    return res;
}

module.exports = priceListFormatter;