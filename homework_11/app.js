
var FolderTree = document.createElement("div");
function ObjStructure(ParentObj,obj){

    if(obj.title){
        var ellist = document.createElement("ul");
        var eltag = document.createElement("li");
        eltag.onmouseover = function(){
            eltag.style.backgroundColor = '#e6e6e6';
        } 
        eltag.onmouseleave = function(){
            eltag.style.backgroundColor = 'white';
        } 
        var elname = document.createTextNode(obj.title);
        /****************** */
        if(obj.folder){
            eltag.onclick = function(){
                var iconstat = eltag.getElementsByTagName("i")[0];
                if(iconstat.innerHTML==="folder"){
                    iconstat.innerHTML = 'folder_open'
                    if(obj.children){
                        eltag.parentElement.classList.add("selectedfolder");
                        var childUl = document.querySelectorAll(".selectedfolder>ul");
                        for(var n=0;n<childUl.length; n++ ){
                            childUl[n].style.display="block";
                        }
                        eltag.parentElement.classList.remove("selectedfolder");
                    }
                } else {
                    iconstat.innerHTML = 'folder';
                    if(obj.children){
                        eltag.parentElement.classList.add("selectedfolder");
                        var childUl = document.querySelectorAll(".selectedfolder>ul");
                        for(var n=0;n<childUl.length; n++ ){
                            childUl[n].style.display="none";
                        }
                        eltag.parentElement.classList.remove("selectedfolder");
                    }
                }
            }
        }
        /**************/
        var iconholdtag=document.createElement("i");
        if (obj.folder){
            var iconholdname = document.createTextNode('folder');
            iconholdtag.style.color="#ffd11a";   
        } else{
            var iconholdname = document.createTextNode('insert_drive_file');
            iconholdtag.style.color="#b8b894";
        }
        iconholdtag.appendChild(iconholdname);
        iconholdtag.classList.add("material-icons");
        eltag.appendChild(iconholdtag);
        /***************** */
    
        eltag.appendChild(elname);
        ellist.appendChild(eltag);
        ParentObj.appendChild(ellist);

    }
    if(obj.children){
        for (j=0; j<obj.children.length; j++){
            ObjStructure(ellist,obj.children[j]);
        }
    }
    ParentObj.appendChild(ellist);

}

var FolderTree = document.createElement("div");
for (i=0; i<structure.length; i++){
    ObjStructure(FolderTree,structure[i]);
}

var liel =FolderTree.getElementsByTagName("li");
for(i=0;i<liel.length;i++){
    liel[i].style.listStyleType ="none";
}


var rootNode = document.getElementById("root");
rootNode.appendChild(FolderTree);



var ParUl = document.querySelectorAll("div>ul");

for (i=0;i<ParUl.length;i++){
    ParUl[i].classList.add("topfolder");
    var IncUl = ParUl[i].getElementsByTagName("ul");
    for(j=0;j<IncUl.length;j++){
        IncUl[j].style.display="none";
    }
}
