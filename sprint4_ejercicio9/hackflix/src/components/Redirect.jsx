import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Redirect() {
  const params = useParams();
  const navigate = useNavigate();
  console.log(params.id);

  useEffect(() => {
    navigate(`/movie/${params.id}`);
  }, []);
}

export default Redirect;
