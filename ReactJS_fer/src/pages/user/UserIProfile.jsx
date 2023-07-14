import React from 'react';
import './UserProfile.css';
function UserProfile() {

  return (
    <main className='pt-1'>
      <section class="py-0 my-0">
        <div class="container">
          <h2 class="mb-4">Hồ sơ của tôi</h2>

          <div class="bg-white shadow rounded-lg d-block d-sm-flex">
            <div class="profile-tab-nav border-right">

              <div class="p-4">
                <div class="img-circle text-center mb-3">
                  <img src='assets\img\login\Avatar.jpg' alt='Image' class="shadow"/>
                </div>
                <h4 class="text-center">Bích Phương</h4>
              </div>

              <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a class="nav-link active" id="account-tab" data-toggle="pill" href="#account" role="tab" aria-controls="account" aria-selected="true">
                  <i class="fa fa-user text-center mr-1"></i>
                  Tài khoản của tôi
                </a>

                <a class="nav-link" id="password-tab" data-toggle="pill" href="#password" role="tab" aria-controls="password" aria-selected="false">
                  <i class="fa fa-key text-center mr-1"></i>
                  Đổi mật khẩu
                </a>

                <a class="nav-link" id="notification-tab" data-toggle="pill" href="#notification" role="tab" aria-controls="notification" aria-selected="false">
                  <i class="fa fa-bell text-center mr-1"></i>
                  Thông báo
                </a>

                <a class="nav-link" id="wallet-tab" data-toggle="pill" href="#wallet" role="tab" aria-controls="wallet" aria-selected="false">
                  <i class="fa fa-wallet text-center mr-1"></i>
                  Ví xu
                </a>
              </div>
            </div>

            <div class="tab-content p-4 p-md-5" id="v-pills-tabContent">
              <div class="tab-pane fade show active" id="account" role="tabpanel" aria-labelledby="account-tab">
                <h5 class="mb-4">Quản lý thông tin hồ sơ để bảo mật tài khoản</h5>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Tên đăng nhập</label>
                      <input type="text" class="form-control" value="Phuong123" />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Họ và tên </label>
                      <input type="text" class="form-control" value="Vũ Thị Bích Phương" />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Email</label>
                      <input type="text" class="form-control" value="kiranacharya287@gmail.com" />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Số điện thoại</label>
                      <input type="text" class="form-control" value="+91 9876543215" />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="gender">Giới tính</label>
                      <select name="gender" className="form-control">
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="birthday">Ngày sinh</label>
                      <input type="date" class="form-control" name='birthday' />
                    </div>
                  </div>   
                </div>

                <div>
                  <button class="btn btn-primary">Update</button>
                  <button class="btn btn-light">Cancel</button>
                </div>
              </div>
              
              <div class="tab-pane fade" id="password" role="tabpanel" aria-labelledby="password-tab">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Mật khẩu cũ</label>
                      <input type="password" class="form-control" />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Mật khẩu mới</label>
                      <input type="password" class="form-control" />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Xác nhận lại mật khẩu mới </label>
                      <input type="password" class="form-control" />
                    </div>
                  </div>
                </div>

                <div>
                  <button class="btn btn-primary">Update</button>
                  <button class="btn btn-light">Cancel</button>
                </div>
              </div>

              <div class="tab-pane fade" id="notification" role="tabpanel" aria-labelledby="notification-tab">
                <h3 class="mb-4">Notification Settings</h3>

                <div class="form-group">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="notification1" />
                    <label class="form-check-label" for="notification1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum accusantium accusamus, neque cupiditate quis
                    </label>
                  </div>
                </div>

                <div class="form-group">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="notification2" />
                    <label class="form-check-label" for="notification2">
                      hic nesciunt repellat perferendis voluptatum totam porro eligendi.
                    </label>
                  </div>
                </div>

                <div class="form-group">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="notification3" />
                    <label class="form-check-label" for="notification3">
                      commodi fugiat molestiae tempora corporis. Sed dignissimos suscipit
                    </label>
                  </div>
                </div>

                <div>
                  <button class="btn btn-primary">Update</button>
                  <button class="btn btn-light">Cancel</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default UserProfile;
