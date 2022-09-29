import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout, Title, ModalDelete, ModalAdd } from "../../../components";
import {
  deletePost,
  createPost,
  updatePost,
  getPost,
} from "../../../store/actions/post/post.action";
import { Table } from "../components";

export const Post = () => {
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state);

  // state delete
  const [isOpen, setIsOpen] = useState(false);
  const [ID, setID] = useState(null);
  const [data, setData] = useState(null);
  // state add
  const [isOpenAdd, setIsOpenAdd] = useState(false);

  // modal delete action
  const handleOpen = (id) => {
    setIsOpen(true);
    setID(id);
  };
  const handleClose = () => setIsOpen(false);
  const handleDelete = async () => {
    try {
      dispatch(deletePost(ID));
      setIsOpen(false);
    } catch (error) {
      console.log("error");
    }
  };

  // modal add action
  const handleOpenAdd = () => setIsOpenAdd(true);
  const handleCloseAdd = () => {
    setIsOpenAdd(false);
    setData(null);
  };
  const handleAdd = (val) => {
    if (data) {
      dispatch(updatePost({ ...data, ...val }));
      setData(null);
      setIsOpenAdd(false);
    } else {
      dispatch(createPost(val));
      setIsOpenAdd(false);
    }
  };

  // modal edit action
  const handleOpenEdit = (value) => {
    setData(value);
    setIsOpenAdd(true);
  };

  useEffect(() => {
    for (let index = 1; index <= 100; index++) {
      dispatch(getPost(index));
    }
  }, [dispatch]);

  return (
    <Layout>
      <Title title="People" action={handleOpenAdd} />
      <Table
        data={post.data}
        handleDelete={handleOpen}
        handleEdit={handleOpenEdit}
      />
      <ModalDelete
        isOpen={isOpen}
        handleClose={handleClose}
        handleDelete={handleDelete}
        title="Are you sure you want to delete this person"
      />
      <ModalAdd
        isOpen={isOpenAdd}
        handleClose={handleCloseAdd}
        handleAdd={handleAdd}
        title="Create post"
        data={data}
      />
    </Layout>
  );
};
