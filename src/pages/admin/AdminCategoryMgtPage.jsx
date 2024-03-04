import React from 'react';
import Button from '../../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGroups, addGroup, editGroup, onChangeGroupInput, onChangeGroupsInput, resetGroupInput } from '../../store/slices/groupSlice';
import { useEffect } from 'react';
import GroupsRow from '../../layouts/components/GroupsRow';
import GroupsRowForm from '../../features/product/components/GroupsRowForm';
import { useState } from 'react';
import { toast } from "react-toastify";
import Spinner from '../../components/Spinner';
import validateGroup, { validateEditGroup } from '../../features/product/validations/validate-group';


export default function AdminCategoryMgtPage() {
  const dispatch = useDispatch();
  const [isAddGroups, setIsAddGroups] = useState(false);
  const { groups, group, loading, error } = useSelector(store => store.group);

  useEffect(() => {
    dispatch(fetchGroups());
  }, [])

  const handleSubmitAddGroup = async (e, index) => {
    e.preventDefault();
    console.log("group: ", group)
    try {
      const validationError = validateGroup(group);
      console.log(validationError);

      await dispatch(addGroup(group));
      setIsAddGroups(c => !c);
    } catch (err) {
      console.log(JSON.stringify(err, null, 4));
      toast.error(err?.details[0]?.message);
    } finally {
      await dispatch(fetchGroups());
    }
  }

  const handleSubmitEditGroup = async (e, index) => {
    e.preventDefault();
    // console.log("groups: ", groups)
    // console.log("index of group: ", groups[index])
    const { id, group, ...categories } = groups[index];
    try {
      const validationError = validateEditGroup(categories);
      console.log(validationError);
      await dispatch(editGroup({ id, categories }));
    } catch (err) {
      // toast.error("err", err);
      toast.error(err?.details[0]?.message);
      // console.log(JSON.stringify(err, null, 4));
    } finally {
      await dispatch(fetchGroups());
    }
  }

  // For GroupRowForm (Add)
  const handleChangeInput = (e) => {
    // setInput({ ...input, [e.target.name]: e.target.value });
    dispatch(onChangeGroupInput({ name: e.target.name, value: e.target.value }));
  };

  // For GroupRow (Edit)
  const handleChangeInputArr = (e, index) => {
    // setInput({ ...input, [e.target.name]: e.target.value });
    dispatch(onChangeGroupsInput({ index, name: e.target.name, value: e.target.value }));
  };

  const handleIsAddGroup = () => {
    setIsAddGroups(c => !c);
    dispatch(resetGroupInput());
  }

  if (loading) return <Spinner />

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col gap-4'>
        {/* ==============PRODUCT SERIES================= */}
        <div className='font-bold'>Product Series</div>
        <div className='flex flex-col'>
          <div className='flex w-full h-16 justify-between bg-grayBg100 items-center px-4 py-2'>
            <div className='flex'>
              <div className='w-16'>Id</div>
              <div className='w-48'>Series Name</div>
            </div>
            <div className=''><Button color="white" bg="red">ADD</Button></div>
          </div>
        </div>
        {/* ==============PRODUCT GROUP================= */}
        <div className='font-bold'>Product Groups</div>
        <div className='flex flex-col'>
          <div className='flex h-16 w-full justify-between bg-grayBg100 items-center px-4 py-2'>
            <div className='flex'>
              <div className='w-16'>Id</div>
              <div className='w-48'>Group Name</div>
              <div className='w-48'>Category Name</div>
            </div>
            {isAddGroups || <div className=''><Button color="white" bg="red" onClick={handleIsAddGroup}>ADD</Button></div>}
          </div>
          {isAddGroups && <GroupsRowForm onChange={handleChangeInput} onSubmit={handleSubmitAddGroup} setIsAddGroups={setIsAddGroups} onCancel={handleIsAddGroup} />}
          {groups.map((el, index) => <GroupsRow key={el.id} group={el} onChange={(e) => handleChangeInputArr(e, index)} onSubmitEdit={(e) => handleSubmitEditGroup(e, index)} />)}
        </div>
      </div>
    </div>
  );
}