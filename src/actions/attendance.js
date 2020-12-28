import { reqGetAttendanceType, reqOnAttendance } from "../service/attendance";

export const getAttendanceType = async (dispatch, payload) => {
  const res = await reqGetAttendanceType(payload);

  return res.data;
};

export const onAttendance = async (dispatch, payload) => {
  const res = await reqOnAttendance(payload);

  return res.data;
};
