var NavigationHeaderProto = Object.create(HTMLElement.prototype);

NavigationHeaderProto.createdCallback = function(){

    var innerShadowDom = this.attachShadow({mode:"open"});
    
    for (innerElement of this.template.children)
    {
        innerShadowDom.appendChild(innerElement);
    }
}

loadNavigationHeaderTemplate = function(e){
    NavigationHeaderProto.template = e.target.import.documentElement.querySelector('body');
}