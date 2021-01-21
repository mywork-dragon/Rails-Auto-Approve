class CreateVehicles < ActiveRecord::Migration[6.0]
  def change
    create_table :vehicles do |t|
      t.string :make, null: false
      t.string :model, null: false
      t.integer :state, null: false, default: 0
      t.timestamps
    end

    add_index :vehicles, [:make, :model], unique: true
  end
end
