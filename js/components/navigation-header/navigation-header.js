var NavigationHeaderProto = Object.create(HTMLElement.prototype);

NavigationHeaderProto.superCreatedCallback = createdComponentCallback;

NavigationHeaderProto.updateActiveSection = function(url){
    
    var currentPath = url.replace(window.location.origin, "");

    var sections = this.shadowRoot.querySelectorAll("li");
    
    for(var currentSection of sections)
    {
        var aItem = currentSection.querySelector("a");
        var linkItem = aItem.href.replace(window.location.origin, "");

        if (linkItem == currentPath){
            currentSection.classList.add('active');
        }else{
            currentSection.classList.remove('active');
        }
    }
}

NavigationHeaderProto.createdCallback = function(){
    this.superCreatedCallback();

    var instance = this;

    window.onhashchange = function(e){
        instance.updateActiveSection(e.newURL);
    }

    this.updateActiveSection(window.location.href);
};

NavigationHeaderProto.onLoadTemplate = onLoadTemplate;