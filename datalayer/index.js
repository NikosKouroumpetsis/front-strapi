let datasource = {};

// import * as strapiJobAPI from "./strapi/job";
import * as strapiCompanyAPI from "./strapi/company";
import * as strapiJobPI from "./strapi/job";

if (process.env.DATALAYER_ENGINE === "strapi") {
  datasource = { ...strapiCompanyAPI, ...strapiJobPI };
}

export default datasource;
