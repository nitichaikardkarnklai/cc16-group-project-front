import React from 'react';
import ToyMartLogo from '../assets/icon/ToyMartLogo';
import SearchBar from '../components/SearchBar';
import HeadPhoneIcon from '../assets/icon/HeadPhoneIcon';
import HeartIcon from '../assets/icon/HeartIcon';
import ShoppingBagIcon from '../assets/icon/ShoppingBagIcon';
import Menulist from './components/Menulist';
import { useState } from 'react';
import SeriesMenulist from './components/SeriesMenulist';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import FeatureMenuList from './components/FeatureMenuList';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/use-auth';
import UserIcon from '../assets/icon/UserIcon';

const openState = {
  feature: false,
  series: false,
  mega: false,
  types: false,
  accessories: false,
};

const defaultClass =
  'btn bg-transparent shadow-none border-none text-lg p-0 hover:bg-transparent';

export default function CustomerNavBar() {
  const [open, setOpen] = useState(openState);

  const { pathname } = useLocation();
  const { authUser } = useAuth();

  useEffect(() => {
    console.log(pathname);
    setOpen(openState);
  }, [pathname]);

  const onClickFeature = () => {
    setOpen({
      ...open,
      feature: !open.feature,
      series: false,
      mega: false,
      types: false,
      accessories: false,
    });
  };

  const onClickSeries = () => {
    setOpen({
      ...open,
      feature: false,
      series: !open.series,
      mega: false,
      types: false,
      accessories: false,
    });
  };

  const onClickMega = () => {
    setOpen({
      ...open,
      feature: false,
      series: false,
      mega: !open.mega,
      types: false,
      accessories: false,
    });
  };

  const onClickTypes = () => {
    setOpen({
      ...open,
      feature: false,
      series: false,
      mega: false,
      types: !open.types,
      accessories: false,
    });
  };

  const onClickAccessories = () => {
    setOpen({
      ...open,
      feature: false,
      series: false,
      mega: false,
      types: false,
      accessories: !open.accessories,
    });
  };

  const isFeaturePage = () => {
    if (
      pathname === '/launch-calendar' ||
      pathname === '/new-arrivals' ||
      pathname === '/top-selling'
    ) {
      return '#D2001E';
    } else {
      return '';
    }
  };

  const isSeriesPage = () => {
    if (pathname === '/series') {
      return '#D2001E';
    } else {
      return '';
    }
  };

  const isMegaPage = () => {
    if (pathname === '/mega') {
      return '#D2001E';
    } else {
      return '';
    }
  };

  const isTypes = () => {
    if (pathname === '/types') {
      return '#D2001E';
    } else {
      return '';
    }
  };

  const isAccessories = () => {
    if (pathname === '/accessories') {
      return '#D2001E';
    } else {
      return '';
    }
  };

  return (
    <div className='sticky top-0 z-50'>
      <div className='flex w-full h-[5rem] bg-white justify-between items-center px-8 border-b-2 border-gray-400'>
        <div className='flex gap-6  items-center font-semibold'>
          <Link to='/'>
            <div className='btn bg-transparent border-none shadow-none hover:bg-transparent'>
              <ToyMartLogo />
            </div>
          </Link>
          <div
            onClick={onClickFeature}
            style={{ color: isFeaturePage() }}
            className={`${defaultClass}`}
          >
            New & Featured
          </div>
          <div
            onClick={onClickSeries}
            style={{ color: isSeriesPage() }}
            className={`${defaultClass}`}
          >
            SERIES
          </div>
          <div
            onClick={onClickMega}
            style={{ color: isMegaPage() }}
            className={`${defaultClass}`}
          >
            MEGA
          </div>
          <div
            onClick={onClickTypes}
            style={{ color: isTypes() }}
            className={`${defaultClass}`}
          >
            TYPES
          </div>
          <div
            onClick={onClickAccessories}
            style={{ color: isAccessories() }}
            className={`${defaultClass}`}
          >
            ACCESSORIES
          </div>
        </div>
        <div className='flex gap-4  items-center font-semibold'>
          <div className='w-[226px] h-[42px] border-r pr-4'>
            <SearchBar />
          </div>
          <div className='flex items-center gap-4'>
            <Link to='/my-account-page'>
              {authUser ? (
                <div className='flex  justify-center items-center gap-1'>
                  <div className='w-[24px] h-[24px] bg-gray-400 rounded-full'></div>
                  <div>My Account</div>
                </div>
              ) : (
                <div className='flex  justify-center items-center gap-1'>
                  <UserIcon />
                  <div>Login / Register</div>
                </div>
              )}
            </Link>
            <div>
              <HeadPhoneIcon />
            </div>
            <Link to='/wishlist-page'>
              <div>
                <HeartIcon />
              </div>
            </Link>
            <Link to='/cart-page'>
              <div className='w-[77px] h-[34px] rounded-3xl border border-gray-400 flex justify-center items-center'>
                <ShoppingBagIcon />
                <div>1</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className='absolute w-full bg-white z-50'>
        {open.feature && <FeatureMenuList />}
        {open.series && <SeriesMenulist link={'/series'} />}
        {open.mega && <Menulist link={'/mega'} />}
        {open.types && <Menulist link={'/types'} />}
        {open.accessories && <Menulist link={'/accessories'} />}
      </div>
    </div>
  );
}
