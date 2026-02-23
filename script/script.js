let interviewList = [];
let rejectedList = [];

// get the count three buttons
let totalCount = document.getElementById("totalCount");
let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");

// get the three buttons
let allTabBtn = document.getElementById("all-tab-btn");
let interviewTabBtn = document.getElementById("interview-tab-btn");
let rejectedTabBtn = document.getElementById("rejected-tab-btn");

// get the parent of cards
let cardParent = document.getElementById("jobs-section");
// get the show display section
const showDisplay = document.getElementById("show-display");

// get the total jobs
let totalJob = document.getElementById("total-job");
console.log(totalJob);

function calculateCount() {
  totalCount.innerText = cardParent.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;

  // show total job
  totalJob.innerText = cardParent.children.length;
}

// call the function calculate
calculateCount();

//take a variable  to remember the tab
let presentTab = "";
// all tab button toggle style
function toggleStyle(id) {
  // add all button bg white and text blue
  allTabBtn.classList.add("bg-white", "text-[#64748B]");
  interviewTabBtn.classList.add("bg-white", "text-[#64748B]");
  rejectedTabBtn.classList.add("bg-white", "text-[#64748B]");

  // remove bg blue and text white
  allTabBtn.classList.remove("bg-[#3B82F6]", "text-white");
  interviewTabBtn.classList.remove("text-white");
  rejectedTabBtn.classList.remove("text-white");

  // dynamically add bg color blue and test white
  document.getElementById(id).classList.remove("bg-white", "text-[#64748B]");
  document.getElementById(id).classList.add("bg-[#3B82F6]", "text-white");

  // update parentTab
  presentTab = id;
  if (id == "interview-tab-btn") {
    showDisplay.classList.remove("hidden");
    cardParent.classList.add("hidden");
    showDisplayInterview();
  } else if (id == "all-tab-btn") {
    showDisplay.classList.add("hidden");
    cardParent.classList.remove("hidden");
  } else if (id == "rejected-tab-btn") {
    showDisplay.classList.remove("hidden");
    cardParent.classList.add("hidden");
    showDisplayRejected();
  }

  // show tab way jobs
  if (id == "interview-tab-btn") {
    document.getElementById("tab-total-jobs").innerText = interviewList.length;
    document.getElementById("tab-total-jobs").classList.remove("hidden");
  } else if (id == "all-tab-btn") {
    document.getElementById("tab-total-jobs").classList.add("hidden");
  } else if (id == "rejected-tab-btn") {
    document.getElementById("tab-total-jobs").innerText = rejectedList.length;
    document.getElementById("tab-total-jobs").classList.remove("hidden");
  }
}

// add event listener add on two button by delegated
document.querySelector("main").addEventListener("click", function (event) {
  if (event.target.classList.contains("btn-interview")) {
    let btnParent = event.target.parentNode.parentNode;

    // get the detail of card
    let jobName = btnParent.querySelector(".job-name").innerText;
    let jobTitle = btnParent.querySelector(".job-title").innerText;
    let jobSalary = btnParent.querySelector(".job-salary").innerText;
    let status = btnParent.querySelector(".status").innerText;
    let jobDetails = btnParent.querySelector(".job-details").innerText;
    let btnInterview = btnParent.querySelector(".btn-interview").innerText;
    let btnRejected = btnParent.querySelector(".btn-rejected").innerText;

    // status style
    btnParent.querySelector(".status").innerText = "INTERVIEW";

    btnParent
      .querySelector(".status")
      .classList.add("bg-[#10B98130]", "rounded-sm", "text-[#10B981]");
    btnParent.querySelector(".status").classList.remove("bg-[#EEF4FF]");

    btnParent
      .querySelector(".status")
      .classList.remove("bg-[#EF444430]", "text-[#EF4444]");

    // make object with card details
    const jobInfo = {
      jobName,
      jobTitle,
      jobSalary,
      status: "INTERVIEW",
      jobDetails,
      btnInterview,
      btnRejected,
    };

    // check array
    let isExist = false;

    for (let item of interviewList) {
      if (item.jobName == jobInfo.jobName) {
        isExist = true;
        break;
      }
    }

    // push in interviewList array
    if (!isExist) {
      interviewList.push(jobInfo);
    }

    // remove from rejectedList if same job both array by filter
    rejectedList = rejectedList.filter(
      (item) => item.jobName != jobInfo.jobName,
    );

    if (presentTab == "rejected-tab-btn") {
      showDisplayRejected();
    }

    calculateCount();
  } else if (event.target.classList.contains("btn-rejected")) {
    let btnParent = event.target.parentNode.parentNode;

    // get the detail of card
    let jobName = btnParent.querySelector(".job-name").innerText;
    let jobTitle = btnParent.querySelector(".job-title").innerText;
    let jobSalary = btnParent.querySelector(".job-salary").innerText;
    let status = btnParent.querySelector(".status").innerText;
    let jobDetails = btnParent.querySelector(".job-details").innerText;
    let btnInterview = btnParent.querySelector(".btn-interview").innerText;
    let btnRejected = btnParent.querySelector(".btn-rejected").innerText;
    console.log(btnInterview);
    console.log(btnRejected);

    btnParent.querySelector(".status").innerText = "REJECTED";
    btnParent
      .querySelector(".status")
      .classList.remove("bg-[#10B98130]", "text-[#10B981]");
    btnParent
      .querySelector(".status")
      .classList.add("bg-[#EF444430]", "rounded-sm", "text-[#EF4444]");

    // make object with details
    const jobInfo = {
      jobName,
      jobTitle,
      jobSalary,
      status: "REJECTED",
      jobDetails,
      btnInterview,
      btnRejected,
    };
    console.log(jobInfo);

    // check rejectedList array
    let isExist = false;
    for (let rejected of rejectedList) {
      if (rejected.jobName == jobInfo.jobName) {
        isExist = true;
        break;
      }
    }

    // push rejectedList array
    if (!isExist) {
      rejectedList.push(jobInfo);
    }

    // remove from interviewList array if same job both array by filter
    interviewList = interviewList.filter(
      (item) => item.jobName != jobInfo.jobName,
    );

    if (presentTab == "interview-tab-btn") {
      showDisplayInterview();
    }
    // call the calculateCount function
    calculateCount();
  }
});

