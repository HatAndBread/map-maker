class Map < ApplicationRecord
  belongs_to :user
  has_many :markers
  validates :name, :lat, :lon, :map_style, presence: true
end
