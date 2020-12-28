import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Moment from "react-moment";
import { AiOutlineLeft } from "react-icons/ai";

// actions
import { getAttendanceType, onAttendance } from "../../actions/attendance";
import { getStudentDetail } from "../../actions/student";
import { hourFormat, minuteFormat } from "../../utils/timeFormat";

let reciprocalInterval;

@withRouter
class Attendance extends Component {
  state = {
    btnText: "",
    class_name: "",
    remaining_time: "",
    student_name: "",
    student_no: "",
    reciprocal: 30,
  };

  componentDidMount() {
    this._handleAttendanceType();
    this._handleStudentDetail();

    reciprocalInterval = setInterval(this._handleReciprocal, 1000);
  }

  componentWillUnmount() {
    clearInterval(reciprocalInterval);
  }

  _handleReciprocal = () => {
    const reciprocal = this.state.reciprocal - 1;

    if (reciprocal < 0) {
      this._handleGoHome();
    } else {
      this.setState({ reciprocal });
    }
  };

  render() {
    const { class_name, remaining_time, student_name, student_no, reciprocal } = this.state;
    return (
      <div className="container">
        <span className="backhome">
          <button onClick={this._handleGoHome}>
            <AiOutlineLeft /> 返回首頁 {reciprocal}s
          </button>
        </span>
        <div className="student_info">
          <p>
            <strong>班級</strong>
            <span>{class_name}</span>
          </p>
          <p>
            <strong>姓名</strong>
            <span>{student_name}</span>
          </p>
          <p>
            <strong>學號</strong>
            <span>{student_no}</span>
          </p>
          <p>
            <strong>剩餘服務時數</strong>
            <span>
              {hourFormat(remaining_time)}小時{minuteFormat(remaining_time)}分
            </span>
          </p>
        </div>
        <form onSubmit={this._handleAttendance}>
          <button type="submit" className="attendance">
            <strong>{this.state.btnText}</strong>
            <span>
              <Moment date={this.props.datetime} format={"YYYY-MM-DD"} interval={1000} />
            </span>
            <span>
              <Moment date={this.props.datetime} format="hh:mm:ss" interval={1000} />
            </span>
          </button>
        </form>
      </div>
    );
  }

  _handleAttendanceType = async () => {
    const { match, history } = this.props;
    const { student_no } = match.params;

    const data = await getAttendanceType({}, { student_no });

    if (Object.keys(data).length === 0) {
      history.push("/");
      return;
    }

    if (data.attendanceType) {
      this.setState({
        btnText: "簽到",
        datetime: new Date(data.datetime),
      });
    } else {
      this.setState({
        btnText: "簽退",
        datetime: new Date(data.datetime),
      });
    }
  };

  _handleGoHome = () => {
    const { history } = this.props;
    history.push("/");
  };

  _handleStudentDetail = async () => {
    const { match } = this.props;
    const { student_no } = match.params;

    const res = await getStudentDetail({}, { student_no });
    // console.log(res);

    this.setState({ ...res });
  };

  _handleAttendance = async (e) => {
    e.preventDefault();
    const { match } = this.props;
    const { student_no } = match.params;

    const res = await onAttendance({}, { student_no });
    const { attendanceType, today, nowtime } = res;

    this.props.history.push(`/viewtime/${attendanceType}/${today}/${nowtime}`);
  };
}

export default Attendance;
