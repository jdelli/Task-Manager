import React, { useState } from "react";
import apiServices from "../../apiServices";
import { useTaskContext } from "../../contex/TaskContex";

const AppTaskForm = () => {
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const { updateContextData } = useTaskContext();

    const handleSubmit = () => {
        apiServices
            .post("save-task", {
                title,
                description,
            })
            .then(() => {
                setTitle("");
                setDescription("");
                updateContextData();
            });
    };

    return (
        <div className="flex flex-col gap-3">
            <input
                value={title}
                onChange={(event) => {
                    setTitle(event.target.value);
                }}
                type="text"
                placeholder="Title"
                className="input input-bordered w-full"
            />
            <textarea
                value={description}
                onChange={(event) => {
                    setDescription(event.target.value);
                }}
                className="textarea textarea-bordered min-h-52"
                placeholder="Description"
            ></textarea>
            <button className="btn btn-secondary" onClick={handleSubmit}>
                Save Task
            </button>
        </div>
    );
};

export default AppTaskForm;
