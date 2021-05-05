function pricelistformatter(data){
    if(!Array.isArray(data) && !data.length) throw new Error();

    const orderDatabyPrice = [...data].sort((a,b) => a.price - b.price);
    const output = createOutput(orderDatabyPrice);

    console.log(output);
}

function createOutput(data){
    let output = '';
    data.forEach((item, i, arr) => {
        const dateStr = `${item.from} do ${item.to}`;
        output +=
            arr[i - 1]?.price === item.price
                ? ` ,${dateStr}`
                : `\n${item.price.toFixed('1')} : ${dateStr}`;
    
    });

    return output.trimStart();
}

module.exports =pricelistformatter;