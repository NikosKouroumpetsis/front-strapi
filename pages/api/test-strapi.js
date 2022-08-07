import datasource from "../../datalayer/index";

export default async function handler(req, res) {
  // const data = await datasource.getCompanyBySlug({
  //   slug: "ai-technology",
  // });

  // const data = await datasource.getCompanies();

  // const data = await datasource.getJobBySlug({
  //   slug: "junior-software-engineer-expert-next-js-and-reactjs",
  // });

  // const data = await datasource.getJobs({ page: 1, pageSize: 2 });
  // const data = await datasource.getJobsSkills();

  // const data = await datasource.searchJobs({
  //   featuredJobsOnly: true,
  // });

  // const data = await datasource.searchJobs({
  //   minBaseSalary: 10000,
  //   maxBaseSalary: 40000,
  // });

  const data = await datasource.searchJobs({
    experienceLevel: [],
  });

  // const data = await datasource.searchJobs({
  //   searchBarText: "Athens",
  // });
  res.status(200).json(data);
}
