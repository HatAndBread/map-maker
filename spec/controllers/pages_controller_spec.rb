require 'rails_helper'

describe 'Pages', type: :controller do
  before do
    @user = User.create!(email: 'email@email.com', password: 'password')
  end
  describe 'GET#home' do
    @user = nil
    it 'allows non-users to visit' do
      expect(response.status).to eq(200)
    end
  end
end
