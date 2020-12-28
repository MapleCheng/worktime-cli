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

// 取得學生詳細資訊
export const reqOnAttendance = async (params) => {
  const { student_no } = params;

  const payload = GETurl({ student_no });

  return request(`/student/detail?${payload}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