// show display function for interview
function showDisplayInterview() {
  showDisplay.innerHTML = "";

  // if there is no jobs in interviewList array
  if (interviewList.length == 0) {
    showDisplay.innerHTML = `
    <div class="bg-white py-8 sm:py-15 text-center">
        <img class="mx-auto" src="./no-job.png" alt="" />
        <h3 class="text-[#002C5C] text-[24px] font-semibold">
          No jobs available
        </h3>
        <p class="text-[#64748B]">Check back soon for new job opportunities</p>
      </div>
    `;
  }

  // create element
  for (let interview of interviewList) {
    // console.log(interview);
    let div = document.createElement("div");
    div.className =
      "card flex sm:justify-between gap-4 p-6 rounded-md bg-white mb-6";
    div.innerHTML = `
    <div class="card space-y-4">
            <div>
              <h3 class="job-name text-[#002C5C] text-[18px] font-semibold">
                ${interview.jobName}
              </h3>
              <p class="job-title text-[#64748B]">${interview.jobTitle}</p>
            </div>

            <p class="job-salary text-[#64748B]">
              ${interview.jobSalary}
            </p>

            <button
              class="status bg-[#10B98130] text-[#10B981] rounded-sm font-medium px-3 py-2"
            >
              ${interview.status}
            </button>
            <p class="job-details text-[#64748B]">
              ${interview.jobDetails}
            </p>

            <div class="flex flex-col md:flex-row gap-3">
              <button
                class="btn-interview px-3 py-2 font-semibold rounded-sm border-2 border-[#10B981] text-[#10B981] cursor-pointer"
              >
                ${interview.btnInterview}
              </button>
              <button
                class="btn-rejected px-3 py-2 font-semibold rounded-sm border-2 border-[#EF4444] text-[#EF4444] cursor-pointer"
              >
                ${interview.btnRejected}
              </button>
            </div>
          </div>

          <div>
            <button
              id="delete-btn"
              class="bg-white border w-10 h-10 border-[#E6E7E9] rounded-full cursor-pointer flex justify-center items-center"
            >
              <i class="text-[#64748B] fa-regular fa-trash-can"></i>
            </button>
          </div>
    `;

    // append to the parent section
    showDisplay.appendChild(div);
  }
}

// show display for rejected
function showDisplayRejected() {
  showDisplay.innerHTML = "";

  // if there is no jobs in rejectedList array
  if (rejectedList.length == 0) {
    showDisplay.innerHTML = `
    <div class="bg-white py-8 sm:py-15 text-center">
        <img class="mx-auto" src="./no-job.png" alt="" />
        <h3 class="text-[#002C5C] text-[24px] font-semibold">
          No jobs available
        </h3>
        <p class="text-[#64748B]">Check back soon for new job opportunities</p>
      </div>
    `;
  }

  for (let rejected of rejectedList) {
    let div = document.createElement("div");
    div.className =
      "card flex sm:justify-between gap-4 p-6 rounded-md bg-white mb-6";
    3;
    div.innerHTML = `
     <div class="card space-y-4">
            <div>
              <h3 class="job-name text-[#002C5C] text-[18px] font-semibold">
                ${rejected.jobName}
              </h3>
              <p class="job-title text-[#64748B]">${rejected.jobTitle}</p>
            </div>

            <p class="job-salary text-[#64748B]">
              ${rejected.jobSalary}
            </p>

            <button
              class="status bg-[#EF444430] text-[#EF4444] rounded-sm font-medium px-3 py-2"
            >
              ${rejected.status}
            </button>
            <p class="job-details text-[#64748B]">
              ${rejected.jobDetails}
            </p>

            <div class="flex flex-col md:flex-row gap-3">
              <button
                class="btn-interview px-3 py-2 font-semibold rounded-sm border-2 border-[#10B981] text-[#10B981] cursor-pointer"
              >
                ${rejected.btnInterview}
              </button>
              <button
                class="btn-rejected px-3 py-2 font-semibold rounded-sm border-2 border-[#EF4444] text-[#EF4444] cursor-pointer"
              >
                ${rejected.btnRejected}
              </button>
            </div>
          </div>

          <div>
            <button
              id="delete-btn"
              class="bg-white border w-10 h-10 border-[#E6E7E9] rounded-full cursor-pointer flex justify-center items-center"
            >
              <i class="text-[#64748B] fa-regular fa-trash-can"></i>
            </button>
          </div>
    `;

    // append div to the parent show display
    showDisplay.appendChild(div);
  }
}

// remove when click on buttons of delete
let deletes = document.getElementsByClassName("delete-btn");
// console.log(deletes);
for (let deleteBtn of deletes) {
  deleteBtn.addEventListener("click", function (event) {
    // console.log(event.target.parentNode.parentNode.parentNode.parentNode);
    event.target.parentNode.parentNode.parentNode.parentNode.removeChild(
      event.target.parentNode.parentNode.parentNode,
    );
    calculateCount();
  });
}
