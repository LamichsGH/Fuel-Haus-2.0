import { Product } from "@/stores/cartStore";

// Mock product data to replace Shopify integration
export const mockProducts: Product[] = [
  {
    id: "1",
    title: "Original Blend Hot Chocolate",
    description: "Our signature hot chocolate blend with organic cacao, coconut, and electrolytes",
    handle: "original-blend-hot-chocolate",
    price: {
      amount: "24.99",
      currencyCode: "USD"
    },
    images: [
      {
        url: "/placeholder.svg",
        altText: "Original Blend Hot Chocolate"
      }
    ],
    variants: [
      {
        id: "variant-1",
        title: "Default Title",
        price: {
          amount: "24.99",
          currencyCode: "USD"
        },
        availableForSale: true,
        selectedOptions: [
          {
            name: "Title",
            value: "Default Title"
          }
        ]
      }
    ],
    options: [
      {
        name: "Title",
        values: ["Default Title"]
      }
    ]
  },
  {
    id: "2",
    title: "Premium Dark Chocolate",
    description: "Rich dark chocolate with enhanced minerals and superfoods",
    handle: "premium-dark-chocolate",
    price: {
      amount: "29.99",
      currencyCode: "USD"
    },
    images: [
      {
        url: "/placeholder.svg",
        altText: "Premium Dark Chocolate"
      }
    ],
    variants: [
      {
        id: "variant-2",
        title: "Default Title",
        price: {
          amount: "29.99",
          currencyCode: "USD"
        },
        availableForSale: true,
        selectedOptions: [
          {
            name: "Title",
            value: "Default Title"
          }
        ]
      }
    ],
    options: [
      {
        name: "Title",
        values: ["Default Title"]
      }
    ]
  },
  {
    id: "3",
    title: "Vanilla Spice Blend",
    description: "Warming vanilla with aromatic spices and functional ingredients",
    handle: "vanilla-spice-blend",
    price: {
      amount: "26.99",
      currencyCode: "USD"
    },
    images: [
      {
        url: "/placeholder.svg",
        altText: "Vanilla Spice Blend"
      }
    ],
    variants: [
      {
        id: "variant-3",
        title: "Default Title",
        price: {
          amount: "26.99",
          currencyCode: "USD"
        },
        availableForSale: true,
        selectedOptions: [
          {
            name: "Title",
            value: "Default Title"
          }
        ]
      }
    ],
    options: [
      {
        name: "Title",
        values: ["Default Title"]
      }
    ]
  },
  {
    id: "4",
    title: "Limited Edition Holiday Blend",
    description: "Seasonal blend with festive spices and premium ingredients",
    handle: "holiday-blend",
    price: {
      amount: "34.99",
      currencyCode: "USD"
    },
    images: [
      {
        url: "/placeholder.svg",
        altText: "Holiday Blend"
      }
    ],
    variants: [
      {
        id: "variant-4",
        title: "Default Title",
        price: {
          amount: "34.99",
          currencyCode: "USD"
        },
        availableForSale: false,
        selectedOptions: [
          {
            name: "Title",
            value: "Default Title"
          }
        ]
      }
    ],
    options: [
      {
        name: "Title",
        values: ["Default Title"]
      }
    ]
  }
];

// Mock API functions to replace Shopify integration
export const fetchProducts = async (): Promise<Product[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return mockProducts;
};

export const fetchProductByHandle = async (handle: string): Promise<Product | null> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockProducts.find(product => product.handle === handle) || null;
};