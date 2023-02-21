import React from "react";
import { NavLink } from "react-router-dom";
import slide from "../images/slider/banner3.jpg";
import noodle from "../images/mi-y.jpg";

const Contact = () => {
  return (
    <div>
      <div>
        <div id="breadcrum">
          <div className="container pt-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a
                    href="index.html"
                    className="text-decoration-none text-index"
                  >
                    Trang chủ
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Blog
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="bg-light">
          <div className="container">
            <div className="header">
              <h2>EVENT</h2>
            </div>
            <div className="row">
              <div className="leftcolumn">
                <div className="card">
                  <h2>VALENTINE</h2>
                  <h5>
                    Duyên là do trời định, phận là do con người tạo ra. Mà muôn
                    hạnh phúc thì hãy tới với Mango Food ăn gà nào.
                  </h5>
                  <p>
                    Valentine này mà không lên Mango Food để trải nghiệm combo
                    siêu hot thì đúng là một sự tiếc nuối.
                  </p>
                  <p>
                    Mango Food sẽ tung ra một combo siêu HOT trong mùa Valentine
                    này bao gồm:
                  </p>
                  <p>- 2 gà không cay + 2 gà cay + 2 pepsi</p>
                  <p>- Thời gian áp dụng: chỉ 3 ngày từ 13/02-15/02</p>
                  <img src={slide} className="d-block w-100" alt="..." />
                </div>
                <div className="card">
                  <h2>Quốc Tế Phụ Nữ</h2>
                  <h5>
                    Sắp tới đây sẽ là 8/3, đây là ngày hết sức quan trọng của
                    các chị em phụ nữ. vì thế Mango Food sẽ tung ra món mới và
                    hơn thế sẽ giảm giá cho các chị em phụ nữ khi tới của hàng
                    của Mango.
                  </h5>
                  <p>
                    - Đây là món mì ý gà rán Tandoori đậm vị Ấn Độ và cực kì bắt
                    vị. Ngoài ra chị em phụ nữ còn được tặng một phần nước lớn
                    tùy chọn.
                  </p>
                  <p>
                    _ Chương trình áp dụng chỉ 3 ngày từ 07/03 - 09/03. Hãy
                    nhanh chân tới Mango và thưởng thức món mì ý thôi nào yummi.
                  </p>
                  <img src={noodle} className="d-block w-100" alt="..." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
