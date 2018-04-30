var SectionPageProto = Object.create(HTMLElement.prototype);

SectionPageProto.createdCallback = function(){

    var innerShadowDom = this.attachShadow({mode:"open"});
    
    for (innerElement of this.template.children)
    {
        innerShadowDom.appendChild(innerElement);
    }
    // this.innerHTML = this.template.innerHTML;
}

loadSectionPageTemplate = function(e){
    SectionPageProto.template = e.target.import.documentElement.querySelector('body');
}