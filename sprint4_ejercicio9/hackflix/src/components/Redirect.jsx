import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Redirect() {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/movie/${params.id}`);
  }, []);
}

export default Redirect;
