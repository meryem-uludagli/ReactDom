import { Link, useLocation } from "react-router-dom";

const Undefined = () => {
  const loc = useLocation();
  const status = loc.state ? loc.state : 404;
  return (
    <div className="text-center">
      <h1 className="text-warning fw-bold">{status}</h1>
      <p className="fs-1">Aradiginiz Sayfa Bulunamadi</p>
      <p className="fs-1">
        <Link to="/">Anasayfa</Link>'ya bir goz aratabilirsiniz.
      </p>
    </div>
  );
};

export default Undefined;
