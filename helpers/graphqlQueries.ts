type Query = {
	query: any;
	variables: any;
};

export const getAllProductsQuery = (): Query => {
	return {
		query: `{
        products(first:100) {
          edges{
            node {
              id
              title
              handle
              productType
              description
              featuredImage{
                height
                width 
                url
              }
              
            }
          }
        }
      }`,
		variables: `{}`,
	};
};

export const getProductByIdQuery = (id: string): Query => {
	return {
		query: `{
        product(id:${id}) {
          edges{
            node {
              id
              title
              handle
              productType
              description
              featuredImage{
                height
                width 
                url
              }
              
            }
          }
        }
      }`,
		variables: `{}`,
	};
};

export const getProductsByProductTypeQuery = (productType: string): Query => {
	const queryString = `(product_type:${productType})`;
	return {
		query: `{
      products(first:10,query:"(product_type:${productType})"){
        edges{
          node{
            title
            description
            images(first:5) {
              edges {
                node {
                  id
                }
              }
            }     
            featuredImage{
              url
            }
          }
        }
      }
     } `,
		variables: `{}`,
	};
};

export const getAllProductTypesQuery = (): Query => {
	return {
		query: `{
      productTypes(first:100){
        edges{
          node
        }
      }    
      }`,
		variables: `{}`,
	};
};

export const getAllCollectionsQuery = (): Query => {
	return {
		query: `{
      collections(first:10){
       edges{
         node{
           title
           handle
           id
         }
       }
     }
     }`,
		variables: `{}`,
	};
};
