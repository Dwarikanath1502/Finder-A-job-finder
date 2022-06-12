import React from "react";
import Bot from "./Bot";

function Services() {
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "grey", height: '190vh' }}>
        <div className="d-flex justify-content-center my-2 ">
          <h2 style={{ marginTop: "70px" }}>
            <strong>Services we provide</strong>
          </h2>
        </div>
        <div className="d-flex justify-content-center my-5">
          <div className="col ">
            <div className="row-sm-6">
              <div className="card mb-3 ml-3 mr-3">
                <div className="card-body">
                  <h5 className="card-title">Advanced Recruitment Tools</h5>
                  <p className="card-text">
                    Make recruitment and talent management your competitive
                    advantages with the preeminent recruitment mechanism to
                    compete in the market. The advanced recruitment feature
                    provides all the essential tools from the single page to
                    list, view and manage jobs; view applications, and access
                    the analytic insights. This tool helps job seekers and
                    employers to streamline through the hiring process.An ideal
                    job portal must have a ubiquitous and user-specific
                    recruitment tool, with step-by-step user guide, indications
                    and responsive wizard in order to provide the meaningful
                    hiring process.
                  </p>
                </div>
              </div>
            </div>
            <div className="row-sm-6">
              <div className="card mb-3 ml-3 mr-3">
                <div className="card-body">
                  <h5 className="card-title">Revenue Models</h5>
                  <p className="card-text">
                    The Job boards have two source of core audiences for
                    generating money, employers and job seekers as paid listing
                    or premium service. However, most of the job sites focus on
                    one of those two groups – and mostly paid subscription model
                    for employers and job listing companies. This revenue model
                    generates revenue by charging the employers a recurring fee
                    based on either tenure-based subscription or limit with
                    number of job posting on purchased package.While on the
                    other side, not every job seeker wants to spend money on
                    searching the job, but can pay the minimum amount to
                    increase the visibility of their resume. However, the job
                    portals could charge small amount for registration, which
                    helps them to get a qualified candidate.
                  </p>
                </div>
              </div>
            </div>
            <div className="row-sm-6">
              <div className="card mb-3 ml-3 mr-3">
                <div className="card-body">
                  <h5 className="card-title">Quick and Easy Registration</h5>
                  <p className="card-text">
                    No recruiter or job seeker wants to go around every
                    conversation with unwanted details. The portal should
                    facilitate the job seekers and employers to build a strong
                    profile attracting their leads. The profile page holds all
                    the basic information related to the company and the
                    professional background of the job seekers. Thus, an easy
                    and quick registration is widely preferred by all user
                    groups of Job Board.You must facilitate your users with
                    login and signup through social accounts including
                    Linked-In, Facebook and Google that can also fetch their
                    basic profile information from.
                  </p>
                </div>
              </div>
            </div>
            <div className="row-sm-6">
              <div className="card mb-3 ml-3 mr-3">
                <div className="card-body">
                  <h5 className="card-title">Advance Filters</h5>
                  <p className="card-text">
                    The philosophy is that you can never have too many filters
                    for any intelligent web portal, however if you are creating
                    a website for a job board, a selection for a smart filter
                    are a must so your users can use your job portal in a
                    stagnation. Job seekers expect desired and immediate results
                    from a job portal. This job portal website feature provides
                    the seeker with perfect match from the flock of job listing,
                    and filters for which he has to apply and get rid of
                    navigating every job post and find the ones that fit his
                    requirement. With the execution of each agile filter, his
                    time for job search will reduce significantly with burning
                    efforts.
                  </p>
                </div>
              </div>
            </div>
            <div className="row-sm-6">
              <div className="card mb-3 ml-3 mr-3">
                <div className="card-body">
                  <h5 className="card-title">Job Alerts</h5>
                  <p className="card-text">
                    Job Alert allows candidates to create a list of notification
                    mails and messages based on the signal points he sets for
                    including keywords, location and positions, whenever this
                    matches the set criteria, then the job seeker will get the
                    automated email notification for that job to apply. You must
                    encourage job seekers to enable push notifications while
                    signing up for the job portal, the ignorance of this feature
                    could impairment your purpose of the job board software.
                  </p>
                </div>
              </div>
            </div>
            <div className="row-sm-6">
              <div className="card mb-4 ml-3 mr-3">
                <div className="card-body">
                  <h5 className="card-title">Job posting</h5>
                  <p className="card-text">
                    Employers advertise on job openings is a process that may
                    have been complicated without streamline with Job Posting
                    feature, as tons of postings happens and most of are
                    automatically. The more successful job portal is the more
                    comfort for employers to add a new Job Post, with the
                    essential meta data he can add on the go, keywords, tags and
                    more comprehensive information making the job listing more
                    precise and relevant to the viewers. With the pre-ordained
                    Questionnaire mechanism, the system can bring the perfect
                    match and more qualified applicants.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Bot />
      </div>
    </>
  );
}

export default Services;
