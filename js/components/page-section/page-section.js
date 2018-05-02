var SectionPageProto = Object.create(HTMLElement.prototype);

SectionPageProto.createdCallback = createdComponentCallback;

SectionPageProto.onLoadTemplate = onLoadTemplate;