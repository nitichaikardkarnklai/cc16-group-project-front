import React from 'react';
import ToyMartLogo from '../assets/icon/ToyMartLogo';
import SearchBar from '../components/SearchBar';
import HeadPhoneIcon from '../assets/icon/HeadPhoneIcon';
import HeartIcon from '../assets/icon/HeartIcon';
import ShoppingBagIcon from '../assets/icon/ShoppingBagIcon';
import Menulist from './components/Menulist';
import { useRef, useState } from 'react';
import SeriesMenulist from './components/SeriesMenulist';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import FeatureMenuList from './components/FeatureMenuList';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/use-auth';
import UserIcon from '../assets/icon/UserIcon';
import { fetchGroups } from '../store/slices/groupSlice';
import { fetchSeries } from '../store/slices/seriesSlice';
import { fetchCart } from '../store/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

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
  const dispatch = useDispatch();
  const { groups } = useSelector((store) => store.group) || { groups: [] };
  const { series } = useSelector((store) => store.series) || { series: [] };
  const { itemsInCart } = useSelector((store) => store.cart) || {
    itemsInCart: [],
  };
  const [groupSubPages, setGroupSubPages] = useState([]);
  const [seriesSubPages, setSeriesSubPages] = useState([]);
  const navRef = useRef(null);

  useEffect(() => {
    // Function to close navbar on click outside
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpen(openState);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [open, navRef.current]);

  useEffect(() => {
    const fetchGroupsData = async () => {
      try {
        await dispatch(fetchGroups());
      } catch (error) {
        console.error('Error fetching groups:', error);
      }
    };
    const fetchCartData = async () => {
      try {
        await dispatch(fetchCart());
      } catch (err) {
        console.log('Error fetching cart', err);
      }
    };
    fetchGroupsData();
    fetchCartData();
  }, []);

  useEffect(() => {
    if (groups.length > 0) {
      setGroupSubPages(
        groups.map((group) => ({ id: group.id, name: group.categories }))
      );
    }
  }, [groups]);

  useEffect(() => {
    const fetchSeriesData = async () => {
      try {
        await dispatch(fetchSeries());
      } catch (error) {
        console.error('Error fetching series:', error);
      }
    };
    fetchSeriesData();
  }, []);

  useEffect(() => {
    if (series.length > 0) {
      setSeriesSubPages(
        series.map((series) => ({ id: series.id, name: series.series }))
      );
    }
  }, [series]);

  useEffect(() => {
    // console.log(pathname);
    setOpen(openState);
  }, [pathname]);

  const isGroupsEmpty = !groups || groups.length === 0;
  // console.log(isGroupsEmpty);

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

  const isMyAccount = () => {
    if (
      pathname === '/my-account-page' ||
      pathname === '/manage-account-page' ||
      pathname === '/my-address-page' ||
      pathname === '/my-order-page' ||
      pathname === '/my-reward-page'
    ) {
      return '#D2001E';
    } else {
      return '';
    }
  };

  return (
    <div>
      <div className='sticky top-0 z-50' ref={navRef}>
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
            {/* <div className='w-[226px] h-[42px] border-r pr-4'>
              <SearchBar />
            </div> */}
            <div className='flex items-center gap-4'>
              <Link to='/my-account-page'>
                {authUser ? (
                  <div className='flex  justify-center items-center gap-1'>
                    <div className='w-[24px] h-[24px] bg-gray-400 rounded-full'></div>
                    <div style={{ color: isMyAccount() }}>My Account</div>
                  </div>
                ) : (
                  <div className='flex  justify-center items-center gap-1'>
                    <UserIcon />
                    <div>Login / Register</div>
                  </div>
                )}
              </Link>
              <Link to={`/customer-chat-page/${authUser?.id}`}>
                <div>
                  <HeadPhoneIcon />
                </div>
              </Link>
              <Link to='/wishlist-page'>
                <div>
                  <HeartIcon />
                </div>
              </Link>
              <Link to='/cart-page'>
                <div className='w-[77px] h-[34px] rounded-3xl border border-gray-400 flex justify-center items-center'>
                  <ShoppingBagIcon />
                  <div>
                    {itemsInCart.length != 0 ? itemsInCart.length : null}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className='absolute w-full bg-white z-50'>
          {open.feature && <FeatureMenuList />}

          {open.series && (
            <SeriesMenulist link={'/series'} subPages={seriesSubPages} />
          )}
          {open.mega && (
            <Menulist
              link={'/mega'}
              subPages={groupSubPages.filter(
                (page) => page.id >= 1 && page.id <= 3
              )}
            />
          )}
          {open.types && (
            <Menulist
              link={'/types'}
              subPages={groupSubPages.filter(
                (page) => page.id >= 4 && page.id <= 6
              )}
            />
          )}
          {open.accessories && (
            <Menulist
              link={'/accessories'}
              subPages={groupSubPages.filter(
                (page) => page.id >= 7 && page.id <= 9
              )}
            />
          )}
        </div>
      </div>
    </div>
  );
}
