import { reqGetStudentNumberList, reqGetStudentDetail } from "../service/student";

export const getStudentNumberList = async (dispatch, payload) => {
  const res = await reqGetStudentNumberList(payload);

  console.log(res);
};

export const getStudentDetail = async (dispatch, payload) => {
  const res = await reqGetStudentDetail(payload);

  console.log(res);
};
