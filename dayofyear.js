function dayofyear(year, month, day){
    let md = 0;
    switch(m){
        case 5:
            md+=30;
        case 4:
            md+=31;
        case 3:
            md+=28;
        case 2:
            md+=31;
}
if(month > 2 && isleapyear(year)) md+=1;
return md+day;
}

function isleapyear(year){

if(year % 4 === 0) return true;
return false;
}
module.exports = dayofyear;