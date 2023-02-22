import React from "react";

const NotFound = () => {
  return (
    <div className="p-5 m-5">
      <h2 className="text-center text-index">
        <p>
          <b className="text-danger">404</b> - Không tìm thấy trang!
        </p>
      </h2>
      <h6 className="text-center text-secondary">
        Trang này hiện không tồn tại! Vui lòng nhập đúng địa chỉ và thử lại.
      </h6>
    </div>
  );
};

export default NotFound;
