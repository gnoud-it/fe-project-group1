import Input from "../components/Input";
import "./Dangky.css";
const DangKy = () => {
   return (
      <>
         <div
            id="page-register"
            style={{
               background: "linear-gradient(to right,#CC6600 0%, #FACE9C 100%)",
            }}
         >
            <div className="container " style={{ height: "100vh" }}>
               <div className="row justify-content-center h-100 align-items-center">
                  <div
                     class="col-md-4 px-4"
                     style={{
                        borderRadius: "28px",
                        background: "#EEE9E9",
                        boxShadow:
                           "9px 9px 29px #d7d7d7,-9px -9px 29px #e9e9e9",
                     }}
                  >
                     <div class="card-body ">
                        <div class="">
                           <div class="logo mb-3">
                              <div class="col-md-12 text-center">
                                 <h1 class="sign pt-4">Đăng Ký</h1>
                              </div>
                           </div>

                           <form action="#" name="registration">
                              <Input
                                 label="Tên đăng nhập:"
                                 id="textFirstName"
                                 placeholder="Tên đăng nhập"
                                 autoComplete="off"
                                 labelSize="12 "
                              />
                              <Input
                                 label="Email:"
                                 id="textEmail"
                                 placeholder="nguyenvana@gmail.com"
                                 autoComplete="off"
                                 labelSize="12"
                              />
                              <Input
                                 label="Mật khẩu: "
                                 type="Password"
                                 id="txtPassword"
                                 placeholder="Nhập mật khẩu của bạn"
                                 autoComplete="off"
                                 labelSize="12"
                              />
                              <Input
                                 label="Mật khẩu nhập lại: "
                                 type="Password"
                                 id="txtPassword"
                                 placeholder="Nhập lại mật khẩu lần nữa"
                                 autoComplete="off"
                                 labelSize="12"
                              />
                              <div class="col-md-12 text-center mb-3">
                                 <button
                                    type="submit"
                                    class=" btn  btnButton btn-primary mt-3"
                                 >
                                    Đăng Ký
                                 </button>
                              </div>
                              <div class="col-md-12 ">
                                 <div class="form-group">
                                    <p class="text-center">
                                       <a href="/#" id="signin">
                                          {/* Already have an account? */}
                                       </a>
                                    </p>
                                 </div>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/*  */}
      </>
   );
};
export default DangKy;
