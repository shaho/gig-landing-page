import axios from "axios";

export const API_BASE_URL = "http://207.154.254.31/api";
export const TOKEN =
  "XIckeH0L8Mv8JX3O2pFPFI1lhOLwaI9aVmjAvEle40M0q8BPCWphK6vjTLr1FOPYI6sHD";

/* ----------------------- SET DEFAULT CONFIGURATIONS ----------------------- */
axios.defaults.baseURL = API_BASE_URL;
axios.defaults.headers.common["token"] = TOKEN;

/* -------------------------------------------------------------------------- */
/*                                 GET OFFICES                                */
/* -------------------------------------------------------------------------- */

export const listCompanyOffices = async () => {
  return await axios.get(`/offices`);
};

/* -------------------------------------------------------------------------- */
/*                                 GET VALUES                                 */
/* -------------------------------------------------------------------------- */

export const listCompanyValues = async (language = "en") => {
  return await axios.get(`/company-values?language=${language}`);
};
