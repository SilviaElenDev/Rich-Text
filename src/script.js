class Text {
    constructor(e){
        this.textArea = document.querySelector(e)
        this.init();
    }

    init(){
        this.textArea.addEventListener("focus", () => this.onFocus());
        this.textArea.addEventListener("input", () => this.adjustHeightAndScroll());
        this.textArea.addEventListener('mouseup', () => this.select());
    }

    onFocus(){
        this.textArea.addEventListener('blur', () => {
            setInterval(this.textArea.focus(),1000);
        });
    }

    adjustHeightAndScroll(){
        this.textArea.style.height = "auto"
        this.textArea.style.height = this.textArea.scrollHeight + "px";
    }

    select(){
        let selecionado = window.getSelection().toString();; 
        console.log(selecionado)
    }
}

class Edit(){
    
}

window.onload = () => new Text('#textArea');

