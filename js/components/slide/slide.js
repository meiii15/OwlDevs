var SlideProto = Object.create(HTMLElement.prototype);

SlideProto._currentSlide = 0;

SlideProto.showSlide = function(i){
    
    var slides = this.querySelector('[slot="slides"]').children;
    var slidesCount = slides.length - 1;

    if(i > slidesCount){
        this._currentSlide = 0;
    }else if(i < 0){
        this._currentSlide = slidesCount;
    }else{
        this._currentSlide = i;
    }
    
    for(var currentSlideIndex = 0; currentSlideIndex <= slidesCount; currentSlideIndex++){
        currentSlide = slides[currentSlideIndex];
        
        if ( this._currentSlide == currentSlideIndex){
            currentSlide.style.display = "block";
        }else{
            currentSlide.style.display = "none";
        }
    }
};

SlideProto.next = function(){
    this.showSlide(this._currentSlide + 1);
}

SlideProto.previous = function(){
    this.showSlide(this._currentSlide - 1);
}

SlideProto.superCreatedCallback = createdComponentCallback;

SlideProto.createdCallback = function(){
    this.superCreatedCallback();
    this.showSlide(0);

    var currentIntance = this;
    
    this.shadowRoot.querySelector("#previous-btn").addEventListener('click', function(e){
        currentIntance.previous();
    });
    this.shadowRoot.querySelector("#next-btn").addEventListener('click', function(e) {
        currentIntance.next();
    });
}

SlideProto.onLoadTemplate = onLoadTemplate;