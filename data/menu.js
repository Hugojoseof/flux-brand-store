export const productDetailPages = [
  {
    heading: "Product layouts",
    links: [
      { href: "/product-detail/1", text: "Product default" },
      { href: "/product-grid-1", text: "Product grid 1" },
      { href: "/product-grid-2", text: "Product grid 2" },
      { href: "/product-stacked", text: "Product stacked" },
      { href: "/product-right-thumbnails", text: "Product right thumbnails" },
      { href: "/product-bottom-thumbnails", text: "Product bottom thumbnails" },
      { href: "/product-drawer-sidebar", text: "Product drawer sidebar" },
      {
        href: "/product-description-accordion",
        text: "Product description accordion",
      },
      { href: "/product-description-list", text: "Product description list" },
      {
        href: "/product-description-vertical",
        text: "Product description vertical",
      },
    ],
  },

];

export const pages = [
  {
    href: "/about-us",
    text: "About us",
    className: "menu-link-text link text_black-2",
    links: null,
  },
  {
    href: "#",
    text: "Brands",
    className: "menu-link-text link text_black-2",
    links: [
      {
        href: "/brands",
        text: "Brands",
        className: "menu-link-text link text_black-2 position-relative",
        label: "New",
      },
      {
        href: "/brands-v2",
        text: "Brand V2",
        className: "menu-link-text link text_black-2",
      },
    ],
  },
  {
    href: "#",
    text: "Contact",
    className: "menu-link-text link text_black-2",
    links: [
      {
        href: "/contact-1",
        text: "Contact 1",
        className: "menu-link-text link text_black-2",
      },
      {
        href: "/contact-2",
        text: "Contact 2",
        className: "menu-link-text link text_black-2",
      },
    ],
  },
  {
    href: "#",
    text: "FAQ",
    className: "menu-link-text link text_black-2",
    links: [
      {
        href: "/faq-1",
        text: "FAQ 01",
        className: "menu-link-text link text_black-2",
      },
      {
        href: "/faq-2",
        text: "FAQ 02",
        className: "menu-link-text link text_black-2",
      },
    ],
  },
  {
    href: "#",
    text: "Store",
    className: "menu-link-text link text_black-2",
    links: [
      {
        href: "/our-store",
        text: "Our store",
        className: "menu-link-text link text_black-2",
      },
      {
        href: "/store-locations",
        text: "Store locator",
        className: "menu-link-text link text_black-2",
      },
    ],
  },
  {
    href: "/timeline",
    text: "Timeline",
    className: "menu-link-text link text_black-2 position-relative",
    label: "New",
  },
  {
    href: "/view-cart",
    text: "View cart",
    className: "menu-link-text link text_black-2 position-relative",
  },
  {
    href: "/checkout",
    text: "Check out",
    className: "menu-link-text link text_black-2 position-relative",
  },
  {
    href: "#",
    text: "Payment",
    className: "menu-link-text link text_black-2",
    links: [
      {
        href: "/payment-confirmation",
        text: "Payment Confirmation",
        className: "menu-link-text link text_black-2",
      },
      {
        href: "/payment-failure",
        text: "Payment Failure",
        className: "menu-link-text link text_black-2",
      },
    ],
  },
  {
    href: "#",
    text: "My account",
    className: "menu-link-text link text_black-2",
    links: [
      {
        href: "/my-account",
        text: "My account",
        className: "menu-link-text link text_black-2",
      },
      {
        href: "/my-account-orders",
        text: "My order",
        className: "menu-link-text link text_black-2",
      },
      {
        href: "/my-account-orders-details",
        text: "My order details",
        className: "menu-link-text link text_black-2",
      },
      {
        href: "/my-account-address",
        text: "My address",
        className: "menu-link-text link text_black-2",
      },
      {
        href: "/my-account-edit",
        text: "My account details",
        className: "menu-link-text link text_black-2",
      },
      {
        href: "/my-account-wishlist",
        text: "My wishlist",
        className: "menu-link-text link text_black-2",
      },
    ],
  },
  {
    href: "/invoice",
    text: "Invoice",
    className: "menu-link-text link text_black-2 position-relative",
  },
  {
    href: "/404",
    text: "404",
    className: "menu-link-text link text_black-2 position-relative",
  },
];

export const navItems = [

  {
    id: "dropdown-menu-three",
    label: "Products",
    links: [
      {
        id: "sub-product-one",
        label: "Product layouts",
        links: [
          { href: "/product-detail/1", label: "Product default" },
          { href: "/product-grid-1", label: "Product grid 1" },
          { href: "/product-grid-2", label: "Product grid 2" },
          { href: "/product-stacked", label: "Product stacked" },
          {
            href: "/product-right-thumbnails",
            label: "Product right thumbnails",
          },
          {
            href: "/product-bottom-thumbnails",
            label: "Product bottom thumbnails",
          },
          { href: "/product-drawer-sidebar", label: "Product drawer sidebar" },
          {
            href: "/product-description-accordion",
            label: "Product description accordion",
          },
          {
            href: "/product-description-list",
            label: "Product description list",
          },
          {
            href: "/product-description-vertical",
            label: "Product description vertical",
          },
        ],
      },
    ],
  },
  {
    id: "dropdown-menu-four",
    label: "Pages",
    links: [
      { href: "/about-us", label: "About us" },
      { href: "/brands", label: "Brands", demoLabel: true },
      { href: "/brands-v2", label: "Brands V2" },
      { href: "/contact-1", label: "Contact 1" },
      { href: "/contact-2", label: "Contact 2" },
      { href: "/faq-1", label: "FAQ 01" },
      { href: "/faq-2", label: "FAQ 02" },
      { href: "/our-store", label: "Our store" },
      { href: "/store-locations", label: "Store locator" },
      { href: "/timeline", label: "Timeline", demoLabel: true },
      { href: "/view-cart", label: "View cart" },
      { href: "/my-account", label: "My account" },
      { href: "/wishlist", label: "Wishlist" },
      { href: "/terms", label: "Terms and conditions" },
      { href: "/404", label: "404 page" },
    ],
  },
];
