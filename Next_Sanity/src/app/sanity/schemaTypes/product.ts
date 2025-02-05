const productSchema = {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [

    {
      name: 'id',
      type: 'number',
      title: 'Product ID',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Product Image',
    },
    {
      name: 'detail_btn',
      type: 'string',
      title: 'Product DetailButton'
    },
    {
      name: 'title',
      type: 'string',
      title: 'Product Title'
    },
    {
      name: 'description',
      type: 'string',
      title: 'Product Description'
    },
    {
      name: 'price',
      type: 'string',
      title: 'Product Price',
    }, 

    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
    },    
  ],
};

export default productSchema;
