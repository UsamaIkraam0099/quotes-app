import "./style.scss";
import { useState, useEffect } from "react";

// Others
import { NavBar } from "../../comman";
import { Modal } from "../../components/core";

const data = [
  {
    name: "hdsfusdh buasbfduyfabk",
  },

  {
    name: "hdsfusdh buasbfduyfabk",
  },

  {
    name: "hdsfusdh buasbfduyfabk",
  },
];

let initialState = {
  show: false,
  form: {
    quote: {
      value: "",
      type: "INPUT",
      label: "Quote",
      placeholder: "Type your quote",
    },
  },
};

const Dashboard = () => {
  const [{ show, form }, setState] = useState(initialState);

  const updateState = (state) =>
    setState((prevState) => ({ ...prevState, ...state }));

  const handleInputChange = (name, value) => {
    let formCopy = { ...form };
    formCopy[name].value = value;
    updateState({ form: formCopy });
  };

  const handlePress = (flag) => {
    switch (flag) {
      case 1:
        updateState({ show: true });
        break;
      case 2:
        break;
    }
  };

  const handleClose = (flag) => {
    if (flag === 1) {
      let data = {};
      for (let key in form) data[key] = form[key].value;

      console.log({ data });

      return;
    }

    updateState({ show: false });
  };

  return (
    <section>
      <NavBar handlePress={handlePress} />

      <div className="container flex-column flex-column align-items-center justify-content-center">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <img
            src="https://robohash.org/set_set3/bgset_bg1/3.14159?size=200x200"
            className="img-thumbnail"
            alt="profile"
          />

          <h5 className="mt-2">Usama Ikraam</h5>
          <p className="mt-1">usama.ikraam@al-ghurair.com</p>
        </div>

        <div className="d-flex flex-column align-items-center justify-content-center">
          <ul>
            {data.map((item, index) => {
              return (
                <div className="card mt-3 quotes-card" key={`-${index}`}>
                  <div className="card-body">
                    <h6>{item.name}</h6>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </div>

      <Modal
        show={show}
        form={form}
        handleClose={handleClose}
        handleInputChange={handleInputChange}
      />
    </section>
  );
};

export default Dashboard;
