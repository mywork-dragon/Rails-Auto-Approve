class CreateResourceCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :resource_categories do |t|
      t.string :name, null: false
      t.integer :state, null: false, default: 0
      t.string :slug, null: false
      t.timestamps
    end

    add_index :resource_categories, :state
    add_index :resource_categories, :slug, unique: true
  end
end
