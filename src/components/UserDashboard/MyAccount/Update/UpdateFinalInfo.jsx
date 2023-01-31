import React, { useState } from "react";
import classes from "./UpdateBasic.module.css";
// import { useDispatch } from "react-redux";
// import { updateAction } from "../../../../Store/UpdateSlice";
const UpdateFinalInfo = () => {
//   const dispatch = useDispatch();
  const [finish, setFinish] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(finish);
    // dispatch(
    //   updateAction.UpdateProfiles({
    //     BasicInfo: false,
    //     Address: false,
    //     EducationLevel: false,
    //     MaritalStates: false,
    //     Emergency: false,
    //     agreement: true,
    //   })
    // );
  };
  return (
    <div className={classes["basic-container"]}>
      <h1>agreement</h1>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          quas adipisci est veritatis soluta consequuntur voluptatum omnis
          labore tempora ut. Totam quisquam necessitatibus fugit asperiores
          harum voluptate, neque iure voluptatem. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Magnam voluptatibus qui quaerat!
          Accusamus maxime explicabo culpa rem unde esse iusto voluptas vero
          recusandae quae voluptatem facilis, similique nihil, dolor et. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Veritatis corrupti
          odio amet quis totam placeat ut natus, quo voluptate optio voluptates!
          Iure quaerat quos voluptatum deleniti voluptates maxime corporis
          nostrum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
          cumque voluptas eveniet! Assumenda neque modi repellat quibusdam quam?
          Sunt voluptatum nesciunt dignissimos inventore. Iste non aut
          consequatur quae quam. Aliquam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Explicabo quas adipisci est veritatis soluta
          consequuntur voluptatum omnis labore tempora ut. Totam quisquam
          necessitatibus fugit asperiores harum voluptate, neque iure
          voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Magnam voluptatibus qui quaerat! Accusamus maxime explicabo culpa rem
          unde esse iusto voluptas vero recusandae quae voluptatem facilis,
          similique nihil, dolor et. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Veritatis corrupti odio amet quis totam placeat ut
          natus, quo voluptate optio voluptates! Iure quaerat quos voluptatum
          deleniti voluptates maxime corporis nostrum.
        </p>
      </div>
      <form className={classes["basic-form"]} onSubmit={submitHandler}>
        <div>
          <input type="checkbox" onChange={(e) => setFinish(e.target.value)} />
          <label htmlFor="">agree</label>
        </div>
        <div className={classes["basic-btn"]}>
          <button>Finish</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateFinalInfo;
