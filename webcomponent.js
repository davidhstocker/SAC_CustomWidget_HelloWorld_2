(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
        <h1>Hello World</h1>
    `;

    customElements.define('com-sap-sample-helloworld2', class HelloWorld1 extends HTMLElement {


		constructor() {
			super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._tagContainer;
            this._tagType = "h1:h1";
            this._tagText = "";
		}

        //Fired when the widget is added to the html DOM of the page
        connectedCallback(){
            this.redraw();
        }

         //Fired when the widget is removed from the html DOM of the page (e.g. by hide)
        disconnectedCallback(){
        
        }

         //When the custom widget is updated, the Custom Widget SDK framework executes this function first
		onCustomWidgetBeforeUpdate(oChangedProperties) {

		}

        //When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
		onCustomWidgetAfterUpdate(oChangedProperties) {

        }
        
        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
        
        }

        
        //When the custom widget is resized on the canvas, the Custom Widget SDK framework executes the following JavaScript function call on the custom widget
        // Commented out by default
        /*
        onCustomWidgetResize(width, height){
        
        }
        */

        //Getters and Setters
        get headingType() {
            return this._tagType;
        }

        set headingType(value) {
            //Empty the shadow dom
            if (this._tagContainer){
                this._tagContainer._groups[0][0].innerHTML = "";
            }

            if (value == "h2"){
                this._tagType = "h2";
            } else if (value == "h3"){
                this._tagType = "h3";
            } else {
                this._tagType = "h1";
            } 
            this.redraw();
        }

        get widgetText() {
            return this._tagType;
        }

        set widgetText(value) {
            //Empty the shadow dom
            if (this._tagContainer){
                this._tagContainer._groups[0][0].innerHTML = "";
            }

            this._tagText = value;
            this.redraw();
        }
        // End - Getters and Setters

        redraw(){
            if (!this._tagContainer){
                var shadow = window.getSelection(this._shadowRoot);
                var hNode = document.createElement(this._tagType);
                var theText = document.createTextNode(this._tagText);    
                hNode.appendChild(theText); 
                this._shadowRoot.appendChild(hNode);
            } else{
                window.getSelection(this._shadowRoot).selectAll("*").remove();
                var shadow = window.getSelection(this._shadowRoot);
                var hNode = document.createElement(this._tagType);
                var theText = document.createTextNode(this._tagText);    
                hNode.appendChild(theText); 
                this._shadowRoot.appendChild(hNode);
}
        }
    
    
    });
        
})();