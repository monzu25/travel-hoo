import React, { useRef, useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import useFirebase from "../../Firebase/useFirebase";
import { EditorState } from "draft-js";

const SahreMyExperience = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  console.log(editorState);
  useEffect(() => {
    console.log(editorState);
  }, [editorState]);

  const { user } = useFirebase();
  const titleRef = useRef();
  const descrpRef = useRef();
  const imgRef = useRef();
  const newsCountryRef = useRef();

  const handleAddExperience = (e) => {
    const title = titleRef.current.value;
    const description = descrpRef.current.value;
    const imageUrl = imgRef.current.value;
    const newsCountry = newsCountryRef.current.value;
    const current = new Date();
    const newsDate = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;
    const newsAuthor = user.displayName;
    const newsRating = 4.5;

    const newDailyNews = {
      title,
      description,
      imageUrl,
      newsCountry,
      newsDate,
      newsAuthor,
      newsRating,
    };

    fetch("https://vast-waters-96917.herokuapp.com/shareExperience", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newDailyNews),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Successfully added the user.");
          e.target.reset();
        }
      });
    e.preventDefault();
  };

  return (
    <div className="container ">
      <div className="m-4">
        <h1 className="my-3">Write Your Experience</h1>
        <form onSubmit={handleAddExperience}>
          <div className="mb-3">
            <input
              type="text"
              ref={titleRef}
              className="form-control"
              id="inputEmail"
              placeholder="Title"
              required
            />
          </div>
          <div className="mb-3">
            <Editor
              name="description"
              ref={descrpRef}
              placeholder="Description"
              style={{ width: "100%" }}
              id="description"
              editorState={editorState}
              onEditorStateChange={setEditorState}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              ref={imgRef}
              className="form-control"
              id="inputImg"
              placeholder="Image Link"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              ref={newsCountryRef}
              className="form-control"
              id="newsCountry"
              placeholder="News Country"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit Your Experience
          </button>
        </form>
      </div>
    </div>
  );
};

export default SahreMyExperience;
