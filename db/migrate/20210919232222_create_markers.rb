class CreateMarkers < ActiveRecord::Migration[6.1]
  def change
    create_table :markers do |t|
      t.string :img_url
      t.references :map, null: false, foreign_key: true

      t.timestamps
    end
  end
end
