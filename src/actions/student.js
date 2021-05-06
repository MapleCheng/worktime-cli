import { reqGetStudentNumberList, reqGetStudentDetail } from "../service/student";

export const getStudentNumberList = async (dispatch, payload) => {
  const res = await reqGetStudentNumberList(payload);

  if (res.code === 200) {
    return res.data.results;
  }
  return [];
};

export const getStudentDetail = async (dispatch, payload) => {
  const res = await reqGetStudentDetail(payload);

  return res.data;
};
