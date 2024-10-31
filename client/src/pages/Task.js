import React from "react";
import { FileInput, Select, TextInput, Button } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useEffect, useRef } from "react";

export default function Task() {
  const quillRef = useRef(null);

  useEffect(() => {
    if (quillRef.current) {
      // Access to Quill editor via ref
      const editor = quillRef.current.getEditor();
      console.log(editor);
    }
  }, []);

  return (
    <div className="p-4 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Create Task</h1>
      <form className="flex flex-col gap-5">
        <div className="flex flex-col gap-5 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
          />
          <Select>
            <option value="planning">Planning</option>
            <option value="analysis">Analysis</option>
            <option value="desing">Design</option>
            <option value="implementetion">Implemetation</option>
            <option value="testing">Testing</option>
            <option value="deployment">Deployment</option>
          </Select>
        </div>
        <ReactQuill
          ref={quillRef}
          theme="snow"
          placeholder="Write task"
          className="h-70 mb-12"
          required
        />
        <div className="flex gap-5 items-center justify-between border-4 border-teal-400 border-solid p-3">
          <FileInput type="file" accept="image/*,application/pdf,text/plain" />
          <Button type="button" gradientMonochrome="teal" size="sm">
            Upload file
          </Button>
        </div>

        <Button type="submit" gradientMonochrome="teal">
          Add Task
        </Button>
      </form>
    </div>
  );
}
