import { useReducer, createContext, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
const initialState = { user: null };

//context
const Context = createContext();

//reducer
const rootReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
};

//context provider (RIDER PROVIDER op)
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  const router = useRouter();
  useEffect(() => {
    dispatch({
      type: "LOGIN",
      payload: JSON.parse(window.localStorage.getItem("user")),
    });
  }, []);

  axios.interceptors.response.use(
    function (responce) {
      //take status code
      //200 range
      return responce;
    },
    function (error) {
      //status code >=299
      let res = error.response;
      if (res.status === 401 && res.config && !res.config.__isRetryRequest) {
        return new Promise((resolve, reject) => {
          const instance = axios.create({
            withCredentials: true,
            baseURL: process.env.NEXT_PUBLIC_API,
          });
          instance
            .get(`/logout`)
            .then((data) => {
              console.log("401 error => logout");
              dispatch({ type: "LOGOUT" });

              window.localStorage.removeItem("user");
              router.push("/login");
            })
            .cathc((err) => {
              console.log("AXIOS INTERCEPTORS ERR", err);
              reject(error);
            });
        });
      }
      return Promise.reject(error);
    }
  );
  useEffect(() => {
    const getCsrfToken = async () => {
      const instance = axios.create({
        withCredentials: true,
        baseURL: process.env.NEXT_PUBLIC_API,
      });
      const { data } = await instance.get(`/csrf-token`);
      console.log("CSRF", data);
      axios.defaults.headers["X-CSRF-Token"] = data.csrfToken;
    };
    getCsrfToken();
  }, []);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { Context, Provider };
