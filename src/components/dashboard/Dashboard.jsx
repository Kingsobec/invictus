import {
  QuerySnapshot,
  addDoc,
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase-config";

const Dashboard = ({
  isAuth,
  userData,
  totalQuestion,
  time,
  setTime,
  setTotalQuestion,
  questions,
  setQuestions,
  whichCourse,
  setWhichCourse,
  isAdmin,
  setIsAdmin,
}) => {
  const navigate = useNavigate();
  const [times, setTimes] = useState();
  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);
  const [question, setQuestion] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");
  const [answer, setAnswer] = useState(0);
  const [ptiQuestions, setptiQuestions] = useState();
  const [pchQuestions, setpchQuestions] = useState();
  const [pcgQuestions, setpcgQuestions] = useState();
  const [pctQuestions, setpctQuestions] = useState();
  useEffect(() => {
    setptiQuestions(JSON.parse(localStorage.getItem("ptiQuestions")));
    setpchQuestions(JSON.parse(localStorage.getItem("pchQuestions")));
    setpcgQuestions(JSON.parse(localStorage.getItem("pcgQuestions")));
    setpctQuestions(JSON.parse(localStorage.getItem("pctQuestions")));
  }, []);
  const addQuestion = async (
    question,
    optionA,
    optionB,
    optionC,
    optionD,
    answer,
    subject
  ) => {
    if (!question || !optionA || !optionB || !optionC || !optionD || !answer) {
      alert("Please make sure you fill all the details and select the answer");
      return;
    }
    const data = {
      question: question,
      optionA: optionA,
      optionB: optionB,
      optionC: optionC,
      optionD: optionD,
      answer: Number(answer),
      answered: false,
      picked: 0,
    };

    try {
      await addDoc(collection(db, subject), data);
      setQuestion("");
      setOptionA("");
      setOptionB("");
      setOptionC("");
      setOptionD("");
      setAnswer(0);
    } catch (error) {
      alert(error);
    }
  };

  if (!localStorage.getItem("isAuth") && !localStorage.getItem("userData")) {
    window.location.href = "/login";
    return;
  }
  const getPCG = async () => {
    try {
      const datas = await getDocs(collection(db, "PCG 341"));
      const questionData = datas.docs.map((doc) => ({ ...doc.data() }));
      localStorage.setItem("pcgQuestions", JSON.stringify(questionData));
      // setQuestions(datas.docs.map((doc) => ({ ...doc.data() })));
    } catch (error) {
      console.error("Error getting questions:", error);
    }
  };
  const getPCH = async () => {
    try {
      const datas = await getDocs(collection(db, "PCH 331"));
      const questionData = datas.docs.map((doc) => ({ ...doc.data() }));
      localStorage.setItem("pchQuestions", JSON.stringify(questionData));
    } catch (error) {
      console.error("Error getting questions:", error);
    }
  };
  const getPCT = async () => {
    try {
      const datas = await getDocs(collection(db, "PCT 321"));
      const questionData = datas.docs.map((doc) => ({ ...doc.data() }));
      localStorage.setItem("pctQuestions", JSON.stringify(questionData));
    } catch (error) {
      console.error("Error getting questions:", error);
    }
  };
  const getPTI = async () => {
    try {
      const datas = await getDocs(collection(db, "PTI 311"));
      const questionData = datas.docs.map((doc) => ({ ...doc.data() }));
      localStorage.setItem("ptiQuestions", JSON.stringify(questionData));
    } catch (error) {
      console.error("Error getting questions:", error);
    }
  };
  useEffect(() => {
    if (
      localStorage.getItem("pcgQuestions") ||
      localStorage.getItem("pctQuestions") ||
      localStorage.getItem("pchQuestions") ||
      localStorage.getItem("ptiQuestions")
    ) {
      return;
    }
    getPTI();
    getPCT();
    getPCH();
    getPCG();
  }, []);

  useEffect(() => {
    const getAllUsersData = async () => {
      try {
        const usersCollectionRef = collection(db, "users");
        const querySnapshot = await getDocs(usersCollectionRef);

        if (!querySnapshot.empty) {
          const userDataArray = querySnapshot.docs.map((doc) => {
            return {
              uid: doc.id,
              ...doc.data(),
            };
          });
          setUsers(
            userDataArray.sort((a, b) => {
              const nameA = a.fullName.toLowerCase();
              const nameB = b.fullName.toLowerCase();

              if (nameA < nameB) return -1;
              if (nameA > nameB) return 1;
              return 0;
            })
          );
        } else {
          console.log("No user data found");
        }
      } catch (error) {
        console.error("Error getting all users data:", error);
      }
    };
    getAllUsersData();
  }, []);
  const makeAdmin = async (uid, adminValue) => {
    const userDocRef = doc(db, "users", uid);
    try {
      await updateDoc(userDocRef, {
        adminMode: !adminValue,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const nickname = userData.displayName;
  const displayPhoto = userData.photoURL;
  const fullName = userData.fullName;
  const regNumber = userData.regNumber;
  const oracle = userData.Oracle;
  const adminMode = userData.adminMode;
  const PTI = userData.PTI;
  const PCT = userData.PCT;
  const PCH = userData.PCH;
  const PCG = userData.PCG;
  const PCL = userData.PCL;
  // setIsAdmin(userData.adminMode);

  const [courses, setCourses] = useState([
    {
      course: "PTI 311",
      showCourses: false,
    },
    {
      course: "PCT 321",
      showCourses: false,
    },
    {
      course: "PCH 331",
      showCourses: false,
    },
    {
      course: "PCG 341",
      showCourses: false,
    },
    // {
    //   course: "PCL 351",
    //   showCourses: false,
    // },
  ]);

  const calculateTime = () => {
    setTime(totalQuestion * 30);
    setTimes((totalQuestion * 30) / 60);
  };
  const putQuestions = (course) => {
    if (course == "PTI 311") {
      setQuestions(ptiQuestions);
    }
    if (course == "PCT 321") {
      setQuestions(pctQuestions);
    }
    if (course == "PCH 331") {
      setQuestions(pchQuestions);
    }
    if (course == "PCG 341") {
      setQuestions(pcgQuestions);
    }
  };
  const startExam = () => {
    if (totalQuestion) {
      navigate("/cbt-mode");
    } else {
      alert("choose the number of questions");
    }
  };
  const start = (index) => {
    const coursesUpdate = courses.map((each, i) => {
      if (i === index) {
        return { ...each, showCourses: !each.showCourses };
      } else {
        return { ...each, showCourses: false };
      }
    });
    setCourses(coursesUpdate);
  };
  useEffect(() => {
    calculateTime();
  }, [totalQuestion]);

  useEffect(() => {
    if (!userData) {
      navigate("/login");
    }
  }, [userData]);

  return (
    <div className="max-w-[1200px] m-auto">
      <div className=" p-4 flex flex-col md:flex-row gap-4">
        <div className=" text-center md:w-1/3 font-semibold text-green-900 text-[1.2rem]">
          <img
            src={displayPhoto}
            alt=""
            className=" w-[300px] h-[300px] md:w-[300px] md:h-[300px] object-cover object-center rounded-[10px] m-auto border-green-900 border-2"
          />
          <p className="">{fullName}</p>
          <p className="">{regNumber}</p>
        </div>

        <div className="md:w-2/3">
          <div className="">
            <p className=" text-center font-bold text-[2rem] text-red-700">
              Courses
            </p>
            <div className="">
              {courses.map((each, index) => {
                return (
                  <div className="w-full" key={index}>
                    <div
                      className="flex justify-between w-full p-2 bg-white rounded-md my-4 hover:bg-green-900 trans text-green-900 font-bold text-[1.2rem] hover:text-white"
                      onClick={() => {
                        start(index);
                        putQuestions(each.course);
                      }}
                    >
                      <p className="">{each.course}</p>
                      <i
                        className={`fa-solid fa-caret-${
                          each.showCourses ? "up" : "down"
                        } text-[1.5rem]`}
                      ></i>
                    </div>

                    {each.showCourses && (
                      <div className="">
                        <div
                          className={`text-[1.1rem] font-semibold ${
                            !isAdmin ? "hidden" : "block"
                          }`}
                        >
                          <textarea
                            placeholder="QUESTION"
                            className="p-2 w-full mb-4 border-2 border-green-700 rounded"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                          ></textarea>
                          <textarea
                            className="w-full p-2 mb-2 border border-red-700 rounded"
                            placeholder="A"
                            onChange={(e) => setOptionA(e.target.value)}
                            value={optionA}
                          />
                          <textarea
                            className="w-full p-2 mb-2 border border-red-700 rounded"
                            placeholder="B"
                            onChange={(e) => setOptionB(e.target.value)}
                            value={optionB}
                          />
                          <textarea
                            className="w-full p-2 mb-2 border border-red-700 rounded "
                            placeholder="C"
                            onChange={(e) => setOptionC(e.target.value)}
                            value={optionC}
                          />
                          <textarea
                            className="w-full p-2 border border-red-700 rounded mb-2"
                            placeholder="D"
                            onChange={(e) => setOptionD(e.target.value)}
                            value={optionD}
                          />
                          <select
                            className="rounded-md p-2"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                          >
                            <option value="0" disabled>
                              answer
                            </option>
                            <option value="1">A</option>
                            <option value="2">B</option>
                            <option value="3">C</option>
                            <option value="4">D</option>
                          </select>
                          <div className="flex justify-center">
                            <button
                              className="p-2 bg-green-700 text-white  rounded-[10px] hover:scale-110 trans"
                              onClick={() => {
                                addQuestion(
                                  question,
                                  optionA,
                                  optionB,
                                  optionC,
                                  optionD,
                                  answer,
                                  each.course
                                );
                              }}
                            >
                              SUBMIT
                            </button>
                          </div>
                        </div>
                        <div
                          className={`flex justify-between items-center font-semibold px-4 ${
                            !isAdmin ? "block" : "hidden"
                          }`}
                        >
                          <div className="flex flex-col text-center">
                            <label htmlFor="questionNumber">
                              N<span className="underline">o</span>
                            </label>
                            <input
                              type="number"
                              value={totalQuestion}
                              onChange={(e) => {
                                console.log(questions.length);
                                e.target.value >= 1 &&
                                  e.target.value <= 30 &&
                                  setTotalQuestion(e.target.value);
                                e.target.value >= 30 && setTotalQuestion(30);
                                e.target.value <= 0 && setTotalQuestion("");
                                calculateTime();
                              }}
                              name="questionNumber"
                              className="rounded border-green-900 border-2 p-2 text-center text-[1.2rem] w-[100px] md:w-[200px]"
                            />
                          </div>
                          <p className="text-green-900">TIME: {times}m</p>
                          <button
                            className="p-2 bg-green-700 text-white  rounded-[10px] hover:scale-110 trans"
                            onClick={() => {
                              setWhichCourse(each.course);
                              startExam(each.course);
                            }}
                          >
                            START
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {isAdmin && (
        <div className="flex flex-col gap-4 p-4 max-h-[500px] overflow-scroll">
          {users.map((each, index) => {
            return (
              <div
                className="p-2 bg-white rounded-md flex flex-col md:flex-row md:items-center gap-2 justify-between"
                key={index}
              >
                <div className="flex items-center gap-2">
                  <p>{index + 1}</p>
                  {oracle && (
                    <img
                      src={each.photoURL}
                      className="w-[60px] h-[60px] object-cover rounded-full"
                    />
                  )}
                  <div className="flex justify-between items-center w-[85%]">
                    <p className="font-semibold text-green-900 md:text-[1.1rem]">
                      {each.fullName} <br /> {each.regNumber}
                    </p>
                    <p
                      className={`${
                        each.adminMode ? "bg-green-700" : " bg-red-700"
                      } p-2 rounded-full cursor-pointer`}
                      onClick={() => makeAdmin(each.uid, each.adminMode)}
                    ></p>
                  </div>
                </div>
                <div className="flex md:gap-2 gap-1 text-center font-semibold md:text-[1.1rem] justify-center">
                  <p className="border border-green-900 rounded-md px-2 ">
                    PTI <br /> {each.PTI}
                  </p>
                  <p className="border border-green-900 rounded-md px-2 ">
                    PCT <br /> {each.PCT}
                  </p>
                  <p className="border border-green-900 rounded-md px-2 ">
                    PCH <br /> {each.PCH}
                  </p>
                  <p className="border border-green-900 rounded-md px-2 ">
                    PCG <br /> {each.PCG}
                  </p>
                  <p className="border border-green-900 rounded-md px-2 ">
                    PCL <br /> {each.PCL}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
