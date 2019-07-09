class Modal {
    // Implement your code inside this class
    // You may create additional Classes if you feel it improves readability & reuse.
    constructor(toggleElement) {
      console.log("Modal.constructor toggleElement:", toggleElement); //
      // Hint: Get any needed data attributes from the `toggleElement`
      // Remember your "this." syntax
      this.element = toggleElement;
      this.body = document.querySelector("body")
      this.modal = document.querySelector(".modal")
      this.closeBtn = this.modal.querySelector(".close");
      this.saveChange = this.modal.querySelector(".btn-primary");
      this.close2 = this.modal.querySelector(".btn-secondary");
      this.element.addEventListener("click", event => this.clickHandler(event));
      this.body.addEventListener("click", event => this.handleBodyClick(event));
      this.closeBtn.addEventListener("click", () => this.closeModal());
      this.close2.addEventListener("click", () => this.closeModal());
      this.saveChange.addEventListener("click", () => this.closeModal());
    }
    clickHandler(event)
    {
      this.modal.style.display = "block";
      this.modal.classList.toggle("show");
      TweenMax.set(this.modal, {y: 0, opacity: 1});
      TweenMax.from(this.modal, .5, {y:-200, opacity:0});
    }
    handleBodyClick(event)
    {
      
    }
    closeModal()
    {
      let modl = this.modal;
      function closeFunc()
      {
        modl.classList.toggle("show")
        modl.style.display = "none";
      }
      // closeFunc();
      TweenMax.to(this.modal, .5, {y:-200, opacity:0, onComplete: closeFunc})
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const modalToggles = document.querySelectorAll(`[data-toggle="modal"]`);

    modalToggles.forEach(button => new Modal(button));
});

// let modal = document.querySelector(".modal");
// console.log(modal);
// let modalButtons = [];
// let allButtons = document.querySelectorAll("button");
// allButtons.forEach(button => 
// {
//   if (["modal-header", "modal-footer"].includes(button.parentElement.className))
//   {
//     modalButtons.push(button);
//   }
// })
// document.querySelector("body").addEventListener("mouseup", event => 
// {
//     if (Array.from(modal.classList).includes("show"))
//     {
//         if(event.target != modal || modalButtons.includes(event.target))
//         {
//           modal.classList.toggle("show");
//           modal.style.display = "none";
//         }
//     }
// })