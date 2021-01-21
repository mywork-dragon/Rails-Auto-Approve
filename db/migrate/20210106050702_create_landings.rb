class CreateLandings < ActiveRecord::Migration[6.0]
  def change
    create_table :landings do |t|
      t.string :theme, null: false
      t.string :path, null: false
      t.jsonb :config, null: false, default: {}
      t.integer :state, null: false, default: 0
      t.timestamps
    end

    add_index :landings, :path, unique: true
    add_index :landings, [:state, :path]
  end
end
