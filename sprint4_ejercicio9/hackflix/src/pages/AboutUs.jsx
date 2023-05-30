import "../App.css";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <>
      <div className="container mt-4">
        <h2 className="navbar-brand text-warning font-titles p-0 fs-1 my-4">
          H A C K F L I X
        </h2>
        <p className="text-warning">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          praesentium exercitationem accusantium ullam dolorem corrupti atque,
          quia asperiores quo similique, natus cupiditate libero nesciunt
          voluptatem odit aspernatur aliquam! Similique, nemo voluptate?
          Sapiente, recusandae repellendus? Explicabo natus delectus vel ad.
          Incidunt dolores aut recusandae aspernatur a sit aliquam beatae, ex
          sed cupiditate sunt molestias nisi quaerat obcaecati in, nemo esse
          veritatis. Velit hic nihil suscipit voluptas rerum animi ab, unde
          asperiores ex natus deserunt corporis ut reiciendis eveniet beatae
          iure cumque sunt id tempora odit vero. Eligendi enim sapiente
          deleniti, quia eaque blanditiis dolorem aspernatur nisi exercitationem
          maiores expedita velit eius.
        </p>
        <p className="text-warning">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          repellendus maxime illum, sed dignissimos asperiores, quae veritatis
          inventore libero perferendis quos odio? Nisi natus quia minus
          explicabo provident officiis, laudantium voluptatibus nesciunt totam
          rerum minima accusamus dolores obcaecati corporis nulla iusto!
          Asperiores molestiae perspiciatis atque libero dolorum, eveniet sed
          numquam!
        </p>
        <p className="text-warning">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          nesciunt ad, ex harum possimus, impedit explicabo asperiores fugit
          voluptates quidem officia natus dignissimos tempore enim!
        </p>
        <div className="text-warning">
          <small>HACKFLIX by</small>
          <a
            className="text-warning ms-2"
            href="https://github.com/joaquingonjua"
          >
            @joaquingonjua
          </a>
        </div>
        <Link to={"/"}>
          <button className="btn btn-outline-warning fw-semibold mt-4">
            ← Volver al inicio
          </button>
        </Link>
      </div>
    </>
  );
}

export default AboutUs;
