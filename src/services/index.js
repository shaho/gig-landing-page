import axios from "axios";

/* ----------------------- SET DEFAULT CONFIGURATIONS ----------------------- */

axios.defaults.baseURL = process.env.GIG_API_URL;
axios.defaults.headers.common["token"] = process.env.TOKEN;

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
