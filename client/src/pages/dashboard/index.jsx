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
  quotes: [],
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
  const [{ form, show, quotes }, setState] = useState(initialState);

  const updateState = (state) =>
    setState((prevState) => ({ ...prevState, ...state }));

  useEffect(() => {
    getQuotes();
  }, []);

  const getQuotes = async () => {
    const response = await fetch("http://localhost:4000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTE0MTc5MWFjMzFhYTAwODE0YzFhOWYiLCJpYXQiOjE2OTcwMjE0MzB9.bNr1H-Z-eO4HsZNIqwAlMSVsyfE5J2eNQU9srHw7u1k",
      },
      body: JSON.stringify({
        query: `
    query getAllQuotes {
      quotes{
        name
        by
      }
    }
    `,
      }),
    });

    const res = await response.json();

    if (res.errors?.length > 0) {
    } else updateState({ quotes: res.data.quotes });
  };

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

      <div className="d-flex flex-column align-items-center justify-content-center mt-5">
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
          {quotes.map((item, index) => {
            return (
              <div
                className="card mt-3 quotes-card"
                key={`${index}-${item.by}`}
              >
                <div className="card-body">
                  <h6>{item.name}</h6>
                </div>
              </div>
            );
          })}
        </ul>
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
