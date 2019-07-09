class Modal {
    // Implement your code inside this class
    // You may create additional Classes if you feel it improves readability & reuse.
    constructor(toggleElement) {
      console.log("Modal.constructor toggleElement:", toggleElement); //
      // Hint: Get any needed data attributes from the `toggleElement`
      // Remember your "this." syntax
      this.element = toggleElement;
      this.body = document.querySelector("body")
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const modalToggles = document.querySelectorAll(`[data-toggle="modal"]`);

    modalToggles.forEach(button => new Modal(button));
});
