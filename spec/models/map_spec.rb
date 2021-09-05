require 'rails_helper'

describe Map, type: :model do
  subject do
    described_class.new(name: 'a nice map', user: User.new, lat: '35.6762', lon: '139.6503', map_style: 'style#1')
  end

  it 'should be valid with valid parameters' do
    expect(subject).to be_valid
  end
  it 'is not valid without a user' do
    subject.user = nil
    expect(subject).to_not be_valid
  end
  it 'is not valid without a name' do
    subject.name = nil
    expect(subject).to_not be_valid
  end
  it 'is not valid without a lat' do
    subject.lat = nil
    expect(subject).to_not be_valid
  end
  it 'is not valid without a lon' do
    subject.lon = nil
    expect(subject).to_not be_valid
  end
  it 'is not valid without a map_style' do
    subject.map_style = nil
    expect(subject).to_not be_valid
  end
end
