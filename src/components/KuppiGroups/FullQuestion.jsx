import React, { useEffect, useState } from "react";
import { data, useParams, useNavigate} from "react-router-dom";

const getCommunityQuestionFormById = async (id) => {
  const res = await fetch(`http://localhost:8080/comunityQuestions/${id}`, {
    method: "GET",
  });
  const communityForm = await res.json();
  return communityForm;
};

const addAnswer = async (answers) => {
  const res = await fetch("http://localhost:8080/answers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", //saying we are passing a json
    },
    body: JSON.stringify(answers),
  });
};

const getAnswerByQuestionId = async (id) => {
  //   console.log(id)
  const res = await fetch(`http://localhost:8080/answers?questionId=${id}`, {
    method: "GET",
  });
  const data = await res.json();
  return data;
};

const FullQuestion = () => {
  const params = useParams();
  //   console.log(params);
  const [questionForm, setQuestionForm] = useState(null);
  const [answer, setAnswer] = useState([]);
  const navigate = useNavigate();
  const [communityId, setCommunityId] = useState(null);

  const [formData, setFormData] = useState({
    answer: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // console.log(params.id)
    addAnswer({
      answers: formData.answer,
      question: params.id,
    });
    console.log(answer);

    navigate(`/kuppigroups-communities/${communityId}`);
  };

  useEffect(() => {
    getCommunityQuestionFormById(params.id)
      .then((data) => {
        setQuestionForm(data);
        if (data && data.community) {
          setCommunityId(data.community);
        }
      })
      .catch((err) => {})
      .finally(() => {});

    getAnswerByQuestionId(params.id)
      .then((data) => {
        setAnswer(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params, setAnswer]);

  return (
    <div>
      <p>{questionForm?.topic}</p>
      <p>{questionForm?.questions}</p>

      {answer && answer.length > 0 ? (
        answer.map((ans, index) => (
          <div key={ans._id || index}>
            <p>{ans.answers}</p>
          </div>
        ))
      ) : (
        <p>No answers yet</p>
      )}

      <form action="" onSubmit={handleSubmit}>
        <div>
          <textarea
            required
            name=""
            value={formData.answer}
            onChange={(event) =>
              setFormData({ ...formData, answer: event.target.value })
            }
          ></textarea>
          <button style={{ backgroundColor: "#000", fontSize: "2rem" }}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FullQuestion;
