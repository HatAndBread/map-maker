require 'rails_helper'

describe MapsController, type: :controller do
  before do
    @user = User.create!(email: 'email@example.com', password: 'password')
  end
  describe 'GET#index' do
    it 'redirects if user is not signed in' do
      @user = nil
      get :index
      expect(response.status).to eq(302)
    end

    it 'allows user to access if signed in' do
      sign_in @user
      get :index
      expect(response.status).to eq(200)
    end
  end

  describe 'GET#new' do
    it 'redirects user if not signed in' do
      @user = nil
      get :new
      expect(response.status).to eq(302)
    end

    it 'allows user access if signed in' do
      sign_in @user
      get :new
      expect(response.status).to eq(200)
    end

    it 'loads react' do
      sign_in @user
      get :new
      expect(@controller.instance_variable_get(:@use_react)).to eq(true)
    end
  end

  describe 'GET#edit' do
    it 'redirects user if not signed in' do
      @user = nil
      get :new
      expect(response.status).to eq(302)
    end

    it 'allows user access if signed in' do
      sign_in @user
      get :new
      expect(response.status).to eq(200)
    end

    it 'loads react' do
      sign_in @user
      get :new
      expect(@controller.instance_variable_get(:@use_react)).to eq(true)
    end
  end
end
