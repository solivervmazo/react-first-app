import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": "d58d17f8a4msh840b950592b4405p16472djsnd9165ac72deb",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: {
      query: "Python developer in Texas, USA",
      page: "1",
      num_pages: "1",
    },
  };
};
