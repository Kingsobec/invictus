import { addDoc, collection, doc, getDocs } from "firebase/firestore";
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
}) => {
  const navigate = useNavigate();
  const [times, setTimes] = useState();
  const addQuestion = async (questions) => {
    const questionsObject = {};

    questions.map((question, index) => {
      questionsObject[`question${index}`] = question;
    });

    try {
      await addDoc(collection(db, "questions"), questionsObject);
      console.log("Questions added to Firestore successfully");
    } catch (error) {
      console.error("Error adding questions to Firestore: ", error);
    }
  };

  if (!userData || !isAuth) {
    window.location.href = "/login";
    return;
  }
  useEffect(() => {
    const getQuestions = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "questions"));
        const questionData = [];

        querySnapshot.forEach((doc) => {
          const questionObj = doc.data();
          // Push each question object into the array
          questionData.push(...Object.values(questionObj));
        });

        setQuestions(questionData);
        console.log(questionData);
      } catch (error) {
        console.error("Error getting questions:", error);
      }
    };

    getQuestions();
  }, []);
  const nickname = userData.displayName;
  const displayPhoto = userData.photoURL;
  const fullName = userData.fullName;
  const regNumber = userData.regNumber;

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
    {
      course: "PCL 351",
      showCourses: false,
    },
  ]);

  const calculateTime = () => {
    setTime(totalQuestion * 45);
    setTimes((totalQuestion * 45) / 60);
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
    <div className=" p-4 flex flex-col md:flex-row gap-4">
      <div className=" text-center md:w-1/3 font-semibold text-green-900 text-[1.2rem]">
        <img
          src={displayPhoto}
          alt=""
          className=" w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover object-center rounded-[20px] m-auto border-green-900 border-2"
        />
        <p className="">{fullName}</p>
        <p className="">{regNumber}</p>
      </div>

      <div className="md:w-2/3">
        <div className="">
          <p className=" text-center font-bold text-[2rem] text-red-700">Courses</p>
          <div className="">
            {courses.map((each, index) => {
              return (
                <div className="w-full" key={index}>
                  <div
                    className="flex justify-between w-full p-2 bg-gray-200 rounded-md my-4 hover:bg-green-900 trans text-green-900 font-bold text-[1.2rem] hover:text-white"
                    onClick={() => start(index)}
                  >
                    <p className="">{each.course}</p>
                    <i
                      className={`fa-solid fa-caret-${
                        each.showCourses ? "up" : "down"
                      } text-[1.5rem]`}
                    ></i>
                  </div>
                  {each.showCourses && (
                    <div className="flex justify-between items-center font-semibold px-4">
                      <div className="flex flex-col text-center">
                        <label htmlFor="questionNumber">
                          N<span className="underline">o</span>
                        </label>
                        <input
                          type="number"
                          value={totalQuestion}
                          onChange={(e) => {
                            e.target.value >= 1 &&
                              e.target.value <= 100 &&
                              setTotalQuestion(e.target.value);
                            e.target.value >= 100 && setTotalQuestion(100);
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
                          setWhichCourse(each.course)
                          startExam();
                        }}
                      >
                        START
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
