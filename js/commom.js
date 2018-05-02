/**
 * Preferencialmente, deverá haver somente funções utilitárias para uso comum
 * de todos os componentes nesse arquivo
 * 
 */

var createShadowTree = function (innerShadow, htmlCollectionElements){
    var childElements = htmlCollectionElements.children;
    
    while(childElements.length > 0)
    {
        var innerElement = childElements[0];
        innerShadow.appendChild(innerElement);
    }

    return innerShadow;
};

var createdComponentCallback = function(){
    var innerShadow = this.attachShadow({mode:"open"});
    createShadowTree(innerShadow, this.template);
};

var onLoadTemplate = function(e){
    var templateRoot = document.createElement('div');
    templateRoot.innerHTML = e.target.import.documentElement.innerHTML;
    
    this.template = templateRoot;
};