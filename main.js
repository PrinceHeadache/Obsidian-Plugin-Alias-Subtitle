module.exports = {
  onload() {
    // Register a callback to modify the note rendering
    this.registerMarkdownCodeBlockProcessor((source, el, ctx) => {
      // Find the inline title element
      const titleEl = el.querySelector("h1 span.internal-symlink-link");

      if (titleEl) {
        // Get the alias from the title element's data-alias attribute
        const alias = titleEl.getAttribute("data-alias");

        if (alias) {
          // Create a subtitle element with the alias text
          const subtitleEl = document.createElement("h2");
          subtitleEl.classList.add("alias-subtitle");
          subtitleEl.textContent = alias;

          // Insert the subtitle element after the title element
          titleEl.after(subtitleEl);
        }
      }
    });
  },
};
