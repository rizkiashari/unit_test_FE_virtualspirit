/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { InputField, TextAreaField } from "./index";

export const ModalAdd = ({ handleClose, handleAdd, title, isOpen, data }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleAction = (val) => {
    handleAdd(val);
    reset({
      title: "",
      body: "",
      userId: "",
    });
  };

  useEffect(() => {
    if (data) {
      reset({
        title: data.title,
        body: data.body,
        userId: data.userId,
      });
    } else {
      reset({
        title: "",
        body: "",
        userId: "",
      });
    }
  }, [data]);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <Modal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel="Modal Delete"
      style={customStyles}
    >
      <div className="relative dark:bg-gray-700">
        <button
          onClick={handleClose}
          type="button"
          className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          data-modal-toggle="popup-modal"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
        <div className="p-6">
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            {title}
          </h3>
          <form onSubmit={handleSubmit(handleAction)}>
            <InputField
              label="User id"
              name="userId"
              type="text"
              placeholder="e.g: 1"
              {...register("userId", {
                required: true,
              })}
              error={errors.userId}
              errorWording={{
                required: "This field is required",
              }}
            />
            <InputField
              label="Title"
              name="title"
              type="text"
              placeholder="e.g: magnam facilis autem"
              {...register("title", {
                required: true,
              })}
              error={errors.title}
              errorWording={{
                required: "This field is required",
              }}
            />
            <TextAreaField
              label="Body"
              name="body"
              placeholder="e.g: Tatooine"
              {...register("body", {
                required: true,
              })}
              error={errors.body}
              errorWording={{
                required: "This field is required",
              }}
            />
          </form>
          <div className="flex justify-end">
            <button
              onClick={handleClose}
              data-modal-toggle="popup-modal"
              type="button"
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600 mr-2"
            >
              No, cancel
            </button>
            <button
              onClick={handleSubmit(handleAction)}
              data-modal-toggle="popup-modal"
              type="button"
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
            >
              Yes, I'm sure
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
