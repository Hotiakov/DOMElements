const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector || '.block';
    this.height = height || '30px';
    this.width = width || '30px';
    this.bg = bg || 'black';
    this.fontSize = fontSize || '14px';
}

DomElement.prototype.createDomElement = function () {
    this.selector = this.selector.trim();
    let elem;
    switch (this.selector[0]) {
        case ".":
            elem = document.createElement('div');
            elem.className = this.selector.slice(1);
            break;
        case "#":
            elem = document.createElement('p');
            elem.id = this.selector.slice(1);
            break;
        default:
            return;
    }
    elem.style.cssText = `
        height: ${this.height};
        width: ${this.width};
        background: ${this.bg};
        font-size: ${this.fontSize};
    `;
    elem.textContent = prompt("Введите текст для блока");
    document.body.insertAdjacentElement("beforeend", elem);
}

let star = new DomElement(".star", "100px", "100px", "yellow", "16px");
star.createDomElement();
let moon = new DomElement("#moon", "200px", "100px", "blue", "20px");
moon.createDomElement();
let _default = new DomElement();
_default.createDomElement();
