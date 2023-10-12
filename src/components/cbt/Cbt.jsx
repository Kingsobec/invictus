import { doc, setDoc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase-config";

const Cbt = ({
  setCbtMode,
  time,
  totalQuestion,
  setTime,
  isAuth,
  questions,
  setQuestions,
  whichCourse,
  userData,
}) => {
  const [answered, setAnswered] = useState(0);
  const [questionToDisplay, setQuestionToDisplay] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const minutes = Math.floor((time / 60) % 60);
  const seconds = Math.floor(time % 60);
  const hours = Math.floor(time / 60 / 60);

  const navigate = useNavigate();
  useEffect(() => {
    setCbtMode(true);
  });

  const countAnswers = () => {
    const answeredQuestions = questions.filter(
      (question) => question.answered === true
    );
    setAnswered(answeredQuestions.length);
  };

  const submit = () => {
    if (answered / totalQuestion <= 0.5) {
      alert("You must answer up to half of the questions before submission");
      return;
    }
    if (showResult) {
      return;
    }
    const correctAnswers = questions.filter(
      (question) => question.answer == question.picked
    );
    setScore(correctAnswers.length);
    setShowScore(true);
    updateHistory()
  };

const updateHistory = async () => {
  const user = auth.currentUser;
  const userRef = doc(db, "users", user.uid);

  if (score > userData.PTI && whichCourse === "PTI 311") {
    await updateDoc(userRef, { PTI: Math.floor((score/totalQuestion) * 100) });
  }

  if (score > userData.PCT && whichCourse === "PCT 321") {
    await updateDoc(userRef, { PCT: Math.floor((score/totalQuestion) * 100) });
  }

  if (score > userData.PCH && whichCourse === "PCH 331") {
    await updateDoc(userRef, { PCH: Math.floor((score/totalQuestion) * 100) });
  }

  if (score > userData.PCG && whichCourse === "PCG 341") {
    await updateDoc(userRef, { PCG: Math.floor((score/totalQuestion) * 100) });
  }

  if (score > userData.PCL && whichCourse === "PCL 351") {
    await updateDoc(userRef, { PCL: Math.floor((score/totalQuestion) * 100) });
  }
};

  const handleOptionChange = (index, num) => {
    if (showResult) {
      return;
    }
    const questionUpdate = questions.map((each, i) => {
      if (i === questionToDisplay) {
        return { ...each, answered: true, picked: num };
      }
      return each;
    });
    setQuestions(questionUpdate);
    countAnswers();
  };
  useEffect(() => {
    if (time <= 0) {
      navigate("/");
      setCbtMode(false);
    }
  }, []);

  useEffect(() => {
    if (time <= 0) {
      submit();
    } else {
      const timerInterval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);

      return () => {
        clearInterval(timerInterval);
      };
    }
  }, [time]);

  const handleKeyPress = (e) => {
    const key = e.key.toUpperCase();

    if (key === "N" && questionToDisplay !== totalQuestion - 1) {
      setQuestionToDisplay((prev) => prev + 1);
      countAnswers();
    }
    if (key === "P" && questionToDisplay !== 0) {
      setQuestionToDisplay((prev) => prev - 1);
      countAnswers();
    }
    if (key === "A") {
      handleOptionChange(questionToDisplay, 1);
    }
    if (key === "B") {
      handleOptionChange(questionToDisplay, 2);
    }
    if (key === "C") {
      handleOptionChange(questionToDisplay, 3);
    }
    if (key === "D") {
      handleOptionChange(questionToDisplay, 4);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [questionToDisplay]);

  return (
    <div className="">
      {showScore && (
        <div className="w-full h-screen absolute flex justify-center items-center z-20 bg-[#00000090] font-semibold">
          <div
            className={`w-[80%] bg-white max-w-[500px] p-10 text-center trans rounded-md ${
              showScore ? "opacity-1" : "opacity-0"
            }`}
          >
            <p className=" text-[2rem] mb-4">Submitted</p>
            <div className=" leading-5 text-[2rem] p-8 border-4 border-red-700 inline-block rounded-full text-green-900 mb-4">
              <p className="">
                {score} <br />
                ----- <br /> {totalQuestion}
              </p>
            </div>
            <p className=" text-[3rem] text-green-900">
              {Math.floor((score / totalQuestion) * 100)}%
            </p>
            <p className=" italic mb-8 text-[1.5rem]">
              {(score / totalQuestion) * 100 >= 50 ? "EXCELLENT" : "POOR"}
            </p>

            <div className=" w-full flex justify-between">
              <button
                className="py-2 md:px-8 px-4 mr-4 bg-red-900 text-white font-semibold rounded-md"
                onClick={() => {
                  navigate("/");
                  setCbtMode(false);
                }}
              >
                home
              </button>

              <button
                className="py-2 md:px-8 px-4 bg-green-900 text-white font-semibold rounded-md"
                onClick={() => {
                  setShowScore(false);
                  setShowResult(true);
                }}
              >
                result
              </button>
            </div>
          </div>
        </div>
      )}
      <div
        className={`p-4 pt-10 lg:flex justify-center trans ${
          showScore && "filtered"
        }`}
      >
        <div className=" max-w-[1200px]">
          <div className="flex justify-between md:text-[1.5rem] text-[1.3rem] font-bold ">
            <p className="">
              {whichCourse}: {questionToDisplay + 1}
            </p>
            {showResult ? "Score" : "Answered"}:{" "}
            {!showResult ? answered : score} / {Math.floor(totalQuestion)}
          </div>
          <div className="">
            {!showResult && (
              <p className=" font-semibold text-center text-[1.2rem]">
                {hours} : {minutes} : {seconds}
              </p>
            )}
          </div>
          <div className=" my-10">
            {questions.map((each, index) => {
              return (
                <div
                  key={index}
                  className={`${
                    index === questionToDisplay
                      ? "text-[1.1rem] flex flex-col gap-2"
                      : "hidden"
                  }`}
                >
                  <p className=" font-semibold my-4">{each.question}</p>
                  <p
                    className="flex items-center cursor-pointer"
                    onClick={() => {
                      handleOptionChange(index, 1);
                    }}
                  >
                    <span
                      className={` mr-1 p-1 border-2 border-black rounded-full w-4 h-4 ${
                        each.picked === 1 && !showResult && " bg-green-700"
                      } ${showResult && each.answer === 1 && "bg-green-900"} ${
                        showResult &&
                        each.picked === 1 &&
                        each.answer !== 1 &&
                        "bg-red-700"
                      }`}
                    ></span>{" "}
                    {each.optionA}
                  </p>
                  <p
                    className="flex items-center cursor-pointer"
                    onClick={() => {
                      handleOptionChange(index, 2);
                    }}
                  >
                    <span
                      className={` mr-1 p-1 border-2 border-black rounded-full w-4 h-4 ${
                        each.picked === 2 && !showResult && " bg-green-700"
                      } ${showResult && each.answer === 2 && "bg-green-900"} ${
                        showResult &&
                        each.picked === 2 &&
                        each.answer !== 2 &&
                        "bg-red-700"
                      }`}
                    ></span>{" "}
                    {each.optionB}
                  </p>
                  <p
                    className="flex items-center cursor-pointer "
                    onClick={() => {
                      handleOptionChange(index, 3);
                    }}
                  >
                    <span
                      className={` mr-1 p-1 border-2 border-black rounded-full w-4 h-4 ${
                        each.picked === 3 && !showResult && " bg-green-700"
                      } ${showResult && each.answer === 3 && "bg-green-900"} ${
                        showResult &&
                        each.picked === 3 &&
                        each.answer !== 3 &&
                        "bg-red-700"
                      }`}
                    ></span>{" "}
                    {each.optionC}
                  </p>
                  <p
                    className="flex items-center cursor-pointer"
                    onClick={() => {
                      handleOptionChange(index, 4);
                    }}
                  >
                    <span
                      className={` mr-1 p-1 border-2 border-black rounded-full w-4 h-4 ${
                        each.picked === 4 && !showResult && " bg-green-700"
                      } ${showResult && each.answer === 4 && "bg-green-900"} ${
                        showResult &&
                        each.picked === 4 &&
                        each.answer !== 4 &&
                        "bg-red-700"
                      }`}
                    ></span>{" "}
                    {each.optionD}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="">
            <div className="flex justify-between md:mb-8 mb-4">
              <div className="">
                <button
                  className="py-2 md:px-8 px-4 mr-4 bg-red-900 text-white font-semibold rounded-md"
                  onClick={() => {
                    countAnswers();
                    if (questionToDisplay === 0) {
                      return;
                    }
                    setQuestionToDisplay((prev) => prev - 1);
                  }}
                >
                  back
                </button>

                <button
                  className="py-2 md:px-8 px-4 bg-green-900 text-white font-semibold rounded-md"
                  onClick={() => {
                    countAnswers();
                    if (questionToDisplay === totalQuestion - 1) {
                      return;
                    }
                    setQuestionToDisplay((prev) => prev + 1);
                  }}
                >
                  next
                </button>
              </div>

              {showResult ? (
                <button
                  className="py-2 md:px-8 px-4 bg-red-700 text-white font-semibold rounded-md"
                  onClick={() => {
                    setCbtMode(false);
                    navigate("/");
                  }}
                >
                  home
                </button>
              ) : (
                <button
                  className="py-2 md:px-8 px-4 bg-red-700 text-white font-semibold rounded-md"
                  onClick={() => {
                    submit();
                    countAnswers();
                  }}
                >
                  submit
                </button>
              )}
            </div>

            <div className="flex justify-between md:justify-normal md:gap-4 flex-wrap w-full py-4">
              {questions.map((each, index) => {
                return (
                  <button
                    key={index}
                    className={`md:w-[50px] h-[50px] w-[18%] mb-2 md:mb-0 border trans hover:scale-105 rounded ${
                      each.answered === true &&
                      !showResult &&
                      "bg-green-900 text-white"
                    } ${
                      each.answered !== true &&
                      !showResult &&
                      " bg-white hover:bg-gray-300"
                    } ${
                      showResult &&
                      each.answer === each.picked &&
                      " bg-green-900"
                    } ${
                      showResult && each.answer !== each.picked && "bg-red-700"
                    }`}
                    onClick={() => {
                      setQuestionToDisplay(index);
                      countAnswers();
                      window.scrollTo(0, 0);
                    }}
                  >
                    {" "}
                    {index + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cbt;
