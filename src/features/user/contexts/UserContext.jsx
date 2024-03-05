import React, { createContext, useState, useEffect } from 'react';
import * as userApi from '../../../api/admin';
import * as customerApi from '../../../api/user.js';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState([]);
  const [editAddress, setEditAddress] = useState({});
  const [onFetch, setOnFetch] = useState(false); // toggle btw T and F

  useEffect(() => {
    setLoading(true);
    if (location.pathname === '/admin/admin-customer-mgt-page') {
      (async () => {
        try {
          const res = await userApi.getUsers();
          const userArr = res.data.user;
          console.log(userArr);

          setUsers(userArr);
        } catch (err) {
          toast.error(err.response?.data.message);
        } finally {
          setLoading(false);
        }
      })();
    } else if (location.pathname === '/admin/admin-admin-mgt-page') {
      (async () => {
        try {
          const res = await userApi.getAdmins();
          const userArr = res.data.user;
          console.log(userArr);

          setUsers(userArr);
        } catch (err) {
          toast.error(err.response?.data.message);
        } finally {
          setLoading(false);
        }
      })();
    } else if (location.pathname === '/my-address-page') {
      (async () => {
        try {
          const data = await customerApi.getUserAddress();
          console.log(data.data.allAddress);
          setAddress(data.data.allAddress);
        } catch (err) {
          toast.error(err.response?.data.message);
        } finally {
          setLoading(false);
        }
      })();
    } else {
      setLoading(false);
    }
  }, [onFetch, location]);

  const bannedUser = async (id) => {
    try {
      console.log('banned');
      await userApi.bannedUser(id);
    } catch (err) {
      toast.error(err.response?.data.message);
    } finally {
      setOnFetch((c) => !c);
    }
  };

  const unbannedUser = async (id) => {
    try {
      console.log('unbanned');
      await userApi.unbannedUser(id);
    } catch (err) {
      toast.error(err.response?.data.message);
    } finally {
      setOnFetch((c) => !c);
    }
  };

  const bannedAdmin = async (id) => {
    try {
      console.log('banned');
      await userApi.bannedAdmin(id);
    } catch (err) {
      toast.error(err.response?.data.message);
    } finally {
      setOnFetch((c) => !c);
    }
  };

  const unbannedAdmin = async (id) => {
    try {
      console.log('unbanned');
      await userApi.unbannedAdmin(id);
    } catch (err) {
      toast.error(err.response?.data.message);
    } finally {
      setOnFetch((c) => !c);
    }
  };

  const editUserProfile = async (data) => {
    try {
      await customerApi.editUserProfile(data);
    } catch (err) {
      toast.error(err.response?.data.message);
    } finally {
      setOnFetch((c) => !c);
    }
  };

  const createUserAddress = async (data) => {
    try {
      await customerApi.createAddress(data);
    } catch (err) {
      toast.error(err.response?.data.message);
    } finally {
      setOnFetch((c) => !c);
    }
  };

  const deleteUserAddress = async (id) => {
    try {
      await customerApi.deleteUserAddress(id);
    } catch (err) {
      console.log(err);
    } finally {
      setOnFetch((c) => !c);
    }
  };

  const editUserAddress = async (id, data) => {
    try {
      await customerApi.editUserAddress(id, data);
    } catch (err) {
      console.log(err);
    } finally {
      setOnFetch((c) => !c);
    }
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        user,
        users,
        setOnFetch,
        bannedUser,
        unbannedUser,
        bannedAdmin,
        unbannedAdmin,
        location,
        editUserProfile,
        createUserAddress,
        address,
        deleteUserAddress,
        setEditAddress,
        editAddress,
        editUserAddress,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
