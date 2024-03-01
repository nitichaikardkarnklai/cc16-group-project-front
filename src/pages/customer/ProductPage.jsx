import React from 'react';
import Button from '../../components/Button';

export default function ProductPage() {
  return (
    <div className="hero ">
      <div className=" m-auto w-3/4  ">
        <div>
          <section class="py-12 sm:py-16">
            <div class="container mx-auto px-4">
              <div class="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
                <div class="lg:col-span-3 lg:row-end-1">
                  <div class="lg:flex lg:items-start">
                    <div class="lg:order-2 lg:ml-5">
                      <div class="max-w-xl overflow-hidden rounded-lg">
                        <img class="h-full w-full max-w-full object-cover" src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" alt="" />
                      </div>
                    </div>

                    <div class="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                      <div class="flex flex-row items-start lg:flex-col">
                        <button type="button" class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center">
                          <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" alt="" />
                        </button>
                        <button type="button" class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
                          <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" alt="" />
                        </button>
                        <button type="button" class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
                          <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" alt="" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="lg:col-span-2 lg:row-span-2 lg:row-end-2">

                  <h1 class="sm: text-2xl font-bold text-gray-900 sm:text-3xl">Universal Kung Fu Panda Series Figures</h1>

                  <div class="mt-5 flex items-center">
                  </div>
                  <div class="flex items-end">
                    <h1 class="text-2xl font-bold text-red-500">$60.50</h1>

                  </div>

                  <h2 class="mt-8 text-base text-gray-900">SIZE</h2>
                  <div class="mt-3 flex select-none flex-wrap items-center gap-1">
                    <label class="">
                      <Button>Single Box                      </Button>
                    </label>
                    <label class="">
                      <Button>  Whole Box                      </Button>
                    </label>

                  </div>

                  <h2 class="mt-8 text-base text-gray-900">QUANTITY</h2>
                  <div class="mt-3 flex select-none flex-wrap items-center gap-1">
                    <div className="border border-gray-300 dark:border-gray-600  p-2 cursor-pointer">-</div>
                    <input type="number" className="w-10 rounded-md text-center" value="1" />
                    <div className="border border-gray-300 dark:border-gray-600  p-2 cursor-pointer">+</div>

                  </div>
                  <div class="mt-3 flex select-none flex-wrap items-center gap-1">

                  </div>

                  <div class="mt-10 flex flex-col items-center justify-start gap-4 space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                    <Button bg="red" type="submit" color="white">
                      ADD TO CART
                    </Button>
                    <Button bg="black" type="submit" color="white" >      BUY NOW
                    </Button>
                  </div>
                  <div className="collapse collapse-arrow ">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                      ALL FIGURES
                    </div>
                    <div className="collapse-content">
                      <p>
                        Brand: POP MART <br />
                        Size: Height about 9cm <br />
                        Material: PVC/ABS/Nylon <br />
                        A whole set contains 9 blind boxes
                      </p>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow ">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                      SHIPPING & AFTER_SALES SERVICE
                    </div>
                    <div className="collapse-content">
                      <p>
                        Standard Shipping (15-30 working days)<br />
                        Expedited Shipping (3-7 working days)
                      </p>
                    </div>
                  </div>

                </div>


              </div>
            </div>
          </section>



        </div>

      </div>
    </div>
  );
};