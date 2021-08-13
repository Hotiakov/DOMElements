const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector || '.block';
    this.height = height || '100px';
    this.width = width || '100px';
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
        position: absolute;
        top: 100px;
        left: 100px;
    `;
    elem.textContent = prompt("Введите текст для блока");
    window.addEventListener('keydown', function (e) {
        console.log("чтоооо?");
        switch (e.key) {
            case "ArrowUp":
                if (!(parseFloat(elem.style.top) <= 10))
                    elem.style.top = parseFloat(elem.style.top) - 10 + 'px';
                break;
            case "ArrowDown":
                elem.style.top = parseFloat(elem.style.top) + 10 + 'px';
                break;
            case "ArrowLeft":
                if (!(parseFloat(elem.style.left) <= 10))
                    elem.style.left = parseFloat(elem.style.left) - 10 + 'px';
                break;
            case "ArrowRight":
                elem.style.left = parseFloat(elem.style.left) + 10 + 'px';
                break;
            default:
                console.log("чтоооо?");
        }
    });
    document.body.insertAdjacentElement("beforeend", elem);

}
document.addEventListener('DOMContentLoaded', function () {
    let movedElem = new DomElement();
    movedElem.createDomElement();
});

