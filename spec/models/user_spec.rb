require 'rails_helper'

describe User, type: :model do
  subject { User.create!(email: 'fred@bikes.com', password: '123123') }
  before do
    Map.create!(user: subject, name: 'great map', lat: '35.6762', lon: '139.6503', map_style: 'style#1')
  end
  it 'is valid with valid parameters' do
    expect(subject).to be_valid
  end
  it 'is not valid without an email address' do
    subject.email = nil
    expect(subject).to_not be_valid
  end
  it 'destroys all dependents when deleted' do
    expect { subject.destroy }.to change(Map, :count)
  end
end
