/* eslint-disable react/no-unescaped-entities */
/* This example requires Tailwind CSS v2.0+ */

import datasource from "../datalayer";
import JobsPage from "../components/ui/JobsPage";

export default function Index({ jobs, jobSkills }) {
  return <JobsPage jobs={jobs} jobSkills={jobSkills} />;
}

export const getStaticProps = async (ctx) => {
  const jobs = await datasource.getJobs();
  const jobSkills = await datasource.getJobsSkills();
  // console.log(jobSkills);
  // console.log(jobs);

  return {
    props: {
      jobs,
      jobSkills,
    },
    revalidate: 5,
  };
};

// export default function Index() {
//   return (
//     <button
//       type='button'
//       className='relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
//     >
//       <svg
//         className='mx-auto h-12 w-12 text-gray-400'
//         xmlns='http://www.w3.org/2000/svg'
//         stroke='currentColor'
//         fill='none'
//         viewBox='0 0 48 48'
//         aria-hidden='true'
//       >
//         <path
//           strokeLinecap='round'
//           strokeLinejoin='round'
//           strokeWidth={2}
//           d='M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6'
//         />
//       </svg>
//       <div className='mt-2 block text-lg font-medium text-gray-900'>
//         Well done!
//       </div>
//       <div className='mt-2 block text-sm font-medium text-gray-700'>
//         If you see this message, it means everything is working well and <br />{' '}
//         you're ready to move to the next lesson.
//       </div>
//     </button>
//   );
// }