function trigramgen(text) {
   if(typeof text != 'String') throw new Error();

   const words = text.split('');
  
    if (words.length < 3) return new Map();
  
    return new Map([[words.slice(0, 2).join(''), [words[2]]]]);
}

module.exports = trigramgen;