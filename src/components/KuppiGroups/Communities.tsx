import React from 'react'


const communities = [
    {
      id: 1,
      name: "ICT",
      members: 1025,
      topics: [
        {
          id: 101,
          user: "Vihan Mendis",
          time: "14m ago",
          question: "Can someone help me with this Python question?",
          responses: 20,
          views: 111,
          tag: "ICT",
        },
        {
          id: 102,
          user: "Garuka Adithya",
          time: "17m ago",
          question: "Why isn't this python code running?",
          responses: 27,
          views: 127,
          tag: "ICT",
        },
      ],
    },
    {
      id: 2,
      name: "Revisions",
      members: 11987,
      topics: [
        {
          id: 201,
          user: "Samadhi Sandunika",
          time: "3m ago",
          question: "Can someone explain more about Chemical reactions.Please",
          responses: 14,
          views: 79,
          tag: "science",
        },
      ],
    },
    { id: 3, name: "ICT", members: 1025, topics: [] },
    { id: 4, name: "ICT", members: 1025, topics: [] },
    { id: 5, name: "ICT", members: 1026, topics: [] },
    { id: 6, name: "ICT", members: 1026, topics: [] },
    { id: 7, name: "ICT", members: 1026, topics: [] },
    { id: 8, name: "Revisions", members: 11987, topics: [] },
    { id: 9, name: "ICT", members: 1026, topics: [] },
  ];
  
const Communities = () => {
  return (
    <div>Communities</div>
  )
}

export default Communities