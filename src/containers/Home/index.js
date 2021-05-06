import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { BiCog } from "react-icons/bi";

// actions
import { getStudentNumberList } from "../../actions/student";

// image
import Logo from "../../assets/logo.gif";

@withRouter
class Home extends Component {
  state = {
    student_list: [],
    student_no: "",
  };
  componentDidMount() {
    this.handleStudentNumberList();
  }
  render() {
    const { student_list, student_no } = this.state;
    return (
      <div className="container">
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img src={Logo} alt="" style={{ width: 200, margin: 5 }} />
          <BiCog size={25} style={{ cursor: "pointer", padding: 10 }} onClick={this._handleSetHostName} />
        </div>
        <form onSubmit={this._handleSubmit}>
          <h2 style={{ textAlign: "center", margin: 0 }}>服務簽到系統</h2>
          <select
            value={student_no}
            style={{ margin: "20px auto" }}
            onChange={(event) => {
              this.setState({ student_no: event.target.value });
            }}
          >
            <option value="">請選擇您的學號</option>
            {student_list.map((item, key) => {
              return (
                <option key={key} value={item.student_no}>
                  {item.student_no}
                </option>
              );
            })}
          </select>
          <button type="submit">登入</button>
        </form>
        <span>學生事務處-課外活動指導組</span>
      </div>
    );
  }

  _handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.student_no !== "") {
      this.props.history.push(`/attendance/${this.state.student_no}`);
    } else {
      alert("請選擇您的學號");
    }
  };

  handleStudentNumberList = async () => {
    const student_list = await getStudentNumberList({}, {});

    this.setState({ student_list });
  };

  _handleSetHostName = () => {
    const { history } = this.props;

    history.push("/hostname");
  };
}

export default Home;
