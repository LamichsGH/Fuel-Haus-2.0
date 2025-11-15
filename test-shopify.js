// Simple test to check if Shopify API is accessible
const SHOPIFY_STORE_PERMANENT_DOMAIN = 'mental-canvas-kit-xj3at.myshopify.com';
const SHOPIFY_STOREFRONT_URL = `https://${SHOPIFY_STORE_PERMANENT_DOMAIN}/api/2025-07/graphql.json`;
const SHOPIFY_STOREFRONT_TOKEN = 'ef0fe5ffee86217dc44155b1ce409372';

const query = `
  query GetProducts($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          title
          handle
        }
      }
    }
  }
`;

async function testShopifyAPI() {
  try {
    console.log('Testing Shopify API...');
    const response = await fetch(SHOPIFY_STOREFRONT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_TOKEN
      },
      body: JSON.stringify({
        query,
        variables: { first: 3 }
      })
    });

    console.log('Response status:', response.status);
    const data = await response.json();
    console.log('Response data:', JSON.stringify(data, null, 2));
    
  } catch (error) {
    console.error('Shopify API test failed:', error);
  }
}

testShopifyAPI();