import request from "../utils/request";
import { GETurl } from "../utils/utils";

// 取得學號列表
export const reqGetStudentNumberList = async (params) => {
  return request(`/student/number`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// 取得學生資訊
export const reqGetStudentDetail = async (params) => {
  const { student_no } = params;

  const payload = GETurl({ student_no });

  return request(`/student/info?${payload}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
