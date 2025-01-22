import { GetBannerData } from '@/service/queries/GetBanner';
import BannerCarousel from '@/components/Banner/BannerCarousel';
import { Product } from '@/components/product/product';
import { GetProductData } from '@/service/queries/GetProduct';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Categories } from '@/components/categories/category';
import { getCategories } from '@/service/queries/GetCategories';
export default async function Home() {
  const bannerData = await GetBannerData();
  const productData = await GetProductData();
  const categoryData = await getCategories();
  console.log(categoryData);
  return (
    <div className='container mx-auto pt-5 pb-10'>
      <section className='Banner-section'>
        <BannerCarousel banners={bannerData || []} />
      </section>
      <section className='Product-section pt-10'>
        <div className='Product-section-container grid grid-cols-4 gap-6'>
          <div className='Product-section-container-right col-span-1'>
            <div className='Product-section-container-right-top-image flex flex-col gap-6'>
              <div className='relative transition-transform hover:scale-[1.02] duration-300'>
                <Image
                  src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg"
                  alt='Product Section Right Top'
                  width={200}
                  height={200}
                  className='rounded-lg w-full h-auto object-cover'
                />
                <div className='absolute top-6 left-6 text-left'>
                  <p className='text-lg font-medium text-gray-600 mb-1'>Bacola Natural Foods</p>
                  <h3 className='text-2xl font-bold mb-2'>Special Organic</h3>
                  <h2 className='text-2xl font-bold mb-3'>Roats Burger</h2>
                  <p className='text-sm text-gray-600 mb-2'>only-from</p>
                  <p className='text-2xl font-bold text-red-500'>$14.99</p>
                </div>
              </div>

              <div className='relative transition-transform hover:scale-[1.02] duration-300'>
                <Image
                  src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/bacola-banner-04.jpg"
                  alt='Product Section Right Top'
                  width={200}
                  height={200}
                  className='rounded-lg w-full h-auto object-cover'
                />
                <div className='absolute top-6 left-6 text-left'>
                  <p className='text-lg font-medium text-gray-600 mb-1'>Best Bakery</p>
                  <p className='text-lg font-medium text-gray-600'>Products</p>
                  <h2 className='text-2xl font-bold mb-1'>Freshest</h2>
                  <h2 className='text-2xl font-bold mb-3'>Products</h2>
                  <h1 className='text-3xl font-bold mb-3'>every hour.</h1>
                  <p className='text-sm text-gray-600 mb-2'>only-from</p>
                  <p className='text-2xl font-bold text-red-500 mb-4'>$24.99</p>
                  <button className='bg-blue-400 text-white px-6 py-2 rounded-full hover:bg-blue-500 transition-colors'>
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main product content */}
          <div className='Product-section-container-left col-span-3'>
            <div className='Product-section-container-left-top'>
              <Product productData={productData} />
            </div>
          </div>
        </div>
      </section>
      <Categories categoryData={categoryData} />
    </div>
  );
}

