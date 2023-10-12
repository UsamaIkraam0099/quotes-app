import "./style.scss";
import { useState } from "react";

// Others
import { NavBar } from "../../comman";
import { Modal } from "../../components/core";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { CREATE_QUOTE, GET_QUOTES_BY_ID } from "../../graphql/queries";

let initialState = {
  show: false,
  visible: false,
  form: {
    name: {
      value: "",
      type: "INPUT",
      label: "Quote",
      placeholder: "Type your quote",
    },
  },
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [{ show, form, visible }, setState] = useState(initialState);

  const updateState = (state) =>
    setState((prevState) => ({ ...prevState, ...state }));

  const USER = JSON.parse(localStorage.getItem("@USER"));

  const { data, error, refetch } = useQuery(GET_QUOTES_BY_ID, {
    fetchPolicy: "network-only",
    variables: { quoteBy: USER._id },
    context: {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("@TOKEN"))}`,
      },
    },
    notifyOnNetworkStatusChange: true,
    onError: (error) => {
      console.log({ error });
    },
    onCompleted: (data) => {
      // console.log({ data });
    },
  });

  const [createQuote] = useMutation(CREATE_QUOTE, {
    onError: (error) => {
      updateState({ visible: false });
      alert(error.message);
    },
    onCompleted: (data) => {
      refetch();
      updateState({ show: false, visible: false });
    },
    context: {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("@TOKEN"))}`,
      },
    },
  });

  const { quote } = data || {};

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
        localStorage.clear();
        navigate("/");
        break;
    }
  };

  const handleClose = (flag) => {
    if (flag === 1) {
      updateState({ visible: true });
      let data = {};
      for (let key in form) data[key] = form[key].value;

      setTimeout(() => {
        createQuote({ variables: { name: data.name } });
      }, 3000);
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

        <h5 className="mt-2">{`${USER.firstName} ${USER.lastName}`}</h5>
        <p className="mt-1">{`${USER.email}`}</p>
      </div>

      <div className="d-flex flex-column align-items-center justify-content-center">
        <ul>
          {quote?.map((item, index) => {
            return (
              <div
                className="card mt-3 quotes-card"
                key={`${index}-${item.by}`}
              >
                <div className="card-body">
                  <h6>{item.name}</h6>
                </div>

                <i
                  class="bi bi-arrow-clockwise update-icon"
                  onClick={() => console.log("Update")}
                ></i>

                <i
                  className="bi bi-trash3-fill delete-icon"
                  onClick={() => console.log("Delete")}
                ></i>
              </div>
            );
          })}
        </ul>

        {error && <h5 className="error-label">{error.message}</h5>}
      </div>

      <Modal
        show={show}
        form={form}
        visible={visible}
        handleClose={handleClose}
        handleInputChange={handleInputChange}
      />
    </section>
  );
};

export default Dashboard;
