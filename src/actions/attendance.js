import { reqGetAttendanceType, reqOnAttendance } from "../service/attendance";

export const getAttendanceType = async (dispatch, payload) => {
  const res = await reqGetAttendanceType(payload);

  console.log(res);
};

export const onAttendance = async (dispatch, payload) => {
  const res = await reqOnAttendance(payload);

  console.log(res);
};
