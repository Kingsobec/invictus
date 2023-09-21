import React, { useEffect, useState } from "react";

const Cbt = () => {
  const [time, setTime] = useState(1200);
  const [answered, setAnswered] = useState(0);
  const [totalQuestion, setTotalQuestion] = useState(50);
  const [questionToDisplay, setQuestionToDisplay] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");

  const minutes = Math.floor((time / 60) % 60);
  const seconds = Math.floor(time % 60);
  const hours = Math.floor(time / 60 / 60);

  const countAnswers = () => {
    const answeredQuestions = questions.filter((question) => question.answered === true)
    setAnswered(answeredQuestions.length)
  }

  const handleOptionChange = (index, num) => {
    const questionUpdate = questions.map((each, i) => {
      if (i === questionToDisplay) {
        return { ...each, answered: true, picked: num };
      }
      return each;
    });
    setQuestions(questionUpdate);
    countAnswers()
  };
  const [questions, setQuestions] = useState([
    {
      question: "Sal sedativum is used in the treatment of ………………….",
      optionA: "Cancer",
      optionB: "Inflammatory disorder",
      optionC: "Goiter",
      optionD: "Infectious diseases",
      answer: "d",
      answered: false,
      picked: 0,
    },
    {
      question: "Sodium salt of boric acid is called ………..",
      optionA: "Bomex",
      optionB: "Botex",
      optionC: "Borax",
      optionD: "None of the options",
      answer: "c",
      answered: false,
      picked: 0,
    },
    {
      question: "The central atom in cytomib is…………………………….",
      optionA: "Sodium",
      optionB: "Potassium",
      optionC: "Boron",
      optionD: "Lithium",
      answer: "c",
      answered: false,
      picked: 0,
    },
    {
      question: "Sal sedativum is used in the treatment of ………………….",
      optionA: "Cancer",
      optionB: "Inflammatory disorder",
      optionC: "Goiter",
      optionD: "Infectious diseases",
      answer: "d",
      answered: false,
      picked: 0,
    },
    {
      question: "Sodium salt of boric acid is called ………..",
      optionA: "Bomex",
      optionB: "Botex",
      optionC: "Borax",
      optionD: "None of the options",
      answer: "c",
      answered: false,
      picked: 0,
    },
    {
      question: "The central atom in cytomib is…………………………….",
      optionA: "Sodium",
      optionB: "Potassium",
      optionC: "Boron",
      optionD: "Lithium",
      answer: "c",
      answered: false,
      picked: 0,
    },
    {
      question: "Sal sedativum is used in the treatment of ………………….",
      optionA: "Cancer",
      optionB: "Inflammatory disorder",
      optionC: "Goiter",
      optionD: "Infectious diseases",
      answer: "d",
      answered: false,
      picked: 0,
    },
    {
      question: "Sodium salt of boric acid is called ………..",
      optionA: "Bomex",
      optionB: "Botex",
      optionC: "Borax",
      optionD: "None of the options",
      answer: "c",
      answered: false,
      picked: 0,
    },
    {
      question: "The central atom in cytomib is…………………………….",
      optionA: "Sodium",
      optionB: "Potassium",
      optionC: "Boron",
      optionD: "Lithium",
      answer: "c",
      answered: false,
      picked: 0,
    },
    {
      question: "Sal sedativum is used in the treatment of ………………….",
      optionA: "Cancer",
      optionB: "Inflammatory disorder",
      optionC: "Goiter",
      optionD: "Infectious diseases",
      answer: "d",
      answered: false,
      picked: 0,
    },
    {
      question: "Sodium salt of boric acid is called ………..",
      optionA: "Bomex",
      optionB: "Botex",
      optionC: "Borax",
      optionD: "None of the options",
      answer: "c",
      answered: false,
      picked: 0,
    },
    {
      question: "The central atom in cytomib is…………………………….",
      optionA: "Sodium",
      optionB: "Potassium",
      optionC: "Boron",
      optionD: "Lithium",
      answer: "c",
      answered: false,
      picked: 0,
    },
    {
      question: "Sal sedativum is used in the treatment of ………………….",
      optionA: "Cancer",
      optionB: "Inflammatory disorder",
      optionC: "Goiter",
      optionD: "Infectious diseases",
      answer: "d",
      answered: false,
      picked: 0,
    },
    {
      question: "Sodium salt of boric acid is called ………..",
      optionA: "Bomex",
      optionB: "Botex",
      optionC: "Borax",
      optionD: "None of the options",
      answer: "c",
      answered: false,
      picked: 0,
    },
    {
      question: "The central atom in cytomib is…………………………….",
      optionA: "Sodium",
      optionB: "Potassium",
      optionC: "Boron",
      optionD: "Lithium",
      answer: "c",
      answered: false,
      picked: 0,
    },
    {
      question: "Sal sedativum is used in the treatment of ………………….",
      optionA: "Cancer",
      optionB: "Inflammatory disorder",
      optionC: "Goiter",
      optionD: "Infectious diseases",
      answer: "d",
      answered: false,
      picked: 0,
    },
    {
      question: "Sodium salt of boric acid is called ………..",
      optionA: "Bomex",
      optionB: "Botex",
      optionC: "Borax",
      optionD: "None of the options",
      answer: "c",
      answered: false,
      picked: 0,
    },
    {
      question: "The central atom in cytomib is…………………………….",
      optionA: "Sodium",
      optionB: "Potassium",
      optionC: "Boron",
      optionD: "Lithium",
      answer: "c",
      answered: false,
      picked: 0,
    },
    {
      question: "Sal sedativum is used in the treatment of ………………….",
      optionA: "Cancer",
      optionB: "Inflammatory disorder",
      optionC: "Goiter",
      optionD: "Infectious diseases",
      answer: "d",
      answered: false,
      picked: 0,
    },
    {
      question: "Sodium salt of boric acid is called ………..",
      optionA: "Bomex",
      optionB: "Botex",
      optionC: "Borax",
      optionD: "None of the options",
      answer: "c",
      answered: false,
      picked: 0,
    },
    {
      question: "The central atom in cytomib is…………………………….",
      optionA: "Sodium",
      optionB: "Potassium",
      optionC: "Boron",
      optionD: "Lithium",
      answer: "c",
      answered: false,
      picked: 0,
    },
    {
      question: "Sal sedativum is used in the treatment of ………………….",
      optionA: "Cancer",
      optionB: "Inflammatory disorder",
      optionC: "Goiter",
      optionD: "Infectious diseases",
      answer: "d",
      answered: false,
      picked: 0,
    },
    {
      question: "Sodium salt of boric acid is called ………..",
      optionA: "Bomex",
      optionB: "Botex",
      optionC: "Borax",
      optionD: "None of the options",
      answer: "c",
      answered: false,
      picked: 0,
    },
    {
      question: "The central atom in cytomib is…………………………….",
      optionA: "Sodium",
      optionB: "Potassium",
      optionC: "Boron",
      optionD: "Lithium",
      answer: "c",
      answered: false,
      picked: 0,
    },
    {
      question: "Sal sedativum is used in the treatment of ………………….",
      optionA: "Cancer",
      optionB: "Inflammatory disorder",
      optionC: "Goiter",
      optionD: "Infectious diseases",
      answer: "d",
      answered: false,
      picked: 0,
    },
    {
      question: "Sodium salt of boric acid is called ………..",
      optionA: "Bomex",
      optionB: "Botex",
      optionC: "Borax",
      optionD: "None of the options",
      answer: "c",
      answered: false,
      picked: 0,
    },
    {
      question: "The central atom in cytomib is…………………………….",
      optionA: "Sodium",
      optionB: "Potassium",
      optionC: "Boron",
      optionD: "Lithium",
      answer: "c",
      answered: false,
      picked: 0,
    },
    {
      question: "Sal sedativum is used in the treatment of ………………….",
      optionA: "Cancer",
      optionB: "Inflammatory disorder",
      optionC: "Goiter",
      optionD: "Infectious diseases",
      answer: "d",
      answered: false,
      picked: 0,
    },
    {
      question: "Sodium salt of boric acid is called ………..",
      optionA: "Bomex",
      optionB: "Botex",
      optionC: "Borax",
      optionD: "None of the options",
      answer: "c",
      answered: false,
      picked: 0,
    },
    {
      question: "Sal sedativum is used in the treatment of ………………….",
      optionA: "Cancer",
      optionB: "Inflammatory disorder",
      optionC: "Goiter",
      optionD: "Infectious diseases",
      answer: "d",
      answered: false,
      picked: 0,
    },
    {
      question: "Sodium salt of boric acid is called ………..",
      optionA: "Bomex",
      optionB: "Botex",
      optionC: "Borax",
      optionD: "None of the options",
      answer: "c",
      answered: false,
      picked: 0,
    },
    {
      question: "The central atom in cytomib is…………………………….",
      optionA: "Sodium",
      optionB: "Potassium",
      optionC: "Boron",
      optionD: "Lithium",
      answer: "c",
      answered: false,
      picked: 0,
    },
    {
      question: "Sal sedativum is used in the treatment of ………………….",
      optionA: "Cancer",
      optionB: "Inflammatory disorder",
      optionC: "Goiter",
      optionD: "Infectious diseases",
      answer: "d",
      answered: false,
      picked: 0,
    },
    {
      question: "Sodium salt of boric acid is called ………..",
      optionA: "Bomex",
      optionB: "Botex",
      optionC: "Borax",
      optionD: "None of the options",
      answer: "c",
      answered: false,
      picked: 0,
    },
    {
      question: "The central atom in cytomib is…………………………….",
      optionA: "Sodium",
      optionB: "Potassium",
      optionC: "Boron",
      optionD: "Lithium",
      answer: "c",
      answered: false,
      picked: 0,
    },
    {
      question: "Sal sedativum is used in the treatment of ………………….",
      optionA: "Cancer",
      optionB: "Inflammatory disorder",
      optionC: "Goiter",
      optionD: "Infectious diseases",
      answer: "d",
      answered: false,
      picked: 0,
    },
    {
      question: "Sodium salt of boric acid is called ………..",
      optionA: "Bomex",
      optionB: "Botex",
      optionC: "Borax",
      optionD: "None of the options",
      answer: "c",
      answered: false,
      picked: 0,
    },
    {
      question: "The central atom in cytomib is…………………………….",
      optionA: "Sodium",
      optionB: "Potassium",
      optionC: "Boron",
      optionD: "Lithium",
      answer: "c",
      answered: false,
      picked: 0,
    },
    {
      question: "Sal sedativum is used in the treatment of ………………….",
      optionA: "Cancer",
      optionB: "Inflammatory disorder",
      optionC: "Goiter",
      optionD: "Infectious diseases",
      answer: "d",
      answered: false,
      picked: 0,
    },
    {
      question: "Sodium salt of boric acid is called ………..",
      optionA: "Bomex",
      optionB: "Botex",
      optionC: "Borax",
      optionD: "None of the options",
      answer: "c",
      answered: false,
      picked: 0,
    },
    {
      question: "The central atom in cytomib is…………………………….",
      optionA: "Sodium",
      optionB: "Potassium",
      optionC: "Boron",
      optionD: "Lithium",
      answer: "c",
      answered: false,
      picked: 0,
    },
    {
      question: "Sal sedativum is used in the treatment of ………………….",
      optionA: "Cancer",
      optionB: "Inflammatory disorder",
      optionC: "Goiter",
      optionD: "Infectious diseases",
      answer: "d",
      answered: false,
      picked: 0,
    },
    {
      question: "Sodium salt of boric acid is called ………..",
      optionA: "Bomex",
      optionB: "Botex",
      optionC: "Borax",
      optionD: "None of the options",
      answer: "c",
      answered: false,
      picked: 0,
    },
    {
      question: "The central atom in cytomib is…………………………….",
      optionA: "Sodium",
      optionB: "Potassium",
      optionC: "Boron",
      optionD: "Lithium",
      answer: "c",
      answered: false,
      picked: 0,
    },
    {
      question: "Sal sedativum is used in the treatment of ………………….",
      optionA: "Cancer",
      optionB: "Inflammatory disorder",
      optionC: "Goiter",
      optionD: "Infectious diseases",
      answer: "d",
      answered: false,
      picked: 0,
    },
    {
      question: "Sodium salt of boric acid is called ………..",
      optionA: "Bomex",
      optionB: "Botex",
      optionC: "Borax",
      optionD: "None of the options",
      answer: "c",
      answered: false,
      picked: 0,
    },
    {
      question: "The central atom in cytomib is…………………………….",
      optionA: "Sodium",
      optionB: "Potassium",
      optionC: "Boron",
      optionD: "Lithium",
      answer: "c",
      answered: false,
      picked: 0,
    },
    {
      question: "Sal sedativum is used in the treatment of ………………….",
      optionA: "Cancer",
      optionB: "Inflammatory disorder",
      optionC: "Goiter",
      optionD: "Infectious diseases",
      answer: "d",
      answered: false,
      picked: 0,
    },
    {
      question: "Sodium salt of boric acid is called ………..",
      optionA: "Bomex",
      optionB: "Botex",
      optionC: "Borax",
      optionD: "None of the options",
      answer: "c",
      answered: false,
      picked: 0,
    },
    {
      question: "The central atom in cytomib is…………………………….",
      optionA: "Sodium",
      optionB: "Potassium",
      optionC: "Boron",
      optionD: "Lithium",
      answer: "c",
      answered: false,
      picked: 0,
    },
  ]);

  useEffect(() => {
    if (time <= 0) {
      // submit();
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
      countAnswers()
    }
    if (key === "P" && questionToDisplay !== 0) {
      setQuestionToDisplay((prev) => prev - 1);
      countAnswers()
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
    <div className=" p-4 pt-10 lg:flex justify-between gap-4">
      <div className="uppercase lg:w-[30%] hidden lg:block">
        <img src="" alt="" className="" />
        <p className="">Agbo Sobechukwu Malachy</p>
        <p className="">2019/250258</p>
        <p className="">pch232</p>
        <p className="">time</p>
        <p className=" lowercase">
          {hours} : {minutes} : {seconds}
        </p>
        <button>submit</button>
      </div>

      <div className="lg:w-[68%]">
        <div className="flex justify-between md:text-[1.5rem] text-[1.3rem] font-bold ">
          <p className="">PCH232: {questionToDisplay + 1}</p>
          Answered: {answered} / {totalQuestion}
        </div>
        <div className="lg:hidden">
          <p className=" font-semibold text-center text-[1.2rem]">
            {hours} : {minutes} : {seconds}
          </p>
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
                      each.picked === 1 ? " bg-green-700" : " bg-none"
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
                      each.picked === 2 ? " bg-green-700" : " bg-none"
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
                      each.picked === 3 ? " bg-green-700" : " bg-none"
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
                      each.picked === 4 ? " bg-green-700" : " bg-none"
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
            <button
              className="py-2 md:px-8 px-4 bg-red-700 text-white font-semibold rounded-md"
              onClick={() => {
                countAnswers();
              }}
            >
              submit
            </button>
          </div>

          <div className="flex justify-between md:justify-normal md:gap-4 flex-wrap w-full py-4">
            {questions.map((each, index) => {
              return (
                <button
                  key={index}
                  className={`md:w-[50px] h-[50px] w-[18%] mb-2 md:mb-0 border trans hover:scale-105 rounded bg-white ${
                    each.answered === true && " bg-green-900 text-white"
                  }`}
                  onClick={() => {
                    setQuestionToDisplay(index);
                    countAnswers();
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
  );
};

export default Cbt;
