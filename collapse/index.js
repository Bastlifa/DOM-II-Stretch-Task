class Collapse {
    // Implement your code inside this class
    // You may create additional Classes if you feel it improves readability & reuse.
    constructor(toggleElement) 
    {
        console.log("Collapse.constructor toggleElement:", toggleElement); //
        // Hint: Get any needed data attributes from the `toggleElement`
        // Remember your "this." syntax
        this.element = toggleElement;

        this.targetElem = document.querySelector(toggleElement.getAttribute("href"));
        this.targetElem.style.overflow = "hidden";
        this.targetElem.classList.add("closed");
        console.log(this.targetElem);
        this.element.addEventListener("click", () => this.handleClick());
    }
    handleClick() 
    {
        if (!Array.from(this.targetElem.classList).includes("show"))
        {
            this.targetElem.classList.toggle("show");
            TweenMax.set(this.targetElem, {height: "auto"});
            TweenMax.from(this.targetElem, .7, {height:0});

        }
        else
        {
            
            TweenMax.set(this.targetElem, {height: "auto"});
            TweenMax.to(this.targetElem, .7, {height:0, onComplete: _ => this.targetElem.classList.toggle("show")});
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
const collapseToggles = document.querySelectorAll(`[data-toggle="collapse"]`);

collapseToggles.forEach(button => new Collapse(button));
});

