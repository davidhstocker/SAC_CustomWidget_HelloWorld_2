(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `

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
            if (this._svgContainer){
                this._svgContainer._groups[0][0].innerHTML = "";
            }

            if (value == "h2"){
                this._tagType = "h2:h2";
            } else if (value == "h3"){
                this._tagType = "h3:h3";
            } else {
                this._tagType = "h1:h1";
            } 
            this.redraw();
        }

        get widgetText() {
            return this._tagType;
        }

        set widgetText(value) {
            //Empty the shadow dom
            if (this._svgContainer){
                this._svgContainer._groups[0][0].innerHTML = "";
            }

            this._tagText = value;
            this.redraw();
        }
        // End - Getters and Setters

        redraw(){
            if (!this._tagContainer){
                var shadow = document.select(this._shadowRoot);
                this._tagContainer = document.select(this._shadowRoot)
                    .append(this._tagType)
                    .attr("innerHTML", this._tagText);
            } else{
                document.select(this._shadowRoot).selectAll("*").remove();
                this._tagContainer = document.select(this._shadowRoot)
                    .append(this._tagType)
                    .attr("innerHTML", this._tagText);
}
        }
    
    
    });
        
})();