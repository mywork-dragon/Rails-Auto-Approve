class CreatePositions < ActiveRecord::Migration[6.0]
  def change
    create_table :positions do |t|
      t.string :title, null: false
      t.text :content, null: false
      t.string :location, null: false
      t.string :url
      t.string :email
      t.integer :state, null: false, default: 0
      t.timestamps
    end

    add_index :positions, :state
  end
end
