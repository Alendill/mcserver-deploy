/*
 * ColorMOTD
 * Default TPSFormater
 * by andylizi
 */

/* global tps */

if(tps > 18){
    '&a良好';
}else if(tps > 15){
    '&6中等';
}else if(tps > 10){
    '&c差';
}else{
    '&4极差';
}
