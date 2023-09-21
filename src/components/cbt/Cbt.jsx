import React, { useEffect, useState } from "react";

const Cbt = () => {
  const [time, setTime] = useState(1200);
  const [answered, setAnswered] = useState(4);
  const [totalQuestion, setTotalQuestion] = useState(50);
  const [questionToDisplay, setQuestionToDisplay] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");

  const minutes = Math.floor((time / 60) % 60);
  const seconds = Math.floor(time % 60);
  const hours = Math.floor(time / 60 / 60);

  const handleOptionChange = (index, num) => {
    const questionUpdate = questions.map((each, i) => {
      if (i === questionToDisplay) {
        return { ...each, answered: true, picked: num };
      }
      console.log(each.answered);
      return each;
    });
    setQuestions(questionUpdate);
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
    }
    if (key === "P" && questionToDisplay !== 0) {
      setQuestionToDisplay((prev) => prev - 1);
    }
    if (key === "A") {
      handleOptionChange(questionToDisplay, 1)
    }
    if (key === "B") {
      handleOptionChange(questionToDisplay, 2)
    }
    if (key === "C") {
      handleOptionChange(questionToDisplay, 3)
    }
    if (key === "D") {
      handleOptionChange(questionToDisplay, 4)
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
    <div className=" p-4">
      <div className="uppercase">
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

      <div className="">
        <div className="">
          <p className="">PCH232</p>
          Answered {answered} / {totalQuestion}
        </div>
        <div className="">
          {questions.map((each, index) => {
            return (
              <div
                key={index}
                className={`${
                  index === questionToDisplay ? "flex flex-col gap-2" : "hidden"
                }`}
              >
                <p className="">{each.question}</p>
                <p className="flex items-center">
                  <span
                    className={` mr-1 p-1 border-2 border-black rounded-full w-4 h-4 cursor-pointer ${
                      each.picked === 1 ? " bg-green-700" : " bg-none"
                    }`}
                    onClick={() => {
                      handleOptionChange(index, 1);
                    }}
                  ></span>{" "}
                  {each.optionA}
                </p>
                <p className="flex items-center">
                  <span
                    className={` mr-1 p-1 border-2 cursor-pointer border-black rounded-full w-4 h-4 ${
                      each.picked === 2 ? " bg-green-700" : " bg-none"
                    }`}
                    onClick={() => {
                      handleOptionChange(index, 2);
                    }}
                  ></span>{" "}
                  {each.optionB}
                </p>
                <p className="flex items-center ">
                  <span
                    className={` mr-1 p-1 border-2 cursor-pointer border-black rounded-full w-4 h-4 ${
                      each.picked === 3 ? " bg-green-700" : " bg-none"
                    }`}
                    onClick={() => {
                      handleOptionChange(index, 3);
                    }}
                  ></span>{" "}
                  {each.optionC}
                </p>
                <p className="flex items-center">
                  <span
                    className={` mr-1 p-1 border-2 cursor-pointer border-black rounded-full w-4 h-4 ${
                      each.picked === 4 ? " bg-green-700" : " bg-none"
                    }`}
                    onClick={() => {
                      handleOptionChange(index, 4);
                    }}
                  ></span>{" "}
                  {each.optionD}
                </p>
              </div>
            );
          })}
        </div>
        <div className="">
          <button
            className="py-2 px-4 mr-4 bg-red-700 text-white font-semibold rounded-md"
            onClick={() => {
              if (questionToDisplay === 0) {
                return;
              }
              setQuestionToDisplay((prev) => prev - 1);
            }}
          >
            back
          </button>

          <button
            className="py-2 px-4 bg-green-900 text-white font-semibold rounded-md"
            onClick={() => {
              if (questionToDisplay === totalQuestion - 1) {
                return;
              }
              setQuestionToDisplay((prev) => prev + 1);
            }}
          >
            next
          </button>

          <div className="flex gap-2 flex-wrap w-full p-4">
            {questions.map((each, index) => {
              return (
                <button
                  key={index}
                  className={`p-3 border trans hover:scale-105 rounded bg-white ${
                    each.answered === true ? " bg-green-900 text-white" : ""
                  } ${index === questionToDisplay && "bg-blue-600"}`}
                  onClick={() => {
                    setQuestionToDisplay(index);
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
