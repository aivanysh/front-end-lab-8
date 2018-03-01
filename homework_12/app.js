var elbody = document.getElementById('root');
/********page change */
document.getElementsByTagName('body')[0].onhashchange = function() {
    var x = location.hash;
    if(x!==''){
        for(j=0; j<tanks.length;j++){
            if(('#'+tanks[j].model)== x){
                while (elbody.firstChild) {
                    elbody.removeChild(elbody.firstChild);
                }
                tankDetails(tanks[j]);
            }
        }
    } else {
        while (elbody.firstChild) {
            elbody.removeChild(elbody.firstChild);
        }
        tanklist();
    }
};

function getDeails(cel){
    window.location.hash = cel; 
 }

/*******first page */
function tanklist(){
    /*****header */
    var hed = document.createElement('h1');
    var hedtext = document.createTextNode('Most popular tanks');
    hed.appendChild(hedtext);
    elbody.appendChild(hed);
    /*********************************** */
    function tankPaint(el){
        /***tankblock */
        var elblock = document.createElement('div');
        elblock.onclick = function() {getDeails(el.model)};
        elblock.setAttribute('class', 'tanklistel');
            /***img */
            var eltankimg = document.createElement('img');
            eltankimg.setAttribute('src', el.preview);
            eltankimg.setAttribute('title', 'Click to details');
            elblock.appendChild(eltankimg);
            /**name */
            var elname = document.createElement('div');
            elname.setAttribute('class', 'tanknameel');
                /**flag*** */
                var elflagimg = document.createElement('img');
                elflagimg.setAttribute('src', el.country_image);
                elflagimg.setAttribute('title', el.country);
                /***namenode */
                var elnamedesc = document.createElement('p');
                elnamedesc.setAttribute('title', el.model);
                var elnamedescnode = document.createTextNode(el.level + ' '+el.model);

                elnamedesc.appendChild(elnamedescnode);
            elname.appendChild(elflagimg);
            elname.appendChild(elnamedesc);
        elblock.appendChild(elname);

        eltblock.appendChild(elblock);
    }
    var eltblock = document.createElement('div');
    eltblock.setAttribute('class', 'tanklist');
    elbody.appendChild(eltblock);

 
    for(i=0; i<tanks.length;i++){
        tankPaint(tanks[i]);
    }
}
tanklist()

function tankDetails(el){
    var elhblock = document.createElement('div'); //----
    elhblock.setAttribute('class', 'detheader');
        /****detailes h1 */
        var elfhimg = document.createElement('img');
        elfhimg.setAttribute('src', el.country_image);
        elfhimg.setAttribute('title', el.country);
        var hdesc = document.createElement('h1');
        /***/
        var hdescspan = document.createElement('span');
        var hdescspannode = document.createTextNode(' ' + el.model);
        hdescspan.appendChild(hdescspannode);

        var hdescnode = document.createTextNode(/*el.model+*/" (level "+el.level+")");
        elhblock.appendChild(elfhimg);

        hdesc.appendChild(hdescspan);
        hdesc.appendChild(hdescnode);
        elhblock.appendChild(hdesc);
        /***detailes tank description */
        var tankinfo = document.createElement('div');
        tankinfo.setAttribute('class', 'tankinfo');
            /***preview */
            var btankpreview = document.createElement('div');
            btankpreview.setAttribute('class', 'btankpreview');
                var tankimgh = document.createElement('h2');
                var tankpr = document.createTextNode('Preview');
                var tankimg = document.createElement('img');
                tankimg.setAttribute('src', el.preview);
                tankimgh.appendChild(tankpr)
                btankpreview.appendChild(tankimgh);
                btankpreview.appendChild(tankimg);

            /********characteristic******** */
            var btankchar = document.createElement('div');
            btankchar.setAttribute('class', 'tankchar');
                var tankcharh = document.createElement('h2');
                var tankchar = document.createTextNode('Characteristic');
                tankcharh.appendChild(tankchar);
                btankchar.appendChild(tankcharh);

                var btable =  document.createElement('table');
                for (var det in el.details){
                    var tanktr = document.createElement('tr');

                    var tanktd = document.createElement('td');
                    tanktd.setAttribute('class', 'firstcolumn');
                    var tankdetnamenode = document.createTextNode(det);
                    tanktd.appendChild(tankdetnamenode);
                    tanktr.appendChild(tanktd);

                    var tanktd2 = document.createElement('td');
                    tanktd2.setAttribute('class', 'secondcolumn');
                    var tankdetnamenode2 = document.createTextNode(el.details[det]);
                    tanktd.appendChild(tankdetnamenode);
                    tanktd2.appendChild(tankdetnamenode2);
                    tanktr.appendChild(tanktd2);

                    btable.appendChild(tanktr);
                }
            btankchar.appendChild(btable);

            var backbut = document.createElement('p');
            backbut.setAttribute('class','backbut');
            backbut.onclick = function() {
                window.location.hash = '';
            }
            var ptextnode = document.createTextNode('Back to list view');
            backbut.appendChild(ptextnode);
        tankinfo.appendChild(btankpreview);
        tankinfo.appendChild(btankchar);
        tankinfo.appendChild(backbut);
    

    elbody.appendChild(elhblock);
    elbody.appendChild(tankinfo);//main
    elbody.appendChild(backbut);

    
}
