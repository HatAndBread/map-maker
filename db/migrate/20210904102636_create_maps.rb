class CreateMaps < ActiveRecord::Migration[6.1]
  def change
    create_table :maps do |t|
      t.string :name
      t.string :lat
      t.string :lon
      t.string :map_style
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
