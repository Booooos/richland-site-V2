(function () {
  const catalogRoot = document.querySelector("[data-products-root]");
  const navRoot = document.querySelector("[data-category-nav]");
  const products = window.RICHLAND_PRODUCTS || [];
  if (!catalogRoot || !navRoot || !products.length) return;

  function slugify(value) {
    return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  function buildInquiryLink(category) {
    return `index.html?category=${encodeURIComponent(category)}#inquiry`;
  }

  function normalizeModel(model, name) {
    const source = `${model || ""} ${name || ""}`.toUpperCase();
    const match = source.match(/\b([A-Z])\s*(\d{1,4})(?!\d)/);
    if (!match) {
      return { model: "", letter: "ZZZ", number: Number.POSITIVE_INFINITY };
    }

    return {
      model: `${match[1]}${Number(match[2])}`,
      letter: match[1],
      number: Number(match[2])
    };
  }

  function compareProducts(left, right) {
    const leftNormalized = normalizeModel(left.model, left.name);
    const rightNormalized = normalizeModel(right.model, right.name);

    if (leftNormalized.model && !rightNormalized.model) return -1;
    if (!leftNormalized.model && rightNormalized.model) return 1;
    if (leftNormalized.letter !== rightNormalized.letter) {
      return leftNormalized.letter.localeCompare(rightNormalized.letter);
    }
    if (leftNormalized.number !== rightNormalized.number) {
      return leftNormalized.number - rightNormalized.number;
    }
    return left.name.localeCompare(right.name);
  }

  const categories = Array.from(
    products.reduce((map, product) => {
      if (!map.has(product.category)) map.set(product.category, []);
      map.get(product.category).push(product);
      return map;
    }, new Map())
  );

  categories.forEach(([category, items]) => {
    items.sort(compareProducts);
  });

  navRoot.innerHTML = categories
    .map(([category]) => {
      const slug = slugify(category);
      return `<a class="category-jump" href="#${slug}">${category}</a>`;
    })
    .join("");

  catalogRoot.innerHTML = categories
    .map(([category, items]) => {
      const slug = slugify(category);
      const cards = items
        .map((product) => {
          const normalized = normalizeModel(product.model, product.name);
          const modelMarkup = normalized.model
            ? `<span class="product-card__model">Model ${normalized.model}</span>`
            : `<span class="product-card__model product-card__model--muted">Model available on request</span>`;

          return `
            <article class="product-card">
              <div class="product-card__media">
                <img src="${product.image}" alt="${product.name}">
              </div>
              <div class="product-card__body">
                <span class="product-card__category">${product.category}</span>
                <h3>${product.name}</h3>
                ${modelMarkup}
              </div>
              <a class="btn primary product-card__cta" href="${buildInquiryLink(product.category)}">Ask for Quote</a>
            </article>
          `;
        })
        .join("");

      return `
        <section class="catalog-section" id="${slug}">
          <div class="catalog-section__head">
            <h2>${category}</h2>
            <a class="catalog-section__link" href="#top">Back to top</a>
          </div>
          <div class="product-grid">
            ${cards}
          </div>
        </section>
      `;
    })
    .join("");
})();
