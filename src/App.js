import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchUsers } from "./redux/actions";
import { connect } from "react-redux";

function App(props) {
  // let state = useSelector((state) => state);
  // let dispatch = useDispatch();
  // console.log(state);

  console.log(props);

  return (
    <div>
      {/* <button
        onClick={() => {
          dispatch(fetchUsers());
        }}
      >
        async fetch
      </button> */}

      <button
        onClick={() => {
          props.fetchUsersI();
        }}
      >
        async fetch
      </button>
    </div>
  );
}

let mapStateToProps = (state) => {
  // console.log(state);
  return { ...state };
};
let mapDispatchToProps = (dispatch) => {
  return {
    fetchUsersI: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
