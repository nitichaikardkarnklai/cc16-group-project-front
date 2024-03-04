import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ProductManagePage from '../../layouts/components/ProductManagePage';


export default function AdminProductMgtPage() {


  return (
    <div>
      <div>
        <div className="hero h-full ">
          <div className=" text-center ">
            <div className="flex justify-between gap-4 ">
              <div >
                <div class="lg:flex lg:items-start lg:gap-12">
                  <div class="lg:order-2 lg:ml-5">
                    <div class="max-w-xl overflow-hidden rounded-lg">
                      <img class="h-full w-full max-w-full object-cover" src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" alt="" />
                    </div>
                  </div>
                  <div class="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                    <div class="flex flex-row items-start  lg:flex-col">
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
              <details className="collapse rounded-none w-full first-line: ">
                <summary className="collapse-title text-xl font-medium  bg-slate-100">EDIT</summary>
                <div className="collapse-content">
                  <ProductManagePage />
                </div>
              </details>

            </div>
          </div>


        </div>
      </div>

    </div>
  )
}
