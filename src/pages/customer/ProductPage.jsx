import React from 'react';

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
                      <input type="radio" name="type" value="Powder" class="peer sr-only" checked />
                      <p class="border border-black px-6 py-2 font-bold">Single Box</p>
                    </label>
                    <label class="">
                      <input type="radio" name="type" value="Whole Bean" class="peer sr-only" />
                      <p class="border border-black px-6 py-2 font-bold">Whole Box</p>
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


                    <button type="button" class="inline-flex items-center justify-center  border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                      ADD TO CART
                    </button>
                    <button type="button" class="inline-flex items-center justify-center  border-2 border-transparent bg-red-500 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow">
                      BUY NOW
                    </button>
                  </div>


                  <div className="collapse collapse-arrow ">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                      ALL FIGURES
                    </div>
                    <div className="collapse-content">
                      <p>
                        Brand: POP MART
                        Size: Height about 9cm
                        Material: PVC/ABS/Nylon
                        A whole set contains 9 blind boxes
                        (There is no repeated figurine if you buy a whole set)
                        *A certain chance to win a secret edition
                        View Product Details
                        What’s a blind box?

                      </p>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow ">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                      SHIPPING & AFTER_SALES SERVICE
                    </div>
                    <div className="collapse-content">
                      <p>1. Shipping：
                        Standard Shipping (15-30 working days)
                        Expedited Shipping (3-7 working days)
                        2. Defects:
                        (1)Limited items don't have an exchange service. If you find a serious defect in the item, contact support@popmart.com, with the related order number and unpacking video of the figurine within five (5) days of receiving the product.
                        (2)For information security reasons, please contact us with the email address you used to place the order. You will be contacted by a Customer Support Representative who will assist you in resolving the issue.
                        (3)In order to avoid any disputes regarding refunds or exchanges, customers are encouraged to video record themselves opening the package. A video recording must be completed no later than two days after delivery. A video should clearly show the shipping sheet, the package condition, and product defects.
                        3. Tax fees：
                        For international express shipments, the buyer shall bear any Customs Duty costs</p>
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