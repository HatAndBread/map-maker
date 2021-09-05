class Map < ApplicationRecord
  belongs_to :user
  validates :name, :lat, :lon, :map_style, presence: true
end
