import { StarIcon } from '@heroicons/react/20/solid';

const products = [
  {
    id: 1,
    name: 'Pineapple Express',
    price: '$149',
    rating: 5,
    reviewCount: 38,
    imageSrc: require('../../images/weed-1.jpeg'),
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 2,
    name: 'Blue Dream',
    price: '$15',
    rating: 5,
    reviewCount: 18,
    imageSrc: require('../../images/weed-1.jpeg'),
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 3,
    name: 'Sour Diesel',
    price: '$15',
    rating: 5,
    reviewCount: 14,
    imageSrc: require('../../images/weed-1.jpeg'),
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 4,
    name: 'Purple Haze',
    price: '$15',
    rating: 4,
    reviewCount: 21,
    imageSrc: require('../../images/weed-1.jpeg'),
    imageAlt: 'TODO',
    href: '#',
  },
  // More products...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const ProductGrid = () => {
  return (
    <section
      aria-labelledby='products-heading'
      className='mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8'
    >
      <h2 id='products-heading' className='sr-only'>
        Products
      </h2>

      <div className='-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4'>
        {products.map((product) => (
          <div
            key={product.id}
            className='group relative border-r border-b border-gray-200 p-4 sm:p-6'
          >
            <div className='aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75'>
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className='h-full w-full object-cover object-center'
              />
            </div>
            <div className='pt-10 pb-4 text-center'>
              <h3 className='text-sm font-medium text-gray-900'>
                <a href={product.href}>
                  <span aria-hidden='true' className='absolute inset-0' />
                  {product.name}
                </a>
              </h3>
              <div className='mt-3 flex flex-col items-center'>
                <p className='sr-only'>{product.rating} out of 5 stars</p>
                <div className='flex items-center'>
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        product.rating > rating
                          ? 'text-yellow-400'
                          : 'text-gray-200',
                        'flex-shrink-0 h-5 w-5'
                      )}
                      aria-hidden='true'
                    />
                  ))}
                </div>
                <p className='mt-1 text-sm text-gray-500'>
                  {product.reviewCount} reviews
                </p>
              </div>
              <p className='mt-4 text-base font-medium text-gray-900'>
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
