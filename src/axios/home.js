import http from "../utils/http";
import { createFormData } from "../utils/form";

//登录
export async function login(account, password) {
  const formData = createFormData({
    account, 
    password
  });
  return await http.post("/api/account/login", formData);
}