class SessionsController < ApplicationController
  before_action :redirect_if_authenticated, only: %i[create new]

  def create
    @user = User.authenticate_by(email: params[:user][:email].downcase, password: params[:user][:password])

    if @user
      if @user.unconfirmed?
        render status: 200, json: { redirect: new_confirmation_path.to_s }, alert: 'Incorrect email or password.'
      else
        after_login_path = session[:user_return_to] || root_path
        active_session = login @user
        remember(active_session) if params[:user][:remember_me == '1']
        render status: 200, json: { redirect: after_login_path.to_s }
      end
    else
      render status: :unprocessable_entity,
             json: { error: 'Unable to verify the credentials you provided.' }
    end
  end

  def destroy
    forget_active_session
    logout
    redirect_to root_path, notice: 'Signed out.'
  end

  def new; end
end
