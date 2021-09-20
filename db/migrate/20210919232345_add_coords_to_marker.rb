class AddCoordsToMarker < ActiveRecord::Migration[6.1]
  def change
    add_column :markers, :coords, :string, array: true, default: []
  end
end
