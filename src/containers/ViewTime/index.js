import React, { Component } from "react";
import { hourFormat, minuteFormat } from "../../utils/timeFormat";
import Moment from "react-moment";
import { withRouter } from "react-router-dom";

class ViewTime extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push("/");
    }, 30000);
  }
  render() {
    const { attendance, today, nowtime } = this.props.match.params;
    const now = new Date(`${today} ${hourFormat(nowtime)}:${minuteFormat(nowtime)}`);
    return (
      <div className="container">
        <div className="result-time">
          <h1>{attendance ? "簽到" : "簽退"}時間</h1>
          <strong>
            <Moment date={now} format="YYYY年MM月DD日" />
          </strong>
          <span>
            {hourFormat(nowtime)}:{minuteFormat(nowtime)}
          </span>
          <button
            type="button"
            className="btn btn-submit"
            onClick={() => {
              this.props.history.push("/");
            }}
          >
            回首頁
          </button>
        </div>
      </div>
    );
  }
}
export default withRouter(ViewTime);
