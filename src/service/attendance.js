import request from "../utils/request";
import { GETurl } from "../utils/utils";

// 取得簽到狀態
export const reqGetAttendanceType = async (params) => {
  const { student_no } = params;

  const payload = GETurl({ student_no });

  return request(`/attendance?${payload}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// 學生簽到/簽退
export const reqOnAttendance = async (params) => {
  const { student_no } = params;

  const payload = GETurl({ student_no });

  return request(`/attendance?${payload}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
