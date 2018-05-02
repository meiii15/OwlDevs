var NavigationHeaderProto = Object.create(HTMLElement.prototype);

NavigationHeaderProto.createdCallback = createdComponentCallback;

NavigationHeaderProto.onLoadTemplate = onLoadTemplate;